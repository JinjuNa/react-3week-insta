import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListItem from '../components/ListItem'
import './List.css';
import SwipeableViews from 'react-swipeable-views';

const List = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getList = async () => {
        const { data: listData } = await axios.get("http://dindoo.cafe24app.com/insta/list/all")
        setList(listData)
        setIsLoading(false)
    }

    useEffect(() => { getList() }, [])
    
    return (
        <div className="list-container">
            <SwipeableViews enableMouseEvents>
            {
                isLoading ? <div>loading...</div> : list.map((item, index) => <ListItem id={item.id} key={index} content={item.content} image={item.image} name={item.name} avatar={item.avatar} />)
            }
            </SwipeableViews>
        </div>
    )

}

export default List