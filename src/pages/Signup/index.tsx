import React from "react";
import { useState } from 'react';
import jpIMG from '../../assets/icone-login.png'
import { Link } from 'react-router-dom';
import Checkbox from "../../components/Checkbox/Checkbox";
import { useForm } from "react-hook-form";

const Signup = () => {

    {/*    const [email, setEmail] = useState("")
    const [confirmMail, setconfirmMail] = useState("")
    const [nome, setNome] = useState("")
    const [password, setPassword] = useState("")
    const [cpf, setCPF] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cargo, setCargo] = useState("")
    const [empresa, setEmpresa] = useState("")
*/}
    const {register} = useForm() 

    
    return (
        <div className="container">
            <header className="h-32 p-6 bg-green-700">
                    <div className="gap-4 flex items-center justify-center">
                    <div className="">
                        <img height="46" width="46" src="./src/assets/profits.png" alt=""/>
                    </div>
                    <div>         <span className="login-form-title">
                            Market Share Regional 
                        </span></div>
               
                    </div>

           </header>
            <div className="container-login">
                <div className="wrap-Signup">
                <form action="" className="login-form grid grid-cols-3 gap-3">
                    <div className="wrap-input">
                        <label htmlFor="nome">Digite seu nome completo</label>
                        <input 
                        {...register('nome')}
                        type="text"
                        


                        /* className={nome !== "" ? 'has-val input' : 'input'}
                        type="nome" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}*/ 
                       
                        />
                        <span className="focus-input" data-placeholder=""></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                        /*className={email !== "" ? 'has-val input' : 'input'}
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}*/
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                            /*                        
                        className={confirmMail === email && confirmMail !== "" ? 'has-val input' : 'input'}
                        type="confirmMail" 
                        value={confirmMail}
                        onChange={e => setconfirmMail(e.target.value)}*/
                        />
                        <span className="focus-input" data-placeholder="Confirmar e-mail"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                            /*                        
                        className={password !== "" ? 'has-val input' : 'input'} 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} */
                        />
                        <span className="focus-input" data-placeholder="Password"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                            /*
                        className={cpf !== "" ? 'has-val input' : 'input'}
                        type="cpf" 
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}
                            */
                        />
                        <span className="focus-input" data-placeholder="CPF"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                        /*                        
                        className={telefone !== "" ? 'has-val input' : 'input'}
                        type="telefone" 
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}*/

                        />
                        <span className="focus-input" data-placeholder="Telefone"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                            /*                        
                        className={cargo !== "" ? 'has-val input' : 'input'}
                        type="cargo" 
                        value={cargo}
                        onChange={e => setCargo(e.target.value)}*/
                        />
                        <span className="focus-input" data-placeholder="Cargo"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                            /*
                        className={empresa !== "" ? 'has-val input' : 'input'}
                        type="empresa" 
                        value={empresa}
                        onChange={e => setEmpresa(e.target.value)}*/
                        />
                        <span className="focus-input" data-placeholder="Empresa"></span>
                    </div>
                    {/*     ARRUMAR O ESTADO DA MARCA
                    <div className="wrap-input">
                        <input 
                        className={marca !== "" ? 'has-val input' : 'input'}
                        type="marca" 
                        value={marca}
                        onChange={e => setMarca(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="marca"></span>
                    </div>
                    
                    */}

                    <div className="wrap-input">
                        <select className="p-1 px-1 bg-transparent text-zinc-400 text-w">
                            <option>Selecione a marca</option>
                            <option>CASE</option>
                            <option>JOHN DEERE</option>
                            <option>NEW HOLLAND</option>
                            <option>MASSEY</option>
                            <option>VALTRA</option>
                            <option>LANDINI</option>
                        </select>
                    </div>


                    {/*     ARRUMAR O ESTADO DO CHECK BOX / INSERIR CHECK BOX   */}
                    <div className="wrap-input">
                        <Checkbox/>
                        <br />
                        {/*<span className="focus-input" data-placeholder="Municipios"></span>*/}
                    </div>
                    {/*   
                    <div className="container-login-form-btn opacity-80 hover:opacity-100 col-span-3">
                        <button className="login-form-btn">Cadastrar</button>
                    </div>
                    */}
                    <div className="container-login-form-btn opacity-80 hover:opacity-100 col-span-3">
                        <Link to="/">
                            <button className="cadastro-form-btn">cadastrar</button>
                        </Link>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Signup