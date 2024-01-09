import { useState } from "react";

export function CountCats() {
  const [cats, setCats] = useState<string[]>([]);

  const handleClick = () => {
    setCats([...cats, "🐈"]);
  };

  return (
    <>
      <h2>useState</h2>

      <p>{cats}</p>
      <button onClick={handleClick}>There are {cats.length} cats 🥳</button>
    </>
  );
}
