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
            className={`text-center cursor-pointer h-14 hover:bg-lightPrimary ${
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
            <td className=" max-md:text-xs">{username}</td>
            <td className=" max-md:text-xs">{firstName + " " + lastName}</td>
            <td className="max-md:hidden ">{email}</td>
            <td className="max-md:hidden ">{jobTitle}</td>
            <td className="max-md:hidden ">
                {createdAt.toLocaleString().split("T")[0]}
            </td>
        </tr>
    );
};

export default TableRow;
