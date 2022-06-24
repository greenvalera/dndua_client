import {useEffect, useState} from "react";
import PageSkeleton from "../layout/PageSkeleton";

const ClientOnly = ({ children, ...delegated }): JSX.Element => {
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