import React, { useContext } from "react";

import { ZoomContext } from "../providers/ZoomContext";
import ZoomStatus from "../../components/ZoomStatus";

export default function ZoomStatusConsumer() {
  const [zoom] = useContext(ZoomContext);

  return <ZoomStatus zoom={zoom} />;
}
