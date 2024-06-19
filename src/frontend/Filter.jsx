import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Filter = () => {
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [experiments, setExperiments] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedExperiment, setSelectedExperiment] = useState('');

  

  useEffect(() => {
   
    axios.get('http://localhost:4000/classes/')
    .then(response => {
      setClasses(response.data);
    })
    .catch(error => console.log(error));

      axios.get(`http://localhost:4000/subjects/`)
        .then(response => {
          setSubjects(response.data);
        })
        .catch(error => console.log(error));
  

    axios.get(`http://localhost:4000/experiments`)
    .then(response => {
      setExperiments(response.data);
    })
    .catch(error => console.log(error));

  }, []);

 

  return (
    <div>
      <label>
        Class:
        <select onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
          <option value="">Select Class</option>
          {classes.map((cls) => (
            <option key={cls._id} value={cls.className}>{cls.className}</option>
          ))}
        </select>
      </label>
      <label>
        Subject:
        <select onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject} >
          <option value="">Select Subject</option>
          {subjects.map((subj) => (
            <option key={subj._id} value={subj.name}>{subj.name}</option>
          ))}
        </select>
      </label>
      <label>
        Experiment:
        <select onChange={(e) => setSelectedExperiment(e.target.value)} value={selectedExperiment}  >
          <option value="">Select Experiment</option>
          {experiments.map((exp) => (
            <option key={exp._id} value={exp.name}>{exp.name}</option>
          ))}
        </select>
      </label>
     
        <Link to={`/experiment/${selectedClass}/${selectedSubject}/${selectedExperiment}`}>
          View 
        </Link>
     
    </div>
  );
};

export default Filter;
