import { useTextStore } from "./store/useTextStore";
import Stats from "./components/stats";

function App() {
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);
  const toggleExcludeSpaces = useTextStore((state) => state.toggleExcludeSpaces);

  return (
    <main className="mx-auto max-w-4xl p-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here... (or paste your text)"
        className="h-40 w-full border p-2"
      />

      <label className="mt-4 flex items-center gap-2">
        <input type="checkbox" checked={excludeSpaces} onChange={toggleExcludeSpaces} />
        Exclude Spaces
      </label>

      <Stats />
    </main>
  );
}

export default App;
