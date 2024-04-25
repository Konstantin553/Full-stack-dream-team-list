import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeletePlayer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeletePlayer = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/players/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Player Deleted successfully", { variant: "success" });
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
      <h1 className="text-3xl text-white my-4">Delete Player</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl text-white">
          Are You Sure You want to delete this player?
        </h3>

        <button
          className="p-4 bg-red-600 text-white font-bold m-8 w-full"
          onClick={handleDeletePlayer}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeletePlayer;
