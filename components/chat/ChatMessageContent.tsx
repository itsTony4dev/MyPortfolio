"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

type ChatMessageContentProps = {
  content: string;
  streaming?: boolean;
};

const markdownComponents: Components = {
  p: ({ children }) => (
    <p className="chat-prose-p">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-text">{children}</strong>
  ),
  em: ({ children }) => <em className="text-text/80 italic">{children}</em>,
  ul: ({ children }) => <ul className="chat-prose-ul">{children}</ul>,
  ol: ({ children }) => <ol className="chat-prose-ol">{children}</ol>,
  li: ({ children }) => <li className="chat-prose-li">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="chat-prose-link"
    >
      {children}
    </a>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className={`chat-prose-code-block ${className ?? ""}`}>
          {children}
        </code>
      );
    }
    return <code className="chat-prose-code">{children}</code>;
  },
  pre: ({ children }) => <pre className="chat-prose-pre">{children}</pre>,
  h3: ({ children }) => <h3 className="chat-prose-h3">{children}</h3>,
  hr: () => <hr className="chat-prose-hr" />,
};

export function ChatMessageContent({
  content,
  streaming,
}: ChatMessageContentProps) {
  if (!content && streaming) return null;

  return (
    <div className="chat-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
      {streaming && <span className="chat-stream-cursor" aria-hidden />}
    </div>
  );
}
