import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useStore } from "@/app/hooks/useStore";
import Scrollbar from "@/app/components/Scrollbar";

import Header from "@/app/modules/Header";
import Article from "@/app/modules/Article";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ markers: true });

function App() {
  const lenis = useLenis();
  const [setLenis] = useStore((state: any) => [state.setLenis]);

  useEffect(() => {
    if (lenis) {
      setLenis(lenis);
      ScrollTrigger.refresh();
      lenis?.start();
    }
    return () => {
      lenis?.destroy();
      setLenis(null);
    };
  }, [lenis]);

  return (
    <ReactLenis root>
      <div style={{ height: 1200 }}>
        <Header />
        <Scrollbar />
        <Article />
      </div>
    </ReactLenis>
  );
}

export default App;
