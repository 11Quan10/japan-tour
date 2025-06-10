import './App.css';
import Day from './components/Day';

const App = (props) => {
	return (
        <div className='App'>
            <h1>10-Day Tour of Japan</h1>
            <Day day={1}></Day>
            <Day day={2}></Day>
            <Day day={3}></Day>
        </div>
    );
};

export default App;