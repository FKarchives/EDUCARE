/**
 * Design Tokens - Diabetes Wellness App
 * Ghibli-inspired, warm, calm, and emotionally safe
 * This is the single source of truth for all design decisions
 */

export const designTokens = {
  // ============================================
  // COLORS
  // ============================================
  colors: {
    // Primary Palette - Soft Greens
    primary: {
      50: '#f5faf7',   // Lightest - almost white with green tint
      100: '#e8f3ed',  // Very light
      200: '#d0e6db',  // Light
      300: '#b8d9c9',  // Mid-light
      400: '#7fbf9e',  // Mid - primary button
      500: '#66b896',  // Main primary
      600: '#4fa284',  // Darker primary
      700: '#3d8c72',  // Deep primary
      800: '#2b7560',  // Very dark
      900: '#1a5f4e',  // Darkest
    },

    // Secondary Palette - Sky Blues
    secondary: {
      50: '#f0f7fb',
      100: '#e1f0f7',
      200: '#c3e0ef',
      300: '#a5d1e7',
      400: '#6db5d8',
      500: '#5a9ecf',  // Main secondary
      600: '#4a87b8',
      700: '#3a70a1',
      800: '#2a5a8a',
      900: '#1a4473',
    },

    // Accent Palette - Warm Beige & Cream
    accent: {
      50: '#fffbf5',   // Cream white
      100: '#fff8f0',  // Very light cream
      200: '#ffefd9',  // Light cream
      300: '#ffe5bf',  // Warm cream
      400: '#ffd699',  // Soft peach
      500: '#ffc76f',  // Warm accent
      600: '#ffb84a',  // Deeper accent
      700: '#ff9f1f',  // Golden warm
      800: '#cc7f18',  // Dark warm
      900: '#993f0d',  // Very dark warm
    },

    // Neutral Palette - Warm Grays
    neutral: {
      0: '#ffffff',     // Pure white
      50: '#faf9f7',    // Off-white with warmth
      100: '#f5f3f0',   // Very light warm gray
      200: '#ede9e4',   // Light warm gray
      300: '#ddd7d0',   // Mid light
      400: '#b8aeaa',   // Mid gray
      500: '#8b7f7a',   // Mid neutral
      600: '#6b6560',   // Darker gray
      700: '#4a4540',   // Dark gray
      800: '#2a2520',   // Very dark gray
      900: '#1a1510',   // Charcoal (rarely used)
    },

    // Semantic Colors (Use sparingly)
    success: '#66b896',      // Green (primary)
    warning: '#ffc76f',      // Warm amber (soft, not aggressive)
    error: '#d9977b',        // Soft coral/rust (NOT harsh red)
    info: '#5a9ecf',         // Blue (secondary)
    disabled: '#c9bfba',     // Desaturated neutral

    // Backgrounds
    background: {
      default: '#fffbf7',    // Warm white
      subtle: '#f5f3f0',     // Very light
      elevated: '#ffffff',   // Pure white for cards
      overlay: 'rgba(26, 25, 21, 0.4)', // Soft dark overlay
    },

    // Text Colors
    text: {
      primary: '#1a1510',    // Dark charcoal on light
      secondary: '#6b6560',  // Mid gray for supporting text
      tertiary: '#8b7f7a',   // Light gray for hints
      inverse: '#fffbf7',    // Light text on dark (rare)
      muted: '#c9bfba',      // Disabled text
    },

    // Borders & Dividers
    border: {
      default: '#ede9e4',    // Light warm gray
      subtle: '#f5f3f0',     // Very subtle
      strong: '#ddd7d0',     // Stronger definition
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    fontFamily: {
      display: '"Poppins", "Inter", system-ui, -apple-system, sans-serif',
      body: '"Inter", system-ui, -apple-system, sans-serif',
      mono: '"Fira Code", "Monaco", monospace',
    },

    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    fontSize: {
      xs: '0.75rem',       // 12px
      sm: '0.875rem',      // 14px
      base: '1rem',        // 16px
      lg: '1.125rem',      // 18px
      xl: '1.25rem',       // 20px
      '2xl': '1.5rem',     // 24px
      '3xl': '1.875rem',   // 30px
      '4xl': '2.25rem',    // 36px
      '5xl': '3rem',       // 48px
    },

    lineHeight: {
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },

    letterSpacing: {
      tight: '-0.02em',
      normal: '0em',
      wide: '0.02em',
      wider: '0.05em',
    },
  },

  // ============================================
  // SPACING
  // ============================================
  spacing: {
    0: '0px',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    7: '1.75rem',    // 28px
    8: '2rem',       // 32px
    9: '2.25rem',    // 36px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    14: '3.5rem',    // 56px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    28: '7rem',      // 112px
    32: '8rem',      // 128px
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  borderRadius: {
    none: '0px',
    sm: '0.375rem',   // 6px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    '3xl': '2.5rem',  // 40px
    full: '9999px',   // Fully rounded
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    // Subtle shadows (default)
    xs: '0 1px 2px 0 rgba(26, 25, 21, 0.05)',
    sm: '0 1px 3px 0 rgba(26, 25, 21, 0.1), 0 1px 2px 0 rgba(26, 25, 21, 0.06)',
    base: '0 4px 6px -1px rgba(26, 25, 21, 0.1), 0 2px 4px -1px rgba(26, 25, 21, 0.06)',
    md: '0 10px 15px -3px rgba(26, 25, 21, 0.1), 0 4px 6px -2px rgba(26, 25, 21, 0.05)',
    lg: '0 20px 25px -5px rgba(26, 25, 21, 0.1), 0 10px 10px -5px rgba(26, 25, 21, 0.04)',
    xl: '0 25px 50px -12px rgba(26, 25, 21, 0.15)',

    // Soft glow effect (for floating/elevated elements)
    glow: '0 0 20px 0 rgba(102, 184, 150, 0.15)',
    'glow-sm': '0 0 12px 0 rgba(102, 184, 150, 0.1)',
    'glow-lg': '0 0 40px 0 rgba(102, 184, 150, 0.2)',

    // Inset shadows (for pressed states)
    'inset-sm': 'inset 0 1px 2px 0 rgba(26, 25, 21, 0.05)',
    'inset-base': 'inset 0 2px 4px 0 rgba(26, 25, 21, 0.1)',
  },

  // ============================================
  // TRANSITIONS & ANIMATIONS
  // ============================================
  transitions: {
    duration: {
      fastest: '75ms',
      faster: '100ms',
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
      slowest: '1000ms',
    },

    timing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Gentle, natural easing (Ghibli-like)
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      gentle: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },

  // ============================================
  // BREAKPOINTS
  // ============================================
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ============================================
  // Z-INDEX SCALE
  // ============================================
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    'modal-backdrop': 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // ============================================
  // COMPONENT-SPECIFIC TOKENS
  // ============================================
  components: {
    // Button Tokens
    button: {
      paddingY: '0.75rem',      // 12px
      paddingX: '1.5rem',       // 24px
      paddingYSm: '0.5rem',     // 8px
      paddingXSm: '1rem',       // 16px
      paddingYLg: '1rem',       // 16px
      paddingXLg: '2rem',       // 32px
      borderRadius: '1rem',     // 16px
      fontSize: '1rem',         // 16px
      fontWeight: 600,
      minHeight: '2.75rem',     // 44px (mobile friendly)
    },

    // Card Tokens
    card: {
      borderRadius: '1.5rem',   // 24px
      padding: '1.5rem',        // 24px
      paddingSm: '1rem',        // 16px
      paddingLg: '2rem',        // 32px
      shadow: '0 4px 6px -1px rgba(26, 25, 21, 0.1), 0 2px 4px -1px rgba(26, 25, 21, 0.06)',
    },

    // Input Tokens
    input: {
      borderRadius: '0.75rem',  // 12px
      padding: '0.75rem 1rem',  // 12px 16px
      fontSize: '1rem',         // 16px
      lineHeight: '1.5',
      border: '1px solid #ede9e4',
      minHeight: '2.75rem',     // 44px
    },

    // Modal Tokens
    modal: {
      borderRadius: '1.5rem',   // 24px
      padding: '2rem',          // 32px
      maxWidth: '28rem',        // 448px (mobile friendly)
    },
  },
};

export default designTokens;
