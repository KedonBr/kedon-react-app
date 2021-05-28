import React from 'react';
import './notification.scss';

const Notification = ({ color, icon, title, notification, time, date }) => {
    return (
        <div className="notification d-flex ">
            <div className={`notification__icon notification__icon--${color}`} >
                {icon}
            </div>
            <div className="notification__content d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                <div className="d-flex flex-column">
                    <p className="fs-16 fs-sm-20 fw-400 color-default">{title}</p>
                    <p className="fs-14 fs-sm-16 fw-400 color-default">{notification}</p>
                    <p className="fs-14 fw-500 color-default">{date}</p>
                </div>
                <p className="fs-16 fw-400 color-default mx-sm-3">{time}</p>
            </div>
        </div>
    )
}

export default Notification;