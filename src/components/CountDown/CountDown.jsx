"use client"

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import CountDownItem from "./CountDownItem";
import Heartbeat from "../Heartbeat/Heartbeat";
import SlidingText from "@/components/SlidingText/SlidingText";

function Countdown({ targetDate, tz }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = moment().tz(tz);
      const target = moment.tz(targetDate, tz);
      const duration = moment.duration(target.diff(now));

      if (duration > 0) {
        setTimeLeft({ days: duration.days(), hours: duration.hours(), minutes: duration.minutes(), seconds: duration.seconds() });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate, tz]);

  return (
    <div className="w-full min-h-screen flex items-center flex-col place-content-center">
      <div className="flex items-center md:py-8 px-5">
        <SlidingText />
      </div>
      <Heartbeat />
      <div className="flex items-center">
        <div className="grid grid-flow-col gap-5 auto-cols-max place-items-center text-center py-8">
          <CountDownItem text="NGÀY" value={timeLeft.days} />
          <CountDownItem text="GIỜ" value={timeLeft.hours} />
          <CountDownItem text="PHÚT" value={timeLeft.minutes} />
          <CountDownItem text="GIÂY" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
