import { useState } from "react";

const useRouter = () => {
  const push = (pathname: string) => {
    history.pushState({ pathname }, "이건 어디지", pathname);
  };
  return { push };
};
export default useRouter;
