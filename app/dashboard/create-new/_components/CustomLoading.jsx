import React from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Image from "next/image";

export default function CustomLoading({ loading }) {
	return (
		<AlertDialog open={loading}>
			<AlertDialogContent>
				<VisuallyHidden.Root>
					<AlertDialogHeader>
						<AlertDialogTitle></AlertDialogTitle>
						<AlertDialogDescription></AlertDialogDescription>
					</AlertDialogHeader>
				</VisuallyHidden.Root>
				<div className='flex flex-col items-center my-10 justify-center'>
					<Image src={"/loading.gif"} width={100} height={100} alt='loading' />
					<h2>Generation in progress... Do not refresh</h2>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	);
}
