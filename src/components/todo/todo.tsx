import { useState, useEffect } from 'react';
import styles from './todo.module.scss';
import { ITodoProps } from './todo.props';
import { AnimatePresence, motion } from 'framer-motion';
import { ImArrowDown2 } from 'react-icons/im'
import TodoItem from './todo_item';
import TodoSorting from '../todo_sorting/todo_sorting';
import ErrorMeassage from '../error_message/error_message';

export default function Todo() {

    const [data, setData] = useState<ITodoProps[]>(JSON.parse(localStorage.getItem("DataItems")!) || []);
    const [inputValue, setInputValue] = useState<string>('');
    const [state, setState] = useState(0);
    const [error, setError] = useState('');

    function PrintError(message: string) {
        setError(message);
        setTimeout(() => {
            setError('');
        }, 6000);
    }

    const addItem = () => {
        if (inputValue) {
            if (data.filter((item: ITodoProps) => item.name === inputValue).length !== 0) {
                PrintError('This task has already been added');
            }
            else {
                setData((current: any) => [...current, { name: inputValue, progression: 2, date: new Date().toDateString() }]);
                setInputValue('');
                window.dispatchEvent(new Event("storage"));
            }
        }
    }

    useEffect(() => {
        localStorage.setItem(`DataItems`, JSON.stringify(data));
        window.dispatchEvent(new Event("storage"));
    }, [data])

    return (
        <div className={styles.main_container}>
            <div className={styles.input_field}>
                <AnimatePresence>
                    {error && <ErrorMeassage message={error} setError={setError} />}
                </AnimatePresence>
                <div className={styles.arrow}><ImArrowDown2 /></div>
                <input type="text" value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={(event) => event.key === "Enter" && addItem()}
                />
                <motion.button className={styles.add_element} onClick={addItem}
                    initial={{ x: 100, opacity: 0 }}
                    animate={inputValue && { x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    +
                </motion.button>
            </div>

            <div className={styles.items_blocks}>
                {data?.length > 0 && <TodoItem data={data} state={state} setData={setData} />}
            </div>

            <TodoSorting data={data} setData={setData} state={state} setState={setState} />


        </div >
    )
}