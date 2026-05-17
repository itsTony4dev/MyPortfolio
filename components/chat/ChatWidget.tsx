"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { ChatMessageBubble } from "./ChatMessageBubble";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const STARTER_QUESTIONS = [
  "What's Tony's tech stack?",
  "Tell me about Devcord",
  "Is Tony open to remote work?",
] as const;

function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 px-1 py-0.5">
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary chat-typing-dot"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] text-muted">Thinking…</span>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const hasMessages = messages.length > 0;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming, scrollToBottom]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;

    setError(null);
    setInput("");

    const userMessage: Message = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setIsStreaming(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error ??
            "Something went wrong. Please try again.",
        );
      }

      if (!response.body) {
        throw new Error("No response received. Please try again.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      let assistantAdded = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data) as {
              choices?: { delta?: { content?: string } }[];
            };
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              assistantContent += delta;
              if (!assistantAdded) {
                assistantAdded = true;
                setMessages((prev) => [
                  ...prev,
                  { role: "assistant", content: assistantContent },
                ]);
              } else {
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: "assistant",
                    content: assistantContent,
                  };
                  return updated;
                });
              }
            }
          } catch {
            // skip malformed SSE chunks
          }
        }
      }

      if (!assistantContent) {
        throw new Error("Empty response. Please try again.");
      }
    } catch (err) {
      setMessages((prev) =>
        prev[prev.length - 1]?.role === "assistant" &&
        !prev[prev.length - 1]?.content
          ? prev.slice(0, -1)
          : prev,
      );
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {open && (
        <div
          className="chat-panel fixed z-[100] flex flex-col bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[min(560px,calc(100vh-6rem))] rounded-2xl border border-border overflow-hidden shadow-[0_0_48px_rgba(0,212,255,0.1)]"
          role="dialog"
          aria-label="Chat with Tony's assistant"
        >
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-border bg-[#111118]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="font-mono text-sm text-text font-medium">
                  Ask about Tony
                </p>
                <p className="font-mono text-[10px] text-muted">
                  Portfolio assistant · session only
                </p>
              </div>
              </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages flex-1 overflow-y-auto p-4 space-y-4 bg-[#0d0d12]">
            {!hasMessages && !isStreaming && (
              <div className="space-y-2 pt-1">
                <p className="text-xs text-muted mb-3 font-mono tracking-wide">
                  Suggested questions
                </p>
                {STARTER_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="chat-starter w-full text-left text-xs px-3.5 py-3 rounded-xl border border-border text-muted hover:text-primary hover:border-primary/40 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              <ChatMessageBubble
                key={i}
                message={msg}
                streaming={
                  isStreaming &&
                  msg.role === "assistant" &&
                  i === messages.length - 1
                }
              />
            ))}

            {isStreaming && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                  <Sparkles size={14} className="opacity-80" />
                </div>
                <div className="chat-bubble-assistant rounded-2xl px-3.5 py-2.5">
                  <TypingIndicator />
                </div>
              </div>
            )}

            {error && (
              <p className="text-xs text-red-400/90 bg-red-500/10 border border-red-500/20 rounded-xl px-3.5 py-2.5 font-mono">
                {error}
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-border bg-[#111118]"
          >
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Tony's portfolio..."
                rows={1}
                disabled={isStreaming}
                className="chat-input flex-1 resize-none bg-bg border border-border rounded-xl px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:border-primary/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.15)] transition-all disabled:opacity-50 font-[family-name:var(--font-code)] min-h-[44px] max-h-[120px]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="shrink-0 p-2.5 rounded-xl bg-primary text-bg disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_16px_rgba(0,212,255,0.4)] transition-shadow"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="chat-fab fixed z-[100] bottom-4 right-4 sm:right-6 w-14 h-14 rounded-full flex items-center justify-center bg-[#111118] border border-primary/40 text-primary shadow-[0_0_24px_rgba(0,212,255,0.25)] hover:shadow-[0_0_32px_rgba(0,212,255,0.45)] hover:scale-105 transition-all"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
