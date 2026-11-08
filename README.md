# Character Counter

A responsive text analyzer that counts characters, words, and sentences in real time, built as a solution to a [Frontend Mentor](https://www.frontendmentor.io/challenges/character-counter-znSgeWs_i6) challenge. The app state is managed with Zustand.

## Overview

You type or paste a text, and the page updates the counts, the reading time, and a letter density chart as you type. You can exclude spaces, set a character limit with a warning, and switch between a light and a dark theme. The layout changes between mobile and desktop screen sizes, and every button has a hover state.

## Features

- Responsive layout for mobile and desktop screens
- Live count of characters, words, and sentences
- Option to exclude spaces from the character count
- Character limit with a warning message when the text is too long
- Approximate reading time
- Letter density bars for the top 5 letters, with a "See more" button for all of them
- Light and dark theme switch, saved in the browser
- The theme follows your computer setting the first time you visit
- Custom checkboxes that work with the keyboard
- Visible focus states, labels for screen readers, and an alert for the limit warning
- Hover states on all buttons
- Custom colors and font set up in the Tailwind theme
- Built with strict TypeScript typing throughout

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand.docs.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Zikra-S/Character-counter.git
cd Character-counter
pnpm install
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Notes

The letter density chart counts only the English letters A to Z. Numbers, spaces, punctuation, and other alphabets are skipped.

## Project Structure

```
src/
├── assets/images/     # Logos, icons, patterns, and background textures
├── components/
│   ├── header.tsx         # Logo and theme switch button
│   ├── editor.tsx         # Text box, options, limit warning, and reading time
│   ├── countCards.tsx     # Characters, words, and sentences cards
│   └── letterChart.tsx    # Letter density bars with a See more button
├── helpers/
│   └── textCounts.ts      # Counting functions and reading time
├── state/
│   └── counterStore.ts    # Zustand store with the text, options, and theme
├── App.tsx            # Puts the header and all the sections together
├── index.css          # Tailwind import, theme colors, and font
└── main.tsx           # App entry point
```