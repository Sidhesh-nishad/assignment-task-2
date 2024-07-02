import { PiUserCircleLight } from "react-icons/pi";

const DetailCard = ({ totalUsers, loading }) => {
    return (
        <div className="max-w-[16.25rem] bg-cpWhite min-h-[5.56rem] py-4 px-6 rounded-lg border ">
            <div className="flex justify-between mb-2">
                <p className="text-slate-500 ">Total Users</p>
                <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                    <PiUserCircleLight className="text-green-600" />
                </div>
            </div>
            {loading ? (
                "...loading"
            ) : (
                <p className="text-base font-semibold">{totalUsers}</p>
            )}
        </div>
    );
};

export default DetailCard;
