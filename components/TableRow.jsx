import Image from "next/image";
import userImage from "../public/user.jpg";

const TableRow = ({
    userData,
    handleisSelected,
    handleSelectedUserId,
    selectedUserId,
    isselected,
}) => {
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
                    src={userImage}
                    alt={username + " " + "image"}
                    width={24}
                    height={24}
                    className="w-6 h-6 ml-4 rounded-full"
                ></Image>
            </td>
            <td>{username}</td>
            <td>{firstName + " " + lastName}</td>
            <td>{email}</td>
            <td>{jobTitle}</td>
            <td>{createdAt.toLocaleString().split("T")[0]}</td>
        </tr>
    );
};

export default TableRow;
