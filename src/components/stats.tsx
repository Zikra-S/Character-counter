import { useTextStore } from "../store/useTextStore";
import { countCharacters, countSentences, countWords } from "../utils/analyze";

function Stats() {
  const text = useTextStore((state) => state.text);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);

  const stats = [
    {
      label: excludeSpaces ? "Total Characters (no space)" : "Total Characters",
      value: countCharacters(text, excludeSpaces),
    },
    { label: "Word Count", value: countWords(text) },
    { label: "Sentence Count", value: countSentences(text) },
  ];

  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <li key={stat.label} className="border p-4">
          <p className="text-4xl font-bold">{String(stat.value).padStart(2, "0")}</p>
          <p>{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}

export default Stats;
