
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: "勇人",
  image: "https://source.unsplash.com/AOd8G5b2lzk",
  email: "hayto@get.com",
  phone: "090-1234-5678",
  company: {
    name: "ハゲタコ株式会社"
  },
  website: "https://google.com"
};

function App() {
  return (
    <div className="App">
      <PrimaryButton>成功</PrimaryButton>
      <SecondaryButton>ハゲタコ</SecondaryButton>
      <SearchInput/>
      <UserCard user={user}/>
    </div>
  );
}

export default App;
