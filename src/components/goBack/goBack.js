import React from 'react';
import { GobackArrow } from '../../shared/images';
import { useHistory } from 'react-router-dom'
import './goBack.scss';

const GoBack = ({ label }) => {
    const history = useHistory();
    const Goback = () => {
        history.goBack();
    }
    return (
        <button className="goback d-flex align-items-center" onClick={() => Goback()}>
            <GobackArrow height={25} width={25} />
            <p className="fs-20 fw-400 color-default mx-2">{label}</p>
        </button>
    )
}
export default GoBack