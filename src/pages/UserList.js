import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserItem from '../components/UserItem';
import './UserList.css';

const UserList = () => {
    const [userList, setUserList] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getUserList = async () => {
        const { data: userListData } = await axios.get("http://dindoo.cafe24app.com/user/all")
        setUserList(userListData)
        setIsLoading(false)
    }

    useEffect(() => { getUserList() }, [])

    return (
        <div className="user-list">
            {
                isLoading ? <div>Loading...</div> : userList.map((item) => <UserItem key={item.id} id={item.id} name={item.name} avatar={item.avatar} job={item.job} email={item.email} /> )
            }
        </div>
    )

}

export default UserList