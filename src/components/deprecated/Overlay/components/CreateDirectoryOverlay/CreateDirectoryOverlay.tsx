import React, { useRef } from "react";
import { useDispatch, useSelector, batch } from "react-redux";

import "./CreateDirectoryOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";
import FormInput from "../../../UI/FormInput/FormInput";
import { closeOverlay } from "../../../../redux/overlays/actions";
import { AppState } from "../../../../redux/types";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import { createDirectory } from "../../../../redux/drive/DriveActions";

export default function CreateDirectoryOverlay(props: any) {
  const dispatch = useDispatch();

  const cwd = useSelector(
    (state: AppState) => state.drive.cwd
  );

  const nameReference = useRef<HTMLInputElement>(null);

  function create() {
    let name = '';

    if (nameReference.current) {
      name = nameReference.current.value;
    }

    const path = `${cwd}/${name}`;

    batch(() => {
      dispatch(createDirectory(path));
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
    <div className="CreateDirectoryOverlay" onKeyDown={handleKeyDown}>
      <OverlayHeader
        id={props.overlayID}
        title="Create Directory"
        onClose={props.onClose}
      />
      <OverlayBody>
        <FormInput
          ref={nameReference}
          type="text"
          placeholder="Directory name"
          autoFocus={true}
          autoComplete="off"
        />
      </OverlayBody>
      <OverlayFooter>
        <button onClick={create}>Create Directory</button>
        <button onClick={props.onClose}>Cancel</button>
      </OverlayFooter>
    </div>
  );
}
