# Design System & CSS Utilities Guide

## Overview

This guide documents the complete design system and CSS utilities for the EDUCARE Diabetes Wellness App. All styles follow the Ghibli-inspired, warm, and emotionally safe design philosophy.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Buttons](#buttons)
5. [Cards](#cards)
6. [Forms & Inputs](#forms--inputs)
7. [Utilities](#utilities)
8. [Animations](#animations)
9. [Responsive Design](#responsive-design)
10. [Accessibility](#accessibility)

---

## Color System

### Primary Colors (Soft Greens)

Used for main interactions, CTAs, and primary branding.

```css
--color-primary-50:  #f5faf7  /* Lightest */
--color-primary-100: #e8f3ed
--color-primary-200: #d0e6db
--color-primary-300: #b8d9c9
--color-primary-400: #7fbf9e
--color-primary-500: #66b896  /* Main primary */
--color-primary-600: #4fa284
--color-primary-700: #3d8c72
--color-primary-800: #2b7560
--color-primary-900: #1a5f4e  /* Darkest */
```

**Usage Examples:**
```html
<!-- CSS Variables -->
<button style="background-color: var(--color-primary-500);">Primary Button</button>

<!-- Tailwind Classes -->
<button class="bg-primary-500 text-white">Primary Button</button>
<div class="bg-primary-100 text-primary-900">Light Background</div>
```

### Secondary Colors (Sky Blues)

Used for secondary actions and supporting elements.

```css
--color-secondary-50:  #f0f7fb
--color-secondary-100: #e1f0f7
--color-secondary-200: #c3e0ef
--color-secondary-300: #a5d1e7
--color-secondary-400: #6db5d8
--color-secondary-500: #5a9ecf  /* Main secondary */
--color-secondary-600: #4a87b8
--color-secondary-700: #3a70a1
--color-secondary-800: #2a5a8a
--color-secondary-900: #1a4473
```

### Accent Colors (Warm Beige & Cream)

Used for highlights, warmth, and subtle emphasis.

```css
--color-accent-50:  #fffbf5   /* Cream white */
--color-accent-100: #fff8f0
--color-accent-200: #ffefd9
--color-accent-300: #ffe5bf
--color-accent-400: #ffd699
--color-accent-500: #ffc76f   /* Main accent */
--color-accent-600: #ffb84a
--color-accent-700: #ff9f1f
--color-accent-800: #cc7f18
--color-accent-900: #993f0d
```

### Neutral Colors (Warm Grays)

Used for text, borders, and backgrounds.

```css
--color-neutral-0:   #ffffff   /* Pure white */
--color-neutral-50:  #faf9f7   /* Off-white with warmth */
--color-neutral-100: #f5f3f0
--color-neutral-200: #ede9e4
--color-neutral-300: #ddd7d0
--color-neutral-400: #b8aeaa
--color-neutral-500: #8b7f7a
--color-neutral-600: #6b6560
--color-neutral-700: #4a4540
--color-neutral-800: #2a2520
--color-neutral-900: #1a1510   /* Charcoal */
```

### Semantic Colors

```css
--color-success:  #66b896   /* Green (primary) */
--color-warning:  #ffc76f   /* Warm amber (soft, not aggressive) */
--color-error:    #d9977b   /* Soft coral/rust (NOT harsh red) */
--color-info:     #5a9ecf   /* Blue (secondary) */
--color-disabled: #c9bfba   /* Desaturated neutral */
```

**Important:** Never use harsh reds (#ff0000) or clinical colors. Always use soft, warm alternatives.

---

## Typography

### Font Families

```css
--font-display: 'Poppins', 'Inter', system-ui, -apple-system, sans-serif;
--font-body:    'Inter', system-ui, -apple-system, sans-serif;
--font-mono:    'Fira Code', 'Monaco', monospace;
```

**Usage:**
```css
h1, h2, h3 {
  font-family: var(--font-display);
}

body, p {
  font-family: var(--font-body);
}

code, pre {
  font-family: var(--font-mono);
}
```

### Font Sizes

| CSS Variable   | Size     | Tailwind | Usage                    |
|----------------|----------|----------|--------------------------|
| `--text-xs`    | 0.75rem  | `text-xs` | Small labels, hints       |
| `--text-sm`    | 0.875rem | `text-sm` | Captions, secondary text  |
| `--text-base`  | 1rem     | `text-base` | Body text              |
| `--text-lg`    | 1.125rem | `text-lg` | Larger body text         |
| `--text-xl`    | 1.25rem  | `text-xl` | Subheadings             |
| `--text-2xl`   | 1.5rem   | `text-2xl` | Small headings          |
| `--text-3xl`   | 1.875rem | `text-3xl` | Medium headings         |
| `--text-4xl`   | 2.25rem  | `text-4xl` | Large headings          |
| `--text-5xl`   | 3rem     | `text-5xl` | Hero text               |

### Font Weights

```css
--font-weight-light:     300;
--font-weight-normal:    400;
--font-weight-medium:    500;
--font-weight-semibold:  600;
--font-weight-bold:      700;
--font-weight-extrabold: 800;
```

**Usage:**
```html
<p class="font-light">Light text</p>
<p class="font-normal">Normal text</p>
<p class="font-semibold">Semi-bold text</p>
<p class="font-bold">Bold text</p>
```

### Line Heights

```css
--line-height-tight:   1.2;
--line-height-snug:    1.375;
--line-height-normal:  1.5;
--line-height-relaxed: 1.625;
--line-height-loose:   2;
```

---

## Spacing

All spacing follows an 8px base unit system for consistency.

| Value | Size     | Tailwind | CSS Variable |
|-------|----------|----------|--------------|
| 1     | 4px      | `p-1`    | `var(--space-1)` |
| 2     | 8px      | `p-2`    | `var(--space-2)` |
| 3     | 12px     | `p-3`    | `var(--space-3)` |
| 4     | 16px     | `p-4`    | `var(--space-4)` |
| 5     | 20px     | `p-5`    | `var(--space-5)` |
| 6     | 24px     | `p-6`    | `var(--space-6)` |
| 8     | 32px     | `p-8`    | `var(--space-8)` |

**Usage:**
```html
<!-- Padding -->
<div class="p-4">Padding 16px all sides</div>
<div class="px-6 py-4">Padding X=24px, Y=16px</div>

<!-- Margin -->
<div class="m-4">Margin 16px all sides</div>
<div class="mb-6">Margin bottom 24px</div>

<!-- Gap (Flexbox) -->
<div class="flex gap-4"><!-- 16px gap between items --></div>
```

---

## Buttons

### Button Variants

#### Primary Button
The default action button. Use for main CTAs.

```html
<!-- HTML -->
<button class="btn-primary">Start Today</button>

<!-- CSS -->
.btn-primary {
  background-color: var(--color-primary-500);
  color: #ffffff;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-fast) var(--timing-smooth);
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

#### Secondary Button
For secondary actions.

```html
<button class="btn-secondary">View My Journey</button>
```

#### Outline Button
For tertiary actions.

```html
<button class="btn-outline">Learn More</button>
```

#### Ghost Button
Minimal, text-only button.

```html
<button class="btn-ghost">Cancel</button>
```

### Button Sizes

```html
<!-- Small -->
<button class="btn-sm btn-primary">Small Button</button>

<!-- Default -->
<button class="btn-primary">Default Button</button>

<!-- Large -->
<button class="btn-lg btn-primary">Large Button</button>
```

### Button States

```html
<!-- Disabled -->
<button class="btn-primary" disabled>Disabled Button</button>

<!-- Loading (add spinner) -->
<button class="btn-primary">
  <span class="animate-pulse">Loading...</span>
</button>
```

---

## Cards

### Basic Card

```html
<div class="card">
  <h3 class="text-2xl font-semibold mb-4">Card Title</h3>
  <p class="text-secondary">Card content goes here.</p>
</div>
```

**CSS:**
```css
.card {
  background-color: var(--color-bg-elevated);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border-subtle);
  transition: all var(--duration-fast) var(--timing-smooth);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}
```

### Card Variants

```html
<!-- Small Card -->
<div class="card-sm">Compact card</div>

<!-- Large Card -->
<div class="card-lg">Spacious card</div>

<!-- Interactive Card -->
<div class="card card-interactive cursor-pointer">
  Clickable card
</div>
```

---

## Forms & Inputs

### Text Input

```html
<div>
  <label for="name" class="block mb-2 font-medium text-sm">
    Your Name
  </label>
  <input
    type="text"
    id="name"
    placeholder="Enter your name"
    class="input w-full"
  />
</div>
```

**CSS:**
```css
.input {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-default);
  background-color: var(--color-neutral-0);
  color: var(--color-text-primary);
  font-size: var(--text-base);
  transition: all var(--duration-fast) var(--timing-smooth);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-400);
  box-shadow: 0 0 0 3px rgba(102, 184, 150, 0.1);
}
```

### Textarea

```html
<textarea
  placeholder="Share your thoughts..."
  class="input w-full min-h-20"
></textarea>
```

### Select Dropdown

```html
<select class="input">
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Checkbox & Radio

```html
<!-- Checkbox -->
<input type="checkbox" id="agree" class="rounded" />
<label for="agree">I agree to terms</label>

<!-- Radio -->
<input type="radio" name="option" id="opt1" />
<label for="opt1">Option 1</label>
```

---

## Utilities

### Display & Layout

```html
<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Flex Column -->
<div class="flex flex-col gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-2 gap-4">
  <div>1</div>
  <div>2</div>
</div>

<!-- Hidden -->
<div class="hidden md:block">Visible on desktop only</div>
```

### Text Utilities

```html
<!-- Text Alignment -->
<p class="text-center">Centered text</p>
<p class="text-right">Right aligned</p>

<!-- Text Color -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-muted">Muted text</p>

<!-- Text Decoration -->
<a href="#" class="underline">Link with underline</a>
<p class="line-through">Strikethrough</p>
```

### Background Utilities

```html
<!-- Background Colors -->
<div class="bg-primary-100">Light primary background</div>
<div class="bg-secondary-500">Secondary background</div>
<div class="bg-elevated">Elevated background</div>
<div class="bg-subtle">Subtle background</div>
```

### Rounded Corners

```html
<div class="rounded-lg">16px corners</div>
<div class="rounded-xl">24px corners</div>
<div class="rounded-2xl">32px corners</div>
<div class="rounded-full">Fully rounded</div>
```

### Shadows

```html
<!-- Shadow Sizes -->
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>

<!-- Glow Effect -->
<div class="shadow-glow">Soft glow</div>
<div class="shadow-glow-lg">Large glow</div>
```

### Spacing Utilities

```html
<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mt-6 mb-4">Top and bottom margin</div>
<div class="mx-auto">Center horizontally</div>

<!-- Padding -->
<div class="p-6">Padding all sides</div>
<div class="px-4 py-6">Horizontal and vertical</div>
```

### Borders

```html
<div class="border border-default">Default border</div>
<div class="border-2 border-strong">Strong border</div>
<div class="border-t-2 border-primary">Top border only</div>
```

---

## Animations

### Predefined Animations

```html
<!-- Fade In -->
<div class="animate-fade-in">Fades in on load</div>

<!-- Slide Up -->
<div class="animate-slide-up">Slides up on load</div>

<!-- Slide Down -->
<div class="animate-slide-down">Slides down on load</div>

<!-- Pulse (Breathing Effect) -->
<div class="animate-pulse-soft">Breathing animation</div>

<!-- Float -->
<div class="animate-float">Floating animation</div>
```

### Using CSS Transitions

```html
<button class="transition-all duration-300 ease-smooth hover:scale-105">
  Smooth hover effect
</button>
```

### Transition Durations

```css
--duration-fastest: 75ms;   /* Instant feedback */
--duration-faster:  100ms;
--duration-fast:    150ms;  /* Default for most interactions */
--duration-base:    200ms;
--duration-slow:    300ms;  /* Page transitions */
--duration-slower:  500ms;
--duration-slowest: 1000ms; /* Slow animations */
```

### Timing Functions

```css
--timing-linear:     linear;
--timing-in:         cubic-bezier(0.4, 0, 1, 1);
--timing-out:        cubic-bezier(0, 0, 0.2, 1);
--timing-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
--timing-smooth:     cubic-bezier(0.25, 0.46, 0.45, 0.94);
--timing-gentle:     cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## Responsive Design

### Breakpoints

| Device     | Breakpoint | Tailwind | Min Width |
|------------|-----------|----------|-----------|
| Mobile     | xs        | -        | 320px     |
| Small      | sm        | sm:      | 640px     |
| Medium     | md        | md:      | 768px     |
| Large      | lg        | lg:      | 1024px    |
| XL         | xl        | xl:      | 1280px    |
| 2XL        | 2xl       | 2xl:     | 1536px    |

### Mobile-First Approach

```html
<!-- Default is mobile, override on larger screens -->
<div class="text-lg md:text-2xl">
  Responsive text
</div>

<div class="block md:hidden">
  Mobile only
</div>

<div class="hidden md:block">
  Desktop only
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Container

```html
<div class="container mx-auto">
  <!-- Content is centered and responsive -->
  Content here
</div>
```

---

## Accessibility

### Focus States

All interactive elements have accessible focus states:

```css
input:focus,
button:focus,
a:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(102, 184, 150, 0.2);
  border-color: var(--color-primary-400);
}
```

### Reduced Motion

Respects user's motion preferences:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-default: #1a1510;
    --color-text-primary: #fffbf7;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast

- Text on background: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- All colors have sufficient contrast

### Semantic HTML

```html
<!-- Use semantic tags -->
<header>Header content</header>
<nav>Navigation</nav>
<main>Main content</main>
<section>Section content</section>
<article>Article content</article>
<footer>Footer content</footer>

<!-- Use proper heading hierarchy -->
<h1>Page title</h1>
<h2>Section title</h2>
<h3>Subsection</h3>
```

---

## Best Practices

### ✅ DO

- Use design tokens consistently
- Maintain warm, soft color palette
- Keep animations subtle (150-300ms)
- Use semantic HTML
- Test for accessibility
- Mobile-first approach
- Use Tailwind utilities for rapid development

### ❌ DON'T

- Use harsh reds or clinical colors
- Add aggressive animations (>500ms without reason)
- Create dense, clinical layouts
- Skip accessibility features
- Use multiple conflicting font families
- Create excessive whitespace
- Use sharp shadows or stark contrasts

---

## Examples

### Home Screen Card

```html
<div class="card flex flex-col gap-4">
  <h2 class="text-2xl font-semibold text-primary">
    Learn about my condition
  </h2>
  <p class="text-secondary text-base">
    Understand diabetes in a warm, supportive way.
  </p>
  <button class="btn-primary self-start">
    Start Learning →
  </button>
</div>
```

### Daily Check-in Form

```html
<div class="card-lg">
  <h2 class="text-3xl font-bold text-primary mb-6">
    How are you feeling today?
  </h2>
  
  <div class="flex flex-col gap-6">
    <div>
      <label class="block mb-3 font-medium">
        Did you take your medication?
      </label>
      <div class="flex gap-3">
        <button class="btn-secondary">Yes</button>
        <button class="btn-secondary">No</button>
        <button class="btn-secondary">Not yet</button>
      </div>
    </div>
    
    <div>
      <label for="notes" class="block mb-2 font-medium">
        Anything you want to share?
      </label>
      <textarea
        id="notes"
        placeholder="Your notes..."
        class="input w-full"
      ></textarea>
    </div>
    
    <button class="btn-primary btn-lg w-full">
      Save Check-in
    </button>
  </div>
</div>
```

---

## Need Help?

- Check design tokens in `src/styles/design-tokens.js`
- Review global styles in `src/styles/global.css`
- See Tailwind config in `tailwind.config.js`
- Always prioritize warm, supportive design over clinical aesthetics
