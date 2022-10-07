import '../../index.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Technology from '../Technology/Technology';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <About />
            <Technology />
        </div>
    );
}

export default App;
