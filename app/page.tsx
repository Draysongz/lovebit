"use client"
import { useState, useEffect } from "react";
import Loading from "./loading/page";
import Tap from "./tap/page";
import Start from "./start/page";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"loading" | "start" | "open">(
    "loading"
  );

  useEffect(() => {
    // Show Loading for 3 seconds
    const timer1 = setTimeout(() => {
      setCurrentStep("start");
    }, 3000);

    // Show Start for 3 seconds, then OpenScreen indefinitely
    const timer2 = setTimeout(() => {
      setCurrentStep("open");
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      {currentStep === "loading" && <Loading />}
      {currentStep === "start" && <Start />}
      {currentStep === "open" && <Tap />}
    </div>
  );
}
