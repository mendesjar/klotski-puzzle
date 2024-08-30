function App() {
  const pieces = [
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full bg-lime-400 rounded-xl" },
    { className: "w-full col-span-2 bg-stone-900 text-lime-400 rounded-xl" },
    { className: "w-full col-span-2 bg-stone-900 text-lime-400 rounded-xl" },
    { className: "w-full col-span-2 bg-stone-900 text-lime-400 rounded-xl" },
    {
      className: "w-full col-span-2 row-span-2 bg-lime-400 rounded-xl",
    },
  ];
  return (
    <div className="w-screen bg-blue-500 h-dvh">
      <div className="w-2/3 h-full">
        <div className="grid grid-cols-4 grid-row-5 gap-2 h-full">
          {pieces.map((piece) => {
            return <div className={piece.className}></div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
