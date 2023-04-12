import React from "react";
export default function Hero() {
  return (
    <section className="hero">
      <div className="heading">
        {" "}
        <h2>
          Learn{" "}
          <img
            src="https://t.cf.practicum.com/usa-main/tild3434-3463-4664-a332-313236396338__image.png"
            alt="curly brace"
          />{" "}
          the job.
        </h2>
        <h2>
          <img
            src="https://t.cf.practicum.com/usa-main/tild3232-6536-4234-b338-393965616531__5b363f57-7b95-43ca-9.svg"
            alt="smily face"
          />
          Get the job.{" "}
          <img
            src="https://t.cf.practicum.com/usa-main/tild3138-3733-4863-a436-316665316263__6781f3a6-8165-47ff-8.svg"
            alt="shiny stuff"
          />
        </h2>
        <p>
          The beginner-friendly online coding bootcamps with the highest
          completion rate and grad employment
        </p>
        <a href="#careerCards">Choose a career</a>
      </div>
      <div className="companiesLogos">
        <div>
          <p>600+</p>
          <p>reviews</p>
        </div>
        <div>
          <span>Our grads get hired by</span>
          <img
            src="https://t.cf.practicum.com/usa-main/tild3234-3339-4730-b162-646233373761__group.png"
            alt="Tesla"
          />
          <img
            src="https://t.cf.practicum.com/usa-main/tild3235-3038-4666-b466-356666633030__group_121178.svg"
            alt="Google Play"
          />
          <img
            className="smallerImg"
            src="https://t.cf.practicum.com/usa-main/tild3032-3937-4566-b663-613863363662__2d48fc87-6620-490a-9.svg"
            alt="Play Station"
          />
          <img
            src="https://t.cf.practicum.com/usa-main/tild3332-3837-4639-b434-353165366161__8a6914d2-3f26-457e-9.svg"
            alt="Spotify"
          />
          <img
            src="https://t.cf.practicum.com/usa-main/tild3465-6334-4130-b036-646539383238__51f536b4-9edc-4c75-b.svg"
            alt="Pantone"
          />
        </div>
        <div>
          <p>4.8</p>
          <p>rating</p>
        </div>
      </div>
    </section>
  );
}
