/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    return opacityValue !== undefined
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '480px',
        tablet: '768px',
        desktop: '976px',
        'desktop-wide': '1440px',
      },
      textColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-text-base'),
        heading: withOpacity('--color-text-heading'),
        article: withOpacity('--color-text-article'),
        button: withOpacity('--color-text-button'),
      },
      backgroundColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-background'),
        fill: withOpacity('--color-fill'),
        button: withOpacity('--color-bg-button'),
        'button-hover': withOpacity('--color-bg-button-hover'),
        tab: withOpacity('--color-bg-tab'),
        'tab-hover': withOpacity('--color-bg-tab-hover'),
        border: withOpacity('--color-edge'),
      },
      gradientColorStops: {
        hue: 'var(--color-fill)',
      },
      borderColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-fill'),
      },
      outlineColor: {
        highlight: withOpacity('--color-accent'),
        base: withOpacity('--color-fill'),
      },
    },
    fontFamily: {
      satoshi: ['Satoshi-Regular', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
