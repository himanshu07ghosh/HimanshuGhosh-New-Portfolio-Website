/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06070d",
        panel: "#0c0e18",
        panel2: "#11131f",
        line: "#1f2333",
        haze: "#7b87a8",
        paper: "#e8eaf2",
        signal: "#5b8cff",
        signal2: "#9b6bff",
        cyan: "#41e0d6",
        amber: "#ffb84d",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "signal-gradient": "linear-gradient(135deg, #5b8cff 0%, #9b6bff 60%, #41e0d6 100%)",
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(91,140,255,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,140,255,0.25), 0 20px 60px -10px rgba(91,140,255,0.25)",
        "glow-violet": "0 0 0 1px rgba(155,107,255,0.25), 0 20px 60px -10px rgba(155,107,255,0.3)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
