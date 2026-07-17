# Canva — Step by Step (the clicking guide)

The other file (`CANVA-PRINT-GUIDE.md`) is the *spec* — every measurement, font and colour. **This file is the how-to** — exactly what to click in Canva to make the two printed pieces. Keep them side by side: this tells you *how*, that one tells you *what to put where*.

---

## The one thing to understand first

You are making **three separate Canva designs**, because Canva makes every page inside one design the same size, and your pieces are different sizes:

| Design name (call it this in Canva) | Size to type | How many pages |
|---|---|---|
| **Passport Cover** | `178 × 125 mm` | 1 |
| **Passport Pages** | `88 × 125 mm` | 8 |
| **Boarding Pass** | `210 × 98 mm` | 1 |

These are the **finished cut sizes** — the clean numbers. **Do NOT type bigger numbers to "add bleed."** Canva adds the bleed for you with a toggle (Step 3). Typing bleed in by hand is the thing that confused you in the old guide — ignore all the `94 × 131` / `184 × 131` "canvas with bleed" numbers in that file. Just type the finished size above and flip the bleed toggle on.

**Colours** (save these once, use everywhere): ink black `#1A1A1A`, cream `#F3F0E8`, soft grey `#4A4A46`. Never pure white, never pure black.

---

## STEP 1 — Create a custom-size design

Do this three times, once per row in the table above.

1. Go to **canva.com** and log in.
2. Top-right, click the **"Create a design"** button (purple).
3. In the dropdown, scroll to the bottom and click **"Custom size."**
4. A little box appears with two number fields and a unit dropdown. **Change the unit dropdown from `px` to `mm`.** ← easy to miss, do it first.
5. Type the width and height from the table (e.g. `210` and `98` for the boarding pass).
6. Click **"Create new design."**

A blank canvas opens in a new tab. Rename it: click the file name at the top ("Untitled design") and type the design name from the table.

Repeat for all three.

> **You're on Canva Pro** — so the four features this guide leans on are all available to you: the **bleed toggle** (Step 3), **CMYK export** (Step 8), **Brand Kit** for shared colours (Step 2), and **Bulk Create** for per-guest personalising (Step 6). Nothing to work around.

---

## STEP 2 — Save your colours once

So you're not retyping hex codes 200 times:

1. In the open design, click the **background** of the canvas, then click the colour swatch that appears top-left.
2. Click the **`+`** (add a new colour) and type `1A1A1A`. Do it again for `F3F0E8` and `4A4A46`.
3. These now sit under **"Document colours"** on the left every time you pick a colour in this design. (Pro also has **Brand Kit → Brand colours**, which shares them across all three designs — worth doing once.)

---

## STEP 3 — Turn on bleed (Pro)

In each design:

1. Top menu: **File → Settings**.
2. Tick **"Show print bleed."**
3. A faint dashed border now sits just outside your canvas edge. **Rule: every background colour and any photo that reaches the edge must be dragged out past the dashed line.** Anything important (text, the QR, faces) stays a good 6 mm *inside* the solid edge. That's it — that's what bleed means. You don't measure it; you just push backgrounds past the dashed line.

---

## STEP 4 — Build the Boarding Pass first (it's the easiest — good warm-up)

Open your **Boarding Pass** design (`210 × 98 mm`). Look at `images/photo_2026-07-16_13-44-46.jpg` — that's your target.

1. **Background:** click the canvas, pick cream `#F3F0E8`, drag its corners past the dashed bleed line so cream fills everything.
2. **Round the corners:** not essential on-screen; the print shop rounds them physically. Skip for now.
3. **The perforation line** (the vertical dashed line ~3/4 across, splitting the QR stub off):
   - Left panel → **Elements**, search `line`, pick a plain line, rotate it vertical, and in the toolbar set the style to **dashed**.
   - Place it about **164 mm from the left** (i.e. ~78% across). Everything right of it = the stub with the QR.
