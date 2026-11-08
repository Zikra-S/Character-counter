import { useTextStore } from "../store/useTextStore";
import { countCharacters } from "../utils/analyze";
import infoIcon from "../assets/images/icon-info.svg";

function TextInput() {
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);
  const toggleExcludeSpaces = useTextStore((state) => state.toggleExcludeSpaces);
  const limitEnabled = useTextStore((state) => state.limitEnabled);
  const toggleLimit = useTextStore((state) => state.toggleLimit);
  const limit = useTextStore((state) => state.limit);
  const setLimit = useTextStore((state) => state.setLimit);

  const characters = countCharacters(text, excludeSpaces);
  const isOver = limitEnabled && limit !== null && characters > limit;

  return (
    <section>
      <label htmlFor="text" className="sr-only">
        Your text
      </label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here... (or paste your text)"
        aria-invalid={isOver}
        aria-describedby={isOver ? "limit-error" : undefined}
        className={`h-40 w-full border p-2 ${isOver ? "border-red-500" : ""}`}
      />

      {isOver && (
        <p
          id="limit-error"
          role="alert"
          className="mt-2 flex items-center gap-2 text-red-500"
        >
          <img src={infoIcon} alt="" />
          Limit reached! Your text exceeds {limit} characters.
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={toggleExcludeSpaces}
          />
          Exclude Spaces
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={limitEnabled} onChange={toggleLimit} />
          Set Character Limit
        </label>

        {limitEnabled && (
          <label className="flex items-center gap-2">
            <span className="sr-only">Character limit</span>
            <input
              type="number"
              min={0}
              value={limit ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                setLimit(value === "" ? null : Math.floor(Math.max(0, Number(value))));
              }}
              className="w-24 border p-1"
            />
          </label>
        )}
      </div>
    </section>
  );
}

export default TextInput;