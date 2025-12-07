import { useRef } from "react";

function FAQItem({ item, onClick, isOpen }) {
  const answerRef = useRef(null);
  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700
  last:border-none transition-colors duration-300 
  dark:hover:from-gray-800/50 dark:hover:to-transparent"
      id={`faq-item-${item.id}`}
    >
      <button
        onClick={() => onClick(item.id)}
        className={` w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none rounded-lg transition-all duration-200 cursor-pointer 
          ${
            isOpen
              ? "bg-linear-to-r from-indigo-200 via-purple-200 to-indigo-200/90 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-indigo-900/70 text-purple-700 dark:text-white font-medium "
              : `text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-indigo-600 hover:via-purple-600
      dark:hover:from-indigo-400 dark:hover:to-purple-400`
          }`}
      >
        <span className="text-lg font-medium pr-6"> {item.question} </span>
        <div
          className={`flex shrink-0 items-center justify-center w-8 min-w-8
        aspect-square rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 ${
          isOpen
            ? "bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 shadow-md"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
        >
          <i
            className={`bx ${
              isOpen ? "bx-minus" : "bx-plus"
            } text-gray-500 dark:text-gray-400`}
          ></i>
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-200 ease-in-out"
        id={`answer-${item.id}`}
        ref={answerRef}
        style={{
          maxHeight: isOpen ? answerRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="p-3 rounded-lg overflow-y-auto max-h-[300px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
