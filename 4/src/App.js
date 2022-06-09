import React from 'react';

class Journal extends React.Component {

    render(){
      return (
        <div>
          <p>1. Создать приложение «Журнал» с компонентом «Карточка студента». </p>
        <table border="1" style={{borderCollapse:"collapse"}} id="grid" className="sortable">
        <thead>  
            <tr>
                <th data-type="string">Name</th>
                <th data-type="string">Lastname</th>
                <th data-type="string">Marks</th>
                <th data-type="action">Add mark</th>
                <th data-type="action">Delete student</th>
            </tr>
        </thead>
        <tbody>
        {
        this.props.students.map( (student, index)=>
        {
            return (              
                <tr> 
                    <td>{student.name}</td>
                    <td>{student.lastname}</td>
                    <td>{student.marks.map((item, i) => (<span  style={{cursor:"pointer"}} onClick={()=>{this.props.deleteMark(index, i)}} >{item}, </span>))}</td>
                    <td><button onClick={()=>{this.props.addMark(index)}}>Add mark</button></td>
                    <td><button onClick={()=>{this.props.deleteStudent(index)}}>Delete students</button></td>
                </tr> 
                )
            } 
        )
        }
        </tbody>
      </table>        
      <span style={{fontSize: 10}}>*Для удаления оценки нажмите на нее</span>
      </div>
      )
  }
}

export class Orders extends React.Component {

  render(){
    return (
      <div>
        <p>Заказ: </p>
      <table border="1" style={{borderCollapse:"collapse"}} id="grid" className="sortable">
      <thead>  
          <tr>
              <th data-type="string">Model</th>
              <th data-type="string">Description</th>
              <th data-type="string">Price</th>
          </tr>
      </thead>
      <tbody>
      {
      this.props.parts.map( (part)=>
      {
          return (              
              <tr> 
                  <td>{part.model}</td>
                  <td>{part.description}</td>
                  <td>{part.price}</td>
              </tr> 
              )
          } 
      )
      }
      </tbody>
    </table>        
    </div>
    )
}
}

export default Journal;
