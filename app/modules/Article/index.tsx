import MarqueeText from "@/app/components/MarqueeText";
import SlideImage from "./SlideImage";
import Mew from "./Mew";
import Solana from "./Solana";
import DawnOfNewEra from "./DawnOfNewEra";
const Article = () => {
  return (
    <article>
      {/* the dog day is over */}
      <MarqueeText />
      {/* Mew */}
      <div className="bg-black pb-60 s:pb-150 overflow-hidden">
        <div className="bg-red">
          <Mew />
        </div>
      </div>
      {/*powered by solana*/}
      <div className="relative overflow-hidden bg-red -mt-1 z-2">
        <Solana />
      </div>
      <div className="motto relative bg-red after:absolute after:bottom-0 after:left-0 after:w-full after:bg-white after:h-200 after:z-1 z-3 is-active">
        <SlideImage />
      </div>
      <DawnOfNewEra />
    </article>
  );
};

export default Article;
