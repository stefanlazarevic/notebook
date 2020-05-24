interface IKey {
	[keyCode: number]: string;
}

const Key: IKey = {
	9: "tab",
	13: "enter",
	27: "esc",
	32: "space",
	46: "delete",
	66: "b",
	67: "c",
	73: "i",
	80: "p",
	83: "s",
	85: "u",
	87: "y",
	97: "z",
	107: "NumPad +",
	109: "NumPad -",
	113: "f2",
	187: "=",
	189: "-",
};

export default Key;
