"use client";
import { CircleFadingArrowUp, PanelsTopLeft, Plus, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideNav() {
	const MenuOption = [
		{
			id: 1,
			name: "Dashboard",
			path: "/dashboard",
			icon: PanelsTopLeft,
		},
		{
			id: 2,
			name: "Create new",
			path: "/dashboard/create-new",
			icon: Plus,
		},
		{
			id: 3,
			name: "Upgrade",
			path: "/upgrade",
			icon: CircleFadingArrowUp,
		},
		{
			id: 4,
			name: "Account",
			path: "/account",
			icon: User,
		},
	];

	const path = usePathname();
	return (
		<div className='w-64 h-screen shadow-md p-5'>
			<div className='grid gap-2'>
				{MenuOption.map((item, index) => (
					<Link href={item.path} key={index}>
						<div
							className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer
              ${path == item.path && "bg-primary text-white"} 
            `}
						>
							<item.icon />
							<h2>{item.name}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
