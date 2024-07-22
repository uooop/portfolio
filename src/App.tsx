import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Profile onSectionChange={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default App;
