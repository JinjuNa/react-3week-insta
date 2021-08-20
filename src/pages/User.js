import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './User.css';

const User = ({match}) => {
    const [user, setUser] = useState({})
    const { id } = match.params

    const getUser = async () => {
        const { data: userData } = await axios.get("http://dindoo.cafe24app.com/user/one/" + id)
        console.log(userData[0])
        setUser(userData[0])

    }

    useEffect(() => { getUser() }, [])

    return (
        <div className="user">
            <p className="hello">Hello</p>
            <img src={user.avatar} alt={user.name} />
            <p>I'm {user.name}</p>
            <p>And I'm {user.job}</p>
            <p>I'am a {user.university} student</p>
            <p>My Email is <span className="email">{user.email}</span></p>
        </div>
    )

}

export default User