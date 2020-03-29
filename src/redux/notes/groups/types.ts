import utils from "../../../utils";

export type NoteGroupID = string;

export interface NoteGroup {
  id: NoteGroupID;
  path: string[];
  title: string;
  type: string;
  children: string[];

  updatedAt?: number;
  favorite?: boolean;
}

export interface NotesGroups {
  [id: string]: NoteGroup;
}

export enum NotesGroupsActions {
  REPLACE = "Notes/Groups/Actions/REPLACE",
  REPLACE_ALL = "Notes/Groups/Actions/REPLACE_ALL"
}

export const DEFAULT_NOTES_GROUPS_STATE: NotesGroups = ((): NotesGroups => {
  const now = Date.now();

  const groups: NotesGroups = {
    root: {
      id: "root",
      path: [],
      title: "/",
      updatedAt: now,
      type: "Folder",
      children: ["fakultet"]
    },
    fakultet: {
      id: "fakultet",
      path: ["root"],
      title: "Fakultet",
      updatedAt: now,
      type: "Folder",
      children: ["ostalo"]
    },
    ostalo: {
      id: "ostalo",
      path: ["root", "fakultet"],
      title: "Ostalo",
      updatedAt: now,
      type: "Folder",
      children: ["instruction"]
    }
  };

  for (let i = 0; i < 0; i++) {
    const id = utils.string.generateRandom(6);

    groups[id] = {
      id,
      path: ["root"],
      title: id,
      updatedAt: now,
      type: "Folder",
      children: []
    };

    groups.root.children.push(id);
  }

  return groups;
})();
