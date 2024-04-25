import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditPlayers = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/players/${id}`)
      .then((response) => {
        setName(response.data.name);
        setPosition(response.data.position);
        setNationality(response.data.nationality);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleEditPlayer = () => {
    const data = {
      name,
      position,
      nationality,
    };
    setLoading(true);
    axios
      .put(`http://localhost:4000/players/${id}`, data)
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
      <h1 className="text-3xl text-white my-4 ">Edit Player</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 text-white rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 bg-gray-900 border-white  px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border-2 bg-gray-900 border-white  px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Nationality</label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="border-2 bg-gray-900 border-white px-4 py-2  w-full "
          />
        </div>
        <button
          className="p-2 bg-sky-400 font-bold m-8"
          onClick={handleEditPlayer}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditPlayers;
