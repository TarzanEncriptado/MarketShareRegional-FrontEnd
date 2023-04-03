import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkbox() {
    const [check, setCheck] = useState("");

    return  (
        <div className='Checkbox flex flex-nowrap text-neutral-400 '>
<div>
                <input type="checkbox" value='Amambai'/>  Amambai 
                <br />
                <input type="checkbox" value='PontPorã'/> Ponta Porã 
                <br />
                <input type="checkbox" value= 'BelaVista'/> Bela Vista                 
                <br />
                <input type="checkbox" value='AralMoreira'/> Aral Moreira 
                <br />
                <input type="checkbox" value='Dourados'/> Dourados 
                <br />
                <input type="checkbox" value='AntonioJoão'/> Antonio João 
                <br />
                <input type="checkbox" value='Deadapolis'/> Deadapolis 
                <br />
                <input type="checkbox" value='NovaAndradina'/> Nova Andradina 
                <br />
                <input type="checkbox" value='RioBrilhante'/> Rio Brilhante                 
                <br />
            </div>


            <div>
                <input type="checkbox" name="" id="city10" /> Eldorado 
                <br />
                <input type="checkbox" name="" id="city11" /> Carapó 
                <br />
                <input type="checkbox" name="" id="city12" /> Caracol 
                <br />
                <input type="checkbox" name="" id="city13" /> Naviraí 
                <br />
                <input type="checkbox" name="" id="city14" /> Mundo novo 
                <br />
                <input type="checkbox" name="" id="city15" /> Japorã 
                <br />
                <input type="checkbox" name="" id="city16" /> Anastacio 
                <br />
                <input type="checkbox" name="" id="city17" /> Maracaju 
                <br />
            </div>
        </div>
    )
}

export default Checkbox;