//Import dependencies
import React from 'react'
import axios from 'axios';

//Import styles
import '@styles/NewUser.css';

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
            .then(response=>{
                console.log(response);
                localStorage.setItem('sessionJWT',response.data.body)
                location.href='/home'
            }).catch(err=>console.error(err))
	}
    return (
        <div className='new-user'>
            <div className='new-user-container'>
                <form className='new-user-form' ref={form}>
                    <label  className='new-user__label'     htmlFor="name">Name</label>
                    <input  className='new-user__input'     type="name" name='name' placeholder='John Smith' />
                    <label  className='new-user__label'     htmlFor="email">Email</label>
                    <input  className='new-user__input'     type="email" name='email' placeholder='email@email.com' />
                    <label  className='new-user__label'     htmlFor="password">Password</label>
                    <input  className='new-user__input'     type="password" name='password' placeholder='********'/>
                    <button className='new-user__button'    type='submit' onClick={handleSubmit} >Submit!</button>
                </form> 
            </div>
        </div>
    )
}

export {NewUser}
