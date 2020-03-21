import utils from "../../../utils";

export type NoteGroupID = string;

export interface NoteGroup {
  id: NoteGroupID;
  parent?: string;
  title: string;
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
  const groups: NotesGroups = {
    root: {
      id: "root",
      parent: undefined,
      title: "/",
      children: ["fakultet", "ostalo"]
    },
    fakultet: {
      id: "fakultet",
      parent: "root",
      title: "Fakultet",
      children: []
    },
    ostalo: {
      id: "ostalo",
      parent: "root",
      title: "Ostalo",
      children: []
    }
  };

  for (let i = 0; i < 1000; i++) {
    const id = utils.string.generateRandom(6);

    groups[id] = {
      id,
      parent: "root",
      title: id,
      children: []
    };

    groups.root.children.push(id);
  }

  return groups;
})();
