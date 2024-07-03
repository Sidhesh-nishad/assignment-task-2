const TableHeader = () => {
    return (
        <tr className="text-center text-slate-500 ">
            <th> </th>
            <th className="font-medium text-gray-500 text-medium">User Name</th>

            <th className="font-medium text-gray-500 text-medium">Full Name</th>

            <th className="font-medium text-gray-500 max-md:hidden text-medium">
                Email
            </th>

            <th className="font-medium text-gray-500 max-md:hidden text-medium max-xl:hidden">
                Job Title
            </th>

            <th className="font-medium text-gray-500 max-md:hidden text-medium max-xl:hidden">
                Created At
            </th>
        </tr>
    );
};

export default TableHeader;
