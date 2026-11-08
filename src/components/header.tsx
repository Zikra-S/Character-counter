import { useEffect } from "react";
import { useCounterStore } from "../state/counterStore";
import logoLight from "../assets/images/logo-light-theme.svg";
import logoDark from "../assets/images/logo-dark-theme.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

function Header() {
  const theme = useCounterStore((state) => state.theme);
  const toggleTheme = useCounterStore((state) => state.toggleTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header className="flex items-center justify-between">
      <img src={logoLight} alt="Character Counter" className="h-8 md:h-10 dark:hidden" />
      <img src={logoDark} alt="Character Counter" className="hidden h-8 md:h-10 dark:block" />

      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        className="grid size-10 cursor-pointer place-items-center rounded-lg bg-mist-line hover:opacity-70 dark:bg-night-soft">
        <img src={isDark ? sunIcon : moonIcon} alt="" />
      </button>
    </header>
  );
}

export default Header;
