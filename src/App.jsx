import Footer from "./Footer.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

import icon_dice from "./assets/images/icon-dice.svg";
import pattern_divider_desktop from "./assets/images/pattern-divider-desktop.svg";
import pattern_divider_mobile from "./assets/images/pattern-divider-mobile.svg";

const App = () => {
  const link = "https://api.adviceslip.com/advice";

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getNewAdvice() {
    if (loading === false) {
      setLoading(true);

      setTimeout(async () => {
        await axios
          .get(link)
          .then((response) => {
            setPost(response.data.slip);
          })
          .catch((error) => {
            setPost(null);
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1000);
    }
  }

  useEffect(() => {
    getNewAdvice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="grid min-h-screen place-content-center bg-N_Color_Dark_Blue">
        <h1 className=" sr-only">Advice Generator App</h1>

        <div className=" relative mx-5 max-w-md rounded-2xl bg-N_Color_Dark_Grayish_Blue p-10 shadow-2xl">
          <h2 className=" pb-4 text-center text-xs font-[800] tracking-advice_Num text-P_Color_Neon_Green">
            {!post ? "" : loading ? "" : "ADVICE #" + post.id}
          </h2>

          <p className=" text-center text-quote font-[800] text-P_Color_Light_Cyan">
            {!post
              ? "Loading..."
              : loading
              ? "Loading..."
              : '"' + post.advice + '"'}
          </p>

          <picture className="">
            <source
              srcSet={pattern_divider_desktop}
              media="(min-width: 768px)"
            />
            <img
              src={pattern_divider_mobile}
              alt=""
              aria-hidden
              className=" my-5 w-full"
            />
          </picture>

          <button
            onClick={getNewAdvice}
            aria-label="Generate new Advice"
            className=" absolute bottom-[-1.5em] left-[50%] translate-x-[-50%] rounded-full bg-P_Color_Neon_Green p-4 text-black hover:shadow-inside"
          >
            <img src={icon_dice} alt="Icon Dice" />
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
