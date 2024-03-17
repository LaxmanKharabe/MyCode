import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/actionCreator';

import tmdb from '../../api/tmdb';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    const username = useSelector(state => state.details[0]?.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
       const fetchData = async () =>{
        const {data} = await tmdb.get("movie/popular")
        setApiData(data.results)
       }
       fetchData()
    },[])

    const handleLogout = () => {
        // Dispatch the logout action to clear user details
        dispatch(logoutUser());
        navigate("/");
    };

    return (
        <section className='container-fluid'>
            <div>
                {
                    apiData.map((movie, ind)=>
                        <p>{movie.overview}</p>
                    )
                }
            </div>
            {/* Other content of the home page */}
            <Navbar userLoginName={username} logOut = {handleLogout} />
        </section>
    );
};

export default Home;
