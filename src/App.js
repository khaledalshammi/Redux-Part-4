import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'
import Form from './components/Form/Form';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className='main'>
        <Sidebar></Sidebar>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
