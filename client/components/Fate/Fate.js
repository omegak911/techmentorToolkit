import React, { Component } from 'react';
import styled from 'styled-components';

import themes from './data';

class Fate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      selectedStudent: null,
      students: null,
      studentsTemplate: null,
      theme: null,
    }
  }

  componentWillMount() {
    //let's do a randomizer for what picture/text is available
    console.log(themes)
    let randomIndex = Math.floor(Math.random() * themes.length);
    let theme = themes[randomIndex];
    this.setState({ theme }, () => console.log(this.state));
  }

  selectNewStudent = () => {
    let students = this.state.students.slice();
    console.log('1', students);
    if (students.length === 0) {
      students = this.state.studentsTemplate.slice();
      console.log('2', students);
    }
    let selectedStudentIndex = Math.floor(Math.random() * students.length);
    let selectedStudent = students.splice(selectedStudentIndex, 1);
    this.setState({ selectedStudent, students });
  }

  shuffle = (students) => {
    for (let i = 0; i < students.length; i++) {
      let randomIndex = Math.floor(Math.random() * students.length);
      let temp = students[i];
      students[i] = students[randomIndex];
      students[randomIndex] = temp;
    }
    return students;
  }

  updateStudents = (e) => {
    let { value } = e.target;
    let students = value.split('\n');
    students = this.shuffle(students);
    this.setState({ students, studentsTemplate: students, ready: true });
  }

  render() {
    let { ready, selectedStudent, students, theme } = this.state;
    return (
      <StyledColumns>
        FATE
        {!ready && 
          <StyledColumns>
            Copy and paste list of student names here, separated by \n
            <br/>
            <textarea type="text" cols="30" rows="10" onChange={this.updateStudents}></textarea>
          </StyledColumns>
        }
        {ready &&
          <StyledColumns>
          <StyledImage src={theme.imageUrl} alt="picture"/>
          <button type="button" onClick={this.selectNewStudent}>Sacrifice</button>
          {theme.message}...
          </StyledColumns>
        }
        {selectedStudent && 
          <StyledColumns>
            ...{selectedStudent}
          </StyledColumns>
        }
      </StyledColumns>
    )
  }
}

const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  background-size: contain;
  width: 40%;
`

export default Fate;