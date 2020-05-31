import React from "react";

import "./AvatarCard.css";

import Avatar from "../../components/Avatar";
import IconButton from "../../components/IconButton";
import { Icons } from "../../components/Icon";
import Listbox from "../../components/Listbox";
import ListboxOption from "../../components/ListboxOption";

export default function AvatarCard() {
	return (
		<div className="AvatarCard">
			<Avatar
				src="https://avatars3.githubusercontent.com/u/21370204?s=460&u=02dda74e646ea063d32bc65bedf4d5ccf353f434"
				alt="Profile image of Stefan Lazarevic."
				name="Stefan Lazarevic"
			/>
			<div className="CardContent">
				<strong>Stefan Lazarevic</strong>
				<small>Web developer</small>
			</div>
			<div className="MoreDropdown">
				<IconButton icon={Icons.more} size={16} />
				<div className="Dropdown">
					<Listbox autofocus={false}>
						<ListboxOption index={0}>View profile</ListboxOption>
						<ListboxOption index={1}>Send message</ListboxOption>
						<ListboxOption index={2}>Report</ListboxOption>
					</Listbox>
				</div>
			</div>
		</div>
	);
}
