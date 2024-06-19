import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link ,useNavigate } from 'react-router-dom';
import {Header} from './Header'
import {Footer} from './Footer'

const ExperimentByCategory = () => {
  const { className, subjectName } = useParams();
  const [experiments, setExperiments] = useState([]);
 
  const navigate = useNavigate();
//   useEffect(() => {
//     axios.get(`http://localhost:4000/experiments/${className}/${subjectName}/${experimentName}`)
//       .then(response => {
//         setExperiment(response.data);
//       })
//       .catch(error => {
//         alert(error.response.data.message);
//         setError(error.response.data.message);

//         navigate('/');
//       });
//   }, []);

  useEffect(()=>{
    axios.get(`http://localhost:4000/experiments/${className}/${subjectName}`)
        .then(response => {
            setExperiments(response.data);
        })
        .catch(error => console.log(error));
    
  })

 
  

  return (
<>
<Header/>
    

           <div className="container">            
                        
           {
        experiments && experiments.map((res)=>{
          
          return (
        
            <>
            <div className="col-md-4">
                                {/* <a href="" onClick={()=>deleteExperiment(res._id)}> */}
                                    <div className="cr_box">
                                    <img src={`http://localhost:4000/uploads/${res.image}`} width="100%" height="100%" />
                                        <div className="cr_b_content">
                                        <h3 className="crb_h"><Link to={`/experiments/${res._id}`}>{res.name}</Link></h3>
                                            <ul className="crb_li">
                                                <li> Good School </li>
                                                <li>{res.likes}</li>
                                            </ul>
                                        </div>
                                    </div>
                                {/* </a> */}
                            </div>
            
            {/* <tr key={res._id}>

            
   <td>{i+1}</td>
   <td>{res.name}</td>
   <td>{res.selectedClass}</td>
   <td>{res.subject}</td>
   <td><img src={`http://localhost:4000/uploads/${res.image}`} width="150px" height="80px" /></td>
   <td>{res.likes}</td>
   <td><Link to={res._id}><FaRegEdit /></Link></td>
   <td><button onClick={()=>deleteExperiment(res._id)}><RiDeleteBin6Line /></button></td>


</tr> */}

            
            </>
          
          )
        })

        
      }
                            </div> 

                            <br/>
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

export default ExperimentByCategory;
