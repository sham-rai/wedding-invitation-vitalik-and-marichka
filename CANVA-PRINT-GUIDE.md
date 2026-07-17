# Wedding Passport & Boarding Pass — Canva Production Guide

**Vitalik & Marichka · Toronto · 20.09.2026**

Everything needed to build the two printed pieces in Canva and get them out at real print quality:

1. **The Passport** — black cover (outer) + 8 cream inner pages
2. **The Boarding Pass** — landscape ticket with the QR to the digital invitation

Reference images live in `images/`. This guide is written against them, so the numbers below are not invented — they're measured off `photo_2026-07-16_13-44-46/48/49/50/52/53.jpg`.

---

## 0. The design system (set this up once)

Everything on both pieces uses this. Get it right once and every page falls into line.

### Colours

| Role | Hex | Where |
|---|---|---|
| Ink / cover black | `#1A1A1A` | Cover background, headlines, rules |
| Cream / paper | `#F3F0E8` | All inner pages, boarding pass body |
| Soft ink | `#4A4A46` | Small labels (`PASSENGER`, `DATE`), captions |
| Hairline | `#1A1A1A` at 25% opacity | Dividers, dotted leader lines, frames |

These are the exact values the digital invitation uses. Keeping them identical means the printed piece and the page behind the QR feel like one object — which is the whole point of the QR.

> **Don't use pure black (`#000000`).** The reference cover photographs at `#161616`–`#191919` — a soft, leathery black. Pure black prints flat and dead, and on cheap digital presses it can look plasticky. See §5 for the CMYK rich-black recipe.

### Fonts

| Role | Font | Setting |
|---|---|---|
| Display (`WEDDING`, `TOTAL BLACK`, `BOARDING PASS`) | **Playfair Display** Bold | Uppercase, letter-spacing **200–300** |
| Sub-display (`PASSPORT`, `SCAN FOR DETAILS`) | **Playfair Display** Regular | Uppercase, letter-spacing **400** |
| Field labels (`PASSENGER`, `GUEST`, `DATE`) | **Montserrat** Light | Uppercase, **6–7 pt**, letter-spacing **150**, colour `#4A4A46` |
| Field values (`TORONTO, CANADA`) | **Lora** Regular | 9–10 pt |
| Ukrainian body & headings | **Lora** or **PT Serif** | see Cyrillic warning below |
| Script (`Віталік і Марічка`, `Our Wedding`) | **Marck Script** | see Cyrillic warning below |

> ### ⚠️ The Cyrillic trap — read this before you type a single Ukrainian word
>
> Most elegant serif and script fonts have **no Cyrillic glyphs**. Canva doesn't warn you. It silently substitutes a completely different fallback font, and the page ends up with two mismatched serifs sitting next to each other — it looks subtly cheap and it's maddening to diagnose later.
>
> **Test every font before you commit to it:** type `ДЯКУЄМО ВІНЧАННЯ Щ`. If the letters render but suddenly look like a different typeface than the Latin text in the same box — that font has no Cyrillic and Canva swapped it.
>
> **Known-safe in Canva for Ukrainian:** Lora, PT Serif, PT Sans, Montserrat, Open Sans, Roboto Slab. **Script with Cyrillic:** Marck Script, Caveat, Bad Script.
> **Usually unsafe:** EB Garamond, most Canva "Playlist/Signature/Brush" scripts, Italiana, Prata.
>
> Playfair Display and Cormorant Garamond *do* ship Cyrillic on Google Fonts, but Canva's bundled cuts vary — **test them, don't assume.** If Playfair passes the test, use it for Ukrainian headings too and everything unifies. If it fails, use **Lora Bold** for Ukrainian headings and keep Playfair for the Latin ones.

Set these up under **Brand Kit → Brand fonts** and add the four colours as a palette. Then every new page starts correct instead of drifting.

---

## 1. Sizes & why

### The Passport

Real passports are **ID-3 format: 88 × 125 mm**. Using the true spec is what sells the illusion — a 5×7" "passport" reads as a card pretending to be a passport.

| Piece | Finished | Canvas (with 3 mm bleed) |
|---|---|---|
| Single inner page | 88 × 125 mm | **94 × 131 mm** |
| Cover, flat/open | 178 × 125 mm | **184 × 131 mm** |
| Print sheet (2 pages side by side) | 176 × 125 mm | **182 × 131 mm** |

The cover is **178 mm**, not 176 — that's **+2 mm for the spine**, so the cover sits slightly proud of the inner pages like a real passport. Skip this and the cover is flush with the pages and looks like a folded flyer.

