import { useCounterStore } from "../state/counterStore";
import { getCharCount, getSentenceCount, getWordCount, padNumber } from "../helpers/textCounts";

type CardProps = {
  title: string;
  value: number;
};

function Card({ title, value }: CardProps) {
  return (
    <li className="border p-4">
      <p className="text-4xl font-bold">{padNumber(value)}</p>
      <p>{title}</p>
    </li>
  );
}

function CountCards() {
  const content = useCounterStore((state) => state.content);
  const skipSpaces = useCounterStore((state) => state.skipSpaces);

  const charTitle = skipSpaces ? "Total Characters (no space)" : "Total Characters";

  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-3">
      <Card title={charTitle} value={getCharCount(content, skipSpaces)} />
      <Card title="Word Count" value={getWordCount(content)} />
      <Card title="Sentence Count" value={getSentenceCount(content)} />
    </ul>
  );
}

export default CountCards;
