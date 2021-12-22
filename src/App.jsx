
import './App.css';
import { PrimaryButton } from './components/atoms/PrimaryButton';
import { SecondaryButton } from './components/atoms/SecondaryButton';

function App() {
  return (
    <div className="App">
      <PrimaryButton>成功</PrimaryButton>
      <SecondaryButton>ハゲタコ</SecondaryButton>
    </div>
  );
}

export default App;
