import {FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import PageSkeleton from "../layout/PageSkeleton";

const ClientOnly: FunctionComponent<PropsWithChildren<any>> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || !process.browser) {
    return <PageSkeleton />;
  }

  return <div {...delegated}>{children}</div>;
}

export default ClientOnly;