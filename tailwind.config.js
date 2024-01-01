module.exports = {
  content: ["*"],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        'eef2f3': '#eef2f3',
        '8e9eab': '#8e9eab',
      }),
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
    // ... other plugins
  ],
};
