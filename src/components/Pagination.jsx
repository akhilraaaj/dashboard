import { useState } from "react";

export default function Pagination() {
  const [activeIndex, setActiveIndex] = useState(1);
  const numInputs = 10;
  const radioInputs = [];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  for (let i = 1; i <= numInputs; i++) {
    const buttonStyle = {
      backgroundColor: activeIndex === i ? '#146EB4' : 'white', 
      textColor: 'black',
      border: 'none',
      height: '2px'
    };

    radioInputs.push(
      <input
        key={i}
        className="btn btn-sm"
        type="radio"
        name="option"
        aria-label={i}
        defaultChecked={i === 1}
        style={buttonStyle}
        onClick={() => handleButtonClick(i)}
      />
    );
  }

  const goToPrevious = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < numInputs) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="items-center justify-center mt-2">
        <nav className="isolate inline-flex gap-2 rounded-md" aria-label="Pagination">
          <a
            className="btn btn-sm text-gray-800 ring-1 ring-inset bg-white ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 "
            onClick={goToPrevious}
          >
            <p className="flex items-center font-semibold">&lt; Previous</p>
          </a>
          <div className="join gap-2 rounded-lg">{radioInputs}</div>
          <a
            className="btn btn-sm text-gray-800 ring-1 ring-inset bg-white ring-gray-200 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 "
            onClick={goToNext}
          >
            <p className="flex items-center font-semibold">Next &gt;</p>
          </a>
        </nav>
      </div>
    </div>
  );
}
