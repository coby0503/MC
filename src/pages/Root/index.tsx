import React from "react";
import useRouter from "../../hooks/useRouter";

interface Props {}

const Root: React.FC<Props> = () => {
  const { push } = useRouter();
  return (
    <div>
      <div>root</div>
      <button type="button" onClick={() => push("/about")}>
        어바웃으로 이동
      </button>
    </div>
  );
};
export default Root;
