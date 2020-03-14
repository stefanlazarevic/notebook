export interface OverlayHeaderProps {
  id: string;
  title: string;

  tabIndex?: number;

  onClose?: (id: string) => void;
}