4. **Title:** **Text → Add a heading**, type `BOARDING PASS`. Set font **Playfair Display**, bold. Add a small airplane above it (**Elements**, search `airplane line icon`, recolour `#1A1A1A`).
5. **Names:** another text box, `VITALIK & MARICHKA`, Playfair Display, letter-spacing widened (toolbar → **Spacing → Letter spacing**, push to ~250).
6. **The field grid** (PASSENGER / DESTINATION / DATE on the left, GATE / BOARDING TIME / SEAT / FLIGHT on the right): the fastest way is one text box per field. In each, put the tiny grey label on line 1 (Montserrat, ~6 pt, colour `#4A4A46`) and the value bold under it (Lora). Copy-paste the box and just change the words — that keeps them all identical. Exact wording is in the spec file §4.
7. **Little icons** next to each field: **Elements**, search `church line icon`, `clock line icon`, `seat line icon`, `airplane line icon`, `calendar line icon`, `location pin line icon`. **Filter → tick "Outline"** so they all match. Recolour each to `#1A1A1A`, shrink to ~3.5 mm.
8. **CN Tower skyline**, faint, far left: **Elements**, search `toronto skyline line`, recolour `#1A1A1A`, set **Transparency** (toolbar, checkerboard icon) to ~25%.
9. **The QR code** — do this properly, it's the one thing that can ruin a whole print run:
   - Deploy your website first so you have the real live link.
   - Go to **qr-code-generator.com**, paste the link, set **error correction to Q or H**, and **download as SVG**.
   - In Canva: **Uploads → Upload files → pick the SVG → drag it onto the stub.** Size it to **26 × 26 mm**. Keep clear cream space all around it — nothing touching it.
   - (Canva's own **Apps → QR Code** works too, but it won't let you set error correction, so the external site is safer.)
10. **Stub text:** `SCAN FOR DETAILS` and `СКАНУЙТЕ ДЛЯ ДЕТАЛЕЙ` above/below the QR. ⚠️ For the Ukrainian line use **Lora or PT Serif** — see the Cyrillic warning at the bottom.

Done. Save happens automatically.

---

## STEP 5 — Build the Passport Cover

Open **Passport Cover** (`178 × 125 mm`). Target: `images/photo_2026-07-16_13-44-52.jpg`.

This design is **the whole cover laid flat** — back cover on the left half, front cover on the right half. The fold is the vertical centre.

1. **Background:** fill the whole canvas (past the bleed line) with ink black `#1A1A1A`. Everything else on this design is cream `#F3F0E8`.
2. Work on the **right half** (the front cover). Top to bottom, each is a text box, all cream, all **Playfair Display**:
   - `WEDDING` — big, bold, wide letter-spacing.
   - `PASSPORT` — smaller, under it.
   - **The emblem** (trident + maple leaf) — the centrepiece. See the box below.
   - `20.09.2026`
   - `VITALIK & MARICHKA`
   - a small heart outline (**Elements**, search `heart outline`).
3. **Left half (back cover):** leave it almost empty — real passports are blank on the back. Optionally one tiny centred line `LOVE IS OUR DESTINATION` with a small airplane. That emptiness is what makes it read as a passport.

> ### Building the trident + maple-leaf emblem
> This is the only hand-built element, and it's the star of the cover.
> 1. **Elements** → search `ukraine trident outline`. Pick a clean line-style one. Recolour cream `#F3F0E8`.
> 2. **Elements** → search `maple leaf outline`. Recolour cream.
> 3. Size both to the **same height** and sit them next to each other.
> 4. Put a thin vertical line between them (**Elements → line**, cream) so it reads as one split emblem — Ukraine on the left, Canada on the right.
> 5. Select all three → **Group** (right-click → Group) → centre on the front panel.
> 6. Shortcut if the shapes won't match: the emblem in `photo_2026-07-16_13-44-52.jpg` is clean enough to **crop straight out of that photo** and upload — but the outline elements usually look cleaner.

---

## STEP 6 — Build the 8 inner Passport Pages

Open **Passport Pages** (`88 × 125 mm`). It already has 1 page; you need 8. At the bottom of the editor click **"Add page"** seven times (or the **`+`** between pages).

Every page: cream `#F3F0E8` background to the bleed. Then fill each page per the spec file §3. Quick map (full text/wording lives in the spec):

