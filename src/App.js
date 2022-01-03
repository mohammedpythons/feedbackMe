import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import FeedbackItems from "./components/FeedbackItems";
import feedbackData from "./components/data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const handleDeleteFeedback = (id) => {
    if (window.confirm("Are ypu sure you want to delete this feedback?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
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
