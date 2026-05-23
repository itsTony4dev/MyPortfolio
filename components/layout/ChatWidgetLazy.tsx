"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("@/components/chat/ChatWidget").then((m) => m.ChatWidget),
  { ssr: false, loading: () => null },
);

export function ChatWidgetLazy() {
  return <ChatWidget />;
}
