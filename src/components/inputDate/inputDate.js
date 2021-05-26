import React, {useState} from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import pt_BR from "date-fns/locale/pt-BR/";
import "react-datepicker/dist/react-datepicker.css";
import './inputDate.scss';
registerLocale("pt-BR", pt_BR);
const InputDate = () => {
    const [date, setDate] = useState();
    return(
        <React.Fragment>
            <DatePicker placeholder="Data" locale="pt-BR" selected={date} onChange={date => setDate(date)}/>
        </React.Fragment>
    )
}

export default InputDate;