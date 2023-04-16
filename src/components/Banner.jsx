import banner from "../assets/img/banner.png";
function Banner() {
  return (
    <div>
      <div class="container">
        <img src={banner} alt="Students" className="bannerImg" />
        <div class="centered">
          <h1>Outcomes Report 2022</h1>
          <p className="headerP">
            1k+ students have taken the plunge, changed their careers, and now
            work in tech. These are our graduate outcomes.
          </p>
          <div className="threeCols">
            <div>
              <p>87%</p>
              <p>get hired within 180 days</p>
            </div>
            <div>
              <p>$75,750</p>
              <p>median graduate salary</p>
            </div>
            <div>
              <p>42</p>
              <p>employer partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
