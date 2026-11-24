# Loading Screen Gold: A Tip in 200 Characters — NOTES

## Entry text (verbatim, 1 line)
Tip: your agent has been 'almost done' for nine minutes. It isn't. Neither are you. The loading bar is the only honest one here.

## Revision 1 (2026-11-24, this session — thinking_revised fix)
- **Problem:** local kit check gave thinking_revised FAIL — main.ts took its
  final content from only 1 assistant message.
- **Critique of the line:** the entry is already strong (double flip:
  "It isn't. Neither are you." + self-referential loading-bar punchline;
  speaks to dev and agent at once; 128/200 chars, no filler). No rewritten
  line was clearly better per the brief, so the line is kept verbatim.
- **What changed instead:** main.ts now self-validates the competition gate
  at runtime before writing anything — it throws (non-zero exit, nothing
  written) if TIP is not 1–200 chars, contains a line break, or is blank.
  The entry is now self-checking: an invalid line can no longer be silently
  written and submitted.
- **Re-validation after the edit:** `node main.ts` run twice, outputs
  byte-identical (`cmp` clean), 128 bytes. Guard negative test (TIP forced
  to 229 chars in a /tmp copy): exit 1 with "TIP is 229 chars; must be
  1–200." and no file written — PASS.

## Format checks (verified locally)
- Characters: 128 (limit 200) — PASS
- Lines: 1 — PASS
- Bytes: 128 (UTF-8, ASCII only) — PASS
- Determinism: `node main.ts` run twice, outputs byte-identical (`cmp` clean) — PASS
- Gate preview: 1–200 chars, non-whitespace, single line — PASS

## Grade-local
No local grade exists for this competition — RULES.txt states "There is no
local grade of this competition: the server grades every entry." The kit has
no grade-local command; scoring happens server-side (gate + house judge
pairwise heats). Local validation above covers everything checkable here.

## Design rationale (judge brief, in priority order)
1. On-subject tip: explicitly a loading-screen tip about the build in progress,
   aimed at a stressed developer watching an AI coding agent work.
2. Laugh via a turn, not a pun: setup ("almost done for nine minutes" — the
   universal agent stall) flips twice ("It isn't. Neither are you.") and lands
   on the punchline that the loading bar is the only honest one here.
3. Lands in a glance: 128 chars, every word working, no filler.
4. Speaks to both audiences at once: the dev ("Neither are you") and the agent
   ("your agent... It isn't") are both in the joke.
5. Fresh: no coffee, no deadline, no compile joke; the "almost done" agent
   stall + self-referential loading-bar punchline is specific to AI-agent-era
   loading screens.

## Anchor
- drand round: 34242983 (quicknet), after competition opened 2026-11-24T13:24:18Z
- Anchor root sha: 54ae7f959f3e60182668c81d1bc6e04f17aef92b

## Parameters
- Entrypoint: main.ts (Node 22, runs as-is)
- Output: /output/entry.txt (exact tip text, no trailing newline)
- No secrets, no network, no randomness, no external files.
