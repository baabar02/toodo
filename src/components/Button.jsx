const Button = ({ text, onClick, color, backgroundColor, isClicked,aliButtonDaragdsanbe }) => {
    return (
     
      <button
        style={{
          height: 40,
          width: "59px",
          borderRadius: "6px",
          border: "none",
          backgroundColor,
          color,
          cursor: "pointer",
          backgroundColor: text === aliButtonDaragdsanbe  || text === "Add" ?  "#3C82F6" : "#f2f4f6",
            color: color === "red" ? "#B91C1C" : color,
        }}
        onClick={() => onClick()}
        type="button"
      >
       {text}
      </button>
   
     
  
    );
  };
  
  export default Button;
  