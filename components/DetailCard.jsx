import { PiUserCircleLight } from "react-icons/pi";

const DetailCard = ({ totalUsers, loading }) => {
    return (
        <div className="max-w-[16.25rem]  max-md:max-w-full   max-md:min-h-[3rem]  bg-cpWhite min-h-[5.56rem] py-4  max-md:py-2  max-md:px-4 px-6 rounded-lg border ">
            <div className="flex justify-between mb-2">
                <p className="text-slate-500 max-md:text-sm ">Total Users</p>
                <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                    <PiUserCircleLight className="text-green-600" />
                </div>
            </div>
            {loading ? (
                <p className=" max-md:text-sm">...loading</p>
            ) : (
                <p className="text-base font-semibold max-md:text-xs">
                    {totalUsers}
                </p>
            )}
        </div>
    );
};

export default DetailCard;
