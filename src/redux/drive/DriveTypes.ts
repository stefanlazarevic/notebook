export interface ITreeNode {
  path: string;

  children: string[];

  type: FileSystemTypes;

  createdAt: number;

  updatedAt?: number;
}

export interface ITree {
  [path: string]: ITreeNode;
}

export interface IDirectory extends ITreeNode {
  /**
   * Obeleživac omiljenog direktorijuma.
   */
  favorite?: boolean;
}

export interface IFile extends ITreeNode {}

export interface IFileSystem extends ITree {}

export enum FileSystemTypes {
  DIRECTORY,
  FILE
}

export interface IDrive {
  cwd: string;
  fs: IFileSystem
}

export enum DriveActionTypes {
  OPEN_ROOT_DIRECTORY = "Drive/Actions/OPEN_ROOT_DIRECTORY",
  OPEN_TRASH_DIRECTORY = 'Drive/Actions/OPEN_TRASH_DIRECTORY',
  OPEN_DIRECTORY = 'Drive/Actions/OPEN_DIRECTORY'
}
