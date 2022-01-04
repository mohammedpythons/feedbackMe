import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackItems = ({ feedback, handleDeleteFeedback }) => {
  const mappedFeedback = feedback.map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FeedbackItem
        key={item.id}
        id={item.id}
        rating={item.rating}
        text={item.text}
        handleDeleteFeedback={handleDeleteFeedback}
      />
    </motion.div>
  ));
  return (
    <div className="feedback-list">
      {!feedback || feedback.length === 0 ? (
        <p>No Feedback Yet</p>
      ) : (
        <AnimatePresence>{mappedFeedback}</AnimatePresence>
      )}
    </div>
  );
};

FeedbackItems.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackItems;
