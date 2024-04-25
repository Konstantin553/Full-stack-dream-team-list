import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreatePlayers = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSavePlayer = () => {
    const data = {
      name,
      position,
      nationality,
    };
    setLoading(true);
    axios
      .post("http://localhost:4000/players", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Player Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen p-4 bg-gray-900">
      <BackButton />
      <h1 className="text-3xl my-4 text-white">Create Player</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 text-white rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-white bg-gray-900  px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border-2 border-white bg-gray-900 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Nationality</label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="border-2 border-white bg-gray-900 px-4 py-2  w-full "
          />
        </div>
        <button
          className="p-2 bg-sky-400  font-bold m-8"
          onClick={handleSavePlayer}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreatePlayers;
