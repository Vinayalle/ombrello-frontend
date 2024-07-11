import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Header} from './Header'
import {Footer} from './Footer'
import { AiOutlineLike } from "react-icons/ai";
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import RemoveTags from './RemoveTags';

export const Experiment = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [link,setLink]=useState("");
  const loggedData=useContext(UserContext);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}experiments/${id}`);
        
        setPost(response.data);
        setLikes(response.data.likes);
        console.log(response.data);
        setLink(`https://www.youtube.com/embed/${response.data.videoLink}`);

      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [likes]);


  
  const countLikes=async (experimentId)=>{
  
      try {
        const response =await axios.patch(`${import.meta.env.VITE_API_BASE_URL}experiments/${experimentId}/like`,null,
        {
          headers: {
            
            "token":`${loggedData.userloggedIn.token}`
          }
        }
      );

        setLikes(likes + 1);
        
          alert("Post Liked Successfully")
        
       
      
      } catch (error) {
        alert("already liked the post");
      }

    
   
    };
    const [data,setData]=useState([]);
    const [posts,setPosts]=useState([]);
    const [events,setEvents]=useState([]);
    const [perpage,setPerpage]=useState([]);
    const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [experiments, setExperiments] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  // const [selectedExperiment, setSelectedExperiment] = useState('');
    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_API_BASE_URL}experiments/`)
      .then(res=>
        {
          setData(res.data);
        setPerpage(res.data.slice(0,10));
      0
      })
    },[data])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}posts/`)
        .then(res=>
          {
            setPosts(res.data);
        //   setPerpage(res.data.slice(0,10));
        0
        })
      },[posts])
      useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}events/`)
        .then(res=>
          {
            setEvents(res.data);
        //   setPerpage(res.data.slice(0,10));
        0
        })
      },[events])

      useEffect(() => {
   
        axios.get(`${import.meta.env.VITE_API_BASE_URL}classes/`)
        .then(response => {
          setClasses(response.data);
        })
        .catch(error => console.log(error));
    
          axios.get(`${import.meta.env.VITE_API_BASE_URL}subjects/`)
            .then(response => {
              setSubjects(response.data);
            })
            .catch(error => console.log(error));
      
    
        axios.get(`${import.meta.env.VITE_API_BASE_URL}experiments`)
        .then(response => {
            setExperiments(response.data);
        })
        .catch(error => console.log(error));
    
      }, []);
  

  if (!post) return <div>Loading...</div>;

  return (
    <>
       <Header/>
       {/* <div className='ex-container'>
       <h1>{post.name}</h1>
      <img src={`http://localhost:4000/uploads/${post.image}`} width="100%" height="550px" />
      <p>{post.description}</p>
      <p> {post.likes}</p>
      <button onClick={()=>countLikes(post._id)} ><AiOutlineLike  /></button>
      <p>Views: {post.selectedClass}</p>

       </div> */}




       <div id="inner_pages">
            <div className="container">


                <div className="row">
                    <div className="col-md-3">
                        <h3 className="cr_form_h"> Filter </h3>
                        <form id="cr_form_filter">
                            <label> Classes </label>
                            <select className="form-control cr_input" onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
                            <option value="">Select Class</option>
           {classes.map((cls) => (
            <option key={cls._id} value={cls.className}>{cls.className}</option>
          ))}
                            </select>
                            <label> Subject </label>
                            <select className="form-control cr_input" onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject}>
                            <option value="">Select Subject</option>
                                        {subjects.map((subj) => (
            <option key={subj._id} value={subj.name}>{subj.name}</option>
          ))}
                            </select>
                            <div className="fsf_b">
                                <Link to={`/experiment/${selectedClass}/${selectedSubject}`} className="fsf_b">  Go </Link>
                                </div>
                        </form>
                      
                    </div>
                    <div className="col-md-9">
                        <div className="class_expirement_box">
                            <h1 className="cr_p_h"> {post.name} </h1>
                           
                            <img className="img-responsive" id="cr_p_img" src={`${import.meta.env.VITE_API_BASE_URL}uploads/${post.image}`} />
                    
                            {/* <p className="cr_p"> {post.description} </p> */}
                            <p
      dangerouslySetInnerHTML={{__html: post.description}}
    />
                            <div className="cr_p_video">
                           
                            <iframe width="80%" height="450px" src={post.videoLink}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
    </div>
                           

                            <p> {post.likes}</p>
      <button onClick={()=>countLikes(post._id)} ><AiOutlineLike  /></button>
      <p>Views: {post.selectedClass}</p>

      </div>
                    </div>
                </div>
                

            </div>
        </div>
      <Footer/>
    </>
  );
}
