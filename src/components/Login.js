import React,{useState} from "react";
import SignUp from "./SignUp";

export default function Login() {
    const [mail,setMail] = useState("");
    const [password, setPassword] = useState("");
    const [update, setUpdate] =useState(true);

    const signin = (e)=>{
        const url ="http://localhost:4000/user/sign-in";
        const body = {email: mail, password: password};
        fetch (url, {
            method: "Post",
            body: JSON.stringify(body),
            headers:{
                "Content-type": "application/json",
            }
            
        })
        
        .then((res)=> res.json())
        .then(data => (data))
      
        // .then((response) => setToken(response.jwtToken))
        .catch((error)=>console.error("Error:", error));
    };
    if(update){
        return (
        <div className="App-Body">
            <div className="row" id="">
                <div className=" align-self-center">
                   <h1>facebook</h1>
                    <div className="card align-self-center">
                        <div className="card-body">
                            <p className="card-title">Iniciar sesion en Facebook</p>
                            <input
                                type="text"
                                placeholder="Correo electrónico"
                                value= {mail}
                                onChange ={e =>setMail(e.target.value)} />
                                <br/>
                            <input
                                type="password"
                                placeholder="Password"
                                value= {password}
                                onChange ={e =>setPassword(e.target.value)} />
                                <br/>
                              
                            <button type="button" class="btn btn-primary" onClick = {signin}>Entrar</button>
                            <button type="button" class="btn btn-primary" onClick = {()=> setUpdate (false)}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }else{
        return <SignUp></SignUp>
    }
    }
  
  