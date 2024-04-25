import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const PlayersTable = ({ players }) => {
  return (
    <table className="border border-spacing-2 border-gray-700 w-full ">
      <thead className="bg-sky-600">
        <tr>
          <th className="capitalize px-3.5 py-2">No</th>
          <th className="capitalize px-3.5 py-2">Name</th>
          <th className="capitalize px-3.5 py-2">Position</th>
          <th className="capitalize px-3.5 py-2">Nationality</th>
          <th className="capitalize px-3.5 py-2">Operations</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center p-4">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {player.name}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {player.position}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {player.nationality}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/players/details/${player._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/players/edit/${player._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/players/delete/${player._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayersTable;
