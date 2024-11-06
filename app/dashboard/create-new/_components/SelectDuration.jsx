import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

export default function SelectDuration({ onUserSelect }) {
	const [selectedOption, setSelectedOption] = useState();
	const options = ["30~ seconds", "60~ seconds", "90~ seconds"];
	return (
		<div className='mt-7'>
			<h2 className='font-bold text-2xl text-primary'>Duration</h2>
			<p className='text-gray-500'> Select the duration of your video?</p>
			<Select
				onValueChange={(value) => {
					setSelectedOption(value);
					onUserSelect("duration", value);
				}}>
				<SelectTrigger className='w-full mt-2 p-6 text-lg'>
					<SelectValue placeholder='Select Duration' />
				</SelectTrigger>
				<SelectContent>
					{options.map((option, index) => (
						<SelectItem value={option} key={index}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
