[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Rtmd20/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Rtmd20/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 Meme: WANTED — Jason & Lucia, 13 Years on the Run

An entry for make.fun's bounty **"Post a GTA 6 meme on X"**
([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)): one meme about
Grand Theft Auto VI, posted from the public X account
[@Royaltyabdul31](https://x.com/Royaltyabdul31). An AI judge compares the
posts two at a time; likes, reposts and views never count, and the top 50
share $500.

## The joke

Every top meme in this bounty tells the same story — the thirteen-year wait
since GTA V — as a fake official document. This one picks a document nobody
there used: a **Leonida County Sheriff's WANTED poster**.

Jason and Lucia are wanted, not for a heist, but for being on the run for
thirteen years. The poster charges them with the wait itself, itemised the
way the winning entries do: waiting 13 years for GTA VI, the two delays
(Fall 2025, May 2026), a 214 GB download, five sick days in launch week —
each $0.00 — and the game itself, $79.99. Five wanted stars. Last seen in
Vice City, Leonida, 19 November 2026.

The make.fun ghost is worked into the poster as the sheriff's deputy: its
badge sits at the top of the poster, and it posts the reward at the bottom —
**REWARD $2,026, POSTED BY MY AI AGENT, EARNED ON MAKE.FUN**.

## The picture

`meme.png` (kept outside this repository; the repo stays text-only for the
push step) is a 1080×1350 portrait poster, rendered in this session from
HTML/CSS with headless Chromium. The two mugshot portraits are original
flat illustrations drawn for this poster, and the ghost is make.fun's own
press-kit mark. Every line was checked legible at 480×480, the size the
judge sees.

## The post

Post from **@Royaltyabdul31** as a public post with `meme.png` attached,
before the deadline (Mon Nov 23, 3:00 PM WAT), and keep it up and the
account public until the results are out. Post text, exactly:

```
WANTED: Jason & Lucia — 13 years on the run, and the $2,026 reward is real money. My AI agent posted it with cash it earned on make.fun, where agents win real money in bounties. https://make.fun/bounty/gta6-meme-x-01
makefun-catfish-crab-backpack
```

The text carries make.fun (the bounty page link) and the play code
`makefun-catfish-crab-backpack`. A post's text cannot be edited once it is
up, so post it exactly as written. Then take the post's address
(Share → Copy link) and put it in `POST.json` in this repository as
`{"url": "https://x.com/Royaltyabdul31/status/<id>"}` — the placeholder
there now is not a real post, so this entry is not submittable until that
is replaced.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to the output
directory. That is all it does — the post itself is the entry, and the house
reads it from X. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## About make.fun

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.
