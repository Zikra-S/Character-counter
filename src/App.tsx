import Header from "./components/header";
import Editor from "./components/editor";
import CountCards from "./components/countCards";
import LetterChart from "./components/letterChart";
import bgLight from "./assets/images/bg-light-theme.png";
import bgDark from "./assets/images/bg-dark-theme.png";

function App() {
  return (
    <div className="relative isolate min-h-screen bg-white font-sans text-night dark:bg-night dark:text-white">
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <img src={bgLight} alt="" className="size-full object-cover dark:hidden" />
        <img
          src={bgDark}
          alt=""
          className="hidden size-full object-cover dark:block"
        />
      </div>

      <main className="mx-auto max-w-[990px] px-5 py-8">
        <Header />

        <h1 className="mx-auto mb-10 mt-10 max-w-[600px] text-balance text-center text-[40px] leading-none font-bold tracking-tighter md:mb-12 md:mt-14 md:text-6xl">
          Analyze your text in real-time.
        </h1>

        <Editor />
        <CountCards />
        <LetterChart />
      </main>
    </div>
  );
}

export default App;