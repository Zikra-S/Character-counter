export function countCharacters(text: string, excludeSpaces: boolean) {
  return excludeSpaces ? text.replace(/\s/g, "").length : text.length;
}

export function countWords(text: string) {
  const trimmed = text.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}

export function countSentences(text: string) {
  return text.split(/[.!?]+/).filter((part) => part.trim() !== "").length;
}