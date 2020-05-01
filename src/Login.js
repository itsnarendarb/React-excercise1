
import React from 'react'
class Login extends React.Component{
    constructor(props){
super(props)
console.log(props.name,"constructor   ====",props.address);
this.state={
    name:"xyz",
    username:'',

    mobile:'',
    phone:'',
    mobile2:'',

}
this.handleusernameChange = this.handleusernameChange.bind(this);
this.phoneChange2 = this.phoneChange2.bind(this);


    }
//binding not required
      phoneChange1=(event)=>{
        console.log(event.target.value);
        this.setState({
            phone: event.target.value
        });
    }
  // binding must constructor  or tag 
     phoneChange(e){
        this.setState({
            mobile: e.target.value
        });
        
        console.log(e.target.value);
    }
 
    phoneChange2(e){
        this.setState({
            mobile2: e.target.value
        });
        
        console.log(e.target.value);
    }
 
    handleusernameChange(e) {
        this.setState({
            username: e.target.value
        });
        console.log(e.target.value)
     //   console.log(e.target.value)

    }

    render() {
        return (
          <div>
            Hello  this props recieved from App {this.props.name}<br></br>
           Hello  this state of Login  {this.state.name}
           

           
               <h1>address</h1>
             
               <p>  {this.props.address.Permaddress}</p>
            <p></p> {this.props.address.CurrAddress} 
                   
               
            
 <br></br><br></br>
 <input type="text" value={this.state.phone} onChange={this.phoneChange1}></input>

 current phone value is {this.state.phone}<br></br>
 <br></br>
 <input type="text" value={this.state.mobile2} onChange={this.phoneChange2}></input>
 current mobil
  value is {this.state.mobile2}  <br></br><br></br>



 <input type="text" value={this.state.mobile} onChange={this.phoneChange.bind(this)}></input>
 current mobil
  value is {this.state.mobile}  <br></br><br></br>

 <label>Username</label>
                                <input type="text" name="username"  id="username"
                                       value={this.state.username} onChange={this.handleusernameChange}
                                       placeholder="Enter Username"/>
     <br></br><br></br>
 
           
     current username
  value is {this.state.username}

        
          </div>
        );}
    
}
export default Login;