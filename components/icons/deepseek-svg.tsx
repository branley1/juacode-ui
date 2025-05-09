import { FC } from "react"

interface DeepSeekSVGProps {
  className?: string
  width?: number
  height?: number
}

export const DeepSeekSVG: FC<DeepSeekSVGProps> = ({
  className,
  width = 24, // Default width
  height = 24 // Default height
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" // Use currentColor to inherit color
    >
      <path d="M874.6 560.1c-34.9-19-77.5-19-112.5 0-40 21.4-86.1 17.2-121.7-9.8-35.5-27-61.2-65.9-61.2-109.4s25.7-82.4 61.2-109.4c35.5-27 81.7-31.2 121.7-9.8 34.9 19 77.5 19 112.5 0C927 400 960 359.8 960 312c0-47.8-33-88-85.4-100-11.2-2.6-22.7-4.5-34.5-5.8-10.3-1.1-20.7-2.4-31.1-3.9-37-5.3-74.8-12.2-111.5-20.9-14.9-3.5-29.9-7.5-44.7-12-108.8-32.6-209.1-91.8-280.9-163.6C361.1-2.8 293.5-15.8 238.1 3.5 195.4 18.3 160 58.5 160 106.3c0 47.8 33 88 85.4 100 34.9 19 77.5 19 112.5 0 40-21.4 86.1-17.2 121.7 9.8 35.5 27 61.2 65.9 61.2 109.4s-25.7 82.4-61.2 109.4c-35.5 27-81.7 31.2-121.7 9.8-34.9-19-77.5-19-112.5 0C99 583.9 66 624 66 671.8c0 47.8 33 88 85.4 100 11.2 2.6 22.7 4.5 34.5 5.8 10.3 1.1 20.7 2.4 31.1 3.9 37 5.3 74.8 12.2 111.5 20.9 14.9 3.5 29.9 7.5 44.7 12 108.8 32.6 209.1 91.8 280.9 163.6 41.2 41.1 91.1 71.8 145.9 86.6 54.8 14.7 111.3 14.7 166.1 0 54.8-14.7 104.8-45.4 145.9-86.6 71.9-71.9 172.1-131 280.9-163.6 14.9-4.5 29.8-8.5 44.7-12 36.7-8.6 74.5-15.5 111.5-20.9 10.4-1.4 20.8-2.7 31.1-3.9 11.8-1.3 23.3-3.2 34.5-5.8 52.4-12 85.4-52.2 85.4-100 .1-47.8-32.9-87.9-85.4-99.9z" />
    </svg>
  )
}
