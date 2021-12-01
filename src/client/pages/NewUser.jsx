//Import dependencies
import React from 'react'
import axios from 'axios';


const API_newUser='http://localhost:3000/user/'; //Endpoint to add a new user


const NewUser = () => {

    const form=React.useRef(null);

	const handleSubmit=(event)=>{
		event.preventDefault();
		
		const formData= new FormData(form.current);
		const data={
            name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
        axios.post(API_newUser,data)
            .then(response=>console.log('Usuario añadido exitosamente',response)).catch(err=>console.error(err))
	}
    return (
        <div className='New-User'>
           <form ref={form}>
                <label htmlFor="name">Name</label>
                <input type="name" name='name' placeholder='John Smith' />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='email@email.com' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='********'/>
                <button type='submit' onClick={handleSubmit} >Submit!</button>
            </form> 
        </div>
    )
}

export {NewUser}
