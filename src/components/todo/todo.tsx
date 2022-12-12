import { useState } from 'react';
import styles from './todo.module.scss';
import { ITodoProps } from './todo.props';
import { AnimatePresence, motion } from 'framer-motion';
import { ImBin2, ImArrowDown2 } from 'react-icons/im'
import { AiOutlineCheck } from 'react-icons/ai'

export default function Todo() {
    const [data, setData] = useState<ITodoProps[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [state, setState] = useState(0);

    function PrintError() {
        console.log("This item already added")
    }

    const addItem = () => {
        if (inputValue) {
            if (data.filter((item: ITodoProps) => item.name === inputValue).length !== 0) {
                PrintError();
            }
            else {
                setData((current: any) => [...current, { name: inputValue, progression: 2 }]);
                setInputValue('');
            }
        }
    }
    function deleteItem(el: ITodoProps) {
        const newItems = [...data];

        const index = newItems.indexOf(el);
        if (index > -1) {
            newItems.splice(index, 1);
        }
        setData(newItems);
    }
    function changeItems(el: ITodoProps, state: number) {
        const newItems = [...data];
        const index = newItems.indexOf(el);
        newItems[index].progression = state;
        setData(newItems);
        console.log(data);
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.input_field}>
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
                <AnimatePresence mode="popLayout">
                    {data && (state !== 0 ? data.filter((el) => el.progression === state) : data).map((el: any) => (
                        <motion.div
                            className={styles.todo_item}
                            layout
                            transition={{ type: "spring" }}
                            key={el.name}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className={styles.complited} onClick={() => changeItems(el, el.progression === 2 ? 1 : 2)}>
                                <AiOutlineCheck color={el.progression === 2 ? "#E94560" : "#9CFF2E"} />
                            </div>
                            <div><span>{el.name}</span></div>
                            <motion.div className={styles.todo_item_closetab}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => { deleteItem(el) }}
                            >
                                <ImBin2 color='#FFFFFF' />
                            </motion.div>
                        </motion.div>))}
                </AnimatePresence>
            </div>

            <div className={styles.sorting_menu}>
                <motion.div className={styles.clear_all}
                    initial={{ x: "120%" }}
                    animate={data.length > 0 ? { x: -15 } : { x: "120%" }}
                    onClick={() => setData([])}
                    whileHover={{ scale: 1.1 }}
                >
                    <span>clear all</span>
                </motion.div>

                <motion.div onClick={() => setState(0)} className={state === 0 ? styles.active : ''} whileHover={{ scale: 1.1 }}>
                    <span>All</span>
                </motion.div>
                <motion.div onClick={() => setState(1)} className={state === 1 ? styles.active : ''} whileHover={{ scale: 1.1 }}>
                    <span>Active</span>
                </motion.div>
                <motion.div onClick={() => setState(2)} className={state === 2 ? styles.active : ''} whileHover={{ scale: 1.1 }}>
                    <span>Complited</span>
                </motion.div>

            </div>
        </div >
    )
}