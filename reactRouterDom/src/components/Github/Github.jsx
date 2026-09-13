import { useLoaderData } from "react-router-dom";

export default function Github() {
  ///// Method 1
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Er-AjayQA")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);

  //         setData(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="py-5 px-10 bg-gray-600">
      <div className="rounded-full w-36 h-36 overflow-hidden p-5 mx-auto">
        <img
          src={data?.avatar_url}
          alt="Git avatar"
          className="rounded-full w-36"
        />
      </div>
      <h3 className="text-white">Github Public Repos: {data?.public_repos}</h3>
    </div>
  );
}
