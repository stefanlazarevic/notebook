import React, { useState, useEffect, useCallback } from "react";

import "./Tabs.css";

import TabsProps, { ITabData, TABS_DEFAULT_PROPS } from "./TabsProps";

import Tab from "./components/Tab";
import { NextButton, PreviousButton } from "../Button";

function Tabs(props: TabsProps) {
	/**
	 * Тренутна страница или група табова коју приказујемо на екрану.
	 * Странице почињу од 0 - n.
	 */
	const [viewportStartIndex, setViewportStartIndex] = useState(0);

	/**
	 * Сви табови који се приказују на тренутној страници.
	 */
	const [visibleTabs, setVisibleTabs] = useState(props.tabs!.slice(viewportStartIndex, props.max!));

	const { length } = props.tabs!;

	const moveViewport = useCallback(
		function moveViewportCallback(startIndex: number, showAmount: number) {
			let index = startIndex;

			if (index + showAmount > props.tabs!.length - 1) {
				index = props.tabs!.length - showAmount;
			}

			if (index < 0) {
				index = 0;
			}

			setViewportStartIndex(index);
			setVisibleTabs(props.tabs!.slice(index, index + showAmount));
		},
		[props.tabs]
	);

	useEffect(
		function moveViewportEffect() {
			moveViewport(viewportStartIndex, props.max!);
		},
		[viewportStartIndex, props.max, moveViewport]
	);

	/**
	 * Функција која проверава да ли смо на последњој "страници" односно, да ли
	 * на десној страни имамо још табова за приказати.
	 */
	function isLastPage(): boolean {
		return viewportStartIndex + props.max! >= length - 1;
	}

	/**
	 * Функција која проверава да ли смо на првој "страници" односно, да ли
	 * на левој страни имамо још табова за приказати.
	 */
	function isFirstPage(): boolean {
		return viewportStartIndex <= 0;
	}

	function previous() {
		if (isFirstPage()) {
			return;
		}

		moveViewport(viewportStartIndex - props.max!, props.max!);
	}

	function next() {
		if (isLastPage()) {
			return;
		}

		moveViewport(viewportStartIndex + props.max!, props.max!);
	}

	/**
	 * Функција која пресреће унос са тастатуре док је компонента у фокусу.
	 * Уз помоћ ове функције на карактере `Home` (code: 36) и `End` (code: 35) померамо
	 * фокус на први или последњи таб.
	 */
	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		if (keyCode === 35) {
			event.stopPropagation();
			const index = props.tabs!.length - props.max!;
			moveViewport(index, props.max!);
		}

		if (keyCode === 36) {
			event.stopPropagation();
			moveViewport(0, props.max!);
		}
	}

	return (
		<div className="Tabs" onKeyDown={onKeyDown}>
			{length > props.max! ? <PreviousButton size={20} disabled={isFirstPage()} onClick={previous} /> : null}
			<div className="TabContainer">
				{visibleTabs.map((tabData: ITabData, index: number) => {
					return (
						<Tab
							key={tabData.id}
							index={viewportStartIndex + index}
							selected={props.selectedIndex === viewportStartIndex + index}
							label={tabData.label}
							onClose={props.onClose}
							onClick={props.onSelect}
						/>
					);
				})}
			</div>
			{length > props.max! ? <NextButton size={20} disabled={isLastPage()} onClick={next} /> : null}
		</div>
	);
}

Tabs.defaultProps = TABS_DEFAULT_PROPS;

export default Tabs;
