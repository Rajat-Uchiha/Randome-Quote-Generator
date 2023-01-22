import "./index.css";
import { useState } from "react";
import myLogo from "./myLogo.png";
function App() {
  const [Quote, setQuote] = useState("The Quote comes here");
  const [Author, setAuthor] = useState("Author");

  const URL = "http://api.quotable.io/random";

  const getQuote = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const fetchedQuote = data.content;
    const fetchedAuthor = data.author;
    setQuote(fetchedQuote);
    setAuthor(fetchedAuthor);
  };

  return (
    <>
      <div className="container w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-Poppins">
        <div className="border-2 border-white w-3/4 lg:w-2/4 bg-white py-4 rounded-lg shadow-2xl min-h-[300px]">
          <div className=" mt-4 mx-2 px-4 rounded-lg py-4 min-h-[200px] flex justify-center items-center">
            <h1 className="text-center text-2xl font-bold text-gray-800 ">
              "{Quote}"
            </h1>
          </div>
          <div className=" mx-2 px-4  my-2">
            <h3 className="text-xl text-center text-gray-800 font-bold">
              By : <span>{Author}</span>
            </h3>
          </div>
          <div className="flex justify-center my-4 pt-4 px-4">
            <button
              onClick={getQuote}
              className="border-2 bg-purple-700 transition-all hover:scale-105 hover:bg-purple-800 rounded-lg text-white px-4 py-2 font-bold text-md lg:text-xl "
            >
              Generate new Quote
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 lg:right-0 m-8 ">
          <img
            className=" w-20 lg:w-40 drop-shadow-xl"
            src={myLogo}
            alt="LogoImage"
          />
        </div>
      </div>
    </>
  );
}

export default App;
