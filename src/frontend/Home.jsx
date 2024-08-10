import React from 'react';

import './plugins/css/style.css';
import './plugins/css/main.css';
import './plugins/js/main';
import Bt1 from './images/bt1.jpg';
import Bt3 from './images/bt3.jpg';
import Bt2 from './images/bt2.jpg';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Home = () => {

    const [data,setData]=useState([]);
    const [products,setProducts]=useState([]);
    const [posts,setPosts]=useState([]);
    const [events,setEvents]=useState([]);
    const [perpage,setPerpage]=useState([]);
    const [perpageProd,setPerpageProd]=useState([]);
    
    const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [experiments, setExperiments] = useState([]);
  const [experimentsByFiter, setExperimentsByFilter] = useState([]);
  const [selectedClass, setSelectedClass] = useState('class6');
  const [selectedSubject, setSelectedSubject] = useState('Subject2');
  const [selectedExperiment, setSelectedExperiment] = useState('');
    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_API_BASE_URL}experiments/`)
      .then(res=>
        {
          setData(res.data);
        setPerpage(res.data.slice(0,10));
      
      })
    },[data])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_BASE_URL}products/`)
        .then(res=>
          {
            setProducts(res.data);
          setPerpageProd(res.data.slice(0,3));
        
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


      useEffect(() => {
        if (selectedClass && selectedSubject ) {
            axios.get(`${import.meta.env.VITE_API_BASE_URL}experiments/${selectedClass}/${selectedSubject}`)
                .then(response => {
                   
                    
                    setExperimentsByFilter(response.data);
                        console.log(response.data);

                    
                    
                })
                .catch(error => console.log(error));
        } else {
            setExperiments([]);
        }
    }, [selectedClass,selectedSubject]);
    




  return (
    <>
    <div id="banner_tabs">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12">
                        <div className="resources-hero" data-module="home-hero">
                            <ul className="b_tab_list">

                            {
        events && events.map((res)=>{
            // const date = new Date(res.date);

            // const month = date.toLocaleString('en-US', { month: 'short' }); // "Mar"
            // const day = date.toLocaleString('en-US', { day: 'numeric' }); // "21"
            
         
          return (
            <>
           <li className="b_tab">
                                    <button className="banner_tab_button" data-target="tab1" >
                                        <h3 className=" b_t_h">{res.name} </h3>
                                    </button>
                                        <div id="home-hero" className="home-tab-body tab1">
                                        {/* <h4 className="bt_sh"> Announcement </h4> */}
                                        <p
      dangerouslySetInnerHTML={{__html: res.description}}
    />
                                        <Link to={`/events/${res._id}`}><a className="button b_t_hb" href="">View »</a></Link>
                                        {/* <a className="button b_t_nb" href="">Join AACT »</a> */}
                                        <div className="b_tab_img">
                                            <img src={`${import.meta.env.VITE_API_BASE_URL}uploads/${res.image}`} className="img-responsive" />
                                        </div>
                                    </div>
                                </li>

           
         
       
            
            </>
          
          )
        })

        
      }

                                {/* <li className="b_tab">
                                    <button className="banner_tab_button" data-target="tab1" >
                                        <h3 className=" b_t_h">AACT Membership Benefits</h3>
                                    </button>
                                        <div id="home-hero" className="home-tab-body tab1">
                                        <h4 className="bt_sh"> Announcement </h4>
                                        <p className="b_t_p"> AACT is a community of teachers of chemistry who share strategies, find support, ask questions, and overcome classNameroom challenges. Join AACT to access resources, professional development, and other member benefits. </p>
                                        <a className="button b_t_hb" href="">View AACT Member Benefits »</a>
                                        <a className="button b_t_nb" href="">Join AACT »</a>
                                        <div className="b_tab_img">
                                            <img src={Bt1} className="img-responsive" />
                                        </div>
                                    </div>
                                </li>

                                <li className="b_tab">
                                    <button className="banner_tab_button" data-target="tab2" >
                                        <h3 className=" b_t_h"> WEBINAR: A Deeper Dive into Project-Based Learning </h3>
                                    </button>
                                        <div id="home-hero" className="home-tab-body tab2">
                                        <h4 className="bt_sh"> Professional Development </h4>
                                        <p className="b_t_p"> AACT is a community of teachers of chemistry who share strategies, find support, ask questions, and overcome classNameroom challenges. Join AACT to access resources, professional development, and other member benefits. </p>
                                        <a className="button b_t_hb" href=""> Register Now »</a>
                                        <a className="button b_t_nb" href=""> View All Webniars »</a>
                                        <div className="b_tab_img">
                                            <img src="images/bt2.jpg" className="img-responsive" />
                                        </div>
                                    </div>
                                </li>

                                <li className="b_tab">
                                    <button className="banner_tab_button" data-target="tab3" >
                                        <h3 className=" b_t_h"> GET INVOLVED: Participate in Our Lesson Plan Contest! </h3>
                                    </button>
                                        <div id="home-hero" className="home-tab-body tab3">
                                        <h4 className="bt_sh"> Opportunities </h4>
                                        <p className="b_t_p"> AACT is a community of teachers of chemistry who share strategies, find support, ask questions, and overcome classroom challenges. Join AACT to access resources, professional development, and other member benefits. </p>
                                        <a className="button b_t_hb" href=""> Submit an Idea »</a>
                                        <a className="button b_t_nb" href=""> Other Ways to Get Involved »</a>
                                        <div className="b_tab_img">
                                            <img src="images/bt3.jpg" className="img-responsive" />
                                        </div>
                                    </div>
                                </li> */}

                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <br/>

        <div id="find_search">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="find_box_search">
                            <h2 className="fs_h"> Find a Resource </h2>
                            <form id="find_search_form">
                                <div className="fsf_b">
                                    <span>I'm a</span>
                                    <div className="form-group">
                                        <label> Grade Level </label>
                                        <select className="form-control fs_form" onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
                                        <option value="class6">Select Class</option>
           {classes.map((cls) => (
            <option key={cls._id} value={cls.className}>{cls.className}</option>
          ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="fsf_b">
                                    <span>looking for</span>
                                    <div className="form-group">
                                        <label> Resource </label>
                                        <select className="form-control fs_form" onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject}>
                                        <option value="Subject2">Select Experiment</option>
                                        {subjects.map((subj) => (
            <option key={subj._id} value={subj.name}>{subj.name}</option>
          ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="fsf_b">
                                    <span>on</span>
                                    <div className="form-group">
                                        <label> Topic* </label>
                                        <select className="form-control fs_form" onChange={(e) => setSelectedExperiment(e.target.value)} value={selectedExperiment} required>
                                        <option value="">Select Experiment</option>
                                        {experimentsByFiter.map((exp) => (
            <option key={exp._id} value={exp.name}>{exp.name}</option>
          ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="fsf_b">
                                <Link to={`/experiment/${selectedClass}/${selectedSubject}/${selectedExperiment}`} className="fsf_btn">  Go </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="classNameroom_resources">
            <div className="container">


                <div className="row">
                    <div className="col-md-8">

                        <h2 className="cr_h"> Classroom Resources </h2>
                        
                        <div className="row">




                           

                            {

// {experimentsByFiter.map((exp) => (
   
//   ))}
        perpage && experimentsByFiter.map((res)=>{
          
          return (
        
            <>
            <div className="col-md-4">
                                {/* <a href="" onClick={()=>deleteExperiment(res._id)}> */}
                                    <div className="cr_box">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}uploads/${res.image}`} width="100%" height="100%" />
                                        <div className="cr_b_content">
                                        <h3 className="crb_h"><Link to={`http://3.106.124.101:5000/experiments/${res._id}`}>{res.name}</Link></h3>
                                            <ul className="crb_li">
                                                <li> Good School </li>
                                                <li>{res.likes}</li>
                                            </ul>
                                        </div>
                                    </div>
                                {/* </a> */}
                            </div>

                            
            
      
            
            </>
          
          )
        })

        
      }



                            {/* <div className="col-md-4">
                                <a href="className-one-expirement.html">
                                    <div className="cr_box">
                                        <img className="img-responsive" src={Bt3} />
                                        <div className="cr_b_content">
                                            <h3 className="crb_h"> className 6 Expirement </h3>
                                            <ul className="crb_li">
                                                <li> Good School </li>
                                                <li> 100 Views </li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                            </div> */}


                            
                        </div>

                        <h2 className="cr_h"> Professional Development </h2>

                        {/* <div className="a_box">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={Bt2} alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <div className="a_text_box">
                                        <h3 className="a_h"> Blog Post 1 </h3>
                                        <p className="a_p"> Lorem Ipsum is simply dummy text of the printing and
                                            typesetting
                                            industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever.
                                        </p>
                                        <a href="blog_one.html"><button className="a_btn"> Read More </button></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        


                        {
        posts && posts.map((res)=>{
     
          return (
            <>
            

                            <div className="a_box">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={`${import.meta.env.VITE_API_BASE_URL}uploads/${res.image}`} alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <div className="a_text_box">
                                        <h3 className="a_h"> {res.name} </h3>

                                        <p
      dangerouslySetInnerHTML={{__html: res.description}}
    />
                                        {/* <p className="a_p"> {res.description}
                                        </p> */}
                                        <Link to={`/posts/${res._id}`}><button className="a_btn"> Read More </button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
         
       
            
            </>
          
          )
        })

        
      }

                        {/* <div className="a_box">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={Bt2} alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <div className="a_text_box">
                                        <h3 className="a_h"> Blog Post 3 </h3>
                                        <p className="a_p"> Lorem Ipsum is simply dummy text of the printing and
                                            typesetting
                                            industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever.
                                        </p>
                                        <a href="blog_one.html"><button className="a_btn"> Read More </button></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    <div className="col-md-4">
                            
                        <ul className="home_sidebar"> <h2 className="hs_h"> News & Updates </h2>


                        {
        events && events.map((res)=>{
            const date = new Date(res.date);

            const month = date.toLocaleString('en-US', { month: 'short' }); // "Mar"
            const day = date.toLocaleString('en-US', { day: 'numeric' }); // "21"
            
         
          return (
            <>
           

            <li> <span> {month} <br/> <span className="hs_day">{day}</span> </span> <a href="#" className='news-title' ><Link to={`/events/${res._id}`} className='news-title'> {res.name} </Link></a> </li>      
         
       
            
            </>
          
          )
        })

        
      }
                            
                        </ul>

                        <ul className="home_sidebar"> <h2 className="hs_h"> Upcoming & Recent Webinars -new </h2>
                            <li> <span> Mar <br/> <span className="hs_day">21</span> </span> <a href="#" className='news-title'> News & Update Heading 1 </a> </li>
                            <li> <span> Mar <br/> <span className="hs_day">21</span> </span> <a href="#" className='news-title'> News & Update Heading 2 </a> </li>
                            <li> <span> Mar <br/> <span className="hs_day">21</span> </span> <a href="#" className='news-title'> News & Update Heading 3 </a> </li>
                            <li> <span> Mar <br/> <span className="hs_day">21</span> </span> <a href="#" className='news-title'> News & Update Heading 4 </a> </li>
                            <li> <span> Mar <br/> <span className="hs_day">21</span> </span> <a href="#" className='news-title'> News & Update Heading 5 </a> </li>
                            <li> <span> Mar <br/> <span className="hs_day">21</span> </span> <a href="#" className='news-title'> News & Update Heading 6 </a> </li>
                        </ul>

                    </div>

                </div>

            </div>
        </div>

        <div id="Products-services">
            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <h2 className="cr_h"> Product & Services </h2>
                    </div>
                </div>

                <div className="row">
                 

                    {
        perpageProd && perpageProd.map((res)=>{
          
          return (
        
            <>
           

                            <div className="col-md-4">
                        <div className="product_box">
                            <div className="productb_img">
                                <img className="img-responsive" src={`${import.meta.env.VITE_API_BASE_URL}uploads/${res.image}`} />
                            </div>
                            <div className="product_content">
                                <h3 className="product_b_h"> {res.name} </h3>
                                <p className="product_b_p"> ₹ {res.price}</p>
                                <Link to={`/products/${res._id}`}><button className="product_b_btn"> Buy Now </button></Link>
                            </div>
                        </div>
                    </div>
            
     
            
            </>
          
          )
        })

        
      }

                  
                </div>

            </div>
        </div>
    </>
  )
}

export  default Home;
