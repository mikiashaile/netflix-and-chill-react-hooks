import { useState } from "react";
import StarRating from "./StarRating";

export default function TestStar() {
  const defaultRating = 3;
  const [ratedVal, setRatedVal] = useState(defaultRating);
  return (
    <div>
      <StarRating
        customRatingMessage={["Bad", "Ok", "Good", "Very Good", "Excellent"]}
        defaultRating={defaultRating}
        onSetRating={setRatedVal}
      />
      <p>Your rating is {ratedVal}</p>
    </div>
  );
}
