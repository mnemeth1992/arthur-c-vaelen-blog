import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#fbfbfa',
          dark: '#121316',
        },
        card: {
          light: '#f3f3f0',
          dark: '#181a1f',
        },
        border: {
          light: '#e6e6e0',
          dark: '#262930',
        },
        txt: {
          light: '#22252a',
          dark: '#e2e4e9',
          muted: {
            light: '#626770',
            dark: '#9ca2ad',
          },
        },
        accent: {
          DEFAULT: '#2d5a43', // mély erdőzöld
          hover: '#224634',
          dark: '#4e8d6b',
          darkHover: '#62a581',
          subtle: '#edf4f0',
          subtleDark: '#17281f',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            color: '#22252a',
            lineHeight: '1.8',
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: '#1a1d21',
              fontWeight: '700',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: '#1a1d21',
              fontWeight: '600',
              marginTop: '2em',
              marginBottom: '0.8em',
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: '#1a1d21',
              fontWeight: '600',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#2d5a43',
              color: '#464b53',
            },
            a: {
              color: '#2d5a43',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#224634',
              },
            },
          },
        },
        invert: {
          css: {
            color: '#e2e4e9',
            h1: {
              color: '#f5f6f8',
            },
            h2: {
              color: '#f5f6f8',
            },
            h3: {
              color: '#f5f6f8',
            },
            blockquote: {
              borderLeftColor: '#4e8d6b',
              color: '#cbd0d8',
            },
            a: {
              color: '#4e8d6b',
              '&:hover': {
                color: '#62a581',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
