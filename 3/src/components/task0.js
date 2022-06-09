import ava1 from '../img/avatar1.png';
import ava2 from '../img/avatar2.png';
import ava3 from '../img/avatar3.png';

export const StudentCard = ({name, status, avatar, status_net}) => {
    return (
      <tr >
          <td 
          style=
            {
              {
                width: "100px",
                height: 20,
              }
            }
      >{name} </td>
          <td  style=
            {
              {
                width: "100px",
                height: 20,
              }
            }>{status} </td>
          <img style=
            {
              {
                marginRight: "100px",
                height: 20,
              }
            }src={avatar} alt="ava" />
          <td style={{   
            width: "100px",
                height: 20,
                color: (status_net === "offline") ? "red" : "green"}}>{status_net}</td>
      </tr>
    )
  }
  
  export const students = [
    {
      name: "user1",
      status: "admin",
      avatar: ava1,
      status_net: "online"
    },
    {
      name: "user2",
      status: "admin",
      avatar: ava2,
      status_net: "offline"
    },{
      name: "user3",
      status: "user",
      avatar: ava3,
      status_net: "offline"
    },
  ]
  export const args1 = ["Name", "Status", "Avatar " , "Net status"] 