import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import '../../../../assets/stylesheets/travelform.css'

const TravelForm = (props) => {

    const animals = ["Lion", "Lion", "Lions", "zebra", "LIzard", "Tiger", "Toad", "Goat", "Giraffe"];
     const [stateSuggestions, setStateSuggestions] = useState([])

     const handleChange = (e) => {
        const value = e.target.value
           let suggestions = [];
           if( value.length > 0){
             const regex = new RegExp(`^${value}`, 'i');
             suggestions = animals.sort().filter(v => regex.test(v)) 
           }
           setStateSuggestions(suggestions)
     }

   

     const renderSuggestions = () => {
         if(stateSuggestions.length === 0){
             return null
         }
         return(
             <div>
             <ul>
                 {stateSuggestions.map((item) => <li>{item}</li>)}
             </ul>
             <GoogleMap />
             </div>
         )
     }



    return (
        <div>
            <form className="form-info">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input  type="text" name="animal" onChange={handleChange} autocomplete="off"/>
            </form>
            {renderSuggestions()}
        </div>
    )
}

export default TravelForm
