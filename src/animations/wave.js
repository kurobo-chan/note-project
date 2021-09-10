import React from "react"
import Lottie from "react-lottie"
import * as animationData from "../animations/waveWhite.json"

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div className="wave">
      <Lottie options={defaultOptions} />
    </div>
  )
}
