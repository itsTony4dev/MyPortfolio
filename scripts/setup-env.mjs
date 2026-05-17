import { copyFileSync, existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), ".env.local");
const keyFromCli = process.argv[2] || process.env.GROQ_API_KEY;

if (keyFromCli) {
  writeFileSync(envPath, `GROQ_API_KEY=${keyFromCli.trim()}\n`);
  console.log("✓ Created .env.local with GROQ_API_KEY");
  console.log("  Restart the dev server: npm run dev");
  process.exit(0);
}

if (existsSync(envPath)) {
  const content = readFileSync(envPath, "utf8");
  if (/GROQ_API_KEY=\S+/.test(content) && !content.includes("your_groq")) {
    console.log("✓ .env.local already has GROQ_API_KEY set");
    process.exit(0);
  }
}

if (!existsSync(envPath) && existsSync("env.example")) {
  copyFileSync("env.example", ".env.local");
}

console.log(`
Chat needs a Groq API key in .env.local

1. Get a key: https://console.groq.com/keys
2. Run ONE of:
     npm run setup:env -- YOUR_KEY_HERE
     (or edit .env.local and set GROQ_API_KEY=your_key)
3. Restart: npm run dev
`);