- **Safe margin: 6 mm** from every trimmed edge. Nothing that matters — no text, no address, no QR — goes closer.
- **Gutter: 8 mm** each side of the fold on inner spreads. Text that runs into the fold is unreadable once stapled.

### The Boarding Pass

Measured off `photo_2026-07-16_13-44-46.jpg`: the ticket is **2.15 : 1**, and the perforation sits at **78%** of the width.

| Piece | Finished | Canvas (with 3 mm bleed) |
|---|---|---|
| Boarding pass | **210 × 98 mm** | **216 × 104 mm** |

210 × 98 mm is deliberate: it's 2.14:1 (matches the reference) **and** it slides straight into a standard **DL envelope (220 × 110 mm)** — no custom envelope hunt, no trimming. The stub/perforation line sits **164 mm from the left edge**, leaving a 46 mm stub for the QR panel.

### Resolution

Canva works in mm and rasterises at export, so you don't set DPI directly — **you control it by never letting a placed image be scaled above 100%**.

- Every photo or illustration you upload must be **at least 300 DPI at final placed size**.
- The maths: `mm ÷ 25.4 × 300 = required pixels`.
- Example — the photo on p3 sits at 60 × 75 mm → needs **709 × 886 px minimum**.
- `photo15.jpg` is **960 × 1280 px** → comfortably enough at that size. ✓
- **Rule of thumb:** if you have to enlarge a placed image past 100% to fill its frame, it's too small. Go back and get a bigger source.

---

## 2. The Passport — outer (the cover)

Reference: `photo_2026-07-16_13-44-52.jpg` (front) and `photo_2026-07-16_13-44-53.jpg` (in context).

**Canvas: 184 × 131 mm** (178 × 125 finished + 3 mm bleed). One canvas = the whole cover, flat.

```
┌─────────────────────┬─┬─────────────────────┐
│                     │ │                     │
│     BACK COVER      │S│     FRONT COVER     │
│                     │P│                     │
│   (see below)       │I│      WEDDING        │
│                     │N│      PASSPORT       │
│                     │E│                     │
│                     │ │    [ emblem ]       │
│                     │2│                     │
│                     │m│       V | M         │
│                     │m│                     │
│                     │ │    20.09.2026       │
│                     │ │ VITALIK & MARICHKA  │
│                     │ │         ♡           │
└─────────────────────┴─┴─────────────────────┘
      88 mm            2         88 mm
```

Fill the entire canvas — **bleed included** — with `#1A1A1A` first. Every element after that is `#F3F0E8`, never pure white.

### Front cover, top to bottom

Working down the right-hand 88 mm panel. Percentages are from the top of the **finished** 125 mm page.

| # | Element | Spec | Position |
|---|---|---|---|
| 1 | `WEDDING` | Playfair Display Bold, **20 pt**, letter-spacing **300** | ~17% |
| 2 | `PASSPORT` | Playfair Display Regular, **9 pt**, letter-spacing **500** | ~23% |
| 3 | **Emblem** — trident \| maple leaf | 34 mm wide, line weight ~0.6 pt | ~28–62% |
| 4 | `V \| M` | Playfair Display Regular, **16 pt**, spaced pipe | ~70% |
| 5 | `20.09.2026` | Playfair Display Regular, **11 pt**, letter-spacing **250** | ~78% |
| 6 | `VITALIK & MARICHKA` | Playfair Display Medium, **10 pt**, letter-spacing **150** | ~84% |
| 7 | ♡ outline | 4 mm, stroke only, no fill | ~90% |

**The emblem** is the one piece you have to build by hand, and it's what makes the cover. It's a **vertical split**: left half = Ukrainian trident (тризуб) in outline, right half = Canadian maple leaf in outline, divided by a single hairline. Two countries, one object — that's the whole story of the wedding in one mark.

To build it:
1. Canva **Elements** → search `trident ukraine outline` and `maple leaf outline` (filter to **Lines & Shapes**, and toggle on **outline/line style**).
2. Recolour both to `#F3F0E8`.
3. Size them to the **same height** and butt them against a **0.5 pt vertical line**, centred.
4. Group, then centre on the panel.
5. If a stock trident won't match the leaf's line weight, crop the emblem straight out of `photo_2026-07-16_13-44-52.jpg` — it's 851 px wide and clean enough to use at 34 mm.

**`V | M` is optional.** It appears in the `...53.jpg` mockup but not on `...52.jpg`. It fills the gap between emblem and date nicely. Include it or drop it — both compose well.

