import React, { useState } from 'react';

import "./formulario.css"


const Formulario = (props) => {
    const [perderfoco, setPerderfoco] = useState(false)
    const {label, mensajeError, onChange, id, ...inputProps}= props;

    const handleFoco = (e)=>{
        setPerderfoco(true);
    };

return(
    <div className='formInput '>
        <label>{label}</label>
        <input  {...inputProps}
        onChange={onChange}
        onBlur={handleFoco}
        perderfoco={perderfoco.toString()}
        />
        <span>{mensajeError}</span>
    </div>
)
  

};

export default Formulario;