| Page | What goes on it | Look at this reference |
|---|---|---|
| 1 | World map + `TORONTO, CANADA` + date | `...44-50.jpg` (top) |
| 2 | `PASSPORT TO WEDDING` — guest name, photo box, stamps ← **the page that changes per guest** | `...44-50.jpg` (bottom) |
| 3 | Couple photo (black & white) + `Віталік і Марічка` | `...44-53.jpg` |
| 4 | `OUR WEDDING DAY` — date, church, hotel | `...44-53.jpg` |
| 5 | `ТАЙМІНГ ДНЯ` — the timeline | `...44-53.jpg` |
| 6 | `ДРЕС-КОД` / `TOTAL BLACK` | `...44-48.jpg` |
| 7 | `ЩИРА ПОДЯКА` — thank-you + livestream QR | `...44-48.jpg` |
| 8 | Closing line + stamp | — |

**Two Canva mechanics you'll use constantly here:**

- **Make a photo black & white** (page 3): click the photo → **Edit photo → Adjust → drag Saturation to −100**, then Contrast +10. Colour would fight the whole monochrome look.
- **Reuse the schedule/venue icons:** you already have icon files in `images/schedule icons/` and `images/venue-church.jpg` / `images/venue-hotel.jpg`. Upload them via **Uploads → Upload files** and drag them in, instead of hunting in Elements.

> **Personalising page 2 for every guest — don't do it 60 times by hand.**
> Use **Apps → Bulk Create**. Put your guest names in a spreadsheet with one column called `GUEST`, connect that column to the guest-name text box on page 2, and Canva spits out one version per guest in a single pass. Everything else stays fixed. This is the biggest time-saver in the whole project.

---

## STEP 7 — The page order for the print shop

You do **not** print pages 1–8 in order — a folded booklet interleaves them. **The easy way:** hand the print shop your 8 pages *in reading order 1→8* and say the magic words:

> "Saddle-stitched booklet, 88 × 125 mm finished, please impose it."

They rearrange the pages for folding — they do it every day. Only mess with imposition yourself if you're printing at home (the layout table is in the spec file §6).

---

## STEP 8 — Export (get this right or it undoes everything)

For **each** of the three designs:

1. Top-right **Share → Download**.
2. File type: **PDF Print** (not PNG, not JPG — those go blurry in print).
3. Tick **"Crop marks and bleed."**
4. Tick **"Flatten PDF."**
5. Colour profile: choose **CMYK** (Pro only). If you can't, export as-is and tell the shop "please convert to CMYK, and print the black as **rich black C60 M40 Y40 K100**" — say those exact numbers or the black prints as washed-out grey.
6. **Download.**

You'll end up with 3 PDFs (cover, 8-page pages file, boarding pass).

---

## STEP 9 — Before printing all 60: order ONE proof

Print a **single copy** first, every time. Check: the black is deep not grey; the cream matches between passport and boarding pass; **the QR actually scans** (try iPhone *and* Android, in dim light); no Ukrainian letters are missing or in the wrong font; nothing is cut off at the edges. A proof costs a few dollars. Reprinting 60 costs your weekend.

---

## ⚠️ The Cyrillic font trap — read before typing any Ukrainian

Most pretty fonts have **no Ukrainian letters**, and Canva silently swaps in an ugly fallback without telling you. **Before committing to any font, type `ДЯКУЄМО ВІНЧАННЯ Щ` in it.** If those letters suddenly look like a different, plainer font than your English text — that font has no Cyrillic; pick another.

- **Safe for Ukrainian body text:** Lora, PT Serif, PT Sans, Montserrat, Open Sans.
- **Safe for Ukrainian script** (`Віталік і Марічка`): Marck Script, Caveat, Bad Script.
- **Test before trusting:** Playfair Display, Cormorant. Use them for Latin/English freely; test for Ukrainian.

---

## The 10-minute version, if you just want to start

1. Canva → Create a design → **Custom size** → switch to **mm** → type `210 × 98` → create. That's your boarding pass. Rename it.
2. **File → Settings → Show print bleed.**
3. Fill background cream, drag past the dashed line.
4. Build it copying `images/photo_2026-07-16_13-44-46.jpg`, wording from spec file §4.
5. Repeat with `178 × 125` (cover) and `88 × 125` × 8 pages (inner).
6. **Share → Download → PDF Print**, tick crop-marks+bleed+flatten.
7. Print **one**, scan the QR, then run the batch.
