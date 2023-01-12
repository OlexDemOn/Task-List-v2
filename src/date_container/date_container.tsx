import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from './date_container.module.scss'

export default function DateContainer() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("DataItems")!) || []);
    const [startDate, setStartDate] = useState<Date>(new Date());


    window.addEventListener('storage', () => {
        console.log(JSON.parse(localStorage.getItem("DataItems")!));
        setData(JSON.parse(localStorage.getItem("DataItems")!) || []);
    })

    return (
        <div className={styles.date_container}>
            {data &&
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date!)}
                    dayClassName={(date) => data.map((dateF: any) => new Date(dateF.date).toDateString() === new Date(date).toDateString() ? styles.highlight : '')}
                    inline
                />}
        </div>
    )
}

//data.map((dateF: any) => new Date(dateF.date).toDateString() == new Date(date).toDateString()) ? styles.highlight : ''