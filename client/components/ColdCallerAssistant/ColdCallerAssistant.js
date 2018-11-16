import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ColdCallerAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      students: [],
    }
  }

  fetchTeam = (e) => {
    let { query } = this.state;
    e.preventDefault();
    query = query.split('\n');
    let options = {
      params: {
        query,
      } 
    }

    axios.get('/api/coldCallerAssistant', options)
      .then(({ data }) => { 
        console.log(data);
        this.setState({ students: data });
      })
      .catch( err => console.error(err));
  }

  updateQuery = (e) => {
    let query = e.target.value;
    this.setState({ query });
  }

  render() {
    let { query, students } = this.state;
    return (
      <div className="flexCenter flexColumn">
        <form action="" onSubmit={this.fetchTeam}>
          <textarea type="text" value={query} onChange={this.updateQuery} placeholder="Github handles here"/>
          <button type="submit">Query</button>
        </form>
        <br/>
        <StyledText>
          [
          {students.map((student, i) =>
            <StyledOffset key={i}>
              {"{"}
              <br/>
              name: '{student.name}',
              <br />
              photo: '{student.photo}'
              <br/>
              {"},"}
            </StyledOffset>
          )}
          ]
        </StyledText>
      </div>
    )
  }
}

const StyledText = styled.div`
  font-size: .6em;
`

const StyledOffset = styled.div`
  margin-left: 5px;
`

export default ColdCallerAssistant;