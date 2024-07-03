const TableHeader = () => {
    return (
        <tr className="text-center text-slate-500 ">
            <th> </th>
            <th className="font-medium text-gray-500 max-md:text-sm">
                User Name
            </th>

            <th className="font-medium text-gray-500 max-md:text-sm">
                Full Name
            </th>

            <th className="font-medium text-gray-500 max-md:hidden">Email</th>

            <th className="font-medium text-gray-500 max-md:hidden">
                Job Title
            </th>

            <th className="font-medium text-gray-500 max-md:hidden">
                Created At
            </th>
        </tr>
    );
};

export default TableHeader;
