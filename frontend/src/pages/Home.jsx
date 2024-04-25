import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import PlayersTable from "../components/PlayersTable";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/players")
      .then((response) => {
        setPlayers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 min-h-screen bg-gray-900">
      <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Dream Team List</h1>
          <Link to="/players/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? <Spinner /> : <PlayersTable players={players} />}
      </div>
    </div>
  );
};

export default Home;
