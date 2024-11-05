import Image from "next/image";
import React, { useState } from "react";

export default function SelectStyle({ onUserSelect }) {
	const styleOptions = [
		{
			name: "Realistic",
			image: "/style-realistic.png",
		},
		{
			name: "Cartoon",
			image: "/style-cartoon.png",
		},
		{
			name: "Comic",
			image: "/style-comic.png",
		},
		{
			name: "WaterColor",
			image: "/style-water.png",
		},
		{
			name: "GTA",
			image: "/style-gta.png",
		},
	];

	const [selectedOption, setSelectedOption] = useState();
	return (
		<div className='mt-7'>
			<h2 className='font-bold text-2xl text-primary'>Select Style</h2>
			<p className='text-gray-500'>Select your video style</p>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
				{styleOptions.map((item, index) => (
					<div
						key={index}
						className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl
							${selectedOption == item.name && "scale-105 border-4 border-primary"}`}
						onClick={() => {
							setSelectedOption(item.name);
							onUserSelect("imageStyle", item.name);
						}}>
						<Image
							src={item.image}
							alt={item.name}
							width={100}
							height={100}
							className='h-72  object-cover rounded-lg w-full'
						/>
						<h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>
							{item.name}
						</h2>
					</div>
				))}
			</div>
		</div>
	);
}
