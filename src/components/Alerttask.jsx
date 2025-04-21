const Alerttask = () => {
    return (
      <div>
        <div>
          <button
            style={{
              marginTop: "30px",
              color: "grey",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            No tasks yet. Add one above!
          </button>
        </div>
        <div>
          <p style={{ color: "grey" }}>
            Powered by
            <button
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#3C82F6",
              }}
            >
              Pinecone Academy
            </button>
          </p>
        </div>
      </div>
    );
  };
  
  export default Alerttask;
  