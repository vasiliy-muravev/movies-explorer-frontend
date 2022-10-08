import '../../index.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Technology from '../Technology/Technology';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <About />
            <Technology />
            <Student />
            <Footer />
        </div>
    );
}

export default App;
