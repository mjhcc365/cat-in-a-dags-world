import { ReactLenis, useLenis } from "lenis/react";
import LearnGSAP from "./LearnGSAP";
// import LenisAndGsap from "./LenisAndGsap";

import dynamic from "next/dynamic";

const LenisAndGsap = dynamic(() => import("./LenisAndGsap"), { ssr: false });

function App() {
  return <LenisAndGsap />;

  return (
    <ReactLenis root>
      <div style={{ height: 1200 }}>content</div>
    </ReactLenis>
  );
}

export default App;
