export const getStatusClass = (data) => {
  switch (data) {
    case "Pending":
      return "bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold";
    case "In progress":
      return "bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold";
    case "Inactive":
      return "bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold";
    case "Fixed":
      return "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold";
    case "Completed":
      return "bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold";
    case "Active":
      return "bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold";
    default:
      return "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold";
  }
};
