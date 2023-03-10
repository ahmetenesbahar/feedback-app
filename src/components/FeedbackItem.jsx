import React from "react";
import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is an example");
  // const handleClick = () => {
  //   setRating(10);
  // };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
