import { useEffect, useState } from "react";

const Search = ({ handleResult }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        if (!text) {
            handleResult("");
        }
    }, [handleResult, text]);

    return (
        <div className="max-sm:flex">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="py-1 pl-1 border border-gray-300 rounded-lg shadow-sm outline-none max-sm:w-[60%] text-medium "
                placeholder="Enter User Name "
            />
            <button
                className="px-2 py-1 ml-2 text-white rounded-lg shadow-sm text-medium bg-primary"
                onClick={() => {
                    handleResult(text);
                }}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
