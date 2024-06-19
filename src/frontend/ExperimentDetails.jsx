import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link ,useNavigate } from 'react-router-dom';
import {Header} from './Header'
import {Footer} from './Footer'

const ExperimentDetails = () => {
  const { className, subjectName, experimentName } = useParams();
  const [experiment, setExperiment] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/experiments/${className}/${subjectName}/${experimentName}`)
      .then(response => {
        setExperiment(response.data);
      })
      .catch(error => {
        alert(error.response.data.message);
        setError(error.response.data.message);

        navigate('/');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!experiment) {
    return <div>Loading...</div>;
  }

  return (
<>
<Header/>
    

           <div className="container">            
                        
    <div className=" col-md-4">
                             
                                    <div className="cr_box">
                                    <img src={`http://localhost:4000/uploads/${experiment.image}`} width="100%" height="100%" />
                                        <div className="cr_b_content">
                                        <h3 className="crb_h"><Link to={`/experiments/${experiment._id}`}>{experiment.name}</Link></h3>
                                            <ul className="crb_li">
                                                <li> Good School </li>
                                                <li>{experiment.likes}</li>
                                            </ul>
                                        </div>
                                    </div>
                                {/* </a> */}
                            </div>
                            </div> 
                            <Footer/>
    
                            </>
    // <div>
    //   <h2>{experiment.name}</h2>
    //   <p>Class: {experiment.selectedClass}</p>
    //   <p>Subject: {experiment.subject}</p>
    //   <p>Experiment: {experiment.name}</p>
    // </div>
  );
};

export default ExperimentDetails;
