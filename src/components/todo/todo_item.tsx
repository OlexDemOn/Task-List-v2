import { useState } from 'react'
import styles from './todo.module.scss'
import { motion, Reorder } from 'framer-motion';
import { AiOutlineCheck } from 'react-icons/ai'
import { ImBin2 } from 'react-icons/im'
import { ITodoProps } from './todo.props';
import Calendar from '../calendar/calendar';


export default function TodoItem(props: any) {

    const data = props.data;
    const state = props.state;
    const setData = props.setData;

    function deleteItem(el: ITodoProps) {
        const newItems = [...data];

        const index = newItems.indexOf(el);
        if (index > -1) {
            newItems.splice(index, 1);
        }
        setData(newItems);
    }

    function changeItemsState(el: ITodoProps, state: number) {
        const newItems = [...data];
        const index = newItems.indexOf(el);
        newItems[index].progression = state;
        setData(newItems);
    }

    const changeItemsDate = (el: ITodoProps, date: Date) => {
        const newItems = [...data];
        const index = newItems.indexOf(el);
        newItems[index].date = date;
        setData(newItems);
    }

    return (
        <Reorder.Group axis="y" onReorder={setData} values={data}>
            {(state !== 0 ? (data.filter((el: any) => el.progression === state)) : data).map((item: any) => (
                <Reorder.Item key={item.name} value={item} id={item}
                    className={styles.todo_item}
                    transition={{ type: "spring" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <span>{item.name}</span>
                    <div className={styles.complited} onClick={() => changeItemsState(item, item.progression === 2 ? 1 : 2)}>
                        <AiOutlineCheck color={item.progression === 2 ? "#E94560" : "#9CFF2E"} />
                    </div>
                    <div className={styles.calendar}>
                        <Calendar date={item.date} el={item} changeItemsDate={changeItemsDate!} />
                    </div>
                    <motion.div className={styles.todo_item_closetab}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => { deleteItem(item) }}
                    >
                        <ImBin2 color='#FFFFFF' />
                    </motion.div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    )
}