import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from './date_container.module.scss'

export default function DateContainer() {

    const [startDate, setStartDate] = useState<Date>(new Date());

    return (
        <div className={styles.date_container}>
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date!)}
                inline
            />
        </div>
    )
}