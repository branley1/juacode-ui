"use client"

import JuaCodeLogo from "@/components/icons/juacode-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <JuaCodeLogo
          fill={theme === "dark" ? "white" : "black"}
          width={94 * 0.5}
          height={94 * 0.5}
        />
      </div>

      <div className="mt-2 text-4xl font-bold">JuaCode</div>

      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
