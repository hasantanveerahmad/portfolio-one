# Order Hang Tags — Component & Type Reference
Source: order-hang-tags/case-study.css (+ inline overrides in index.html). Mirror changes to deploy/.

## Tokens
- --bg #F8F5F0 · --card #FFFFFF · --ink #16140F · --ink-2 #2A2823 · --muted #615D54
- --line #E7E3DC · --chip #F0EDE6 · --accent #E2622F · --accent-2 #CA5224 (hover)
- --body #55524E (homepage body text) · --reading #423E37 (case study long-form body text)
- Fonts: Manrope 800 (display) · Inter 400/500/600/700 (body/UI)

## Type scale (desktop → mobile ≤720px)
| Element | Class | Font | Size | Weight | LH | Tracking | Case | Color |
|---|---|---|---|---|---|---|---|---|
| Hero title | .hero h1 | Manrope | 52px (inline; CSS 56) → 40 | 800 | 1.04 | -0.025em | — | ink |
| Hero tagline | .hero .deck | Inter | 24px (inline; CSS 21) → 18 | 400 | 1.5 | — | — | rgb(78,74,67) |
| Section kicker | .section-kicker | Inter | 11px | 700 | — | 0.75px | UPPER | accent |
| Section title | h2.h2 | Manrope | 36px → 30 | 800 | 1.12 | -0.02em | — | ink |
| Sub-head | h3.h3 | Manrope | 23px → 21 | 800 | 1.2 | -0.015em | — | ink |
| Lead paragraph | .lead | Inter | 20px | 400 | 1.55 | — | — | muted |
| Body | p | Inter | 17px | 400 | 1.65 | — | — | reading; strong = ink-2/600 |
| Micro label | .microlabel | Inter | 11px | 700 | — | 0.75px | UPPER | accent; margin 30/0/8 |
| List item | .list li | Inter | 17px | 400 | 1.6 | — | — | reading |
| Numbered list num | .numlist li::before | Manrope | 22px | 800 | — | -0.02em | 01,02… | accent |
| Numbered list title | .numlist h4 | Manrope | 18px | 800 | — | -0.01em | — | ink |
| Note label | .note .note-label | Inter | 11px | 700 | — | 0.14em | UPPER | ink-2 |
| Note body | .note p | Inter | 15px | 400 | 1.6 | — | — | muted |
| Flow card title | .flowcard__title | Inter | 17px | 700 | — | -0.01em | — | ink |
| Flow card desc | .flowcard__desc | Inter | 13.5px | 400 | 1.5 | — | — | muted |
| Flow card number | .flowcard__num | Inter | 14px | 700 | — | — | — | white on #16140F circle 32px |
| Meta label | .meta__label | Inter | 11px | 700 | — | 0.75px | UPPER | accent |
| Meta title | .meta__title | Inter | 16px | 600 | 1.55 | 0 | — | ink-2 |
| Meta body | .meta__body p | Inter | 15px | 400 | 1.5 | — | — | muted |
| Stat number | .stat__num | Manrope | 46px → 38 | 800 | 1 | -0.03em | — | ink; .unit accent |
| Stat label | .stat__label | Inter | 11px | 700 | — | 0.12em | UPPER | ink-2 |
| Stat sub | .stat__sub | Inter | 13px | 400 | 1.45 | — | — | muted |
| Figure caption | .figcap | Inter | 13.5px | 400 | 1.5 | — | — | muted; b = ink-2/600 |
| Placeholder tag | .fig__tag | Inter | 11px | 700 | — | 0.75px | UPPER | accent |
| Placeholder hint | .fig__hint | Inter | 12.5px | 400 | 1.45 | — | — | muted |
| Image state pill | LEGACY / REDESIGN | Inter | 11.5px | 600–700 | — | letter-spaced | UPPER | legacy = neutral gray-brown fill; redesign = orange fill |
| Pull quote | .quote p | Manrope | 23px → 20 (≤460) | 700 | 1.32 | -0.015em | — | ink |
| Table header | table.data th | Inter | 11px | 700 | — | 0.12em | UPPER | ink-2 on chip |
| Table cell | table.data td | Inter | 15px | 400 | — | — | — | reading |
| Response pill | .resp | Inter | 11px | 700 | — | 0.04em | UPPER | .out chip/muted · .partly accent 12% / accent-2 |
| Outcome headline | .headline | Manrope | 27px | 800 | 1.32 | -0.018em | — | ink; b = accent |
| Back / next link | .back-link | Inter | 11.5px | 600 | — | 1px | UPPER | ink → accent hover |
| Eyebrow (unused in hero) | .eyebrow | Inter | 11px | 600 | — | 0.75px | UPPER | accent, 28×2 dash |
| Footer text/links | .site-footer__* | Inter | 11px | 500 | — | 0.18em | UPPER | muted → accent hover |

## Layout
- .page max 1024px, padding 28/64/0. Prose column .wrap = 720px centered.
- Full-bleed (.fig-bleed, hero, nav, footer inner): calc(100vw − 48px), max 960px, centered via margin-left 50% + translateX(-50%). Never use margin shorthand on these (breaks centering).
- .section padding 56px (44 mobile); adjacent sections get 1px --line top border. Second half of case study uses larger spacing: 88px section padding, 72px above step headings, 52px above sub-heads.
- Hero title/tagline max-width 960px.

## Components
- **Section header**: .section-kicker → h2.h2 → .lead / p.
- **Step pattern (Steps 2–4)**: h3 title → Legacy microlabel + copy → legacy image → redesign image → "The thinking" → "The redesign" copy → "Why it is better".
- **Dot list** .list: 26px indent, 7px black dot at left 4 / top 11, items 12px apart.
- **Numbered list** .numlist: 58px indent, counter 01/02 in Manrope 22 accent, h4 + p per item, 22px bottom gap.
- **Note box** .note: 2px accent left border, chip fill, radius 0 10 10 0, padding 16×20, margin 24 0; optional .note-label.
- **Figure** figure.fig: margin-top 38; .fig__img radius 16 + 1px line border; caption 14px below.
- **Figure pair** .fig-row: 2-col grid, 20px gap → 1-col mobile. Also used for 2×2 photo grids.
- **Placeholder** .fig__ph: radius 14, chip fill + faint 135° stripes, 1px line border, centered glyph (32px, muted 55%) + tag + hint.
- **Flow diagram** .flow / .flowcard: white cards radius 18, soft shadow, padding 30/22/28, centered; number badge top-left (-16px); 72px icon; chevrons between; offset rows; stacks on mobile.
- **Meta panel** .meta: white, radius 16, padding 40×44, 2-col grid (gap 56/64), items stacked 44px apart.
- **Stats band** .stats: 4-col (2 ≤980, 1 ≤460), 1px line dividers, radius 16, each stat white padding 28/24/26.
- **Pull quotes** .quotes/.quote: 3px accent left border, 26px left pad, 18px between.
- **Data table** table.data: chip header row, 1px line row dividers, last column right-aligned, tabular nums.
- **Outcome headline** .headline with accent <b>.
- **Footer**: full-bleed white band, 26px padding, "Copy email" (clipboard feedback) + "View Resume" (assets/Hasan_Ahmad_Resume_v6.pdf).

## Proposed (from user screenshots, not yet built)
- **Finding card grid** ("What I found"): 2×2 white cards, radius ~18, padding ~48, ~28px gap; title Manrope 800 ~22px ink; body Inter ~17px muted, 1.6 LH.
- **"Two entry points"** as a .note box with label instead of a list item.
