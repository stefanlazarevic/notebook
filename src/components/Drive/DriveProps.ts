export default interface IDriveProps {
  /**
   * Тренутна путања коју `Drive` симулира.
   */
  currentPath: string;

  /**
   * Називи фајлова и фолдера које `Drive` симулира на тренутној путањи.
   */
  children?: string[];
}
