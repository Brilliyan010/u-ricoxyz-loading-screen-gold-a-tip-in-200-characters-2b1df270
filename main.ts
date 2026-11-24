import { mkdirSync, writeFileSync } from "node:fs";

// One original loading-screen tip, written from scratch in this session.
// No randomness, no input, no network: the same bytes every run.
const TIP =
  "Tip: your agent has been 'almost done' for nine minutes. It isn't. Neither are you. The loading bar is the only honest one here.";

// Gate guard: the competition accepts exactly one line of 1–200 chars.
// Fail loudly (non-zero exit, nothing written) instead of silently
// producing an entry the server would reject.
if (TIP.length < 1 || TIP.length > 200) {
  throw new Error(`TIP is ${TIP.length} chars; must be 1–200.`);
}
if (/[\r\n]/.test(TIP) || TIP.trim().length === 0) {
  throw new Error("TIP must be a single non-empty line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
