import utils from "../../../utils";

export type NoteGroupID = string;

export interface NoteGroup {
  id: NoteGroupID;
  parent?: string;
  title: string;
  updatedAt?: number;
  type: string;
  children: string[];
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
      parent: undefined,
      title: "/",
      updatedAt: now,
      type: "Group",
      children: ["fakultet", "ostalo"]
    },
    fakultet: {
      id: "fakultet",
      parent: "root",
      title: "Fakultet",
      updatedAt: now,
      type: "Group",
      children: []
    },
    ostalo: {
      id: "ostalo",
      parent: "root",
      title: "Ostalo",
      updatedAt: now,
      type: "Group",
      children: []
    }
  };

  for (let i = 0; i < 1300; i++) {
    const id = utils.string.generateRandom(6);

    groups[id] = {
      id,
      parent: "root",
      title: id,
      updatedAt: now,
      type: "Group",
      children: []
    };

    groups.root.children.push(id);
  }

  return groups;
})();
