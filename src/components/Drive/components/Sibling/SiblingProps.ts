import { DriveView } from "../../Drive";

export default interface SiblingProps {
    view: DriveView;

    path: string;

    index: number;

    style: any;

    isScrolling: any;

    getRowWidth: any;

    getColumnWidth: any;
}
