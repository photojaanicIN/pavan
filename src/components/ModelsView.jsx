import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './ModelView.css'
import Button from '@mui/material/Button';
import DefaultPlayground from './DefaultPlayground'
import Pillow from "./Pillow";
import Mug from './Mug';
import PhotoFrame from './PhotoFrame';
import CanvModel from './CanvModel';


const ModelsView = () => {
    return (
        <>
            <Router>
                <div>
                   <Routes>
                        <Route exact path="/" element={<Pillow />} /> 
                        <Route path="/mug" element={<Mug />} />  
                        <Route path="/canvModel" element={<CanvModel />} />
                        <Route path="/photoFrame" element={<PhotoFrame />} />
                        <Route path="/defaultPlayground" element={<DefaultPlayground />} /> 
                    </Routes>
                    <div className='flex-container'>
                      
                                <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" style={{margin: '6px'}}>View Pillow</Button></Link>
                      
                                <Link to="/Mug" style={{ textDecoration: 'none' }}><Button variant="contained" style={{margin: '6px'}}>View Mug</Button></Link>
                  
                                <Link to="/CanvModel" style={{ textDecoration: 'none' }}><Button variant="contained" style={{margin: '6px'}}>View Canvas</Button></Link>

                                <Link to="/PhotoFrame" style={{ textDecoration: 'none' }}><Button variant="contained" style={{margin: '6px'}}>Photo Frame</Button></Link>
                        
                                <Link to="/DefaultPlayground" style={{ textDecoration: 'none' }}><Button variant="contained" style={{margin: '6px'}}>View DefaultPlayground</Button></Link>
                      
                    </div>
                </div>
            </Router>
        </>
    )
}

export default ModelsView;

