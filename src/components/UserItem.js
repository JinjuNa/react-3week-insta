import React from 'react'
import { Link } from 'react-router-dom';

const UserItem = ({id, name, avatar, job, email}) => {
    return (
        <div className="user-item">
            <div className="user-item-header">
                <Link to={"/user/"+id}>
                <div className="user-item-avatar-container">
                    <img src={avatar} alt="avatar" />
                </div>
                <span>{name}</span>
                </Link>
            </div>
            <div>
                <p>{job}</p>
                <p>{email}</p>
            </div>
        </div>
    )

}

export default UserItem