const Cleartask = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          borderTop: "0.3px solid grey",
          width: "345px",
          padding: "10px 0",
          alignItems: "center",
          backgroundColor: "#F9FAFB",
        }}
      >
        <p>1 of 2 tasks Completed</p>
        <button
          style={{
            height: "30px",
            color: "red",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          Clear completed
        </button>
  
        {/* <div
          style={{
            display: "flex",
            width: 345,
            height: 62,
            marginTop: 20,
            border: "0.3px solid grey",
            borderRadius: "6px",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F9FAFB",
          }}
        >
          <label
            style={{
              height: "20px",
              width: "20px",
              marginLeft: "20px",
              border: "0.5px solid grey",
              borderRadius: "6px",
              display: "inline-block",
            }}
          >
            <Check />
          </label>
          <button
            style={{
              height: "30",
              width: "67",
              marginRight: "20px",
              border: "none",
              color: "red",
              backgroundColor: "transparent",
            }}
          >
            Delete
          </button>
        </div> */}
      </div>
    );
  };
  
  export default Cleartask;
  