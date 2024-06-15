import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'



const Contact = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [desc,setDesc]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = {phone,name,email,desc};

    fetch('http://localhost:3000/api/postcontact', {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
    })
.then(response => response.text())
.then(data => {
console.log('Success:', data);
alert("Thanks for contacting us")
setPhone('')
setName('')
setDesc('')
setEmail('')
})
.catch((error) => {
console.error('Error:', error);
});
  }
  
  const handleChange=(e)=>{
    if(e.target.name=='phone'){
      setPhone(e.target.value)
    }else if(e.target.name=='email'){
      setEmail(e.target.value)
    }else if(e.target.name=='desc'){
      setDesc(e.target.value)
    }if(e.target.name=='name'){
      setName(e.target.value)
    }
    console.log(e,"change");
  }
  
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
    <input type="text" className="form-control" value={name} onChange= {handleChange} id="name" name="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className={styles.formlabel}>Email address</label>
    <input type="email" className="form-control" value={email} onChange= {handleChange} name="email" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className={styles.formlabel}>Phone No.</label>
    <input type="number" className="form-control" value={phone} onChange= {handleChange} name="phone" id="phone"/>
  </div>
  <div className="mb-3">
  <label htmlFor="desc">Elaborate your concern</label>
  <textarea value = {desc} name="desc" onChange= {handleChange} className="form-control" placeholder="Write your concern here" id="desc"/>  
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contact
