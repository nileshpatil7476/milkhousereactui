import React from "react";
import $ from 'jquery';

export default class UserList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {person: []};
    }
  
    componentDidMount() {
      this.UserList();
    }
  
    UserList() {
      $.getJSON('http://localhost/milkhousewebapi/api/users')
        .then((result) => {
            console.log(result);
            this.setState({
                person:result
            })
        });
    }
  
    render() {
        return (
            <><div className="table">
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>address</th>
                        </thead>
                        <tbody>
                            {this.state.person.map((val) => (
                                <tr>
                                    <td>{val.name}</td>
                                    {val.address.map((a) => (
                                        <td>{a.city}</td>
                                    ))}

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div></>
                );
    }
  }

// let data = getDetails();

// // componentDidMount(){
    
// // };

// function getDetails() {
    
  
// }

// const UsersMaster = () => {
    
    
//     return (
//         <div className="table">
//             <table>
//                 <thead>
//                     <th>Name</th>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((val) =>(
//                             <tr>
//                                 <td>{val.Name}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );

// }

// export default UsersMaster;