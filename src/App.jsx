import './App.css';
import Students from './containers/Students/';
import NewStudentForm from './components/NewStudentForm';


function App() {
  return (
    <div className="App">
      <NewStudentForm />
      <Students />
    </div>
  );
}



export default App;
