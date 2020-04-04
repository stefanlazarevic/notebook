export interface ITreeNode {
  path: string;

  children: string[];
}

export interface ITree {
  [path: string]: ITreeNode;
}

export interface IFolder extends ITreeNode {}

export interface IFile extends ITreeNode {}

export interface IFileSystem extends ITree {}

export enum DriveActionTypes {
  OPEN_ROOT_DIRECTORY = "Drive/Actions/OPEN_ROOT_DIRECTORY",
  OPEN_TRASH_DIRECTORY = 'Drive/Actions/OPEN_TRASH_DIRECTORY'
}
