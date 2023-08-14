const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satalite</th>
          <th>launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data, id)=> {
            let status = "Active"
            if(!data.operational) {
              status = "Inactive"


            }
            return (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td>{data.launchDate}</td>
                <td>{status}</td>
              </tr>
            )
        })}
        </tbody>
      </table>
  );
};

export default Table;