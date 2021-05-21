import React from 'react';
import { Schedules } from './components'
import './consultations.scss'

const Consultations = () => {
    return (
        <div className="section">
            <Schedules
                image={"https://posfg.com.br/wp-content/uploads/2020/10/POSFG-Dia-do-m%C3%A9dico-site.png"}
                name={"Dr. Lorem Ipsum"}
                stars={"4.0"}
                sector={"Oftamologista"}
                time={"10.00 - 20.00"}
                value={'30.00'}
            />
        </div>
    )
}

export default Consultations