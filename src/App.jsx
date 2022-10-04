import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario.jsx';
import "./app.css"
import { useState } from 'react';
import Swal from "sweetalert2"





function App() {
  const [valores, setValores] = useState({
    username:"",
    userlastname:"",
    userdni:"",
    useremail:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Juan",
      mensajeError:"Nombre debe contener entre 3-16 caracteres y no incluir ningun caracter especial",
      label:"Nombre",
      pattern: "^[A-Za-z0]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:"userlastname",
      type:"text",
      placeholder:"Perez",
      mensajeError:"Apellido debe contener entre 3-16 caracteres y no incluir ningun caracter especial",
      label:"Apellido",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:3,
      name:"userdni",
      type:"text",
      placeholder:"27654158",
      mensajeError:"DNI deberia tener min 8 numeros y no incluir ningun caracter especial",
      label:"DNI",
      pattern: "^[0-9]{8}$",
      required: true,
    },
    {
      id:4,
      name:"useremail",
      type:"email",
      placeholder:"JuanPerez@hotmail.com",
      mensajeError:"Debe ser una direccion valida de correo",
      label:"E-mail",
      pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      required: true,
    }
  ]
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    Swal.fire("Formulario enviado exitosamente")
    setValores({username:"",
    userlastname:"",
    userdni:"",
    useremail:""});
  }

  const onChange = (e)=>{
    setValores({...valores, [e.target.name]: e.target.value})
  }

  console.log(valores)

  return (
    <section>
      <h1 id='titulo'>FORMULARIO</h1>
      <hr/>
    <div className="app my-5">
      <hr/>
      <form onSubmit={handleSubmit}>
        {inputs.map(input=>(

          <Formulario 
          key={input.id} 
          {...input} 
          value={valores[input.name]} 
          onChange={onChange}/>

        ))}
          <button type='submit'>Enviar</button>
      </form>

    </div>
    </section>
  );
}

export default App;
