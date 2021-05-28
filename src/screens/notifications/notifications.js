import React from 'react';
import { CreditCard, Medkit, Doctor, CheckList } from '../../shared/images';
import { Notification } from './components'
import './notifications.scss';

const Notifications = () => {
    return (
        <div className="section">
            <h1 className="fs-20 fw-400 color-default mx-2">Hoje</h1>
            <Notification
                icon={<CheckList />}
                color="light"
                title="Sua consulta foi agendada!"
                notification="Dr. Piter Quiela"
                date="11/02 - 08:00"
                time="09:00"
            />
            <Notification
                icon={<Medkit />}
                color="green"
                title="Sua consulta foi confirmada!"
                // notification="Dr. Piter Quiela"
                // date="11/02 - 08:00"
                time="09:00"
            />
            <Notification
                icon={<CreditCard />}
                color="red"
                title="Seu pagamento ainda não foi realizado!"
                // notification="Dr. Piter Quiela"
                // date="11/02 - 08:00"
                time="09:00"
            />
            <Notification
                icon={<Doctor />}
                color="blue"
                title="Sua saúde"
                notification="Mantenha hábitos saudáveis..."
                // date="11/02 - 08:00"
                time="09:00"
            />

        </div>
    )
}

export default Notifications