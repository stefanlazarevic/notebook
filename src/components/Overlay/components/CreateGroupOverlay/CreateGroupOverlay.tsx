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

export default function CreateGroupOverlay(props: any) {
  const dispatch = useDispatch();

  const currentGroupID = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const nameReference = useRef<HTMLInputElement>(null);

  function create(event: React.FormEvent) {
    event.preventDefault();

    const group: NoteGroup = {
      id: utils.string.generateRandom(),
      title: "",
      children: [],
      parent: currentGroupID
    };

    if (nameReference.current) {
      group.title = nameReference.current.value;
    }

    batch(() => {
      dispatch(createNewGroup(currentGroupID, group));
      dispatch(closeOverlay(props.overlayID));
    });
  }

  return (
    <form className="CreateGroupOverlay" onSubmit={create}>
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
        />
      </OverlayBody>
      <OverlayFooter>
        <button type="submit">Create Group</button>
        <button onClick={props.onClose}>Cancel</button>
      </OverlayFooter>
    </form>
  );
}
