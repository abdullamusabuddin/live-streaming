import React from 'react';
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
    renderError({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }
    onSubmit = (formValue) => {
        this.props.onSubmit(formValue)
    }
    render() {
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Titel" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <button className="ui button primary" >Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValue => {
    const errors = {};
    if (!formValue.title) {
        errors.title = "You must enter a title"
    }

    if (!formValue.description) {
        errors.description = "You must enter a description"
    }

    return errors;
});

export default reduxForm({ form: "stremForm", validate: validate })(StreamForm);

