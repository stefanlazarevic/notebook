import PropTypes, { InferProps, Validator } from "prop-types";

export const AccordionPanelPropTypes = {
	/**
	 *
	 */
	id: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	testid: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	className: PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	hidden: PropTypes.bool as Validator<boolean | undefined>,
	/**
	 *
	 */
	children: PropTypes.node as Validator<PropTypes.ReactNodeLike>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<React.AriaAttributes["aria-labelledby"]>,
};

export type AccordionPanelProps = InferProps<typeof AccordionPanelPropTypes>;
