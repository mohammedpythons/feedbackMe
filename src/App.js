import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import FeedbackItems from "./components/FeedbackItems";
import feedbackData from "./components/data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const handleDeleteFeedback = (id) => {
    if (window.confirm("Are ypu sure you want to delete this feedback?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (feedback) => {
    setFeedback((prv) => [feedback, ...prv]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackItems
          feedback={feedback}
          handleDeleteFeedback={handleDeleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
