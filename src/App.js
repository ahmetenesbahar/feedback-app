import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/shared/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";
function App() {
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

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route //version 6 ile birlikte route ları routes ların içine atıyoruz bir de component yerine element koyuluyormuş
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
        {/* <button onClick={handleOnClick}>Ekle</button> */}
      </Router>
    </FeedbackProvider>
  );
}

export default App;
