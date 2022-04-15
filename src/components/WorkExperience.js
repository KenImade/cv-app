import React, { Component } from "react";
import "../styles/WorkExperience.css";

class WorkExperience extends Component {

    render() {
        const {position, company, city, startDate, finishDate} = this.props.info
        const today = new Date()
        console.log(today)
        return (
            <section className="work--experience">
                <h4 className="work--experience--title">Work experience</h4>
                <div className="work--experience--form">
                    <input 
                        type="text"
                        placeholder="position"
                        name="position"
                        onChange={this.props.getInput}
                        value={position}
                    />
                    <input 
                        type="text"
                        placeholder="Company"
                        name="company"
                        onChange={this.props.getInput}
                        value={company}
                    />
                    <input 
                        type="text"
                        placeholder="city"
                        name="city"
                        onChange={this.props.getInput}
                        value={city}
                    />
                    <input 
                        type="date"
                        placeholder="Start Date"
                        name="startDate"
                        onChange={this.props.getInput}
                        value={startDate}
                    />
                    <input 
                        type="date"
                        placeholder="Finish Date"
                        name="finishDate"
                        onChange={this.props.getInput}
                        value={finishDate}
                    />

                    <button onClick={this.props.add}>Add</button>
                </div>
                
            </section>
        )
    }
}

export default WorkExperience;