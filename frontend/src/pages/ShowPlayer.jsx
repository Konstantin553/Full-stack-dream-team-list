import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowPlayer = () => {
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/players/${id}`)
      .then((response) => {
        setPlayer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-900">
      <BackButton />
      <h1 className="text-3xl text-white my-4">Show PLayer</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Id:</span>
            <span className="text-white">{player._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Name:</span>
            <span className="text-white">{player.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Position:</span>
            <span className="text-white">{player.position}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-white">Nationality:</span>
            <span className="text-white">{player.nationality}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowPlayer;
