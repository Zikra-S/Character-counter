import { useCounterStore } from "../state/counterStore";
import { getCharCount, getSentenceCount, getWordCount, padNumber } from "../helpers/textCounts";
import charPattern from "../assets/images/pattern-character-count.svg";
import wordPattern from "../assets/images/pattern-word-count.svg";
import sentencePattern from "../assets/images/pattern-sentence-count.svg";

type CardProps = {
  title: string;
  value: number;
  pattern: string;
  color: string;
};

function Card({ title, value, pattern, color }: CardProps) {
  return (
    <li className={`relative flex h-[150px] flex-col justify-end overflow-hidden rounded-xl p-5 text-night ${color}`}>
      <img src={pattern} alt="" className="absolute right-0 top-0 h-full max-w-none" />

      <p className="relative text-[56px] leading-none font-bold md:text-[64px]">{padNumber(value)}</p>
      <p className="relative mt-2 text-xl">{title}</p>
    </li>
  );
}

function CountCards() {
  const content = useCounterStore((state) => state.content);
  const skipSpaces = useCounterStore((state) => state.skipSpaces);

  const charTitle = skipSpaces ? "Total Characters (no space)" : "Total Characters";

  return (
    <ul className="mt-8 grid gap-4 md:grid-cols-3">
      <Card title={charTitle} value={getCharCount(content, skipSpaces)} pattern={charPattern} color="bg-card-purple" />
      <Card title="Word Count" value={getWordCount(content)} pattern={wordPattern} color="bg-card-orange" />
      <Card title="Sentence Count" value={getSentenceCount(content)} pattern={sentencePattern} color="bg-card-coral" />
    </ul>
  );
}

export default CountCards;
