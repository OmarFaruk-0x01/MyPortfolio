import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(children, document.querySelector("#port"))
    : null;
};

export default Portal;
