import { useState } from "react";
import StarRating from "./StarRating";

export default function TestStar() {
  const [ratedVal, setRatedVal] = useState(3);
  return (
    <div>
      <StarRating
        customRatingMessage={["Bad", "Ok", "Good", "Very Good", "Excellent"]}
        defaultRating={3}
        onSetRating={setRatedVal}
      />
      <p>Your rating is {ratedVal}</p>
    </div>
  );
}
