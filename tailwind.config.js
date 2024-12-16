import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                display: ['Rubik', ...defaultTheme.fontFamily.sans],
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: '#FFFAFA',
                foreground: '#141414',
                muted: '#3C3C3C',
                primary: '#273F70',
                accent: '#EB1E23',
            },
            transitionTimingFunction: {
                out: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                },
                screens: {
                    sm: '100%',
                    md: '100%',
                    lg: '1024px',
                    xl: '1280px',
                },
            },
        },
    },

    plugins: [forms],
};
