
import React, {useState, /*useEffect*/} from "react";
import {/*Link,*/ useHistory} from 'react-router-dom';
import {useDispatch, /*useSelector*/} from "react-redux";
import {postUser} from '../actions/index';
import './UserCreate.css'


export default function UserCreate(){
    const dispatch = useDispatch();
    const history = useHistory();
    //const [errors, setErrors] = useState({e:''});      //creo el estado errors
    const [input, setInput] = useState({               //creo el estado input que es como viene el formulario por default
        email:"",
        password:"",
    })

    function handleChange(e){                       //recibe un evento, que es un cambio en el input
        setInput({                                  //setInput es la funcion que sabe como modificar el estado input
            ...input,
            [e.target.name] : e.target.value,       //a la prop que coincida con el name(name, img, speed...) le asigna el valor que se escribió en el input   
        })
    }
    
    function handleSubmit(e){                       //recibe toda la info del formulario
        e.preventDefault();
        dispatch(postUser(input))                //crea un pokemon con la info que se fue guardando en el estado input
        alert("User Created!")
        // swal.fire({
        //     position: 'top-end',
        //     icon: 'success',
        //     title: 'User Created!',
        //     showConfirmButton: false,
        //     timer: 2000,
        //     })
        setInput({                                  //resetea el estado input a su estado original
            email:"",
            password:"",

        });
        history.push('/home');      //llevame al home cuando se cree el pokemon
    }
    


    
    return (
        <div className="usercreate-container">
            <h1>USER CREATION</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <label><h3>Email </h3></label>
                <input type='text' value={input.email} name='email' placeholder="email..." onChange={(e) => handleChange(e)}/>
                <label><h3>Password </h3></label>
                <input type='text' value={input.password} name='password' placeholder="password..." onChange={(e) => handleChange(e)}/>
                <button type='submit'>CREATE</button>
            </form>
        </div>
    )
}