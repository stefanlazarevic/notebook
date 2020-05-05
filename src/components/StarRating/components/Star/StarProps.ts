export interface StarOptionalProps {
    /**
     * 
     */
    checked?: boolean;
};

export interface StarCallbackProps {
    /**
     * 
     */
    onChange?: (event: React.ChangeEvent, rate: number) => void;
};

export default interface StarProps extends StarOptionalProps, StarCallbackProps {
    /**
     * 
     */
    rate: number;
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    name: string;
};