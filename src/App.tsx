import { useTextStore } from "./store/useTextStore";
import Total from "./components/total";

function App() {
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);

  return (
    <main className="p-6">
      <textarea value={text} onChange={(e) => setText(e.target.value)} className="h-40 w-full border p-2" />
      <Total />
    </main>
  );
}
export default App;
