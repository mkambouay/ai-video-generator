import Image from "next/image";
import React from "react";

export default function SelectStyle() {
	const styleOptions = [
		{
			name: "Realistic",
			image: "/real.png",
		},
		{
			name: "Cartoon",
			image: "/real.png",
		},
		{
			name: "Comic",
			image: "/real.png",
		},
		{
			name: "WaterColor",
			image: "/real.png",
		},
		{
			name: "GTA",
			image: "/real.png",
		},
	];
	return (
		<div>
			<h2 className='font-bold text-2xl text-primary'>Select Style</h2>
			<p className='text-gray-500'>Select your video style</p>
			<div>
				{styleOptions.map((styles, index) => (
					<div>
						<Image src={styles.image} width={100} height={100} />
					</div>
				))}
			</div>
		</div>
	);
}
