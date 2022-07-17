import React, { useState } from "react";

// import componets
import Submit from "./components/Submit";
import Thanks from "./components/Thanks";

const App = () => {
  const [seeThanks, setSeeThanks] = useState(true);
  return (
    <div className="font-sans text-[15px] h-screen w-full flex items-center justify-center bg-very-dark-blue">
      <div className="flex items-center w-[358px] h-[358px] rounded-3xl p-[25px] bg-[#222933]">
        {seeThanks ? (
          <>
            <Submit setSeeThanks={setSeeThanks} />
          </>
        ) : (
          <Thanks />
        )}
      </div>
    </div>
  );
};

export default App;
