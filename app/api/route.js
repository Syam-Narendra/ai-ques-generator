import { NextResponse } from "next/server";
import OpenAI from "openai";

const levelMap = {
  1: "basic",
  2: "medium",
  3: "high",
  4: "advanced",
};

const resource = process.env.resource
const deployment = process.env.deployment
const apiVersion = process.env.apiVersion
const apiKey = process.env.apiKey

export const POST = async (req, res) => {
  try {
    const { skill, level } = await req.json();
    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: `https://${resource}.openai.azure.com/openai/deployments/${deployment}`,
      defaultQuery: { "api-version": apiVersion },
      defaultHeaders: { "api-key": apiKey },
    });
    const userLevel = levelMap[level];
    if (!userLevel) {
      throw new Error("unexpected user level found");
    }
    const userPrompt = `generate ten ${userLevel} level questions on ${skill} and four options and give right answer in a json object as {question:"question",options:[a,b,c,d],answer:"answer"}`;
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: userPrompt }],
      model: "gpt-3.5-turbo",
    });
    let questions = await response.choices[0].message.content;
    const jsonObject = JSON.parse(questions);
    return NextResponse.json(jsonObject);
  } catch (error) {
    return NextResponse.json({
      error: error.response ? error.response.data : error.message,
    });
  }
};
