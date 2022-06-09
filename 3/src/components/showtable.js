
export const ShowTable = ({...args}) => {
    return (
      <tr >
      <td 
      style=
        {
          {
            width: "100px",
            height: 20,
            color: 'blue',
            fontWeight: 'bold'
          }
        }
      >
       {args[0]} 
      </td>
      <td 
      style=
        {
          {
            width: "100px",
            height: 20,
            color: 'blue',
            fontWeight: 'bold'
          }
        }
      >
       {args[1]} 
      </td>
      <td 
      style=
        {
          {
            width: "100px",
            height: 20,
            color: 'blue',
            fontWeight: 'bold'
          }
        }
      >
       {args[2]} 
      </td>
      <td 
      style=
        {
          {
            width: "100px",
            height: 20,
            color: 'blue',
            fontWeight: 'bold'
          }
        }
      >
       {args[3]} 
      </td>
  </tr>
    )
  }