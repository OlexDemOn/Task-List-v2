import styles from './header.module.scss'
import { motion } from 'framer-motion';


export default function Header() {

    const pathVariants: any = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 1.5,
                delay: 0.3
            }
        }
    }

    return (
        <div className={styles.header}>
            <svg width="40" strokeWidth="1.5" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path color='#FFFFFF' variants={pathVariants} initial="hidden" animate="visible" d="M9 6L20 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path color='#FFFFFF' variants={pathVariants} initial="hidden" animate="visible" d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path color='#FFFFFF' variants={pathVariants} initial="hidden" animate="visible" d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path color='#FFFFFF' variants={pathVariants} initial="hidden" animate="visible" d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path color='#FFFFFF' variants={pathVariants} initial="hidden" animate="visible" d="M9 12L20 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path color='#FFFFFF' variants={pathVariants} initial="hidden" animate="visible" d="M9 18L20 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            <h1>
                <span>To do list</span>
            </h1>
        </div>
    )
}