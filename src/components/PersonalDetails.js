import React, { Component } from "react";
import "../styles/PersonalDetails.css"

class PersonalDetails extends Component{

    render() {
        const {firstName, lastName, title, address, phoneNumber, email, description} = this.props.info
        // console.log(this.props.info)
        return (
            <section className="personal--details">
                <h4 className="personal--detail--title">Personal Details</h4>
                <div className="personal--details--form">
                    <input 
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        onChange={this.props.getInput}
                        value={firstName}
                    />
                    <input 
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        onChange={this.props.getInput}
                        value={lastName}
                    />
                    <input
                        type="text" 
                        placeholder="Title"
                        name="title"
                        onChange={this.props.getInput}
                        value={title} 
                    />
                    <input
                        type="text" 
                        placeholder="Address"
                        name="address"
                        onChange={this.props.getInput}
                        value={address}
                    />
                    <input
                        type="text" 
                        placeholder="Phone number"
                        name="phoneNumber"
                        onChange={this.props.getInput}
                        value={phoneNumber}
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={this.props.getInput}
                        value={email}
                    />
                    <textarea
                        placeholder="Description"
                        name="description"
                        onChange={this.props.getInput}
                        value={description}
                    ></textarea>
                </div>
            </section>
        )
    }
}

export default PersonalDetails;