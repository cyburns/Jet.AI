import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

type Data = {
  name: string;
};

export default async function compareJetsWithAI(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("Request Body:", req.body);
  const { prompt } = req.body;

  if (!prompt || prompt === "") {
    return res.status(400).json({ name: "Prompt is required" });
  }

  try {
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 64,
      top_p: 1,
    });

    const response =
      gptResponse.choices[0].message?.content?.trim() || "No response";
    return res.status(200).json({ name: response });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return res.status(500).json({ name: "Internal Server Error" });
  }
}
