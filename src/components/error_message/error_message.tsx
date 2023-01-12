import styles from './error_message.module.scss'
import { motion } from 'framer-motion'

export default function ErrorMeassage(props: { message: string, setError: Function }) {
    return (
        <motion.div className={styles.main_container}
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: { type: 'spring' } }}
            exit={{ y: "-100%" }}
            onClick={() => props.setError('')}
        >
            <p>{props.message || 'Something go wrong'}</p>
        </motion.div>
    )
}