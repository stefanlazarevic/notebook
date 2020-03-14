export default (store: any) => (next: any) => (action: any) => {
  if (action.meta?.requiresConfirmation) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      next(action);
    }

    return;
  }

  next(action);
};
