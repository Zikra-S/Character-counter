import Header from "./components/header";
import Editor from "./components/editor";
import CountCards from "./components/countCards";
import LetterChart from "./components/letterChart";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#121319] dark:text-white">
      <main className="mx-auto max-w-4xl p-6">
        <Header />

        <h1 className="my-10 text-center text-5xl font-bold">Analyze your text in real-time.</h1>

        <Editor />
        <CountCards />
        <LetterChart />
      </main>
    </div>
  );
}

export default App;
