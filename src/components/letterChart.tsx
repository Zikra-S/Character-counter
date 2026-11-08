import { useState } from "react";
import { useCounterStore } from "../state/counterStore";
import { getLetterStats } from "../helpers/textCounts";

function LetterChart() {
  const content = useCounterStore((state) => state.content);
  const [showAll, setShowAll] = useState(false);

  const letters = getLetterStats(content);
  const visible = showAll ? letters : letters.slice(0, 5);

  return (
    <section className="mt-10 pb-10">
      <h2 className="text-xl font-medium md:text-2xl">Letter Density</h2>

      {letters.length === 0 ? (
        <p className="mt-5 text-sm md:text-base">No characters found. Start typing to see letter density.</p>
      ) : (
        <>
          <ul className="mt-5 grid gap-3">
            {visible.map((item) => (
              <li key={item.letter} className="flex items-center gap-3 md:gap-4">
                <span className="w-4 text-sm">{item.letter}</span>

                <div aria-hidden="true" className="h-3 flex-1 rounded-full bg-mist-line dark:bg-night-soft">
                  <div className="h-3 rounded-full bg-card-purple" style={{ width: `${item.percent}%` }} />
                </div>

                <span className="min-w-24 text-right text-sm">
                  {item.count} ({item.percent.toFixed(2)}%)
                </span>
              </li>
            ))}
          </ul>

          {letters.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="mt-5 flex cursor-pointer items-center gap-2 hover:opacity-70">
              {showAll ? "See less" : "See more"}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={showAll ? "rotate-180" : ""}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default LetterChart;
