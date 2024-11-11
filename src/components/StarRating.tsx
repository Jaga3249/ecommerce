import React from "react";

interface StarRatingProps {
  count: number;
  color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  count,
  color = "#FFD700",
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < count);

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {stars.map((isFilled, index) => (
        <svg
          key={index}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isFilled ? color : "#ccc"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
