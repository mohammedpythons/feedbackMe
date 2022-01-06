import React, {useContext} from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import Spinned from "./shared/Spinned";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItems = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);
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
  return isLoading? <Spinned /> : (
    <div className="feedback-list">
      {!isLoading && (!feedback || feedback.length === 0) ? (
        <p className="noFeedback">No Feedback Yet</p>
      ) : (
        <AnimatePresence>{mappedFeedback}</AnimatePresence>
      )}
    </div>
  );
};



export default FeedbackItems;
