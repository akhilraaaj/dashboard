import Navbar from './Navbar';
import Overview from './Overview';
import Transaction from './Transaction';

const Main = () => {
  return (
    <div className='grow flex flex-col h-screen overflow-y-auto overflow-x-hidden'>
      <Navbar />
      <div className='px-4 py-6'>
        <Overview />
        <Transaction />
      </div>
    </div>
  );
};

export default Main;
