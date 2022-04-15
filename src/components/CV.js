import React, { Component } from "react";
import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";
import "../styles/CV.css";

class CV extends Component {

    constructor() {
        super()
        this.state = {
            personalInfo: {
                firstName: "",
                lastName: "",
                title: "",
                address: "",
                phoneNumber: "",
                email: "",
                description: ""
            },
            workInfoList: [],
            workInfo: {
                position: "",
                company: "",
                city: "",
                startDate: "",
                finishDate: ""
            },
            educationInfoList: [],
            educationInfo: {
                universityName: "",
                schoolLocation: "",
                degree: "",
                subject: "",
                enrollementDate: "",
                graduationDate: "",
            }
        };

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    handleAdd(event) {
        event.preventDefault()
        console.log(event.target.value)
        this.setState((prevState) => {
            if(event.target.value === "work") {
                let newState = {...prevState}
                let newWorkInfo = {
                    position: "",
                    company: "",
                    city: "",
                    startDate: "",
                    finishDate: ""
                }
                newState.workInfoList = prevState.workInfoList.concat(prevState.workInfo)
                newState.workInfo = newWorkInfo;
                // console.log(prevState)
                // console.log(newState)
                return newState
            } else if (event.target.value === "education") {
                let newState = {...prevState}
                let newEducationInfo = {
                    universityName: "",
                    schoolLocation: "",
                    degree: "",
                    subject: "",
                    enrollementDate: "",
                    graduationDate: "",
                }
                newState.educationInfoList = prevState.educationInfoList.concat(prevState.educationInfo)
                newState.educationInfo = newEducationInfo;
                console.log(prevState)
                console.log(newState)
                return newState
            }
           
        })
    }

    handleInput(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        const {name, value} = event.target
        this.setState((prevState) => {
            
            if(name in prevState.personalInfo) {
                let personalInfo = { ...prevState.personalInfo};
                personalInfo[name] = value
                return {personalInfo}
            } else if (name in prevState.workInfo) {
                let workInfo = {...prevState.workInfo};
                workInfo[name] = value
                return {workInfo}
            } else if (name in prevState.educationInfo) {
                let educationInfo = {...prevState.educationInfo};
                educationInfo[name] = value
                return {educationInfo}
            } else {
                return
            }
        })
    }

    render() {
        return (
            <main className="main--cv">
                <PersonalDetails info={this.state.personalInfo} getInput={this.handleInput} />
                <WorkExperience info={this.state.workInfo} getInput={this.handleInput} add={this.handleAdd}/>
                <Education info={this.state.educationInfo} getInput={this.handleInput} add={this.handleAdd}/>
            </main>
        )
    }
}

export default CV;