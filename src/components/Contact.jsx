import React from "react";
export default function Contact() {
  return (
    <section className="contact">
      <h2>
        Get all your questions answered
        <img
          src="https://t.cf.practicum.com/usa-main/tild3665-3639-4561-b462-626665363935__group_120959.svg"
          alt="cool emoji"
        />
        by our admissions counselor
      </h2>
      <div className="contactForm">
        <h5>Contacts details</h5>
        <form>
          <input type="text" placeholder="First and last name" required />
          <br />
          <input type="text" placeholder="Email" required />
          <br />
          <input type="tel" placeholder="Phone Number" required />
          <br />
          <label className="leftText">Are you 18 or older?</label>
          <br />
          <label class="radio-inline" style={{ marginRight: "2rem" }}>
            <input type="radio" name="yes" style={{ marginRight: "4px" }} />
            Yes
          </label>
          <label class="radioInline">
            <input type="radio" name="no" style={{ marginRight: "4px" }} />
            No
          </label>
          <br />
          <label for="profession">What profession are you interested in?</label>
          <br />
          <select name="profession" id="profession">
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="undefined">I'm not sure yet</option>
          </select>
          <br />
          <button type="submit">Submit</button>
          <p>
            By clicking the ‘Submit’ button, you agree that we may contact you
            by phone, email, or text message. Data and messaging rates may
            apply.
          </p>
        </form>
      </div>
    </section>
  );
}
