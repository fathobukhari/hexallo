# Hexallo

Professional Next.js application built with TypeScript and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Montserrat & Inter
- **Code Quality:** ESLint, Prettier

## 📁 Project Structure

```
hexallo/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable components
│   ├── ui/                # UI components (Button, Container, etc.)
│   ├── layout/            # Layout components
│   └── sections/          # Page sections
├── lib/                   # Utilities & configurations
│   ├── config/            # Site configuration
│   ├── constants/         # Constants (breakpoints, etc.)
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
└── public/                # Static assets
```

## 🎨 Design System

### Responsive Breakpoints
- **xs:** 375px (Mobile)
- **sm:** 640px (Small tablets)
- **md:** 768px (Tablets)
- **lg:** 1024px (Desktop)
- **xl:** 1280px (Large desktop)
- **2xl:** 1536px (Extra large)
- **3xl:** 1920px (Ultra wide)
- **4xl:** 2200px (Maximum width)

### Fonts
- **Primary:** Inter (default)
- **Secondary:** Montserrat

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Code Standards

- **TypeScript:** Strict mode enabled
- **Components:** Reusable, typed, and documented
- **Styling:** Tailwind CSS with utility classes
- **SEO:** Optimized metadata and sitemap
- **Performance:** Next.js optimizations enabled

## 🎯 Best Practices

1. **Reusable Components:** All components in `components/ui/` are reusable
2. **Type Safety:** All props are typed with TypeScript interfaces
3. **Responsive Design:** Mobile-first approach (375px+)
4. **Code Quality:** ESLint + Prettier for consistent code
5. **SEO:** Metadata, sitemap, and robots.txt configured

## 📦 Key Features

- ✅ TypeScript with strict mode
- ✅ Tailwind CSS v4
- ✅ Responsive design (375px - 2200px+)
- ✅ SEO optimized
- ✅ Font optimization (Montserrat & Inter)
- ✅ Reusable component architecture
- ✅ Professional code structure
