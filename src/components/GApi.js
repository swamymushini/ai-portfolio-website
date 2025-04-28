const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const {getOrderNumber} = require('./order-generate');
const { systemPromptText, history } = require('./chathistory');

const uniquDigit = Math.floor(Math.random() * 100) + 1;

const genAI = new GoogleGenerativeAI(getOrderNumber(uniquDigit));

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});


const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


export async function sendMessageToGoogleApi(message) {

  message = message + ""

  const chatSession = model.startChat({
    generationConfig,
    systemInstruction: {
      parts: [{ text: systemPromptText }],
    },
    history: history,
  });

  const result = await chatSession.sendMessage(message);
  console.log(result.response.text());

  return result.response.text();

}
