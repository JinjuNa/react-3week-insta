import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({id, key, content, image, name, avatar}) => {
    return (
        <div className="list-item">
            <div className="list-item-header">
                <Link to={"/user/"+id}>
                {/* <img src={avatar} alt="avatar" /> */}
                {
                    id % 2 === 0 ? <img src="https://robohash.org/doloreseumodit.png?size=50x50" alt="avatar" /> : <img src="https://robohash.org/asuntsint.png?size=50x50&set=" alt="avatar" />
                }
                <span>{name}</span>
                </Link>
            </div>
            <img src={image} alt={content} className="content-image"/>
            <p>{content}</p>
        </div>
    )

}

export default ListItem