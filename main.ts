import { mkdirSync, writeFileSync } from "node:fs";

// One original loading-screen tip, written from scratch in this session.
// No randomness, no input, no network: the same bytes every run.
const TIP =
  "Tip: your agent has been 'almost done' for nine minutes. It isn't. Neither are you. The loading bar is the only honest one here.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
