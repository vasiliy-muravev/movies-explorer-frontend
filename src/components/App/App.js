import '../../index.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Technology from '../Technology/Technology';
import Student from '../Student/Student';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <About />
            <Technology />
            <Student />
        </div>
    );
}

export default App;
