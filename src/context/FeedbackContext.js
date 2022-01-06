import { createContext, useState, Fragment } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 2,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 3,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  // Add feedback
  const addFeedback = (feedback) => {
    setFeedback((prv) => [feedback, ...prv]);
  };
  // delete feedback
  const handleDeleteFeedback = (id) => {
    if (window.confirm("Are ypu sure you want to delete this feedback?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };

  //update feedbakc with the new data
  const updateFeedback = (id, updId) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updId } : item))
    );
    setFeedbackEdit((feedbackEdit.edit = false));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleDeleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
