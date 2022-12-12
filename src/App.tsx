import Header from './components/header/header';
import Todo from './components/todo/todo';

function App() {
    return (
        <div className='main-container'>
            <Header />
            <section className='container central-block'>
                <Todo />
            </section>
        </div>
    );
}

export default App;
