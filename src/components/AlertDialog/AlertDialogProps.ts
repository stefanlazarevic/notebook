import PropTypes, { InferProps, Validator } from "prop-types";

export const AlertDialogPropTypes = {
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
	children: PropTypes.node as Validator<React.ReactNode | React.ReactNodeArray | undefined>,
	/**
	 *
	 */
	"aria-labelledby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-label": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-describedby": PropTypes.string as Validator<string | undefined>,
	/**
	 *
	 */
	"aria-modal": PropTypes.oneOf([true, false, "true", "false"]) as Validator<boolean | "false" | "true" | undefined>,
};

export type AlertDialogProps = InferProps<typeof AlertDialogPropTypes>;
