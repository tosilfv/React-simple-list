export const CowForm = ({
  style,
  name,
  color,
  age,
  value,
  formError,
  handleSubmit,
}) => {
  return (
    <form style={style.form} onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <th>
              <label htmlFor="name">name</label>
            </th>
            <td>
              <input type="text" id="name" name="name" ref={name} />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="color">color</label>
            </th>
            <td>
              <input type="text" id="color" name="color" ref={color} />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="age">age</label>
            </th>
            <td>
              <input type="number" id="age" name="age" ref={age} />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="value">value</label>
            </th>
            <td>
              <input type="number" id="value" name="value" ref={value} />
            </td>
          </tr>
        </tbody>
      </table>
      <>
        {formError && (
          <span style={style.formError}>Please fill out the Form.</span>
        )}
      </>
      <br />
      <button style={style.buttonAdd}>Add</button>
    </form>
  );
};
