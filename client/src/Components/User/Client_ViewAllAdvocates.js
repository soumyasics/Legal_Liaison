import React, { useState, useEffect } from 'react';
import './Client_ViewAllAdvocates.css';
import axiosMultipartInstance from '../Constants/FormDataUrl';
import { imageUrl } from '../Constants/Image_Url';

function Client_ViewAllAdvocates() {
  const [currentPage, setCurrentPage] = useState(0);
  const [advocates, setAdvocates] = useState([]);
  const advocatesPerPage = 4;

  useEffect(() => {
    axiosMultipartInstance
      .post('/viewAdvocates')
      .then((res) => {
        if (res.data.status === 200) {
          setAdvocates(res.data.data || []);
        } else {
          setAdvocates([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching advocates:', error);
      });
  }, []);

  const prevPage = () => {
    setCurrentPage(prevPage => (prevPage === 0 ? advocates.length - 1 : prevPage - 1));
  };
  
  const nextPage = () => {
    setCurrentPage(prevPage => (prevPage === advocates.length - 1 ? 0 : prevPage + 1));
  };

  const currentAdvocates = advocates.slice(currentPage, currentPage + advocatesPerPage);
  
  return (
    <div>
      <div className='junior-heading-div container-fluid'>
        <label className='junior-reg-title'>View Advocates</label>
      </div>
      <div className="carousel main-caro">
        <h2 className='heading-padding'>All Advocates</h2>
        <div className="carousel-inner caro-inner-style">
          <button className="carousel-control control-caro prev" onClick={prevPage}>‹</button>
          <div className="carousel-track track-caro">
            {currentAdvocates.map((advocate, index) => (
              <div
                key={index}
                className="carousel-card card-style"
              >
                <div className="card-body card-body-style">
                  <div className='client-main-div'>
                    <div className='client-view-ad-namearea'>
                      <h3>{advocate.name}</h3>
                      <p>{advocate.specialization}</p>
                    </div>
                    <div>
                      <img src={`${imageUrl}/${advocate.profilePic.filename}`} alt={advocate.name} className='image-fluid image-style' />
                    </div>
                    <div className='view-ad-button-div'>
                      <button>View full Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control control-caro next" onClick={nextPage}>›</button>
        </div>
      </div><br/><br/><br/>
    </div>
  );
}

export default Client_ViewAllAdvocates;
