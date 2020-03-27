import React, { useRef } from "react";
import { useDispatch, useSelector, batch } from "react-redux";

import "./CreateGroupOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";
import { NoteGroup } from "../../../../redux/notes/groups/types";
import utils from "../../../../utils";
import FormInput from "../../../UI/FormInput/FormInput";
import { createNewGroup } from "../../../../redux/notes/actions";
import { closeOverlay } from "../../../../redux/overlays/actions";
import { AppState } from "../../../../redux/types";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";

export default function CreateGroupOverlay(props: any) {
  const dispatch = useDispatch();

  const currentGroupID = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const currentGroup = useSelector(
    (state: AppState) => state.notes.groups[currentGroupID]
  );

  const nameReference = useRef<HTMLInputElement>(null);

  function create() {
    const group: NoteGroup = {
      id: utils.string.generateRandom(),
      title: "",
      children: [],
      updatedAt: Date.now(),
      type: "Folder",
      path: currentGroup.path.concat(currentGroup.id)
    };

    if (nameReference.current) {
      group.title = nameReference.current.value;
    }

    batch(() => {
      dispatch(createNewGroup(currentGroupID, group));
      dispatch(closeOverlay(props.overlayID));
    });
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter") {
      event.preventDefault();

      create();
    }
  }

  return (
    <div className="CreateGroupOverlay" onKeyDown={handleKeyDown}>
      <OverlayHeader
        id={props.overlayID}
        title="Create Group"
        onClose={props.onClose}
      />
      <OverlayBody>
        <FormInput
          ref={nameReference}
          type="text"
          placeholder="Group name"
          autoFocus={true}
          autoComplete={false}
        />
      </OverlayBody>
      <OverlayFooter>
        <button onClick={create}>Create Group</button>
        <button onClick={props.onClose}>Cancel</button>
      </OverlayFooter>
    </div>
  );
}