### Back cover

Keep it near-empty. This is what makes it read as a passport rather than a card — real passports have almost nothing on the back. Centred, small, cream, ~65% down:

```
LOVE IS OUR DESTINATION
          ✈
```

Playfair Display Regular, 7 pt, letter-spacing 400. Nothing else.

### Inside of the cover

Print the cover sheet **single-sided** and leave the inside black and blank. Real passport covers are blank inside, it saves an ink pass, and a heavy black flood on both sides of thick card can crack at the fold.

---

## 3. The Passport — inner (8 pages)

References: `photo_2026-07-16_13-44-50.jpg` (p1, p2), `...53.jpg` (p3, p4, p5, p6, p7), `...48.jpg` (p6, p7 deluxe), `...49.jpg` (venue spread).

**8 pages = 2 folded sheets nested inside the cover.** Eight is the sweet spot — it holds everything from the references with nothing padded, and stays light enough for a standard stamp.

### Page plan

| Page | Content | Reference |
|---|---|---|
| **p1** | Destination — world map, `TORONTO, CANADA` | `...50.jpg` top |
| **p2** | `PASSPORT TO WEDDING` — guest details + photo frame | `...50.jpg` bottom |
| **p3** | Couple photo + `Віталік і Марічка` | `...53.jpg` |
| **p4** | `OUR WEDDING DAY` — date, church, hotel | `...53.jpg` |
| **p5** | `ТАЙМІНГ ДНЯ` — the schedule | `...53.jpg` |
| **p6** | `ДРЕС-КОД` — `TOTAL BLACK` | `...48.jpg` |
| **p7** | `ЩИРА ПОДЯКА` — thank you + livestream QR | `...48.jpg` |
| **p8** | Closing — quote + arrival stamp | new |

Every inner page: `#F3F0E8` flood fill to the bleed edge. **p2/p3, p4/p5 and p6/p7 face each other** when assembled — design them as pairs so their vertical rhythm lines up. Nothing is more visible in a booklet than two facing headlines sitting at different heights.

---

### p1 — Destination

- Faint **world map** across the page — Elements → `world map outline`. Recolour `#1A1A1A`, then **drop to 12% opacity**. It must sit *under* the type, not compete with it.
- A **dashed flight arc** curving from left (Ukraine) to a **📍 pin on Toronto**, with a small ✈ on the path. Elements → `dashed line curve` + `location pin`.
- Centre-right, stacked:
  - `TORONTO,` — Playfair Display Bold, 22 pt
  - `CANADA` — Playfair Display Regular, 13 pt, letter-spacing 300
  - hairline rule with a small 🍁 centred in it
  - `20 SEPTEMBER 2026` — Montserrat Light, 7 pt, letter-spacing 200
- **Top-right corner: circular `DESTINATION / TORONTO` stamp**, ~22 mm, `#1A1A1A` at 55% opacity, rotated ~8°. Two concentric circles with text on the ring and a tiny CN-Tower skyline inside.

### p2 — Passport to Wedding ⭐ *the page that gets personalised*

This is the only page that changes per guest. Everything else prints once.

