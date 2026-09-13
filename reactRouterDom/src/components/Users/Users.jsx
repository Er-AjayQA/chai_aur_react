import { useParams } from "react-router-dom";

export default function Users() {
  const { userId } = useParams();

  return (
    <>
      <div className="py-5 px-10 bg-gray-600">
        <h3 className="text-white">User: {userId || "No User"}</h3>
      </div>
    </>
  );
}
