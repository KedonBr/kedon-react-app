import React, { useEffect, useState } from "react";
import { TimeIcon, Star, UnlitStar } from "../../../../shared/images";
import "./appointment.scss";
const Appointment = ({ image, name, stars, sector, time, online, scheduled, fulfilled, rated, available }) => {
  return (
    <div className="appointment mb-3">
      <div className="d-flex align-items-stretch">
        <img className="appointment__profile" src={image} />
        <div className="appointment__content">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between algin-items-center">
              <h5 className="fs-20 fw-400 color-default d-flex align-items-center">
                {name}
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
            <div className="d-flex justify-content-between align-items-center">
              <p className="fs-14 fw-600 color-default">{sector}</p>
              <p className="fs-14 fw-400 color-default">{stars}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {!scheduled && !fulfilled ?
              <React.Fragment>
                {available ?
                  <React.Fragment>
                    <div className="d-flex flex-column">
                      <p className="fs-14 fw-400 color-default">
                        Valor da consulta
                      </p>
                      <p className="fs-14 fw-400 color-default">
                        Canais de atendimento: Jitsi
                      </p>
                    </div>
                    <div className="d-flex align-items-center align-self-end">
                      <button className="button__dark">Marcar Consulta</button>
                    </div>
                  </React.Fragment>

                  : null}
              </React.Fragment>
              :
              <div className="d-flex align-items-center">
                <TimeIcon height={20} />
                <p className="fs-16 fw-400 color-default">{time}</p>
              </div>
            }

            {scheduled && !fulfilled ?
              <div className="d-flex">
                {online ? <button className="button__active">Entrar na Sala</button> : null}
                <button className="button__inactive">Remarcar</button>
                <button className="button__danger">Cancelar</button>
              </div>
              :
              null
            }
            {fulfilled && !scheduled ?
              <div className="d-flex">
                {rated ?
                  <button className="button__inactive">Avaliado</button>
                  :
                  <button className="button__warning">Avaliar</button>
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
