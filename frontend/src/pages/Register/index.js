import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css'

export default function Register(){
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [whatsapp, setWhatsapp] = useState('');
const [city, setCity] = useState('');
const [uf, setUf] = useState('');

const history = useHistory();

async function handleRegister(e){
    e.preventDefault();


    const data = ({
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    try{
        const response = await api.post('ongs', data)

    alert(`Your user ID: ${response.data.id}`);

    history.push('/');

    }catch(err){
    alert('Something went wrong, try again');
    }
}

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Register</h1>
                    <p>Register and start helping people finding new incidents </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size = {16} color ="#E02041" />
                        I have an account
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="ONG's Name"
                    Value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    
                    <input 
                    type="email" placeholder="E-mail"
                    Value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Whatsapp"
                    Value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="City"
                        Value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder="State" style={{ width: 120, }}
                        Value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}