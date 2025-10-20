import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
function Github() {
const data = useLoaderData();

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary/followers")
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(err => console.error("Error fetching followers:", err));
//   }, []);

return (
    <div className="bg-white py-16 text-center text-2xl font-semibold">
    Github Followers: {data.length}
    {data.length > 0 && (
        <img
        src={data[0].avatar_url}
        alt={data[0].login}
        className="w-24 h-24 rounded-full mx-auto mt-4"
        />
    )}
    </div>
);
}

export default Github;

export const githubLoader = async () => {
const response = await fetch(
    "https://api.github.com/users/hiteshchoudhary/followers"
);
if (!response.ok) {
    throw new Error("Failed to fetch GitHub followers");
}
return response.json();
};
