/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // It's common to include autoprefixer for cross-browser compatibility
  },
};

export default config;
