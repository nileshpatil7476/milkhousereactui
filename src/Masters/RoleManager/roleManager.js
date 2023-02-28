import React from "react";
import $ from 'jquery';

class RoleManager extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {roleMaster: []};
      }
    
      componentDidMount() {
        this.RoleManagerList();
      }
    
      RoleManagerList() {
        $.getJSON('http://localhost/milkhousewebapi/api/master')
          .then((result) => {
              console.log(result);
              this.setState({
                  roleMaster:result
              })
          });
      }
    render(){
        return(
            <div className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                            {this.state.roleMaster.map((val) => (
                                <tr>
                                    <td>{val.roleId}</td>
                                    
                                        <td>{val.role}</td>

                                </tr>
                            ))}
                        </tbody>
            </div>
        );
    }
    
}

export default RoleManager;