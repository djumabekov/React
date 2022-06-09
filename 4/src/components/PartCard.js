import React from 'react';
import {getComputerParts} from '../data/ComputerParts'
import {Orders} from '../App'


class PartCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {parts: [], isClicked: false};
      this.addToOrder = this.addToOrder.bind(this);
    }
    
    componentDidMount(){
        var result =  getComputerParts();
        this.setState({parts: result, isClicked: this.state.isClicked})
      }
    
   
    render() {
        return (
            
            <div>
                <br /><br />
                <p>2. Страница «Сборка компьютеров».</p>
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
            this.state.parts.map( (part)=>
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
            <button onClick={()=>{this.addToOrder()}}>Add to order</button>
            {this.state.isClicked ? <Orders parts={this.state.parts}/> : null }
            </div>
        )
    }  

    addToOrder(){
        this.setState({isClicked : true})
    } 

    
}  


export default PartCard;
