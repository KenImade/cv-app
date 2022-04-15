import React, { Component } from "react";
import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";

class CV extends Component {

    render() {
        return (
            <main>
                <Education />
                <PersonalDetails />
                <WorkExperience />
            </main>
        )
    }
}

export default CV;