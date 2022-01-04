import React, {useContext} from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItems = () => {
  const { feedback } = useContext(FeedbackContext);
  const mappedFeedback = feedback.map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FeedbackItem
        item={item}
      />
    </motion.div>
  ));
  return (
    <div className="feedback-list">
      {!feedback || feedback.length === 0 ? (
        <p className="noFeedback">No Feedback Yet</p>
      ) : (
        <AnimatePresence>{mappedFeedback}</AnimatePresence>
      )}
    </div>
  );
};



export default FeedbackItems;
