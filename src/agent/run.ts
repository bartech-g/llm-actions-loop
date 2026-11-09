import "dotenv/config"
import { generateText, type ModelMessage } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

import { SYSTEM_PROMPT } from "./system/prompt.ts";

import type { AgentCallbacks } from "../types.ts";

export async function runAgent(
    userMessage: string,
    conversationHistory: ModelMessage[],
    callbacks: AgentCallbacks,
): Promise<any> {
    const { text } = await generateText({
        model: anthropic("claude-haiku-5-5"),
        prompt: userMessage,
        system: SYSTEM_PROMPT,
    });

    console.log(text);
}

runAgent("Hello how are you?")