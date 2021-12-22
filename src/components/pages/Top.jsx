import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();

  const onClickGeneral = () => 
  history.push({ pathname: "/users", state: { isAdmin: false } });
  const onClickAdmin = () => 
  history.push({ pathname: "/users", state: { isAdmin: true } });
  return (
    <SContainer>
      <h2>Topページです</h2>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
text-align: center;
`;