import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <div>No Feedback</div>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
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
