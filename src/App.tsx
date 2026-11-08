import Editor from "./components/editor";
import CountCards from "./components/countCards";
import LetterChart from "./components/letterChart";

function App() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <Editor />
      <CountCards />
      <LetterChart />
    </main>
  );
}

export default App;
