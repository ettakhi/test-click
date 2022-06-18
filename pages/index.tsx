import type { NextPage } from "next";
import { FC, useState, memo, useCallback } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  return (
    <div>
      {count}
      <Child handleClick={handleClick} />
    </div>
  );
};

const Child: FC<any> = memo(({ handleClick }) => {
  console.log("Child");
  return (
    <div>
      <button className="bg-blue-500 p-5 mb-4" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
});

export default Home;
