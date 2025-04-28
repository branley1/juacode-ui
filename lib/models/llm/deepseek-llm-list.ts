import { LLM } from "@/types"

const DEEPSEEK_PLATFORM_LINK = "https://api.deepseek.com/v1"

// DeepSeek Models

const DEEPSEEK_CHAT: LLM = {
  modelId: "deepseek-chat",
  modelName: "DeepSeek Chat",
  provider: "deepseek",
  hostedId: "deepseek-chat",
  platformLink: DEEPSEEK_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.14,
    outputCost: 0.28
  }
}

const DEEPSEEK_CODER: LLM = {
  modelId: "deepseek-reasoner",
  modelName: "DeepSeek Reasoner",
  provider: "deepseek",
  hostedId: "deepseek-reasoner",
  platformLink: DEEPSEEK_PLATFORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.14,
    outputCost: 0.28
  }
}

export const DEEPSEEK_LLM_LIST: LLM[] = [DEEPSEEK_CHAT, DEEPSEEK_CODER]
