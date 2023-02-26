import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <div>No Feedback</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          // handleDelete={handleDelete} //Prop olarak fonksiyonun kendisni gönderiyoruz. FeedbackItem'da bu fonksiyonu çağırıyoruz.Ve içine parametre olarak item.id'yi gönderiyoruz.
        />
      ))}
    </div>
  );
}

export default FeedbackList;
