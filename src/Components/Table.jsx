import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto p-3 mt-6 rounded-lg border border-gray-200 ">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-300">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-6 py-3 text-sm font-medium text-gray-600"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((row, idx) => (
            <tr key={idx} className={`hover:bg-[#365A4C]/10 `}>
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-6 py-4 text-medium font-medium text-gray-700"
                >
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
