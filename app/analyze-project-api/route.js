import { NextResponse } from "next/server";
import OpenAI from "openai";

const resource = process.env.resource;
const deployment = process.env.deployment;
const apiVersion = process.env.apiVersion;
const apiKey = process.env.apiKey;

export const POST = async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: `https://${resource}.openai.azure.com/openai/deployments/${deployment}`,
      defaultQuery: { "api-version": apiVersion },
      defaultHeaders: { "api-key": apiKey },
    });

    const userPrompt =
      "task: create an api which gives username and password from aws databases, now tell me what are the skills and technologies that are required to complete this task,just give me skill names without any extra info and all skills separated with a comma";
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: userPrompt }],
      model: "gpt-3.5-turbo",
    });
    const data = response.choices[0].message.content;
    const dataArray = data.split(",");
    return NextResponse.json({ data: dataArray });
  } catch (error) {
    return NextResponse.json({
      error: error.response ? error.response.data : error.message,
    });
  }
};
