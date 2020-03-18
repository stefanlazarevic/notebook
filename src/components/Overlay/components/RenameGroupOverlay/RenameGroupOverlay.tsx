import React, { useRef } from "react";

import "./RenameGroupOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";

import FormInput from "../../../UI/FormInput/FormInput";
import { useDispatch, useSelector, batch } from "react-redux";
import { AppState } from "../../../../redux/types";
import { updateGroup } from "../../../../redux/notes/actions";
import { closeOverlay } from "../../../../redux/overlays/actions";

export default function RenameGroupOverlay(props: any) {
  const dispatch = useDispatch();

  const group = useSelector((state: AppState) => state.notes.groups[props.id]);

  const titleReference = useRef<HTMLInputElement>(null);

  function save(event: React.FormEvent) {
    event.preventDefault();

    let title = group.title;

    if (titleReference.current) {
      title = titleReference.current.value;
    }

    const updatedGroup = { ...group, title };

    batch(() => {
      dispatch(updateGroup(updatedGroup));
      dispatch(closeOverlay(props.overlayID));
    });
  }

  return (
    <form className="RenameGroupOverlay" onSubmit={save}>
      <OverlayHeader
        id={props.overlayID}
        title="Rename Group"
        onClose={props.onClose}
      ></OverlayHeader>
      <OverlayBody>
        <FormInput
          ref={titleReference}
          type="text"
          name="title"
          defaultValue={group.title}
          autoFocus={true}
        />
      </OverlayBody>
      <OverlayFooter>
        <button type="submit">Save</button>
        <button onClick={props.onClose}>Cancel</button>
      </OverlayFooter>
    </form>
  );
}
