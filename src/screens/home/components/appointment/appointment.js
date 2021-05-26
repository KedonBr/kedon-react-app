import React, { useEffect, useState } from "react";
import Button from '../../../../components/button/button';
import { TimeIcon, Star, UnlitStar } from "../../../../shared/images";
import "./appointment.scss";
const Appointment = ({ image, name, stars, value, sector, time, online, scheduled, fulfilled, rated, available }) => {
  return (
    <div className="appointment mb-3">
      <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-stretch">
        <img className="appointment__profile" src={image} />
        <div className="appointment__content mt-3 mt-sm-0">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-sm-row justify-content-between algin-items-center">
              <h5 className="fs-18 fs-sm-20 fw-400 color-default d-flex align-items-center">
                <p className="doctor-name">{name}</p>
                {online ?
                  <p className="online">
                    <span></span> Online
                  </p>
                  :
                  <p className="offline">
                    <span></span> Offline
                  </p>
                }
              </h5>
              <div>
                <Star width={16} className="star" />
                <Star width={16} className="star" />
                <Star width={16} className="star" />
                <Star width={16} className="star" />
                <UnlitStar width={16} className="star" />
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
              <p className="fs-14 fw-600 color-default">{sector}</p>
              <p className="fs-14 fw-400 color-default order-first order-sm-0 mx-1 mx-sm-0">{stars}</p>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-3 mt-sm-0">
            {!scheduled && !fulfilled ?
              <React.Fragment>
                {available ?
                  <React.Fragment>
                    <div className="d-flex flex-column align-self-start align-self-sm-center">
                      <p className="fs-14 fw-400 color-default">
                        Valor da consulta: <strong>{value}</strong>
                      </p>
                      <p className="fs-14 fw-400 color-default">
                        Canais de atendimento: Jitsi
                      </p>
                    </div>
                    <div className="d-flex align-items-center align-self-sm-end mt-3 mt-sm-0">
                      <Button label="Marcar Consulta" color="blue" size="small" />
                    </div>
                  </React.Fragment>

                  : null}
              </React.Fragment>
              :
              <div className="d-flex align-items-center">
                <TimeIcon height={20} />
                <p className="fs-14 fs-sm-16 fw-400 color-default nowrap">{time}</p>
              </div>
            }

            {scheduled && !fulfilled ?
              <div className="d-flex flex-wrap justify-content-center justify-content-sm-end mt-3 mt-sm-0">
                {online ? <Button label="Entrar na Sala" color="green" size="small" /> : null}
                <Button label="Remarcar" color="gray" size="small" />
                <Button label="Cancelar" color="red" size="small" />
              </div>
              :
              null
            }
            {fulfilled && !scheduled ?
              <div className="d-flex mt-3 mt-sm-0">
                {rated ?
                  <Button label="Avaliado" color="gray" size="small" />
                  :
                  <Button label="Avaliar" color="yellow" size="small" />
                }
              </div>
              :
              null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
