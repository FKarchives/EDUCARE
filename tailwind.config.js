/**
 * Tailwind CSS Configuration
 * Maps design tokens to Tailwind utilities
 * Ghibli-inspired, warm aesthetic
 */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Soft Greens
        primary: {
          50: '#f5faf7',
          100: '#e8f3ed',
          200: '#d0e6db',
          300: '#b8d9c9',
          400: '#7fbf9e',
          500: '#66b896',
          600: '#4fa284',
          700: '#3d8c72',
          800: '#2b7560',
          900: '#1a5f4e',
        },
        // Secondary - Sky Blues
        secondary: {
          50: '#f0f7fb',
          100: '#e1f0f7',
          200: '#c3e0ef',
          300: '#a5d1e7',
          400: '#6db5d8',
          500: '#5a9ecf',
          600: '#4a87b8',
          700: '#3a70a1',
          800: '#2a5a8a',
          900: '#1a4473',
        },
        // Accent - Warm Beige & Cream
        accent: {
          50: '#fffbf5',
          100: '#fff8f0',
          200: '#ffefd9',
          300: '#ffe5bf',
          400: '#ffd699',
          500: '#ffc76f',
          600: '#ffb84a',
          700: '#ff9f1f',
          800: '#cc7f18',
          900: '#993f0d',
        },
        // Neutral - Warm Grays
        neutral: {
          0: '#ffffff',
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ede9e4',
          300: '#ddd7d0',
          400: '#b8aeaa',
          500: '#8b7f7a',
          600: '#6b6560',
          700: '#4a4540',
          800: '#2a2520',
          900: '#1a1510',
        },
        // Semantic
        success: '#66b896',
        warning: '#ffc76f',
        error: '#d9977b',
        info: '#5a9ecf',
        disabled: '#c9bfba',
      },

      backgroundColor: {
        default: '#fffbf7',
        subtle: '#f5f3f0',
        elevated: '#ffffff',
      },

      textColor: {
        primary: '#1a1510',
        secondary: '#6b6560',
        tertiary: '#8b7f7a',
        inverse: '#fffbf7',
        muted: '#c9bfba',
      },

      borderColor: {
        default: '#ede9e4',
        subtle: '#f5f3f0',
        strong: '#ddd7d0',
      },

      fontFamily: {
        display: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'monospace'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.2' }],
        sm: ['0.875rem', { lineHeight: '1.375' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.375' }],
        '3xl': ['1.875rem', { lineHeight: '1.375' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
      },

      spacing: {
        0: '0px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
      },

      borderRadius: {
        none: '0px',
        sm: '0.375rem',
        base: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        full: '9999px',
      },

      boxShadow: {
        xs: '0 1px 2px 0 rgba(26, 25, 21, 0.05)',
        sm: '0 1px 3px 0 rgba(26, 25, 21, 0.1), 0 1px 2px 0 rgba(26, 25, 21, 0.06)',
        base: '0 4px 6px -1px rgba(26, 25, 21, 0.1), 0 2px 4px -1px rgba(26, 25, 21, 0.06)',
        md: '0 10px 15px -3px rgba(26, 25, 21, 0.1), 0 4px 6px -2px rgba(26, 25, 21, 0.05)',
        lg: '0 20px 25px -5px rgba(26, 25, 21, 0.1), 0 10px 10px -5px rgba(26, 25, 21, 0.04)',
        xl: '0 25px 50px -12px rgba(26, 25, 21, 0.15)',
        glow: '0 0 20px 0 rgba(102, 184, 150, 0.15)',
        'glow-sm': '0 0 12px 0 rgba(102, 184, 150, 0.1)',
        'glow-lg': '0 0 40px 0 rgba(102, 184, 150, 0.2)',
        'inset-sm': 'inset 0 1px 2px 0 rgba(26, 25, 21, 0.05)',
        'inset-base': 'inset 0 2px 4px 0 rgba(26, 25, 21, 0.1)',
      },

      transitionDuration: {
        fastest: '75ms',
        faster: '100ms',
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        slower: '500ms',
        slowest: '1000ms',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        gentle: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      animation: {
        'fade-in': 'fadeIn var(--duration-base) var(--timing-smooth)',
        'slide-up': 'slideUp var(--duration-slow) var(--timing-smooth)',
        'slide-down': 'slideDown var(--duration-slow) var(--timing-smooth)',
        'pulse-soft': 'pulse var(--duration-slowest) var(--timing-smooth) infinite',
        'float': 'float 3s var(--timing-gentle) infinite',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },
      },

      zIndex: {
        hide: '-1',
        base: '0',
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
      },
    },
  },

  plugins: [
    // Custom component styles
    function ({ addComponents, theme }) {
      const components = {
        '.btn': {
          '@apply': 'inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-all duration-fast hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-60 disabled:cursor-not-allowed': {},
        },
        '.btn-primary': {
          '@apply': 'btn bg-primary-500 text-white shadow-sm hover:bg-primary-600 hover:shadow-md active:bg-primary-700 active:shadow-inset-base': {},
        },
        '.btn-secondary': {
          '@apply': 'btn bg-secondary-100 text-secondary-700 border border-secondary-300 hover:bg-secondary-200 active:bg-secondary-300': {},
        },
        '.btn-outline': {
          '@apply': 'btn bg-transparent text-primary-600 border-1.5 border-primary-300 hover:bg-primary-50 active:bg-primary-100': {},
        },
        '.btn-ghost': {
          '@apply': 'btn bg-transparent text-primary-600 hover:bg-primary-100 active:bg-primary-200': {},
        },
        '.btn-sm': {
          '@apply': 'btn px-4 py-2 text-sm': {},
        },
        '.btn-lg': {
          '@apply': 'btn px-8 py-4 text-lg': {},
        },

        '.card': {
          '@apply': 'bg-elevated rounded-xl p-6 shadow-sm border border-border-subtle transition-all duration-fast hover:shadow-md hover:translate-y-[-4px]': {},
        },
        '.card-sm': {
          '@apply': 'card p-4 rounded-lg': {},
        },
        '.card-lg': {
          '@apply': 'card p-8 rounded-2xl': {},
        },

        '.input': {
          '@apply': 'w-full px-4 py-3 text-base rounded-md bg-neutral-0 border border-border-default text-primary transition-all duration-fast focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 disabled:bg-neutral-100 disabled:text-muted disabled:cursor-not-allowed': {},
        },
      };
      addComponents(components);
    },
  ],

  corePlugins: {
    preflight: true,
  },
};
