import React, { Component } from "react";
import "../styles/Education.css"


class Education extends Component {

    render(){
        const {universityName, schoolLocation, degree, subject, enrollementDate, graduationDate} = this.props.info
        return (
            <section className="education--details">
                <h4 className="education--details--title">Educational Background</h4>
                <div className="education--details--form">
                    <input 
                        type="text"
                        placeholder="University"
                        name="universityName"
                        onChange={this.props.getInput}
                        value={universityName}
                    />
                    <input 
                        type="text"
                        placeholder="city"
                        name="schoolLocation"
                        onChange={this.props.getInput}
                        value={schoolLocation}
                    />
                    <input
                        type="text" 
                        placeholder="Degree"
                        name="degree"
                        onChange={this.props.getInput}
                        value={degree} 
                    />
                    <input
                        type="text" 
                        placeholder="Subject"
                        name="subject"
                        onChange={this.props.getInput}
                        value={subject}
                    />
                    <input
                        type="date" 
                        placeholder="From"
                        name="enrollementDate"
                        onChange={this.props.getInput}
                        value={enrollementDate}
                    />
                    <input 
                        type="date"
                        placeholder="To"
                        name="graduationDate"
                        onChange={this.props.getInput}
                        value={graduationDate}
                    />
                    <button value="education" onClick={this.props.add}>Add</button>
                </div>
                
            </section>
        )
    }
}

export default Education;