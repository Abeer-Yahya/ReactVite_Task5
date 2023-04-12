import React from "react";
export default function Numbers() {
  return (
    <section className="numbers">
      <div className="lightBG">
        <h2>
          Part-time programs on our proprietary learning platform, followed by
          career coaching and interview prep
        </h2>
        <div className="results">
          <div>
            <p>1k+</p>
            <p>alumni since 2019</p>
          </div>
          <div>
            <p>87%</p>
            <p>find a tech job after six months*</p>
          </div>{" "}
          <div>
            <p>79%</p>
            <p>of students complete our programs*</p>
          </div>{" "}
        </div>
        <p className="lightText">
          *average of our Software Engineering, Data Analytics, and Data Science
          programs
        </p>
        <p className="lastP">
          Get your dream job within 6 months of graduation or get 100% of your
          tuition back
        </p>
      </div>
    </section>
  );
}
