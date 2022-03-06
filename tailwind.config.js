module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.2em",
      },
    },
    plugins: [],
  },
};
