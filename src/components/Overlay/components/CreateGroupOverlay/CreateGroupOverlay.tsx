import React, { useRef } from "react";
import { connect } from "react-redux";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";
import { IDispatch, AppState } from "../../../../redux/types";
import { NoteGroupID, NoteGroup } from "../../../../redux/notes/groups/types";
import { createNewGroup } from "../../../../redux/notes/actions";
import utils from "../../../../utils";

function CreateGroupOverlay(props: any) {
  const nameReference = useRef<HTMLInputElement>(null);

  function create() {
    const group: NoteGroup = {
      id: utils.string.generateRandom(),
      title: "",
      children: [],
      parent: props.currentGroupID
    };

    if (nameReference.current) {
      group.title = nameReference.current.value;
    }

    if (typeof props.createNewGroup === "function") {
      props.createNewGroup(group.parent, group);
    }

    props.onClose();
  }

  return (
    <div className="CreateGroupOverlay">
      <OverlayHeader
        id={props.id}
        title="Create Group"
        onClose={props.onClose}
      />
      <OverlayBody>
        <p>Please enter group name.</p>
        <input
          ref={nameReference}
          type="text"
          placeholder="Group name"
          autoFocus={true}
        />
      </OverlayBody>
      <OverlayFooter>
        <button onClick={create}>Create Group</button>
        <button onClick={props.onClose}>Cancel</button>
      </OverlayFooter>
    </div>
  );
}

function mapStateToProps(state: AppState) {
  const { notes } = state;
  const { currentGroupID } = notes;

  return {
    currentGroupID
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    createNewGroup: (targetGroupID: NoteGroupID, group: NoteGroup) => {
      dispatch(createNewGroup(targetGroupID, group));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupOverlay);
