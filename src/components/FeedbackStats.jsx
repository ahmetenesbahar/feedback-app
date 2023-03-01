import React from "react";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  //Calculate average rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length; //sondaki 0 başlangıç değeri olarak kullanılıyor ve 0'dan başlayarak toplamaya başlıyor ve sonucu feedback.length'e bölmek için kullanıyoruz.
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating :{isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
