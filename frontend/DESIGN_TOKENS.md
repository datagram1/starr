# Design Tokens

## Color Palette

### Light Theme
- **Background**: White (#FFFFFF)
- **Foreground**: Dark Blue (#0F172A)
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#F1F5F9)
- **Accent**: Light Gray (#F1F5F9)
- **Muted**: Light Gray (#64748B)
- **Destructive**: Red (#EF4444)

### Dark Theme
- **Background**: Dark Blue (#0F172A)
- **Foreground**: White (#F8FAFC)
- **Primary**: Light Blue (#60A5FA)
- **Secondary**: Dark Gray (#1E293B)
- **Accent**: Dark Gray (#1E293B)
- **Muted**: Gray (#94A3B8)
- **Destructive**: Dark Red (#991B1B)

## Typography

### Font Families
- **Sans**: Inter (system fallback)
- **Mono**: Fira Code (monospace fallback)

### Font Sizes
- xs: 12px / 16px line height
- sm: 14px / 20px line height
- base: 16px / 24px line height
- lg: 18px / 28px line height
- xl: 20px / 28px line height
- 2xl: 24px / 32px line height
- 3xl: 30px / 36px line height
- 4xl: 36px / 40px line height
- 5xl: 48px / 1 line height

## Spacing

Uses Tailwind's default spacing scale (0-96) plus:
- 128: 32rem (512px)
- 144: 36rem (576px)

## Border Radius

- sm: calc(var(--radius) - 4px) = 4px
- md: calc(var(--radius) - 2px) = 6px
- lg: var(--radius) = 8px

## Responsive Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1400px (custom container max-width)

## Animations

- **accordion-down**: Smooth accordion open (0.2s)
- **accordion-up**: Smooth accordion close (0.2s)
- **slide-in**: Slide from left (0.3s)
- **fade-in**: Fade in (0.2s)

## Usage

### Colors
```tsx
<div className="bg-primary text-primary-foreground">
  Primary button
</div>
```

### Typography
```tsx
<h1 className="text-4xl font-bold">Heading</h1>
<p className="text-base text-muted-foreground">Body text</p>
```

### Spacing
```tsx
<div className="p-4 m-2 space-y-4">Content</div>
```
