export interface ITreeNode {
    path: string;

    children: string[]
}

export interface ITree {
    [path: string]: ITreeNode
}

export interface IFolder extends ITreeNode {}

export interface IFile extends ITreeNode {}

export interface IDrive extends ITree {}

export enum DriveActionTypes {}
