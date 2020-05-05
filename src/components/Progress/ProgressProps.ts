export interface ProgressOptionalProps {
    /**
     * Проценат који треба попунити од 0 до 100.
     * @default 0
     */
    value?: number;
    /**
     * Индикатор да ли број процената треба да буде видљив.
     * @default false
     */
    label?: boolean;
}

export interface ProgressCallbackProps {}

export default interface ProgressProps extends ProgressOptionalProps, ProgressCallbackProps {}