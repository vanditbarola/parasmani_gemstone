import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        topHeadingPrimary: "#010f1c",
        topHeadingSecondary: "#021d35",
        pink: "#FD4B6B",
        darkBackground: "#1a1a1a",
        darkCard: "#2a2a2a",
        darkText: "#eaeaea",
        dp: "#35184A",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #3B0B77 0%, #A9A9A9 100%)', // Adjust colors as needed
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
});
