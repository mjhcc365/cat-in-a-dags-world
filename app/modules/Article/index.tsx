import MarqueeText from "@/app/components/MarqueeText";
import SlideImage from "./SlideImage";
const Article = () => {
  return (
    <article>
      <MarqueeText />
      <div className="motto relative bg-red after:absolute after:bottom-0 after:left-0 after:w-full after:bg-white after:h-200 after:z-1 z-3 is-active">
        <SlideImage />
      </div>
    </article>
  );
};

export default Article;
