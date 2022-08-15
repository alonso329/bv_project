import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="main">
      <div className="navbar">
        <h2 className="nav-logo-heading">demo</h2>
        <div className="navbar-sections">
          <p>Features</p>
          <p>Pricing</p>
          <p>Community</p>
          <p>Support</p>
        </div>
        <div className="navbar-buttons">
          <button className="login-button">Log in</button>
          <button className="register-button">Register</button>
        </div>
      </div>
      {children}
      <div className="footer">
        <h2 className="foot-logo-heading">demo</h2>
        <div className="footer-sections">
          <p>Mobile app</p>
          <p>Community</p>
          <p>Company</p>
        </div>
        <div className="footer-copyright">
          &copy; Photo, Inc. 2019. We love our users!
        </div>
      </div>
    </div>
  );
}
