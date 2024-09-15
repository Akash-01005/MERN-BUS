import axios from 'axios';
import { useState } from 'react'

const SignUp = () => {
    const [uname,setUname] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [image,setImage] = useState();
    const [result,setResult] = useState()

    const newData = new FormData();
    newData.append('username',uname)
    newData.append('email',email)
    newData.append('password',pass)
    newData.append('image',(image || "none"))
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(uname === '' && pass === '' && email === ''){
            alert("Enter all Details");
        }
        axios.defaults.withCredentials = true
        axios.post('http://localhost:3000/signup',newData)
        .then(res=>{
            setResult(res.data)
        })
        .catch(err=>console.log(err))
    }

    console.log(result)

  return (
    <div className='container-fluid bg-info'>
         <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="col-lg-4 col-sm-4 col-md-auto col-xs-3 bg-white p-3 rounded">
                <h2 className='text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="uname">Username:</label>
                        <input type="text" className="form-control" id='uname' onChange={(e)=>setUname(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id='email' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pass">Password:</label>
                        <input type="text" className="form-control" id='pass' onChange={(e)=>setPass(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="img">Profile image:</label>
                        <input type="file" className="form-control" id='img' onChange={(e)=>setImage(e.target.files[0])} />
                    </div>
                    <button type='submit' className='btn btn-primary w-100 mt-2'>Sign Up</button>
                </form>
            </div>
         </div>
    </div> 
  )
}

export default SignUp