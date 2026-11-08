export function getCharCount(content: string, skipSpaces: boolean) {
  if (skipSpaces) {
    return content.replace(/\s/g, "").length;
  }
  return content.length;
}

export function getWordCount(content: string) {
  const clean = content.trim();
  if (clean === "") {
    return 0;
  }
  return clean.split(/\s+/).length;
}

export function getSentenceCount(content: string) {
  const pieces = content.split(/[.!?]/);
  return pieces.filter((piece) => piece.trim() !== "").length;
}

export function padNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function getReadingTime(content: string) {
  const words = getWordCount(content);

  if (words === 0) {
    return "0 minute";
  }

  const minutes = Math.floor(words / 200);

  if (minutes < 1) {
    return "<1 minute";
  }

  return minutes === 1 ? "1 minute" : `${minutes} minutes`;
}

export function getLetterStats(content: string) {
  const counts: Record<string, number> = {};
  let total = 0;

  for (const char of content.toUpperCase()) {
    if (char >= "A" && char <= "Z") {
      counts[char] = (counts[char] ?? 0) + 1;
      total += 1;
    }
  }

  return Object.entries(counts)
    .map(([letter, count]) => ({
      letter,
      count,
      percent: (count / total) * 100,
    }))
    .sort((a, b) => b.count - a.count || a.letter.localeCompare(b.letter));
}
