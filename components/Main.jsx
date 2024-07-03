"use client";
import { useEffect, useState } from "react";
import DetailCard from "./DetailCard";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import axios from "axios";
import Loader from "./Loader";
import { IoMdClose } from "react-icons/io";
import Search from "./Search";
import Image from "next/image";
import userImage from "../public/user.jpg";

const Main = () => {
    const [data, setData] = useState([]);
    const [filterdData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isselected, setIsSelected] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState();
    const [result, setResult] = useState("");
    const [imgSrc, setImgSrc] = useState();

    console.log(imgSrc);
    // adding unique id

    data?.map((currentUser, i) => {
        return (currentUser.uid = i);
    });

    const selectedUserData = data?.find(
        (userDetail) => userDetail.uid === selectedUserId
    );

    useEffect(() => {
        setImgSrc(selectedUserData?.avatar);
    }, [selectedUserData]);
    // console.log(selectedUserData);

    useEffect(() => {
        if (result === "") {
            setFilteredData(data);
        } else {
            const filteringData = data.filter((userData) =>
                userData.profile.username
                    .toLowerCase()
                    .includes(result.toLowerCase())
            );
            setFilteredData(filteringData);
        }
    }, [result, data]);

    useEffect(() => {
        const getdata = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(
                    "https://602e7c2c4410730017c50b9d.mockapi.io/users"
                );
                setData(res.data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };
        getdata();
    }, []);

    return (
        <main className="grid grid-cols-5 px-5">
            <div className={`grid ${isselected ? "col-span-4" : "col-span-5"}`}>
                <h1 className="mt-5 mb-5 text-lg font-semibold max-md:mb-3 max-md:mt-3 max-md:text-sm">
                    Users Details
                </h1>
                <DetailCard totalUsers={data?.length} loading={isLoading} />
                <section className="mt-5 max-md:mt-3">
                    <div className="flex gap-[30%] max-md:flex-col max-md:mb-5">
                        <h1 className="mb-5 text-lg font-semibold max-md:mb-3 max-md:text-sm ">
                            All Users
                        </h1>
                        <Search handleResult={setResult} />
                    </div>

                    <div className="h-[25rem]  rounded-lg bg-white shadow-sm w-full  overflow-y-scroll ">
                        <table className="w-full ">
                            <thead className="sticky top-0 h-[3rem] bg-white">
                                <TableHeader />
                            </thead>
                            {!isLoading && (
                                <tbody>
                                    {filterdData?.map((userDetails) => (
                                        <TableRow
                                            key={
                                                userDetails.id +
                                                userDetails.profile.firstName
                                            }
                                            userData={userDetails}
                                            handleisSelected={setIsSelected}
                                            handleSelectedUserId={
                                                setSelectedUserId
                                            }
                                            selectedUserId={selectedUserId}
                                            isselected={isselected}
                                        />
                                    ))}
                                </tbody>
                            )}
                        </table>
                        {isLoading && (
                            <div className="flex items-center justify-center w-full h-[23rem]">
                                <Loader />
                            </div>
                        )}
                        {!error && data.length === 0 && (
                            <div className="flex items-center justify-center w-full h-[23rem]">
                                <p>No data Availble</p>
                            </div>
                        )}

                        {error && (
                            <div className="flex items-center justify-center w-full h-[23rem]">
                                <p>{error.message}</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            {isselected && (
                <div className="right-0 w-full h-screen p-5 bg-white border shadow-sm max-md:absolute">
                    <div className="relative grid col-span-1 ml-5 bg-white shadow-sm">
                        <IoMdClose
                            className="absolute cursor-pointer top-2 right-2 "
                            onClick={() => setIsSelected(false)}
                        />
                        <div className="flex flex-col gap-5 mt-5 ml-4">
                            <p className="text-base font-semibold">
                                User Detail
                            </p>

                            <div>
                                <Image
                                    src={imgSrc}
                                    onError={() => {
                                        setImgSrc(userImage);
                                    }}
                                    alt={selectedUserData + " " + "image"}
                                    width={50}
                                    height={50}
                                    className="ml-4 rounded-full "
                                />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    createdAt
                                </p>
                                <p className="text-sm font-medium text-black">
                                    {selectedUserData.createdAt}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    username
                                </p>
                                <p className="text-sm font-medium text-black">
                                    {selectedUserData.profile.username}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    firstName
                                </p>
                                <p className="text-sm font-medium text-black">
                                    {selectedUserData.profile.firstName}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    lastName
                                </p>
                                <p className="text-sm font-medium text-black">
                                    {selectedUserData.profile.lastName}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    email
                                </p>
                                <p className="text-sm font-medium text-black">
                                    {selectedUserData.profile.email}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Bio
                                </p>
                                <p className="text-sm font-medium text-black">
                                    {selectedUserData.Bio}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    jobTitle
                                </p>
                                <p className="text-sm font-medium text-black">
                                    {selectedUserData.jobTitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Main;
