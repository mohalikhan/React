import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderTitleField(field) {
        return (
            <div>
                <input
                    {...field.input} //shortcut JXX to manually wire up all method, like on onChange, onblur etc with input
                />
            </div>
        );
    }

    render() {
        return (
           <form>
                <Field
                    name="title"
                    component={this.renderTitleField}
                />
           </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);