import { getGroqApiKey } from "@/lib/load-env";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat-system-prompt";

const GROQ_MODEL = "llama-3.3-70b-versatile";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const apiKey = getGroqApiKey();

  if (!apiKey) {
    const hint =
      process.env.NODE_ENV === "development"
        ? "Add GROQ_API_KEY to .env.local in the portfolio folder, then restart npm run dev. Run: npm run setup:env -- YOUR_KEY"
        : "Chat is not configured. Please try again later.";
    return Response.json({ error: hint }, { status: 500 });
  }

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const groqResponse = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: CHAT_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.6,
        max_tokens: 1024,
      }),
    },
  );

  if (!groqResponse.ok) {
    const errText = await groqResponse.text().catch(() => "");
    console.error("Groq API error:", groqResponse.status, errText);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: groqResponse.status },
    );
  }

  if (!groqResponse.body) {
    return Response.json(
      { error: "No response from assistant." },
      { status: 502 },
    );
  }

  return new Response(groqResponse.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
