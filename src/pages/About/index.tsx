import React from "react";
import useRouter from "../../hooks/useRouter";

interface Props {}

const About: React.FC<Props> = () => {
  const { push } = useRouter();
  return (
    <div>
      <div>어바웃인데요?</div>
      <button type="button" onClick={() => push("/")}>
        홈으로 이동
      </button>
    </div>
  );
};
export default About;
