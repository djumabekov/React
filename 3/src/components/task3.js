import dinner1 from '../img/dinner1.png';
import dinner2 from '../img/dinner2.png';
import dinner3 from '../img/dinner3.png';

export const args4 = ["Recipe", "Ingredients", "Method" , "Photo"]  
export const DinnerCard = ({recipe, ingredients, method, dinner}) => {
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
      >{recipe} </td>
          <td  style=
            {
              {
                width: "200px",
                height: 20,
              }
            }>{ingredients} </td>
         <td  style=
            { 
              {
                width: "450px",
                height: 20,
              }
            }>{method} </td>
           <img style=
            {
              {
                marginRight: "100px",
                height: 20,
              }
            }src={dinner} alt="dinner" />
           
      </tr>
    )
  }
  
  export const dinners = [
    {
      recipe: "Soap",
      ingredients: "Meat, potatos, spaggeti",
      method: "boil the water, put the ingredients, cook for 30 minutes",
      dinner: dinner1,
    },
    {
      recipe: "Borsh",
      ingredients: "Meat, beet, cabbage",
      method: "boil the water, put the ingredients, cook for 50 minutes",
      dinner: dinner2,
    },
    {
      recipe: "Porridge",
      ingredients: "Rise, milk, butter",
      method: "boil the milk, put the ingredients, cook for 10 minutes",
      dinner: dinner3,
    },
  ]
