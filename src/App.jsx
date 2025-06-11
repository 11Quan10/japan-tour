import './App.css';
import Day from './components/Day';
import days from './data/days';

const App = () => {
	return (
        <div className='App'>
            <h1>10-Day Tour of Japan</h1>
            <div className="days-grid">
                {days.map((info) => (
                    <Day 
                        key={info.day} 
                        day={info.day} 
                        title={info.title}
                        city={info.city}
                        description={info.description} 
                        image={info.image}
                        link={info.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;