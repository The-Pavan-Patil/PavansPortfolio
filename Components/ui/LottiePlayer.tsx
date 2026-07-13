"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type LottieOptions = {
  loop?: boolean;
  autoplay?: boolean;
  animationData: object;
  rendererSettings?: {
    preserveAspectRatio?: string;
  };
};

type LottiePlayerProps = {
  options: LottieOptions;
  height?: number;
  width?: number;
};

const LottiePlayer = ({ options, height, width }: LottiePlayerProps) => {
  return <Lottie options={options} height={height} width={width} />;
};

export default LottiePlayer;
