import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `勇人${val}`,
    image: "https://source.unsplash.com/AOd8G5b2lzk",
    email: "hayatospeech@gmail.com",
    phone: "080-1234-5678",
    company: {
      name: "ハゲタコ株式会社"
    },
    website: "https://google.com"
  }
}))

export const Users = () => {

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput/>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
text-align: center;
flex-direction: column;
align-items: center;
padding: 24px;
`;

const SUserArea = styled.div`
padding-top: 40px;
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 20px;  
`