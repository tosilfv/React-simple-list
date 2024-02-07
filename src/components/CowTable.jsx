export const CowTable = ({ style, cows, totals, handleRemove }) => {
  return (
    <table style={style.table}>
      <caption style={style.footer}>Table of Cows</caption>
      <thead>
        <tr>
          <th scope="col" style={style.table}>
            Name
          </th>
          <th scope="col" style={style.table}>
            Color
          </th>
          <th scope="col" style={style.table}>
            Age
          </th>
          <th scope="col" style={style.table}>
            Value
          </th>
          <th scope="col" style={style.table}>
            Id
          </th>
        </tr>
      </thead>
      <tbody style={style.tableRow}>
        {cows.map((cow) => (
          <tr key={cow.id}>
            <th scope="row" style={style.table}>
              {cow.name}
            </th>
            <td style={style.table}>{cow.color}</td>
            <td style={style.table}>{cow.age}</td>
            <td style={style.table}>{cow.value}</td>
            <td style={style.table}>{cow.id}</td>
            <td>
              <button
                style={style.buttonRemove}
                onClick={() => handleRemove(cow.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        {totals.map((total) => (
          <tr key={total.count}>
            <th scope="row" style={style.table}>
              {total.name}
            </th>
            <td style={style.table}>{total.count}</td>
            <td style={style.table}></td>
            <td style={style.table}>{total.amount}</td>
            <td style={style.table}></td>
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
