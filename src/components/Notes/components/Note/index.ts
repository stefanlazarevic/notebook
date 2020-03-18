import Note from "./Note";

// function mapDispatchToProps(dispatch: IDispatch) {
//   return {
//     moveToGroup: (targetGroupID: NoteGroupID, id: NoteGroupID | NoteRecordID) =>
//       dispatch(moveToGroup(targetGroupID, id)),
//     openGroup: (targetGroupID: NoteGroupID) =>
//       dispatch(openGroup(targetGroupID)),
//     swapGroupChildren: (sourceIndex: number, targetIndex: number) =>
//       dispatch(swapCurrentGroupChildren(sourceIndex, targetIndex)),
//     openEditor: (recordID: NoteRecordID) => dispatch(openEditor(recordID)),
//     removeRecord: (recordID: NoteRecordID) =>
//       dispatch(
//         showOverlay(OverlayType.DELETE_RECORD, {
//           recordID
//         })
//       ),
//     removeGroup: (groupID: NoteGroupID) => dispatch(removeGroup(groupID)),
//     ungroup: (id: NoteGroupID | NoteRecordID) => dispatch(ungroup(id)),
//     renameRecord: (recordID: NoteRecordID) =>
//       dispatch(showOverlay(OverlayType.RENAME_RECORD, { recordID })),
//     renameGroup: (groupID: NoteGroupID) =>
//       dispatch(showOverlay(OverlayType.RENAME_GROUP, { groupID })),
//     print: (id: NoteRecordID) => dispatch(queuePrintRecords([id]))
//   };
// }

export default Note;
