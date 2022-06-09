
import './App.css';
import {StudentCard, students, args1} from './components/task0.js';
import {BookCard, books, args2} from './components/task1.js';
import {GroupCard, groups, args3} from './components/task2.js';
import {DinnerCard, dinners, args4} from './components/task3.js';

import {ShowTable} from './components/showtable.js';


function App() {
  return (
    <div>
      <div>
      <p>------Task 0. Информация с массивом пользователей------</p>
     <ShowTable  {...args1}/>

      {students.map((student, key) => {
        return(
          <StudentCard key={key} name={student.name} status={student.status} 
          avatar={student.avatar} status_net={student.status_net} 
          />
        )
      })}
      </div>
      <p>------Task 1. Информация о вашей любимой книге------</p>
      <div>
     <ShowTable  {...args2}/>

      {books.map((book, key) => {
        return(
          <BookCard key={key} book={book.book} author={book.author} 
          genre={book.genre} pages={book.pages} rewiews={book.pages} 
          />
        )
      })}
      </div>

      <p>------Task 2. Информация о вашей любимой музыкальной группе------</p>

      <div>
     <ShowTable  {...args3}/>

      {groups.map((group, key) => {
        return(
          <GroupCard key={key} group={group.group} info={group.info} 
          album={group.album} cover={group.cover} 
          />
        )
      })}
      </div>
      <p>------Task 3. Информация о кулинарном рецепте------</p>

      <div>
     <ShowTable  {...args4}/>

      {dinners.map((dinner, key) => {
        return(
          <DinnerCard key={key} recipe={dinner.recipe} ingredients={dinner.ingredients} 
          method={dinner.method} dinner={dinner.dinner} 
          />
        )
      })}
      </div>
    </div>
  );
}

export default App;
