import { useEffect, useState } from "react";
import FAQList from "./components/FAQList";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div
      className="min-h-screen 
    bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 
    dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl
          font-extrabold mb-4 bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text
          dark:text-gray-300"
          >
            FAQ Center
          </h1>
          <p
            className="text-lg text-gray-600
          max-w-2xl mx-auto"
          >
            Find answers to the most common question asked about Freelance job.
          </p>
        </header>
      </div>
      <FAQList toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
