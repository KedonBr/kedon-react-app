import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isHome } from './redux/actions';

const Home = () => {
    const homeReducer = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h1>Hello Home</h1>
        </React.Fragment>
    )
}

export default Home;