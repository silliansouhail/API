import React, { useState } from 'react'

function User({ id, name, username, email, show, phone, street, city, cname, web }) {
    const [showw, setShoww] = useState(show)

    return (
        <div key={id}>
            <span className='id'>{id} </span>
            <span className='name'>{name} </span>
            <span className="age" >{username} </span>
            <span className='action icon'>{email}</span>
            <span className='show' onClick={() => {
                setShoww(!showw);
                console.log(!show, id)
            }} >show </span>
            <div key={id} > {showw ? <> <p>Phone : {phone} </p> <p>street : {street} </p> <p>City : {city} </p> <p>Company : {cname} </p>  <p>Website : {web} </p>  </> : null} </div>
        </div>
    )
}

export default User