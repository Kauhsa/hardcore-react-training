import React from 'react';
import uuid from 'uuid';
import personService from '../services/person';

class AddPersonForm extends React.PureComponent {
  state = {
    firstName: 'wot',
    lastName: 'watt'
  };

  handleSubmit = e => {
    const { newPerson } = this.state;
    e.preventDefault();
    console.log(newPerson, 'add person');

    this.props.onAdd({
      ...personService.createPerson(),
      ...this.state
    })
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" value={firstName} onChange={e => this.setState({firstName: e.target.value})}/>
        </div>
        <div>
          <input type="text" value={lastName} onChange={e => this.setState({lastName: e.target.value})}/>
        </div>
        <button type="submit">add person</button>
      </form>
    )
  };
}

export default AddPersonForm;
