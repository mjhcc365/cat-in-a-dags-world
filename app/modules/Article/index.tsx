import MarqueeText from "@/app/components/MarqueeText";
import SlideImage from "./SlideImage";
import Mew from "./Mew";
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

      <div className="motto relative bg-red after:absolute after:bottom-0 after:left-0 after:w-full after:bg-white after:h-200 after:z-1 z-3 is-active">
        <SlideImage />
      </div>
    </article>
  );
};

export default Article;
