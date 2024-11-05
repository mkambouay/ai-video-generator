const {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
});

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: "application/json",
};

export const chatSession = model.startChat({
	generationConfig,
	history: [
		{
			role: "user",
			parts: [
				{
					text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field\n",
				},
			],
		},
		{
			role: "model",
			parts: [
				{
					text: '## 30-Second Historical Story Video Script (JSON)\n\n```json\n[\n  {\n    "imagePrompt": "A bustling medieval marketplace with colorful stalls, people bartering, and a large stone building in the background. Realistic style.",\n    "ContentText": "In the heart of 14th-century London, a young woman named Eleanor was struggling to make ends meet. She sold herbs and remedies, but business was slow. One day, a stranger with a curious glint in his eye approached her stall."\n  },\n  {\n    "imagePrompt": "Close-up shot of a mysterious stranger with piercing blue eyes and a worn leather coat, holding a small, intricately carved box. Realistic style.",\n    "ContentText": "He introduced himself as William and offered her a deal. He had a rare and valuable ingredient, a magical root, that could increase the potency of her medicines. In exchange, he wanted her to help him with a secret mission."\n  },\n  {\n    "imagePrompt": "Eleanor, a young woman with determined eyes and a hint of fear, looks at the strange root with wonder and suspicion. Realistic style.",\n    "ContentText": "Eleanor hesitated. William’s proposition was tempting, but she felt an uneasy feeling about the root and the mission. The mysterious stranger promised her wealth and security, but at what cost?"\n  },\n  {\n    "imagePrompt": "Eleanor, looking troubled, stands with a hand on her chin, while William patiently waits for her response.  A faint shadow falls over William\'s face. Realistic style.",\n    "ContentText": "The fate of Eleanor and the city of London hung in the balance.  Would she succumb to the allure of wealth and risk her conscience? Or would she stand against the darkness that loomed on the horizon?"\n  }\n]\n```\n\n**Explanation:**\n\nThis JSON data represents a 30-second video script with 4 scenes. Each scene is defined by:\n\n* **imagePrompt**: This is a text prompt for an AI image generator to create a realistic image for the scene.\n* **ContentText**: This is the narration that will accompany the image.\n\nThis script focuses on a compelling historical scenario with elements of mystery and suspense, making it engaging for a short video. The realistic AI image prompts will ensure visually appealing scenes that complement the narration. \n\nYou can use this script as a starting point and expand it by adding more scenes, characters, and details to tell a complete story. \n',
				},
			],
		},
	],
});
