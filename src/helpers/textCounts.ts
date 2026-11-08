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
