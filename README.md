# CityIce prezentacija projekta

One-page prezentacija cijelog projekta, spremna za Vercel.

## Lokalno

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy na Vercel (2 minute)

Opcija 1, preko CLI-ja (najbrže):

```bash
npx vercel
```

Prvi put te pita da se prijaviš (GitHub/Google/e-mail), sve ostalo samo
potvrdi Enterom. Na kraju ispiše javni link (npr.
`cityice-prezentacija.vercel.app`). Za produkcijsku verziju:

```bash
npx vercel --prod
```

Opcija 2, preko GitHuba: pushaj ovaj folder u repo, pa na vercel.com →
"Add New Project" → izaberi repo → Deploy. Sve postavke ostaju default.

## Napomena

Isti postupak radi i za sam CityIce sajt (`02-website`), i on se isto
tako deploya na Vercel, a kasnije se na projekat zakači domena
cityice.ba (Vercel → Settings → Domains).
