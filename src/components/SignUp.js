import React, {useState} from "react";
import Home from "./Home";

export default function Login() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [update, setUpdate] = useState(true);
    
    const fetchSignUp = async() => {
        const url ="http://localhost:4000/user/sign-up";
        const body = {name: name, email: mail, password: password}
        fetch(url,{
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
        .then(res => res.json())
        .then(data => (data))
        
    }
    const onClick = (e) =>{
        fetchSignUp();
    }
    if(update){

        return (
            <div className="App-Body">
        <div className="row" id="">
            <div className=" align-self-center">
               <h1>facebook</h1>
                <div className="card align-self-center">
                    <div className="card-body">
                        <p className="card-title">Registrarse en Facebook</p>
                        <input
                        type="text"
                        placeholder="Nombre"
                        value= {name}
                        onChange ={e =>setName(e.target.value)} />
                        <input
                        type="text"
                        placeholder="Correo electrónico"
                        value= {mail}
                        onChange ={e =>setMail(e.target.value)} />
                         <input
                        type="password"
                        placeholder="Password"
                        value= {password}
                        onChange ={e =>setPassword(e.target.value)} />
                        <button onClick={onClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

);
}else{
    return <Home></Home>
}}
  