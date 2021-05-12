import React from "react";
import { Logo, Facebook, Twitter, Instagram } from "../../../shared/images";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="container-fluid py-5 p-0">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-6 col-lg-3">
            <Logo width={200} />
            <p class="fs-16 fw-400 color-default">
              Aliquam eros lectus, ullamcorper et eros condimentum, finibus
              ullamcorper lorem
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h5 className="fs-20 fw-600 color-black font-nunito">Instagram</h5>
            <div className="instagram d-flex flex-wrap mt-3">
              <div className="d-flex justify-content-center align-items-center p-2">
                <img
                  className="instagram__image"
                  src="https://i.pinimg.com/564x/a1/7f/0f/a17f0ff55dd551608fe9314aaf5e9d06.jpg"
                  width="100%"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center p-2">
                <img
                  className="instagram__image"
                  src="https://content.iclinic.com.br/hs-fs/hubfs/Landing%20Pages/img-lp-ebook-instagram.png?name=img-lp-ebook-instagram.png"
                  width="100%"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center p-2">
                <img
                  className="instagram__image"
                  src="https://abcdamedicina.com.br/wp-content/uploads/2017/07/post1-e1500951976577.jpg"
                  width="100%"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center p-2">
                <img
                  className="instagram__image"
                  src="https://www.vydence.com/wp-content/uploads/2018/08/instagram-na-medicina-1080x670.jpg"
                  width="100%"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center p-2">
                <img
                  className="instagram__image"
                  src="https://i.pinimg.com/originals/cd/2f/f6/cd2ff6533093e2c8c4a76dd695aaa531.jpg"
                  width="100%"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center p-2">
                <img
                  className="instagram__image"
                  src="https://i.pinimg.com/736x/4f/7e/07/4f7e073a44b8fd8565e067185bec9945.jpg"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 mt-md-5 mt-lg-0">
            <h5 className="fs-20 fw-600 color-black font-nunito">
              Experiência
            </h5>
            <ul className="experience mt-3">
              <li className="fs-18 fw-400 color-default my-2">Início</li>
              <li className="fs-18 fw-400 color-default my-2">Sobre</li>
              <li className="fs-18 fw-400 color-default my-2">Serviços</li>
              <li className="fs-18 fw-400 color-default my-2">Blog</li>
              <li className="fs-18 fw-400 color-default my-2">Contato</li>
              <li className="fs-18 fw-400 color-default my-2">Ajuda</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-md-5 mt-lg-0">
            <h5 className="fs-20 fw-600 color-black font-nunito">
              Redes sociais
            </h5>
            <div className="d-flex justify-content-between align-items-center py-3 my-3">
              <Facebook height={18} /> <Twitter height={18} />{" "}
              <Instagram height={18} />
            </div>
            <p className="fs-16 fw-400 color-default">
              Copyright © ehDoc 2021. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
