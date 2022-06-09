export const args2 = ["Book", "Author", "Genre" , "Pages", "Rewiews"] 

export const BookCard = ({book, author, genre, pages}) => {
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
      >{book} </td>
          <td  style=
            {
              {
                width: "200px",
                height: 20,
              }
            }>{author} </td>
         <td  style=
            {
              {
                width: "200px",
                height: 20,
              }
            }>{genre} </td>
           <td  style=
            {
              {
                width: "200px",
                height: 20,
              }
            }>{pages} </td>
           
      </tr>
    )
  }
  
  export const books = [
    {
      book: "Hurry Potter",
      author: "Joahn Rowling",
      genre: "Fantasy",
      pages: "600",
    },
    {
      book: "Robinson Crusoe",
      author: "Daniel Defoe",
      genre: "Adventure",
      pages: "800",
    },
    {
      book: "Gulliver’s Travels",
      author: "Jonathan Swift",
      genre: "Tale",
      pages: "700",
    },
  ]
