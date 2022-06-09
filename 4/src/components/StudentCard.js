import React from 'react';
import {getStudents} from '../data/Students'
import Journal from '../App'


class StudentCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {students: []};
      this.addMark = this.addMark.bind(this);
      this.deleteMark = this.deleteMark.bind(this);
      this.deleteStudent = this.deleteStudent.bind(this);
    }
    
    componentDidMount(){
        var result =  getStudents();
        this.setState({students: result})
      } 
    
   
    render() {
        return (
        <Journal 
            students={this.state.students} 
            addMark={this.addMark} 
            deleteMark={this.deleteMark} 
            deleteStudent={this.deleteStudent}>
        </Journal> 
        )
    }  
    addMark(index){
        let mark = prompt("Введите оценку");
        let temp = this.state.students;
        temp[index].marks.push(mark);
        this.setState({students: temp})
    } 

    deleteMark(index, i){
        let temp = this.state.students;
        temp[index].marks.splice(i, 1);
        this.setState({students: temp})
    } 
    
    deleteStudent(index) { 
        let temp = this.state.students;
        temp.splice(index, 1);
        this.setState({students: temp})
      }
    
}  


export default StudentCard;
