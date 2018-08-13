import React from "react";

const Form = props => (
    <form onSubmit={props.getweather}>
        <p> Please enter city and country to fetch the weather details:</p>
        <input text="city" name="city" placeholder="Enter City..." />
        <input text="country" name="country" placeholder="Enter Country..." />
        <button>Get Weather</button>
    </form>
);

export default Form;