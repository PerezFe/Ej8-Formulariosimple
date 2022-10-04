import React, { useState } from 'react';

import "./formulario.css"


const Formulario = (props) => {
    const {label, mensajeError, onChange, id, ...inputProps}= props;

return(
    <div className='formInput '>
        <label>{label}</label>
        <input  {...inputProps}
        onChange={onChange}
        />
        <span>{mensajeError}</span>
    </div>
)
  

};

export default Formulario;