import cover1 from '../img/cover1.png';
import cover2 from '../img/cover2.png';
import cover3 from '../img/cover3.png';

export const args3 = ["Group", "Info", "Album" , "Cover"]  
export const GroupCard = ({group, info, album, cover}) => {
    return (
      <tr >
          <td 
          style=
            {
              {
                width: "200px",
                height: 20,
              }
            }
      >{group} </td>
          <td  style=
            {
              {
                width: "200px",
                height: 20,
              }
            }>{info} </td>
         <td  style=
            {
              {
                width: "200px",
                height: 20,
              }
            }>{album} </td>
           <img style=
            {
              {
                marginRight: "100px",
                height: 20,
              }
            }src={cover} alt="cover" />
           
      </tr>
    )
  }
  
  export const groups = [
    {
      group: "The Beatles",
      info: "Pop",
      album: "Revolver",
      cover: cover1,
    },
    {
      group: "Queen",
      info: "Rock",
      album: "The miracle",
      cover: cover2,
    },
    {
      group: "Scorpions",
      info: "Rock",
      album: "Rock Believer",
      cover: cover3,
    },
  ]
