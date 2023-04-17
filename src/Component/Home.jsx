import { Component } from "react";
import './style/Home.css'
export default class Home extends Component{
    render(){
        return(
            <>
            <h2 > BIKE RIDERS</h2>
            <form>
  <div id = "a1">
  Email address: <br/>   <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>  

    Password:<br/> <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp"/> <br/>  
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  
  
</form>
            </>
        );
    }
}