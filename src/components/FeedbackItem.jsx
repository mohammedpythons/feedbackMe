import React from 'react'
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {

    const {feedback, handleDeleteFeedback} = useContext(FeedbackContext)



    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => handleDeleteFeedback(item.id)} className='close' >
                <FaTimes color="purple" />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}



export default FeedbackItem
