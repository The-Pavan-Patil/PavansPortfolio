"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { Options } from "react-lottie";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type LottiePlayerProps = {
  options: Options;
  height?: number;
  width?: number;
};

const LottiePlayer = ({ options, height, width }: LottiePlayerProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Lottie options={options} height={height} width={width} />;
};

export default LottiePlayer;
