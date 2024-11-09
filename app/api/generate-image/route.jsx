import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
	auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req) {
	const { imagePrompt } = await req.json();

	try {
		const input = {
			prompt: imagePrompt,
			go_fast: true,
			megapixels: "1",
			num_outputs: 1,
			aspect_ratio: "9:16",
			output_format: "webp",
			output_quality: 80,
			num_inference_steps: 4,
		};

		const output = await replicate.run("black-forest-labs/flux-schnell", {
			input,
		});
		console.log(output);
		return NextResponse.json({ result: output[0] });
	} catch (error) {
		return NextResponse.json({ "error:": error });
	}
}
