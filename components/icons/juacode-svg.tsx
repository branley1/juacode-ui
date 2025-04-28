import React from "react"

interface JuaCodeLogoProps {
  width?: string | number
  height?: string | number
  fill?: string
  className?: string
}

const JuaCodeLogo: React.FC<JuaCodeLogoProps> = ({
  width = "94pt",
  height = "94pt",
  fill = "#000000",
  className
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 94.000000 94.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g
        transform="translate(0.000000,94.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path d="M377 823 c-11 -11 -8 -48 5 -61 7 -7 44 -12 95 -12 80 0 83 1 89 25 11 44 -9 55 -101 55 -45 0 -85 -3 -88 -7z m57 -29 c6 -16 -17 -30 -33 -20 -5 4 -9 15 -8 25 1 21 32 17 41 -5z m114 -7 c2 -12 -3 -17 -17 -17 -12 0 -21 6 -21 13 0 31 32 34 38 4z" />
        <path d="M448 690 c-4 -27 -2 -30 22 -30 24 0 26 3 22 30 -3 20 -10 30 -22 30 -12 0 -19 -10 -22 -30z" />
        <path d="M221 623 c-20 -18 -20 -18 -2 -71 l18 -54 11 31 c12 34 38 41 45 14 3 -10 5 3 6 28 1 40 -2 47 -24 57 -32 15 -29 15 -54 -5z" />
        <path d="M656 616 c-19 -30 -23 -87 -4 -68 18 18 26 15 42 -15 12 -22 15 -24 16 -10 0 11 8 32 17 48 21 36 9 62 -29 67 -18 2 -30 -4 -42 -22z" />
        <path d="M394 557 c-3 -8 -4 -36 -2 -63 l3 -49 75 0 75 0 0 60 0 60 -73 3 c-55 2 -74 0 -78 -11z" />
        <path d="M721 374 c-17 -21 -19 -30 -9 -41 10 -12 15 -11 30 9 l19 23 15 -22 c16 -23 44 -21 44 3 0 18 -40 54 -61 54 -10 0 -27 -12 -38 -26z" />
        <path d="M142 378 c-14 -14 -16 -44 -3 -53 6 -3 15 4 21 15 14 26 32 26 48 0 13 -22 32 -19 32 5 0 37 -70 61 -98 33z" />
        <path d="M326 261 c5 -5 23 -11 39 -13 l30 -3 3 -75 c3 -85 14 -100 70 -100 57 0 72 14 72 69 0 27 3 63 6 80 6 26 11 31 35 31 16 0 29 5 29 10 0 6 -56 10 -147 10 -90 0 -143 -4 -137 -9z" />
      </g>
    </svg>
  )
}

export default JuaCodeLogo
