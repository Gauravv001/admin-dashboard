import "./navbar.scss";

const Navbar = () => {
  return <div className="navbar">
    <div className="logo">
      <img src="logo.svg" alt="" />
      <span>ReactAdmin</span>
    </div>
    <div className="icons">
      <img src="/search.svg" alt="" className="icon" />
      <img src="/app.svg" alt="" className="icon" />
      <img src="/expand.svg" alt="" className="icon" />
      
      <div className="notification">
        <img src="/notifications.svg" alt="" className="src" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" className="src" />
        <span>Gaurav</span>
      </div>

      <img src="/setting.svg" alt="" className="icons" />
    </div>
  </div>;
};

export default Navbar
