import PropTypes from 'prop-types';
const FeedbackStats = ({ feedback }) => {
  // calculate average

  const average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      {feedback.length > 0 && (
        <>
          <h4>{feedback.length} Reviews</h4>{" "}
          <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>{" "}
        </>
      )}
    </div>
  );
};
FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}
export default FeedbackStats;
