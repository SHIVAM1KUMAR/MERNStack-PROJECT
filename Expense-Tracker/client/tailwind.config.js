module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rp-black": "#1E2329",
        "mj-black": "#2A2F35",
        "jp-black": "#3B4046",
        "rp-yellow": "#F5A302",
        "mj-yellow": "#F4B301",
        "jp-yellow": "#FED154",
        "blue-1": "#023e8a",  // Added missing hex '#' for consistency
        "blue-2": "#0077b6",  // Same as above
        "blue-3": "#0096c7",  // Same as above
        "blue-4": "#00b4d8",  // Same as above
        "blue-5": "#48cae4",  // Same as above
        "blue-6": "#90e0ef",  // Same as above
        "blue-7": "#ade8f4",  // Same as above
        "gradient-start": "#3b82f6", // New gradient start color
        "gradient-end": "#9333ea", // New gradient end color
      },
      fontFamily: {
        lexend: ["Lexend Deca", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "Arial", "sans-serif"], // Added another popular sans-serif family for flexibility
      },
      boxShadow: {
        'default-light': '0px 4px 6px rgba(134, 32, 32, 0.1)', // Light box shadow for more subtle design elements
        'default-dark': '0px 4px 6px rgba(131, 55, 55, 0.3)',  // Darker shadow for deeper elements
        'lg-soft': '0px 10px 15px rgba(218, 50, 50, 0.2)', // Soft large shadow
      },
      spacing: {
        'extra-wide': '72rem', // Added custom spacing for wider elements
        'extra-tight': '0.5rem', // Added custom spacing for tighter spacing needs
      },
      borderRadius: {
        'xl': '1.5rem', // For larger rounded corners
        '2xl': '2rem', // Even more rounded corners for larger components
      },
      screens: {
        'xl': '1280px', // New larger breakpoint
      },
    },
  },
  plugins: [],
};
