import { useCounterStore } from "../state/counterStore";
import { getCharCount } from "../helpers/textCounts";
import infoIcon from "../assets/images/icon-info.svg";

function Editor() {
  const content = useCounterStore((state) => state.content);
  const setContent = useCounterStore((state) => state.setContent);
  const skipSpaces = useCounterStore((state) => state.skipSpaces);
  const toggleSkipSpaces = useCounterStore((state) => state.toggleSkipSpaces);
  const limitOn = useCounterStore((state) => state.limitOn);
  const toggleLimit = useCounterStore((state) => state.toggleLimit);
  const maxChars = useCounterStore((state) => state.maxChars);
  const setMaxChars = useCounterStore((state) => state.setMaxChars);

  const charCount = getCharCount(content, skipSpaces);
  const tooLong = limitOn && maxChars > 0 && charCount > maxChars;

  return (
    <section>
      <label htmlFor="content" className="sr-only">
        Your text
      </label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing here... (or paste your text)"
        aria-invalid={tooLong}
        className={`h-40 w-full border p-2 ${tooLong ? "border-red-500" : ""}`}
      />

      {tooLong && (
        <p role="alert" className="mt-2 flex items-center gap-2 text-red-500">
          <img src={infoIcon} alt="" />
          Limit reached! Your text exceeds {maxChars} characters.
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={skipSpaces} onChange={toggleSkipSpaces} />
          Exclude Spaces
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={limitOn} onChange={toggleLimit} />
          Set Character Limit
        </label>

        {limitOn && (
          <label className="flex items-center gap-2">
            <span className="sr-only">Character limit</span>
            <input
              type="number"
              min={0}
              value={maxChars || ""}
              onChange={(e) => setMaxChars(Math.max(0, Number(e.target.value)))}
              className="w-24 border p-1"
            />
          </label>
        )}
      </div>
    </section>
  );
}

export default Editor;
