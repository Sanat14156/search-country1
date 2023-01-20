import React, {Component} from "react";
import Country from "./Country.json";

class Forms extends Component{
    constructor(){
        super();
        this.data=Country;
    }
    
     render(){
        return(<section className="form-block">
            <form>
                <label htmlFor="search">Search Country Capital</label>
                <input type="text" placeholder="Enter country name" id="search" list="country"></input>
                <datalist id="country">
                  {this.data.map( value => {
                     return(<option value={value.capital} key={Math.random()}>{value.name}</option>);
                  })};
                </datalist>
                <button>Submit</button>
            </form>
        </section>);
     };
};

export default Forms;

