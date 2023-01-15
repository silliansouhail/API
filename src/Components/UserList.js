import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User';

function UserList({ userlist }) {
    const [userslist, setUserslist] = useState(userlist);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => { setUserslist(res.data) })
            .catch(err => { console.log(err) })

    }, []);

    let uplist = userslist.map(item => Object.assign(item, { show: false }))

    console.log(uplist)
    return (
        <div className='ListItems'>
            <div>
                <span className="id title" >id</span>

                <span className='name title'>Name</span>
                <span className='age title'>UserName</span>
                <span className="action title" >Email</span>
                <span className="id title" >details</span>


            </div>
            <div>
                {uplist.map(item => {
                    return (
                        <User id={item.id} name={item.name} username={item.username} email={item.email} show={item.show}
                            street={item.address.street} phone={item.phone} city={item.address.city} cname={item.company.name}
                            web={item.website} />


                    )
                }

                )
                }
            </div>

        </div>
    )
}

export default UserList;