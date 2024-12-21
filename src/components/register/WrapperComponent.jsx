import "./WrapperComponent.css";
const WrapperComponent = ({ children }) => {
  return (
    <div className="wrapper-component">
      <img className="triangle2" src="triangle2.png" alt="triangle2" />
      <img className="ellipse1" src="Ellipse1.png" alt="ellipse1" />
      <img className="ellipse2" src="Ellipse2.png" alt="ellipse2" />
      {children}
    </div>
  );
};

export default WrapperComponent;
