import React, { useRef } from "react";
import { connect, batch } from "react-redux";

import "./RenameGroupOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";

import { IDispatch, AppState } from "../../../../redux/types";
import { updateGroup } from "../../../../redux/notes/actions";
import { closeOverlay } from "../../../../redux/overlays/actions";
import { NoteGroup } from "../../../../redux/notes/groups/types";
import { OverlayID } from "../../../../redux/overlays/types";
import FormInput from "../../../UI/FormInput/FormInput";

function RenameGroupOverlay(props: any) {
  const titleReference = useRef<HTMLInputElement>(null);

  function save(event: React.FormEvent) {
    event.preventDefault();

    if (typeof props.onSave === "function") {
      let title = props.group.title;

      if (titleReference.current) {
        title = titleReference.current.value;
      }

      const group = { ...props.group, title };

      props.onSave(group, props.overlayID);
    }
  }

  return (
    <form className="RenameGroupOverlay" onSubmit={save}>
      <OverlayHeader
        id={props.id}
        title="Rename Group"
        onClose={props.onClose}
      ></OverlayHeader>
      <OverlayBody>
        <FormInput
          ref={titleReference}
          type="text"
          name="title"
          defaultValue={props.group.title}
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

function mapStateToProps(state: AppState, ownProps: any) {
  const { notes } = state;
  const { groups } = notes;
  const group = groups[ownProps.groupID];

  return {
    group
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onSave: (group: NoteGroup, id: OverlayID) => {
      batch(() => {
        dispatch(updateGroup(group));
        dispatch(closeOverlay(id));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenameGroupOverlay);
