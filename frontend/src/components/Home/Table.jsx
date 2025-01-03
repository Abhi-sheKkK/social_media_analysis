function Table({ data }) {
    return (
      <table className="table-auto w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Post ID</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Likes</th>
            <th className="px-4 py-2">Shares</th>
            <th className="px-4 py-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.post_id}</td>
              <td className="border px-4 py-2">{row.type}</td>
              <td className="border px-4 py-2">{row.likes}</td>
              <td className="border px-4 py-2">{row.shares}</td>
              <td className="border px-4 py-2">{row.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  