import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const [, setCurrentSection] = useState('');

  const onSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
    // 여기에 필요한 추가 로직을 구현할 수 있습니다.
    console.log('Current section:', sectionId);
  };
  
  return (
    <div>
      <Header />
      <Profile onSectionChange={onSectionChange} />
    </div>
  );
}

export default App;