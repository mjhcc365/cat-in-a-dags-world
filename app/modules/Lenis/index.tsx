import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useRef } from "react";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div
        style={{
          height: "200vh",
          background: "linear-gradient(to bottom, #ff7e5f, #feb47b)",
        }}
      >
        <div style={{ padding: "50px", color: "white", textAlign: "center" }}>
          <h1>Smooth Scrolling with Lenis</h1>
          <p>Scroll down to see the effect!</p>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
