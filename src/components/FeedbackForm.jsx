
import Card from "./shared/Card";
import { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from 'uuid';

const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [messageForm, setMessageForm] = useState('');
  const [rating, setRating]= useState(10);

  const {feedback, addFeedback} = useContext(FeedbackContext);

  const handleForm = (e) => {
    setFeedbackText(e.target.value);
    if (feedbackText === ''){
        setIsDisabled(true);
        setMessageForm(null);
    }else if (feedbackText !==  '' && feedbackText.trim().length <= 10 ){
        setIsDisabled(true);
        setMessageForm("text must be at least 10 characters");
    }else {
        setIsDisabled(false);
        setMessageForm(null)
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackText.trim().length >= 10) {
        const newFeedback = {
            text: feedbackText,
            rating,
            id: uuidv4()

        }
        addFeedback(newFeedback)
        setFeedbackText('');
        setIsDisabled(true);
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your servece with us</h2>

        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="tell us about your feedback?"
            onChange={handleForm}
            value={feedbackText}
          />
          <Button type="submit" isDisabled={isDisabled}>Send</Button>
        </div>
        {messageForm && <div className="message">{messageForm}</div>}
      </form>
    </Card>
  );
};

FeedbackForm.propTypes = {};

export default FeedbackForm;
