import React, { Component } from "react";
import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";

class CV extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            address: "",
            phoneNumber: "",
            email: "",
            description: ""
        };

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    handleInput(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        const {name, value} = event.target
        this.setState(() => {
            return {
                [name]: value 
            }
        })
    }

    render() {
        return (
            <main>
                <PersonalDetails info={this.state} getInput={this.handleInput} />
                <Education  />
                <WorkExperience />
            </main>
        )
    }
}

export default CV;