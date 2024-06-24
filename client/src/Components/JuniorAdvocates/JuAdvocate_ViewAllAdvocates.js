import React, { useEffect, useState } from "react";
import axiosMultipartInstance from "../Constants/FormDataUrl";
import { imageUrl } from "../Constants/Image_Url";
import { Link, useParams } from "react-router-dom";

function JuAdvocate_ViewAllAdvocates() {
  const [currentPage, setCurrentPage] = useState(0);
  const [profile, setProfile] = useState("");
  const [advocates, setAdvocates] = useState([]);
  const advocatesPerPage = 4;

  const { id } = useParams();
  const jid = localStorage.getItem("junioradvocateId");

  console.log(profile);

  useEffect(() => {
    axiosMultipartInstance
      .post(`/viewJuniorAdvocateById/${jid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setProfile(res.data.data.specialization);
        } else {
          setAdvocates([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching advocates:", error);
      });

    axiosMultipartInstance
      .post("/viewAdvocates")
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setAdvocates(res.data.data || []);
        } else {
          setAdvocates([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching advocates:", error);
      });
  }, []);

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? advocates.length - 1 : prevPage - 1
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === advocates.length - 1 ? 0 : prevPage + 1
    );
  };

  const currentAdvocates = advocates.slice(
    currentPage,
    currentPage + advocatesPerPage
  );

  return (
    <div>
      <div className="junior-heading-div container-fluid">
        <label className="junior-reg-title">View Advocates</label>
      </div>
      <div className="carousel req-main-caro">
        <h2 className="req-heading-padding">All Advocates</h2>
        <div className="carousel-inner req-caro-inner-style">
          <button
            className="carousel-control req-control-caro prev"
            onClick={prevPage}
          >
            ‹
          </button>
          <div className="carousel-track req-track-caro">
            {currentAdvocates.map((advocate, index) => (
              <div key={index} className="carousel-card req-card-style">
                <div className="card-body card-height">
                  <div className="req-client-main-div">
                    <div className="req-client-view-ad-namearea">
                      <h3>{advocate.name}</h3>
                      <p>{advocate.specialization}</p>
                    </div>
                    <div>
                      <img
                        src={`${imageUrl}/${advocate.profilePic.filename}`}
                        alt={advocate.name}
                        className="image-fluid req-image-style"
                      />
                    </div>

                    <div className="req-view-ad-button-div">
                      <Link
                        to={`/JuniorAdvocate-requestmentorship/${advocate._id}`}
                      >
                        <button className="btn btn-warning btn-warning-style">
                          Request
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control req-control-caro next"
            onClick={nextPage}
          >
            ›
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default JuAdvocate_ViewAllAdvocates;
