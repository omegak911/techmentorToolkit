import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addType: null,
      name: '',
      cohort: '',
      password: '',
    }
  }

  handleAddTypeButton = (e) => {
    let { name } = e.target;
    this.setState({ addType: name });
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { addType: endpoint } = this.state;
    axios
      .post(`/api/mockInterview/main/${endpoint}`, this.state)
      .then(this.props.updateMentorStudent)
      .catch(err => console.error(err));

    e.target.reset();
  }

  render() {
    let { addType } = this.state;
    return (
      <StyledCenter>
        Admin
        <div>
          Add a...
          <button type="button" name="student" onClick={this.handleAddTypeButton}>Student</button>
          <button type="button" name="mentor" onClick={this.handleAddTypeButton}>Mentor</button>
          <button type="button" name="admin" onClick={this.handleAddTypeButton}>Admin</button>
        </div>
        {addType &&
          <StyledCenter>
            <br />
            <StyledForm action="" onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="name"/>
              {addType === 'student' && <input type="text" name="cohort" placeholder="cohort"/>}
              {addType !== 'student' && <input type="password" name="password" placeholder="authorization password"/>}
              <button type="submit">submit</button>
            </StyledForm>
          </StyledCenter>
        }
      </StyledCenter>
    )
  }
}

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Add;