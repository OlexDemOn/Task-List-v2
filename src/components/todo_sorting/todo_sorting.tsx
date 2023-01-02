import styles from './todo_sorting.module.scss'
import { motion } from 'framer-motion';

export default function TodoSorting(props: any) {

    const data = props.data;
    const setData = props.setData;
    const state = props.state;
    const setState = props.setState;

    return (
        <div className={styles.sorting_menu}>
            <motion.div className={styles.clear_all}
                initial={{ x: "120%" }}
                animate={data.length > 0 ? { x: -15 } : { x: "120%" }}
                onClick={() => setData([])}
                whileHover={{ scale: 1.1 }}
            >
                <span>clear all</span>
            </motion.div>

            <motion.div
                onClick={() => setState(0)} className={state === 0 ? styles.active : ''}
                whileHover={{ scale: 1.1 }}
            >
                <span>All</span>
            </motion.div>
            <motion.div
                onClick={() => setState(1)} className={state === 1 ? styles.active : ''}
                whileHover={{ scale: 1.1 }}
            >
                <span>Active</span>
            </motion.div>
            <motion.div
                onClick={() => setState(2)} className={state === 2 ? styles.active : ''}
                whileHover={{ scale: 1.1 }}
            >
                <span>Complited</span>
            </motion.div>
        </div>
    )
}