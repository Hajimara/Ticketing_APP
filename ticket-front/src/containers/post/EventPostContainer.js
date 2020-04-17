import React, { useEffect } from 'react';
import EventPostForm from '../../components/post/EventPostForm';
import { useHistory } from 'react-router-dom';

const EventPostContainer = () => {
    const history = useHistory();
    useEffect(()=>{
        setTimeout(()=>{
            history.push('/');
        },3000)
    },[])
    return <EventPostForm/>
}

export default EventPostContainer;