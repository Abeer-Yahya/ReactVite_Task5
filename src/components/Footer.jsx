import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="links">
        <div>
          <h6>Programs</h6>
          <ul>
            <li>Data Analytics</li>
            <li>Data Science</li>
            <li>Software Engineering</li>
            <li>Quality Assurance</li>
            <li>BI Analyst</li>
          </ul>
        </div>
        <div>
          <h6>Useful</h6>
          <ul>
            <li>Career Quiz</li>
            <li>Blog</li>
            <li>Outcomes</li>
            <li>Comparison</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h6>Company</h6>
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Referral Program Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h6>Contact</h6>
          <p>
            Grow Building 23,
            <br /> King Hussein Business Park.
            <br /> PO 82 zip 11831
            <br /> Amman, Jordan.
          </p>
          <a href="support@techlead.com">support@techlead.com</a>
        </div>
      </div>
      <div className="subFooter">
        <div>
          <p>TechLead &#169; 2023</p>
        </div>
        <div>
          <AiFillInstagram size={"1.6rem"} className="icon" />
          <BsFacebook size={"1.4rem"} className="icon" />
          <BsLinkedin size={"1.4rem"} className="icon" />
          <BsYoutube size={"1.4rem"} className="icon" />
          <AiFillTwitterCircle size={"1.6rem"} />
        </div>
      </div>
    </footer>
  );
}
