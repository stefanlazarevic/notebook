import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, text } from "@storybook/addon-knobs";

import Button, { BackButton, DownloadButton, EyeButton, CloseButton, NextButton, PreviousButton } from "..";

const DEFAULT_ICON_SIZE = 20;

storiesOf("Components/Button", module)
	.addDecorator(withKnobs)
	.add("Preview", () => {
		return <Button>{text("children", "Button Text")}</Button>;
	})
	.add("BackButton", () => {
		return <BackButton size={number("size", DEFAULT_ICON_SIZE)} />;
	})
	.add("CloseButton", () => {
		return <CloseButton size={number("size", DEFAULT_ICON_SIZE)} />;
	})
	.add("DownloadButton", () => {
		return <DownloadButton size={number("size", DEFAULT_ICON_SIZE)} />;
	})
	.add("EyeButton", () => {
		return <EyeButton size={number("size", DEFAULT_ICON_SIZE)} />;
	})
	.add("NextButton", () => {
		return <NextButton size={number("size", DEFAULT_ICON_SIZE)} />;
	})
	.add("PreviousButton", () => {
		return <PreviousButton size={number("size", DEFAULT_ICON_SIZE)} />;
	});
