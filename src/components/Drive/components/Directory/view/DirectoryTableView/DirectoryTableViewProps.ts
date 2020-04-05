import DirectoryProps from "../../DirectoryProps";
import { IDirectory } from "../../../../../../redux/drive/DriveTypes";

export default interface DirectoryTableViewProps extends DirectoryProps, IDirectory {
    /**
     * Naziv direktorijuma.
     */
    basename: string;
}
