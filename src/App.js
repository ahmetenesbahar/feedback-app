import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/shared/AboutIconLink";
import AboutPage from "./pages/AboutPage";
function App() {
  const [feedback, setFeedback] = useState([...FeedbackData]);
  // const handleOnClick = () => {
  //   let max = 1;
  //   feedback.forEach((item) => {
  //     if (item.id > max) {
  //       max = item.id;
  //     }
  //   });

  //   const newElement = {
  //     id: max + 1,
  //     rating: 10,
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  //   };
  //   setFeedback([...feedback, newElement]);
  //   console.log(newElement);
  // };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    //Peki ben burda id generatle leyip vermek istesem nasıl yapardım ?
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
      {/* <button onClick={handleOnClick}>Ekle</button> */}
    </Router>
  );
}

export default App;
