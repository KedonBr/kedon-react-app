import React from "react";
import { Card, Appointment } from "./components";
import { Stethoscope, Doctor, CheckList } from "../../shared/images";
import "./home.scss";
const Home = () => {
    return (
        <React.Fragment>
            <div className="section">
                <h2 className="fs-24 fw-400 color-default">O que você precisa?</h2>
                <div className="cards mt-3">
                    <div className="cards-content d-flex">
                        <Card
                            icon={<Stethoscope />}
                            title={"Prontuários"}
                            color={"gray"} />
                        <Card
                            icon={<Doctor />}
                            title={"Médicos"}
                            color={"green"} />
                        <Card
                            icon={<CheckList />}
                            title={"Consultas Agendadas"}
                            color={"red"}
                        />
                        <Card
                            icon={<CheckList />}
                            title={"Consultas Realizadas"}
                            color={"blue"}
                        />
                    </div>
                </div>
            </div>
            <div className="section">
                <h2 className="fs-24 fw-400 color-default">Consultas agendadas</h2>
                <div className="d-flex flex-column mt-3">
                    <Appointment
                        image={"https://posfg.com.br/wp-content/uploads/2020/10/POSFG-Dia-do-m%C3%A9dico-site.png"}
                        name={"Dr. Lorem Ipsum Lorem Ipsum Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Oftamologista"}
                        time={"10.00 - 20.00"}
                        online={true}
                        // scheduled === agendada
                        scheduled={true}
                        // fulfilled === realizada
                        fulfilled={false}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={false}
                    />
                    <Appointment
                        image={"https://image.freepik.com/fotos-gratis/bela-jovem-doutora-olhando-a-camera-no-escritorio_1301-7781.jpg"}
                        name={"Dra. Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Pediatra"}
                        time={"08.00 - 17.00 "}
                        online={false}
                        // scheduled === agendada
                        scheduled={true}
                        // fulfilled === realizada
                        fulfilled={false}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={false}
                    />
                    <Appointment
                        image={"https://drvictorsorrentino.com.br/wp-content/uploads/2014/12/doutor.jpg"}
                        name={"Dr. House"}
                        stars={"4.0"}
                        sector={"Cirurgião"}
                        time={"10.00 - 20.00"}
                        online={true}
                        // scheduled === agendada
                        scheduled={true}
                        // fulfilled === realizada
                        fulfilled={false}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={false}
                    />
                </div>
            </div>
            <div className="section">
                <h2 className="fs-24 fw-400 color-default">Consultas realizadas</h2>
                <div className="d-flex flex-column mt-3">
                    <Appointment
                        image={"https://posfg.com.br/wp-content/uploads/2020/10/POSFG-Dia-do-m%C3%A9dico-site.png"}
                        name={"Dr. Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Oftamologista"}
                        time={"10.00 - 20.00"}
                        online={true}
                        // scheduled === agendada
                        scheduled={false}
                        // fulfilled === realizada
                        fulfilled={true}
                        //rated === avaliado
                        rated={true}
                        //available === disponivel
                        available={false}
                    />
                    <Appointment
                        image={"https://image.freepik.com/fotos-gratis/bela-jovem-doutora-olhando-a-camera-no-escritorio_1301-7781.jpg"}
                        name={"Dra. Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Pediatra"}
                        time={"08.00 - 17.00 "}
                        online={false}
                        // scheduled === agendada
                        scheduled={false}
                        // fulfilled === realizada
                        fulfilled={true}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={false}
                    />
                    <Appointment
                        image={"https://drvictorsorrentino.com.br/wp-content/uploads/2014/12/doutor.jpg"}
                        name={"Dr. House"}
                        stars={"4.0"}
                        sector={"Cirurgião"}
                        time={"10.00 - 20.00"}
                        online={true}
                        // scheduled === agendada
                        scheduled={false}
                        // fulfilled === realizada
                        fulfilled={true}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={false}
                    />
                </div>
            </div>
            <div className="section">
                <h2 className="fs-24 fw-400 color-default">Agendar Consultas</h2>
                <div className="d-flex flex-column mt-3">
                    <Appointment
                        image={"https://posfg.com.br/wp-content/uploads/2020/10/POSFG-Dia-do-m%C3%A9dico-site.png"}
                        name={"Dr. Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Oftamologista"}
                        time={"10.00 - 20.00"}
                        value={30}
                        online={true}
                        // scheduled === agendada
                        scheduled={false}
                        // fulfilled === realizada
                        fulfilled={false}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={true}
                    />
                    <Appointment
                        image={"https://image.freepik.com/fotos-gratis/bela-jovem-doutora-olhando-a-camera-no-escritorio_1301-7781.jpg"}
                        name={"Dra. Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Pediatra"}
                        time={"08.00 - 17.00 "}
                        value={60}
                        online={true}
                        // scheduled === agendada
                        scheduled={false}
                        // fulfilled === realizada
                        fulfilled={false}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={true}
                    />
                    <Appointment
                        image={"https://drvictorsorrentino.com.br/wp-content/uploads/2014/12/doutor.jpg"}
                        name={"Dr. House"}
                        stars={"4.0"}
                        sector={"Cirurgião"}
                        time={"10.00 - 20.00"}
                        value={260}
                        online={true}
                        // scheduled === agendada
                        scheduled={false}
                        // fulfilled === realizada
                        fulfilled={false}
                        //rated === avaliado
                        rated={false}
                        //available === disponivel
                        available={true}
                    />
                </div>
            </div>
            <div className="section">
                <h2 className="fs-24 fw-400 color-default">Outros Médicos</h2>
                <div className="d-flex flex-column mt-3">
                    <Appointment
                        image={"https://posfg.com.br/wp-content/uploads/2020/10/POSFG-Dia-do-m%C3%A9dico-site.png"}
                        name={"Dr. Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Oftamologista"}
                        time={"10.00 - 20.00"}
                        online={true}
                    />
                    <Appointment
                        image={"https://image.freepik.com/fotos-gratis/bela-jovem-doutora-olhando-a-camera-no-escritorio_1301-7781.jpg"}
                        name={"Dra. Lorem Ipsum"}
                        stars={"4.0"}
                        sector={"Pediatra"}
                        time={"08.00 - 17.00 "}
                        online={false}
                    />
                    <Appointment
                        image={"https://drvictorsorrentino.com.br/wp-content/uploads/2014/12/doutor.jpg"}
                        name={"Dr. House"}
                        stars={"4.0"}
                        sector={"Cirurgião"}
                        time={"10.00 - 20.00"}
                        online={true}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
