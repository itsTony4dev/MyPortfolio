"use client";

import { Bot, User } from "lucide-react";
import { ChatMessageContent } from "./ChatMessageContent";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatMessageBubbleProps = {
  message: Message;
  streaming?: boolean;
};

export function ChatMessageBubble({
  message,
  streaming,
}: ChatMessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`chat-message-enter flex gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border ${
          isUser
            ? "bg-primary/10 border-primary/30 text-primary"
            : "bg-accent/10 border-accent/25 text-accent"
        }`}
        aria-hidden
      >
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>

      <div
        className={`flex flex-col gap-1 min-w-0 max-w-[calc(100%-2.5rem)] ${isUser ? "items-end" : "items-start"}`}
      >
        <span
          className={`font-mono text-[10px] uppercase tracking-wider px-0.5 ${
            isUser ? "text-primary/70" : "text-muted"
          }`}
        >
          {isUser ? "You" : "Portfolio Assistant"}
        </span>

        <div
          className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
            isUser ? "chat-bubble-user" : "chat-bubble-assistant"
          }`}
        >
          {isUser ? (
            <p className="text-text whitespace-pre-wrap">{message.content}</p>
          ) : (
            <ChatMessageContent
              content={message.content}
              streaming={streaming}
            />
          )}
        </div>
      </div>
    </div>
  );
}
