// GTA 6 meme on X, bounty gta6-meme-x-01 (Node 22, standard library only).
//
// The entry is the X post itself, not this program: the meme picture and the
// post text are read by the house straight from X and handed to the judge.
// All this program has to do is copy POST.json from the repository root to
// the output directory, where the gate reads the post's address from it.
//
// POST.json still holds its placeholder address until the meme is posted from
// @Royaltyabdul31; the real post address goes in there before submitting.
// (The gate refuses a placeholder, so the entry is not submittable as it
// stands — that is on purpose: the post must exist first.)
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
