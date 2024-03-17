import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userNameData } from '../../redux/actions/actionCreator';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedUser = useSelector(state => state.details);
    const [input, setInput] = useState({ name: '', password: '' });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const user = loggedUser.find(user => input.name === user.name && input.password === user.password);

        if (user) {
            // Dispatch the action to store the username in the state
            dispatch(userNameData([user]));
            navigate("/home");
        }
    }
    return (
        <section className="container d-flex flex-column">
            <h2 className="mt-4 text-white">Login</h2>
            <form onSubmit={handleLogin} className="mt-4">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='User name' name='name' value={input.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder='Password' name='password' value={input.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <button type='submit' className="btn btn-primary">Login</button>
                    <a className="ms-2 textHover text-white text-decoration-none" onClick={()=>{navigate("/signup")}}>don't have account: Signup</a>
                </div>
            </form>
        </section>
    );
};

export default Login;
