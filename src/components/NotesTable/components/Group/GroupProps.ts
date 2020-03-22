import { NoteGroupID } from "../../../../redux/notes/groups/types";

export interface GroupCallbackProps {
  getRowWidth: () => string;

  getColumnWidth: (columnIndex: number) => string;

  onClick?: (event: React.MouseEvent, id: NoteGroupID) => void;
}

export interface GroupProps extends GroupCallbackProps {
  id: NoteGroupID;
  title: string;
  type: string;
  style: any;
  index: number;

  updatedAt?: number;
  className?: string;
  selected?: boolean;
  hasSelected?: boolean;
}
