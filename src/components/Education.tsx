const Education = () => {
    return (
      <section id="education" className="education">
        <h2 className="title">Education</h2>
        <p className="description">My Academic Journey</p>
        <div className="education__cards">
          <div className="education__card">
            <i className="fas fa-laptop-code fa-2x"></i>
            <h3>Fullstack Web Development</h3>
            <p>Self-taught</p>
            <p>2022 - Present</p>
          </div>
  
          <div className="education__card">
            <i className="fas fa-university fa-2x"></i>
            <h3>Computer Science</h3>
            <p>Dedan Kimathi University</p>
            <p>2021 - 2024</p>
          </div>
  
          <div className="education__card">
            <i className="fas fa-graduation-cap fa-2x"></i>
            <h3>Kenya Certificate Of Secondary Education</h3>
            <p>Kagumo High School</p>
            <p>2017 - 2021 (A- (76 points))</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  