"use client"
import React, { useState, useEffect, use } from "react";
import CountDownItem from "./CountDownItem";
import Heartbeat from "../Heartbeat/Heartbeat";
import { courgette } from "@/utils/font.util";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const eventDate = new Date(targetDate);
      const timeDifference = eventDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full min-h-screen flex items-center flex-col place-content-center">
      <div className="flex items-center md:py-8 px-5">
        <h1 className={`${courgette.className} text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white pb-5 fw-600`}>Saturday, 24 May 2025</h1>
      </div>
      <Heartbeat />
      <div className="flex items-center">
        <div className="grid grid-flow-col gap-5 auto-cols-max place-items-center text-center py-8">
          <CountDownItem text="days" value={timeLeft.days} />
          <CountDownItem text="hours" value={timeLeft.hours} />
          <CountDownItem text="minutes" value={timeLeft.minutes} />
          <CountDownItem text="seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
