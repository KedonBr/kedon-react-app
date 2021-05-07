import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isHome } from './redux/actions';

const Home = () => {
    const homeReducer = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h1>Hello Home</h1>
            <button style={{
                background: "#000",
                color: "#FFF",
                fontSize: 30,
                padding: 10,
                textTransform: "uppercase"
            }} onClick={() => dispatch(isHome(!homeReducer.isHome))}>
                is home
                        </button>
            {
                homeReducer.isHome ?
                    <div style={{
                        height: '100vh',
                        width: "100vw",
                        position: "fixed",
                        background: "#000",
                        left: 0,
                        top: 0,
                        opacity: 0.3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <button style={{
                            background: "#FFF",
                            color: "#000",
                            fontSize: 30,
                            padding: 10,
                            textTransform: "uppercase"
                        }} onClick={() => dispatch(isHome(!homeReducer.isHome))}onClick={() => dispatch(isHome(!homeReducer.isHome))}>
                            is not home
                        </button>
                    </div>
                    :
                    null
            }
        </React.Fragment>
    )
}

export default Home;