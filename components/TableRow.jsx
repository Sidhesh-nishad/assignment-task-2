import Image from "next/image";
import userImage from "../public/user.jpg";
import { useEffect, useState } from "react";

const TableRow = ({
    userData,
    handleisSelected,
    handleSelectedUserId,
    selectedUserId,
    isselected,
}) => {
    const [isImageError, setIsImageError] = useState(false);
    const { username, firstName, lastName, email } = userData.profile;
    const { createdAt, avatar, jobTitle, uid } = userData;

    return (
        <tr
            className={`text-center cursor-pointer h-10 hover:bg-lightPrimary ${
                isselected && selectedUserId === uid ? "bg-lightPrimary" : ""
            }`}
            onClick={() => {
                handleisSelected(true);
                handleSelectedUserId(uid);
            }}
        >
            <td>
                <Image
                    src={isImageError ? userImage : avatar}
                    onError={() => setIsImageError(true)}
                    alt={username + " " + "image"}
                    width={24}
                    height={24}
                    className="w-6 h-6 ml-4 rounded-full"
                />
            </td>
            <td className=" text-medium">{username}</td>
            <td className=" text-medium">{firstName + " " + lastName}</td>
            <td className="text-medium max-md:hidden ">{email}</td>
            <td className="text-medium max-md:hidden max-xl:hidden ">
                {jobTitle}
            </td>
            <td className="text-medium max-md:hidden max-xl:hidden ">
                {createdAt.toLocaleString().split("T")[0]}
            </td>
        </tr>
    );
};

export default TableRow;
