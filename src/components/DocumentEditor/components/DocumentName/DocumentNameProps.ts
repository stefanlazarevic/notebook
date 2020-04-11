export interface IDocumentNameCallbackProps {
  /**
   * Повратни позив који се извршава након сваке промене унутар `DocumentName` input елемента.
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}

export default interface IDocumentNameProps extends IDocumentNameCallbackProps {
  /**
   * Назив документа који се обрађује унутар едитора.
   */
  name: string;
}
