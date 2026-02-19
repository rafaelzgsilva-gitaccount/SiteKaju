/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAF9F6",
                foreground: "#1A1A1A",
                primary: {
                    DEFAULT: "#C41E2A",
                    light: "#E63946",
                    dark: "#9B1B22",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#F5F0EB",
                    foreground: "#1A1A1A",
                },
                accent: {
                    DEFAULT: "#E8E0D8",
                    foreground: "#1A1A1A",
                },
                muted: {
                    DEFAULT: "#F5F0EB",
                    foreground: "#6B6B6B",
                },
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
            },
            fontSize: {
                'display': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
                'hero': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
