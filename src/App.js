import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackItems from "./components/FeedbackItems";
import feedbackData from "./components/data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/About";
import AboutIconLink from "./components/AboutIconLink";
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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackItems
                  feedback={feedback}
                  handleDeleteFeedback={handleDeleteFeedback}
                />
                <AboutIconLink />{" "}
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
