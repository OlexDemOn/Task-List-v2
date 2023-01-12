import { forwardRef, useState } from 'react';
import styles from './calendar.module.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ImCalendar } from 'react-icons/im';

export default function Calendar(props: any) {

    console.log()

    const ExampleCustomInput = forwardRef(({ value, onClick, children }: any, ref: any) => (
        <button onClick={onClick} ref={ref}
            style={{
                height: "100%",
                width: "100%",
                background: "inherit",
                cursor: "pointer"
            }}
        >
            <ImCalendar color={"#FFFFFF"} />
        </button>
    ))


    return (
        <DatePicker
            selected={new Date(props.date)}
            onChange={(date: Date) => props.ChangeItemsDate(props.el, date!)}
            customInput={<ExampleCustomInput />}
        />
    )
}