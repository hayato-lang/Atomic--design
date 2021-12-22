
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';

function App() {
  return (
    <div className="App">
      <PrimaryButton>成功</PrimaryButton>
      <SecondaryButton>ハゲタコ</SecondaryButton>
      <SearchInput/>
    </div>
  );
}

export default App;
