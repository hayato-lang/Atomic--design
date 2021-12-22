
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/template/DefaultLayout';
import { HeaderOnly } from './components/template/HeaderOnly';

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
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>成功</PrimaryButton>
        <SecondaryButton>ハゲタコ</SecondaryButton>
        <SearchInput/>
        <UserCard user={user}/>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
