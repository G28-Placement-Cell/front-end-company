import React, { useState } from 'react';
import '../Pages/ResetPassword/Reset.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useReset_passMutation } from '../slices/company/companyApislice';
import { setReset } from '../slices/company/authslice';

function ForgotPass() {
    const [email, setEmail] = useState('');
    const [reset_pass] = useReset_passMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            // console.log('ok');
            console.log(email)
            const res = await reset_pass({ email }).unwrap();
            dispatch(setReset({ ...res }));
            toast.success(res.message);
            // console.log(res);
            navigate('/resetpassword');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
            console.log(err);
        }
    };

    return (
        <div className="maincp" style={{ marginTop: 0, paddingTop: '20px' }}>
            <div className="change-password-container">
                <h2>Forgot Password</h2>
                <form onSubmit={submitHandler}>

                    <div className="password-form">
                        <label htmlFor="email">Email id</label>
                        <input
                            type="email"
                            id="email"
                            required
                            // value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Send Email</button>
                    </div>
                </form>
            </div>
        </div >

    );
}

export default ForgotPass;
