function Carousel({ items }) {
    return (
      <div className="carousel">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <p className="bg-gray-100 p-4 rounded">{item}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Carousel;
  