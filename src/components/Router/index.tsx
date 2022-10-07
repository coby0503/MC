import React, { ReactElement, useEffect } from "react";

interface Props {
  children: ReactElement[];
}

const Router: React.FC<Props> = ({ children }) => {
  const getPageView = (): ReactElement<any, any> | null => {
    const pathname = window.location.pathname;
    for (let i = 0; i < children.length; i++) {
      if (children[i].props.path === pathname) {
        return children[i].props.component;
      }
    }
    return null;
  };
  const onPopState = () => {
    console.log("good");
  };
  useEffect(() => {
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);
  return getPageView();
};
export default Router;
