import React, { Component } from 'react';

class Returns extends Component {
    state = { 
        data:{}
     }
     componentDidMount(){
        fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
        .then(res => res.json()) 
        .then(data =>{
            this.setState({data:data})
        })
        
    }
    render() { 
        return ( 
            <div className="mr-4 mr-md-5">
                <p className="mb-0">Returns</p>
                <h4>{this.state.data.returns}</h4>
          </div>
         );
    }
}
 
export default Returns;