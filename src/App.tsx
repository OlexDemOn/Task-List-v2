import Header from './components/header/header';
import Todo from './components/todo/todo';
import DateContainer from './date_container/date_container';

function App() {
    return (
        <div className='main-container'>
            <Header />
            <section className='container central-block'>
                <Todo />
                <DateContainer />
            </section>
        </div>
    );
}

export default App;
