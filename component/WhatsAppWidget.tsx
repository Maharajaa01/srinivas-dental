import { useEffect } from "react";

export default function WhatsAppWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-4bc5e447-d0ad-4c1c-b912-0b8bcccc4865"
      data-elfsight-app-lazy
      style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 99999,background_color:"black" }}
    ></div>
  );
}
