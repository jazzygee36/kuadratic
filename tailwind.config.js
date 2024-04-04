import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  colors: {
    sidebarBg: "#33357D",
    whiteBg: "#ffffff",
    deepBlueText: "#33357D",
    actionText: "#404040",
    cardTitle: "#404040",
    cardAvatarGreenBg: "#008124",
    dashboardText: "#E0E0E0",
    redBackground: "#FF4159",
    lightRedBg: "#FF8787",
    textBlue: " #505887",
    textGreen: "#008124",
    textRed: "#FF2F2F",
    dropdownBorder: "#EAEAEA",
    greyColor: "#786F8C",
    selectBtnBorder: "#EAEAEA",
    selectTextColor: "#666666",
    greyBg: "#F8FAFB",
    calenderText: "#44566C",
    lightBlueBg: "#2FA8FF",
    sidebarBorder: "#F2F2F2",
    dimBlueSidebar: "rgba(59, 130, 246, .5)",
    actionMenuBg: "#FAFAFA",
    actionMenuBorder: "#ECECEC",
    quickActionTextColor: "#696565",
    menuBarColor: "#A098AE",
    checkBoxBorder: "#C1BBEB",
  },

  extend: {
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    fontSize: {
      miniSidebar: "10px",
      quickActionText: "11px",
    },
  },
};
