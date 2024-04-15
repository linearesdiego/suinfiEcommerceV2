import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const RateProducts = () => {
  // Save the rating given by the user
  const [rating, setRating] = useState(null);
  // Save the hover state for star rating
  const [hover, setHover] = useState(null);
  // Save the user's comments about the product
  const [comment, setComment] = useState('');

  // Function to handle changes in the comment textarea
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  
  return (
    <div className="w-[50rem] h-[25rem] m-auto flex flex-col justify-center items-center gap-3 rounded-xl custom-shadow">
      <h2 className="text-black text-2xl font-semibold">Rate product</h2>
      {/* Div with star rating */}
      <div className="flex flex-row gap-1">
        {Array(5)
          .fill()
          .map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                />
                <FaStar
                  className="cursor-pointer"
                  size={50}
                  color={
                    currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
      </div>
      <p className="text-black text-xl font-medium">Your rating is {rating}</p>
      <div className="max-w-sm mx-auto flex flex-col items-center gap-5">
        <textarea
          placeholder="Leave your review (optional)"
          className="w-[50rem] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400 resize-none"
          rows="4"
          value={comment}
          onChange={handleCommentChange}
          style={{ minWidth: '100%', maxWidth: '100%' }}
        ></textarea>
        <button
          className="bg-[#9bcfff] hover:bg-[#87bbeb] w-[15em] py-2 rounded-lg text-lg font-medium "
          onClick={sendReview}
        >
          Send Review
        </button>
      </div>
    </div>
  );
};
