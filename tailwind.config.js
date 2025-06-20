module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1E3A8A", // blue-800 - Deep navy blue
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800
          900: "#1E40AF", // blue-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#3B82F6", // blue-500 - Bright blue
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
        },
        // Accent Colors
        accent: {
          DEFAULT: "#F59E0B", // amber-500 - Warm amber
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        // Background Colors
        background: "#FFFFFF", // white - Pure white
        surface: {
          DEFAULT: "#F8FAFC", // slate-50 - Subtle off-white
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
        },
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800 - Dark charcoal
          secondary: "#6B7280", // gray-500 - Medium gray
          tertiary: "#9CA3AF", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500 - Professional green
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500 - Consistent with accent
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
        },
        error: {
          DEFAULT: "#EF4444", // red-500 - Clear red
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200 - Light gray
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'custom-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'custom-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-out',
        'stagger-fade': 'staggerFade 600ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        staggerFade: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}