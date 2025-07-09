"use client";

import { useEffect, useRef } from "react";

export default function CircuitSimulator() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Optional: you can later use postMessage to talk to the iframe
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        ref={iframeRef}
        src="https://www.falstad.com/circuit/circuitjs.html"
        width="1000"
        height="600"
        title="Circuit Simulator"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        allowFullScreen
      />
    </div>
  );
}
