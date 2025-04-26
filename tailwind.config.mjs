import { defineConfig } from 'vite';

export default defineConfig({
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                corpx: {
                    blue: '#003366',    // Deep Enterprise Blue
                    gray: '#AAAAAA',    // Sad Corporate Gray
                    dark: '#1F2937',    // Dark Mode Gray background
                    accent: '#4F46E5',  // Soft Indigo accent (optional for buttons etc.)
                },
            },
            fontFamily: {
                sans: ['Open Sans', 'Roboto', 'Lato', 'sans-serif'], // Modern corporate sans stack
            },
            spacing: {
                '128': '32rem',   // Extra big padding/margins if you want
                '144': '36rem',
            },
            borderRadius: {
                'xl': '1rem',    // Slightly more rounded buttons/cards
                '2xl': '1.5rem',
            },
            boxShadow: {
                'corp': '0 2px 8px rgba(0, 0, 0, 0.1)',  // Soft shadow for fake corporate polish
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // Optional but highly recommended for nice MDX formatting
    ],
});