- Header `PASSPORT TO WEDDING` — Playfair Display Regular, 11 pt, letter-spacing 400, centred.
- Under it: **trident + maple leaf mini-emblem**, 6 mm, flanked by hairlines.
- **Left: photo frame.** 26 × 34 mm, 0.75 pt `#1A1A1A` border with **corner brackets** (four short L-shaped lines at the corners — that's the detail that makes it read as a document photo). Inside: `PHOTO HERE`, Montserrat Light, 6 pt, letter-spacing 200, centred.
- **Right: the data fields.** Label in Montserrat Light 6 pt `#4A4A46`, value in Lora Regular 9.5 pt `#1A1A1A`, each on a **dotted leader line**:

  | Label | Value |
  |---|---|
  | `GUEST` | *Vasylko Family* ← **the variable field** |
  | `DATE` | 20 September 2026 |
  | `LOCATION` | Toronto, Canada |
  | `INVITED BY` | Vitalik & Marichka |

- **Right side, overlapping the fields slightly:**
  - Circular `LOVE IS OUR / DESTINATION` stamp with a ✈ centre, ~24 mm, rotated ~‑6°
  - Rectangular `APPROVED / FOR THE WEDDING / 20.09.2026` stamp, rotated ~4°, with a few wavy cancellation lines running off the edge
  - Both at **50–60% opacity** — a rubber stamp is never solid.
- **Bottom: the machine-readable strip.**
  ```
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  TORONTO • CANADA • 20.09.2026 • VITALIK & MARICHKA
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  ```
  Montserrat Light, 6 pt, letter-spacing 150. Keep it **Latin only** — it's imitating a passport's MRZ, and Cyrillic there breaks the joke.

> **Personalising per guest.** Don't duplicate the page 60 times by hand. Use **Canva Bulk Create** (Apps → Bulk Create): put your guest names in a CSV with a `GUEST` column, connect the text field, and it generates one page per guest in one pass. Everything else on p2 stays fixed. This is the single biggest time-saver in the whole build.

### p3 — The couple

- **Photo:** `images/photo15.jpg`, **60 × 75 mm**, centred, rounded corners ~2 mm.
  - Convert to **black & white**: Canva → Edit photo → Adjust → **Saturation −100**, then **Contrast +10**.
  - Colour here would fight the entire monochrome piece. B&W is not a stylistic whim — it's what holds the page together.
- Under it: `Віталік і Марічка` — **Marck Script, 20 pt**, `#1A1A1A`. *(Cyrillic script — test the font first, see §0.)*
- Under that: small ♡ outline, 3 mm.

### p4 — Our Wedding Day

- `OUR WEDDING DAY` — Montserrat Light, 7 pt, letter-spacing 300, centred.
- `20.09.2026` — Playfair Display Bold, **19 pt**, letter-spacing 100.
- Hairline rule, then **two venue blocks**, each = small line-art building on the left, text right:

  | | |
  |---|---|
  | ⛪ *church line-art, ~26 mm* | `ВІНЧАННЯ • 2:00 PM`<br>St. Joseph's<br>Ukrainian Catholic Church<br>300 River Oaks Blvd E,<br>Oakville, ON L6H 5T1 |
  | 🏨 *hotel line-art, ~26 mm* | `БЕНКЕТ • 6:00 PM`<br>Hotel X<br>111 Princes' Blvd,<br>Toronto, ON M6K 3C3 |

  Event name: Lora Bold 8 pt, uppercase. Venue: Lora Regular 8.5 pt. Address: Montserrat Light 6.5 pt, `#4A4A46`.
- Separate the two blocks with a hairline + centred ♡.

**The building illustrations.** These are already extracted for you — `images/venue-church.jpg` and `images/venue-hotel.jpg`, cropped from `photo_2026-07-16_13-44-49.jpg` for the digital site. Upload them straight to Canva.
- They have a **cream background, not transparent.** Since p4 is also cream, they'll blend invisibly — but only if the crop's cream matches. If you see a faint box, use Canva's **BG Remover** (Pro) on each, or search Elements for `church line art` / `hotel building line art`.
- At 26 mm these are 278 × 205 px ≈ 270 DPI — **slightly under 300.** Acceptable for a light line drawing at that size; if you want them larger than ~26 mm, re-crop at higher resolution or redraw from Elements.

### p5 — Таймінг дня

- `ТАЙМІНГ ДНЯ` — Playfair Display Bold (or Lora Bold), 12 pt, letter-spacing 250, centred.
- Six rows. **Three columns: icon (8 mm) | time | event.** Left-align the time and event columns and keep the icons on a single vertical axis — the alignment *is* the design here.

| Icon | Time | Event |
|---|---|---|
| ⛪ | `14:00` | **ВІНЧАННЯ**<br><small>St. Joseph's Ukrainian Catholic Church</small> |
| 🥂 | `15:30` | **КОКТЕЙЛЬ ТА ФОТО З ГОСТЯМИ** |
| 🍽 | `18:00` | **БЕНКЕТ**<br><small>Hotel X</small> |
| 🎂 | `20:00` | **ТОРТ ТА ПЕРШИЙ ТАНЕЦЬ** |
| 🎶 | `21:00` | **ТАНЦІ ТА РОЗВАГИ** |
| ✨ | `00:00` | **ЗАВЕРШЕННЯ ВЕЧОРА** |

- Time: Lora Regular 8 pt `#4A4A46`. Event: Lora Bold 8 pt uppercase, letter-spacing 50. Sub-line: Lora Italic 6.5 pt `#4A4A46`.
- Icons: Elements → search `church line icon`, `champagne toast line icon`, `cloche line icon`, `wedding cake line icon`, `music note line icon`, `sparkle line icon`. **Filter to outline style** and recolour all to `#1A1A1A`. Mixed-weight icons will wreck this page — they must look like one set.
- Hairline between rows at 25% opacity.

### p6 — Дрес-код

- ✈ + `DRESS CODE` — Montserrat Light, 7 pt, letter-spacing 300. Then a small ♡.
- **`TOTAL BLACK`** — Playfair Display Bold, **21 pt**, letter-spacing 150. The hero of the page.
- **Illustration:** the couple in black tie — Elements → `elegant couple illustration black dress suit` (line/silhouette style), ~55 mm tall, centred. Optionally faint botanical line-art behind it at 15% opacity, as in `...48.jpg`.
- Bottom, centred, Lora Italic 7.5 pt `#4A4A46`:
  > Елегантність, стиль та ваша присутність —
  > найкраще доповнення до цього вечора.
- Simpler alternative if the couple illustration doesn't land: a **black bow tie** icon (as in `...53.jpg`) with:
  > Ми будемо вдячні,
  > якщо ви підтримаєте колір нашого свята.

### p7 — Щира подяка

Transcribed from `photo_2026-07-16_13-44-48.jpg`:

- ♡ + `ДЯКУЄМО` — Playfair Display Bold / Lora Bold, 13 pt, letter-spacing 300.
- `ВАША ПРИСУТНІСТЬ — НАЙЦІННІШИЙ ПОДАРУНОК` — Montserrat Light, 6.5 pt, letter-spacing 150.
- Three paragraphs, Lora Italic 7.5 pt, centred, line-height 1.6, separated by a hairline + ♡:

  > Серед мільйонів доріг, міст і випадкових зустрічей
  > життя подарувало нам найцінніше — близьких нам людей.
  > Ми неймовірно вдячні, що ви є частиною нашого життя
  > і розділяєте з нами цей особливий день.

  > Ми будемо неймовірно щасливі розділити з вами
  > радість, щирі емоції, обійми, усмішки та спогади,
  > які залишаться з нами назавжди.

  > Дякуємо, що прийдете та розділите з нами цю радість,
  > щирі емоції та незабутні спогади!

- **Livestream block** (boxed with hairlines top and bottom):
  - ✈ `ДЛЯ ГОСТЕЙ, ЯКІ СВЯТКУВАТИМУТЬ З НАМИ НА ВІДСТАНІ` — Montserrat Light 6.5 pt, letter-spacing 100
  - *Хоч кілометри й розділяють нас, ми будемо раді, якщо цього дня ви приєднаєтесь до нашого свята онлайн.* — Lora Italic 6.5 pt
  - ▶ `ПРЯМА ТРАНСЛЯЦІЯ ВІНЧАННЯ` — Lora Bold 8 pt
  - `20 ВЕРЕСНЯ 2026 • 2:00 PM (TORONTO TIME)` — Montserrat Light 6 pt
  - **QR to the livestream**, right side, **22 × 22 mm**
- ✈ hairline, then closing, Lora Italic 7.5 pt:
  > Найважливіше не те, де ми знаходимося,
  > а те, що цього дня ми разом.
- Top-right: `LOVE IS OUR DESTINATION` circular stamp with cancellation waves, 50% opacity.

> ⚠️ **Two things to verify on this page.** The reference template's livestream block reads **`1:00 PM`** while the ceremony is at **2:00 PM (14:00)** — and its date renders closer to **2024** than 2026. Both are leftover template defaults. I've written **2:00 PM** and **20 ВЕРЕСНЯ 2026** above on the assumption the stream starts with the ceremony. **Confirm before printing** — a wrong time on a printed livestream block is unfixable.

### p8 — Closing

- Large `LOVE IS OUR DESTINATION` stamp, ~40 mm, centred, 40% opacity.
- Under it, Lora Italic 8 pt:
  > До зустрічі в Торонто!
- Small 🍁 + ✈.
- Keep this page sparse. It's the last thing they see and it should feel like an exhale, not another block of information.

---

## 4. The Boarding Pass

Reference: `photo_2026-07-16_13-44-46.jpg`. **Canvas: 216 × 104 mm.**

```
┌───────────────────────────────────────────────┊──────────────┐
│ ⊙stamp        ─── ✈ ───                       ┊  SCAN FOR    │
│           BOARDING PASS          [world map]  ┊   DETAILS    │
│         VITALIK & MARICHKA          ✈ ⌐       ┊      ♡       │
│  ┌────┐ ───────────────────  ────────────────┊ ┌──────────┐  │
│  │ CN │  ♟ PASSENGER          ⛪ GATE         ┊ │          │  │
│  │Tower│    Our Family & Friends  St. Joseph's┊ │    QR    │  │
│  │sky- │  ♟ DESTINATION        ⏱ BOARDING     ┊ │          │  │
│  │line │    TORONTO, CANADA 🇨🇦   2:00 PM      ┊ └──────────┘  │
│  │     │    Final Dest: Forever  💺 SEAT       ┊ СКАНУЙТЕ ДЛЯ │
│  │     │  📅 DEPARTURE DATE       LOVE         ┊   ДЕТАЛЕЙ    │
│  │     │    20.09.2026         ✈ FLIGHT        ┊  (fine print)│
│  └────┘                          VM2026       ┊       🍁     │
│      ─── Дякуємо, що вирушаєте з нами... ───  ┊              │
└───────────────────────────────────────────────┊──────────────┘
│◄──────────────── 164 mm ─────────────────────►│◄─ 46 mm ─────►│
```

Cream `#F3F0E8` flood to the bleed. Rounded corners, ~3 mm.

### Main panel (left, 164 mm)

| Element | Spec |
|---|---|
| `BOARDING PASS` | Playfair Display Bold, **17 pt**, letter-spacing 100 |
| Hairline + ✈ above it | ✈ 4 mm, centred in the rule |
| `VITALIK & MARICHKA` | Playfair Display Regular, **10 pt**, letter-spacing 250 |
| Postmark stamp, top-left | `LOVE IS OUR DESTINATION`, ~16 mm, rotated ‑12°, 50% opacity |
| Faint N-America map, top-right | 12% opacity, with a dashed arc + ✈ heading to a `CA` pin |
| **CN Tower skyline**, far left | ~28 mm wide, full height of the field block, `#1A1A1A` at 25% opacity |

**The field grid — two columns, six fields.** Each: small line icon, then `LABEL` (Montserrat Light 5.5 pt, letter-spacing 150, `#4A4A46`) directly above the value. Every field sits on a **hairline underline** — that's the detail that makes it read as a ticket.

| | Left column | Right column |
|---|---|---|
| 1 | `PASSENGER`<br>*Our Family & Friends* ← Marck Script 11 pt | `GATE`<br>St. Joseph's Ukrainian Catholic Church |
| 2 | `DESTINATION`<br>**TORONTO, CANADA** 🇨🇦<br><small>*Final Destination: Forever Together*</small> | `BOARDING TIME`<br>**2:00 PM** |
| 3 | `DEPARTURE DATE`<br>**20.09.2026** | `SEAT`<br>**LOVE** |
| 4 | | `FLIGHT`<br>**VM2026** |

Values: Lora Regular 8.5 pt, or **Bold 9.5 pt** for the four hero values (`TORONTO, CANADA`, `2:00 PM`, `LOVE`, `VM2026`). The italic sub-line under DESTINATION: Lora Italic 6 pt `#4A4A46`.

Left icons: person, pin, calendar. Right icons: church, clock, seat, plane. All outline style, ~3.5 mm, `#1A1A1A`.

**Bottom, centred**, between two short hairlines — Marck Script 8 pt:
> Дякуємо, що вирушаєте з нами у найважливішу подорож нашого життя.

### Stub (right, 46 mm)

Divided by a **vertical dashed line** at 164 mm, with a **half-circle notch cut into the top and bottom edges** on that line. The notches are what make it read as a torn perforation rather than a dotted border — don't skip them.

- `SCAN FOR DETAILS` — Montserrat Light, 6 pt, letter-spacing 200
- Small ♡
- **QR code, 26 × 26 mm** ← see below
- `СКАНУЙТЕ ДЛЯ ДЕТАЛЕЙ` — Montserrat Light, 5.5 pt
- Fine print, Lora 5 pt `#4A4A46`, centred:
  > Вся інформація про подію,
  > підтвердження присутності
  > та корисні посилання.
- 🍁 at the bottom, 6 mm, 40% opacity
- **Optional:** `V & M · 20.09.2026` rotated 90° up the right edge, Montserrat Light 5 pt — a lovely authentic touch (see `...53.jpg`).

### The QR code — the piece that must not fail

This is the bridge to the digital invitation. If it doesn't scan, the whole build is broken and you'll only find out after 60 of them are printed.

1. **Point it at the live URL, not a placeholder.** Deploy the site to GitHub Pages *first* (see `README.md`), then generate the QR against the real `https://<username>.github.io/<repo>/` URL.
2. **Consider a short custom domain first.** A shorter URL = fewer QR modules = a chunkier, more reliable code. Worth doing before you generate.
3. **Generate it with error correction level Q or H** (not L). Higher correction survives ink spread and a scuffed card.
4. **Minimum 26 × 26 mm printed.** Below ~20 mm, phone cameras start struggling at an angle.
5. **Keep the quiet zone** — at least 4 modules (~3 mm) of clear cream on all four sides. Nothing may encroach.
6. **Pure `#1A1A1A` on `#F3F0E8`.** Never invert it (light QR on dark), never place it over the map or a stamp, never round the module corners.
7. **Test it: print one, scan it with both an iPhone and an Android, in dim light, from 30 cm.** Then do it again after the full print run arrives. This is the single highest-risk element on either piece.

> Canva's own QR app (Apps → **QR Code**) works, but doesn't expose the error-correction level. For control, generate at `qr-code-generator.com` or similar, export **SVG**, and upload that to Canva — an SVG stays razor-sharp at any size, where a small PNG will soften at 300 DPI.

---

## 5. Exporting from Canva

Getting this wrong undoes every other decision in this document.

### The settings

**Share → Download → PDF Print**, then:

- ✅ **Crop marks and bleed** — the printer needs both to trim accurately
- ✅ **Flatten PDF** — this locks fonts and transparency so nothing reflows or drops on the printer's machine
- ✅ **CMYK** *(Canva Pro only — see below)*

Do **not** export PNG or JPG for anything going to a print shop. PDF Print embeds vectors and text at full resolution; a PNG is a fixed raster that will soften.

### The CMYK problem

**Canva Free exports RGB only.** RGB blacks convert unpredictably at the print shop — your `#1A1A1A` cover can land muddy, greenish, or washed out, and you won't know until it's printed.

Three ways out, best first:

1. **Canva Pro** (free trial covers a project like this) → export CMYK directly. Simplest.
2. **Ask the print shop to convert**, and explicitly specify the cover black as **rich black: C60 M40 Y40 K100**. Say those numbers out loud — a plain K100 black prints as washed-out charcoal on coated stock, which is exactly wrong for this piece.
3. Export RGB PDF and convert yourself in Acrobat/Affinity if you have them.

### Order a proof. Always.

**Before the full run, order one single copy.** Every time. Check:

- Cover black is deep and even, not grey or blotchy
- Cream matches across the passport and the boarding pass (they're printed on different stock — this is where mismatches appear)
- **QR scans** — iPhone and Android, dim light
- No text is clipped at any trimmed edge
- Ukrainian text: no wrong-font substitutions, no missing letters, no broken `'` apostrophes
- Fold and assemble it fully — check nothing critical is swallowed by the gutter

The proof costs a few dollars. Reprinting 60 passports costs a weekend.

---

## 6. Paper, printing & assembly

### Stock

| Piece | Stock | Finish |
|---|---|---|
| Passport cover | **300–350 gsm** | **Soft-touch / matte laminate** |
| Passport inner pages | **120–150 gsm** | Uncoated, natural white or cream |
| Boarding pass | **300 gsm** | Matte or lightly textured |

**The soft-touch laminate on the cover is the single highest-value upgrade in this project.** It's what gives the reference its leathery, suede-like feel — it's the difference between "printed card" and "object." Ask for it by name: *soft-touch lamination* (also sold as *velvet* or *suede* laminate). It also hides fingerprints, which a plain matte black absolutely will not.

For the inner pages, **uncoated** matters: it takes the fine hairlines and small type cleanly and feels like a document. Glossy inner pages would kill the whole illusion.

### Imposition — how to lay out the print sheets

For an 8-page booklet made of 2 nested folded sheets, the pages **do not print in reading order**. Each 182 × 131 mm sheet holds two pages side by side:

| Sheet | Side | Left page | Right page |
|---|---|---|---|
| **1** (outer) | front | **p8** | **p1** |
| **1** (outer) | back | **p2** | **p7** |
| **2** (inner) | front | **p6** | **p3** |
| **2** (inner) | back | **p4** | **p5** |

So: **6 print files total** — 1 cover sheet (single-sided) + 4 inner sheet-sides + 1 boarding pass.

Build each print sheet as its own 182 × 131 mm Canva page, then paste the two finished page designs in side by side. **Double-check the back sides** — it's very easy to mirror them and end up with an upside-down page after folding.

> **The shortcut:** most print shops will impose an 8-page booklet for you if you just hand them **eight sequential single pages** (p1…p8, each 94 × 131 mm) and say *"saddle-stitched, 88 × 125 mm finished."* This is genuinely the better path — imposition is fiddly and they do it every day. Only do it by hand if you're printing at home.

### Assembly

1. Print, then trim to the crop marks with a **guillotine or craft knife + steel ruler** — never scissors. A wobbly edge is instantly visible on a piece this small.
2. **Score before folding.** Run a bone folder or an empty ballpoint down a ruler on the fold line. Unscored 300 gsm card **cracks** at the fold and takes the black flood coat with it — the crack shows as a white line right down your cover.
3. Nest sheet 2 inside sheet 1, then both inside the cover.
4. Bind through the fold:
   - **Saddle stapler** (long-reach) — 2 staples, ~35 mm from top and bottom. Fast, clean, most passport-like.
   - **Single stitch** — waxed black thread, 3 holes. Slower, and beautiful.
   - **Eyelet + ribbon** — pretty, but it doesn't say "passport."
5. Round the corners with a **corner punch (3 mm radius)** — through the assembled booklet if your punch will take it. Real passports have rounded corners and the eye notices instantly when they don't.

### The boarding pass

- Trim to 210 × 98 mm.
- **The perforation.** If your shop can perforate at 164 mm, do it — a genuinely tearable stub is a delight. If not, a printed dashed line plus the two half-circle notches reads convincingly enough. The notches do most of the work.
- Corner-punch to match the passport, 3 mm.

### Envelope

DL, **220 × 110 mm**, in cream or black. The boarding pass slides in flat with room to spare. If you're mailing passport + pass together, use a **C6 (162 × 114 mm)** and let the boarding pass tuck inside the passport.

---

## 7. Build order (do it in this sequence)

Each step depends on the one before it. Working out of order is how you end up regenerating the QR three times.

1. **Deploy the digital invitation** → get the real live URL *(nothing else can be finalised without it)*
2. Generate the QR against that URL → **SVG**, error correction Q or H
3. Set up the Canva **Brand Kit**: 4 colours, 4 fonts
4. **Test every font for Cyrillic** — `ДЯКУЄМО ВІНЧАННЯ Щ` *(do this before designing, not after)*
5. Prep `photo15.jpg` → black & white, cropped to 4:5
6. Build the **cover** (184 × 131 mm) — the emblem is the long pole; start here
7. Build **p1–p8** as eight 94 × 131 mm pages
8. Build the **boarding pass** (216 × 104 mm)
9. **Confirm the livestream time & date** (see the p7 warning) ⚠️
10. Personalise p2 with **Bulk Create** from your guest CSV
11. Impose onto print sheets — or hand sequential pages to the shop
12. Export **PDF Print** + crop marks + bleed + flatten (+ CMYK)
13. **Order one proof.** Scan the QR. Fold it. Live with it for a day.
14. Full run → trim → score → fold → bind → corner-punch

---

## 8. Open questions

Things I couldn't resolve from the reference images:

1. **Livestream time.** The template shows `1:00 PM` but the ceremony is `2:00 PM`. Which is right? *(p7)*
2. **Livestream date.** The template's year renders closer to `2024` than `2026` — stale template default, presumably. Confirm `20 ВЕРЕСНЯ 2026`. *(p7)*
3. **Livestream URL.** The reference QR points at a YouTube stream. Is there a real one to encode, or should the block be dropped?
4. **Hotel name.** The references say `Hotel X` — that's the actual name of the Toronto hotel (Hotel X Toronto), but confirm it's not a template placeholder that was never filled in.
5. **Guest list.** Needed as a CSV with a `GUEST` column for Bulk Create on p2.
6. **`V | M` on the cover** — in or out? Both compose fine.

---

## Quick reference

| | |
|---|---|
| **Passport page** | 88 × 125 mm → canvas **94 × 131 mm** |
| **Passport cover** | 178 × 125 mm → canvas **184 × 131 mm** *(incl. 2 mm spine)* |
| **Print sheet** | 176 × 125 mm → canvas **182 × 131 mm** |
| **Boarding pass** | 210 × 98 mm → canvas **216 × 104 mm** *(stub at 164 mm)* |
| **Bleed** | 3 mm | **Safe margin** 6 mm | **Gutter** 8 mm |
| **Ink** `#1A1A1A` | **Cream** `#F3F0E8` | **Soft** `#4A4A46` | **Hairline** ink @ 25% |
| **Rich black (CMYK)** | C60 M40 Y40 K100 |
| **QR** | ≥26 mm, EC level Q/H, 3 mm quiet zone, SVG |
| **Export** | PDF Print · crop marks + bleed · flatten · CMYK |
