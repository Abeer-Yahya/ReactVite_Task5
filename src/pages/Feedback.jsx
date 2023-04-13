import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(8, "Enter your First and Last name")
    .required("This field is required!"),
  feedback: yup
    .string()
    .min(15, "Your feedback is too short!")
    .required("This field is required!"),
});
function Feedback() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleOnSubmit = (values) => {
    setName(values.name);
    setFeedback(values.feedback);
    setFeedbacks([...feedbacks, { name, feedback }]);
    let strArr = JSON.stringify(feedbacks);
    localStorage.setItem("FeedbackArr", strArr);
  };
  function getFromLocal() {
    let jsonArr = localStorage.getItem("FeedbackArr");
    let arr = JSON.parse(jsonArr);
  }
  if (localStorage.getItem("FeedbackArr") != null) {
    getFromLocal();
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      feedback: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );
  return (
    <section className="feedback">
      <div className="feedbackForm">
        <h5>Tell us your feedback</h5>
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="First and last name"
            value={formik.values.name}
            onChange={(e) => setInputValue("name", e.target.value)}
          />
          <small>{formik.errors.name}</small>
          <input
            placeholder="Feedback"
            value={formik.values.feedback}
            onChange={(e) => setInputValue("feedback", e.target.value)}
          />
          <small>{formik.errors.feedback}</small>
          {!!formik.errors.feedback && <br />}
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </form>
        <div>
          {feedbacks.length > 0 && (
            <div>
              <ul>
                {feedbacks.map((item, index) => (
                  <li key={index}>
                    <p>{item.name}</p>
                    <p>{item.feedback}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Feedback;