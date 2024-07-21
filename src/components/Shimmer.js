function Shimmer() {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 12 }).map((e, i) => {
        return (
          <div className="shimmer-card" key={i}>
            <div className="shimmer-img"></div>
            <div className="shimmer-info1"></div>
            <div className="shimmer-info2"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Shimmer;
