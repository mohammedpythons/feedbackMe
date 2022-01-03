import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackItems = ({feedback, handleDeleteFeedback}) => {




    const mappedFeedback = feedback.map((item) => (
        <FeedbackItem key={item.id} id={item.id} rating={item.rating} text={item.text} handleDeleteFeedback={handleDeleteFeedback} />
    ))
    return (
        <div className='feedback-list'>
           {!feedback || feedback.length === 0 ? (<p>No Feedback Yet</p>): mappedFeedback}
        </div>
    )
}

FeedbackItems.propTypes = {
    feedback: PropTypes.array,
}

export default FeedbackItems
