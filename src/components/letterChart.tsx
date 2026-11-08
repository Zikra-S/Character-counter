import { useState } from "react";
import { useCounterStore } from "../state/counterStore";
import { getLetterStats } from "../helpers/textCounts";

function LetterChart() {
  const content = useCounterStore((state) => state.content);
  const [showAll, setShowAll] = useState(false);

  const letters = getLetterStats(content);
  const visible = showAll ? letters : letters.slice(0, 5);

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Letter Density</h2>

      {letters.length === 0 ? (
        <p className="mt-4">
          No characters found. Start typing to see letter density.
        </p>
      ) : (
        <>
          <ul className="mt-4 grid gap-3">
            {visible.map((item) => (
              <li key={item.letter} className="flex items-center gap-4">
                <span className="w-4">{item.letter}</span>

                <div
                  aria-hidden="true"
                  className="h-3 flex-1 rounded-full bg-gray-200"
                >
                  <div
                    className="h-3 rounded-full bg-purple-400"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                <span>
                  {item.count} ({item.percent.toFixed(2)}%)
                </span>
              </li>
            ))}
          </ul>

          {letters.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="mt-4 cursor-pointer"
            >
              {showAll ? "See less" : "See more"}
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default LetterChart;