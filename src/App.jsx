import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
