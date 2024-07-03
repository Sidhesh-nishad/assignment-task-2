const Loader = ({ type = "normal" }) => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div
                    className={` ${
                        type === "sm" ? "w-5 h-5" : "w-8 h-8"
                    } border-4 border-blue-500 border-dashed rounded-full animate-spin`}
                ></div>
            </div>
        </div>
    );
};

export default Loader;
