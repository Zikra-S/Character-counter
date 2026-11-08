import { useCounterStore } from "../state/counterStore";
import { getCharCount, getReadingTime } from "../helpers/textCounts";
import infoIcon from "../assets/images/icon-info.svg";
import checkIcon from "../assets/images/icon-check.svg";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm md:text-base">
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />

      <span
        className={`grid size-4 place-items-center rounded-[4px] border peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-grape ${
          checked ? "border-grape bg-grape" : "border-night dark:border-white"
        }`}>
        {checked && <img src={checkIcon} alt="" className="size-2.5" />}
      </span>

      {label}
    </label>
  );
}

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

  const boxColors = tooLong
    ? "border-card-coral focus:border-card-coral focus:ring-card-coral/40"
    : "border-mist-line focus:border-grape focus:ring-grape/40 dark:border-night-line";

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
        aria-describedby={tooLong ? "limit-warning" : undefined}
        className={`h-56 w-full resize-y rounded-xl border bg-mist p-5 text-lg outline-none placeholder:text-night/70 focus:ring-2 dark:bg-night-soft dark:placeholder:text-white/70 ${boxColors}`}
      />

      {tooLong && (
        <p id="limit-warning" role="alert" className="mt-3 flex items-center gap-2 text-sm text-card-coral">
          <img src={infoIcon} alt="" />
          Limit reached! Your text exceeds {maxChars} characters.
        </p>
      )}

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
        <Checkbox label="Exclude Spaces" checked={skipSpaces} onChange={toggleSkipSpaces} />

        <div className="flex items-center gap-3">
          <Checkbox label="Set Character Limit" checked={limitOn} onChange={toggleLimit} />

          {limitOn && (
            <label>
              <span className="sr-only">Character limit</span>
              <input
                type="number"
                min={0}
                value={maxChars || ""}
                onChange={(e) => setMaxChars(Math.max(0, Number(e.target.value)))}
                className="h-8 w-20 rounded-md border border-mist-line bg-transparent px-2 text-sm outline-none focus:border-grape dark:border-night-line"
              />
            </label>
          )}
        </div>

        <p className="text-sm md:ml-auto md:text-base">Approx. reading time: {getReadingTime(content)}</p>
      </div>
    </section>
  );
}

export default Editor;
