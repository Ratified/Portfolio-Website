const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="title">My Services</h2>
      <p className="description">I Offer the Best Services for Your Business</p>
      <div className="service__cards">
        <div className="service__card">
          <i className="fas fa-laptop-code fa-2x"></i>
          <h3>Fullstack Development</h3>
          <p>
            I specialize in crafting seamless web applications that blend
            functionality and design.
          </p>
        </div>

        <div className="service__card">
          <i className="fas fa-mobile-alt fa-2x"></i>
          <h3>Responsive Design</h3>
          <p>
            I create responsive web applications that work seamlessly across all
            devices, ensuring optimal user experiences.
          </p>
        </div>

        <div className="service__card">
          <i className="fas fa-code-branch fa-2x"></i>
          <h3>API Development</h3>
          <p>Creating robust RESTful APIs for efficient integration.</p>
        </div>

        <div className="service__card">
          <i className="fas fa-cogs fa-2x"></i>
          <h3>Testing and Automation</h3>
          <p>
            Employing testing tools like Jest and Cypress to ensure reliability.
          </p>
        </div>

        <div className="service__card">
          <i className="fas fa-check-circle fa-2x"></i>
          <h3>CI/CD Practices</h3>
          <p>
            Experience with CI/CD practices and Docker to streamline development
            processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
