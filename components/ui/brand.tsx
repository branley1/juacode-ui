"use client"

import Link from "next/link"
import { FC } from "react"
import JuaCodeLogo from "../icons/juacode-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://www.chatbotui.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <JuaCodeLogo
          fill={theme === "dark" ? "white" : "black"}
          width={94 * 0.3}
          height={94 * 0.3}
        />
      </div>

      <div className="text-4xl font-bold tracking-wide">JuaCode</div>
    </Link>
  )
}
