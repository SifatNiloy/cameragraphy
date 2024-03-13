import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://cameragraphy-server.onrender.com/allreviews").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <h2 className="text-5xl flex justify-center pb-10">User Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review} refetch={refetch}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
