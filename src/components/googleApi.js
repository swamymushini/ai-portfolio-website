const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");


const { systemPromptText, history } = require('./chathistory');

const handleDecode = (encoded) => {
  try {
    const decodedString = atob(encoded);
    console.log(decodedString);
    return decodedString;
  } catch (error) {
    console.error('Decoding failed:', error);
  }
};

const genAI = new GoogleGenerativeAI(handleDecode('QUl6YVN5RFMxdEVBakhVaURjTVFsOUtlaThCTmRSUzF5NEl3WGRN'));

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
