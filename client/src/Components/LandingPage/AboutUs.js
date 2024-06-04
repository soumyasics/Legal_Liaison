import React from "react";
import img1 from "../../Assets/img21.jpg";
import img2 from "../../Assets/img20.jpg";
import img11 from "../../Assets/adv1.avif";
import img12 from "../../Assets/adv2.avif";
import img13 from "../../Assets/adv4.avif";

import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="container">
      <h1 className="aboutush1">AboutUs</h1>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img className="aboutusimg1" src={img1} alt="Card image cap" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div>
            <p className="text-justify" >
              Welcome to [Your Legal Practice Management System], your trusted
              partner in legal services. We are a team of dedicated and
              experienced legal professionals committed to providing
              high-quality legal solutions tailored to your needs.
            </p>

            <h3>Our Mission</h3>
            <p className="text-justify" >
              At [Your Legal Practice], our mission is to empower individuals
              and businesses by offering comprehensive legal services. We strive
              to deliver excellence in legal representation, advice, and case
              management, ensuring our clients achieve the best possible
              outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div>
            <h3>Why Choose Us?</h3>
            <p className="text-justify" >
              Choosing [Your Legal Practice] means choosing a team of skilled
              advocates and legal experts dedicated to your success. Here's why
              you should partner with us:
            </p>

            <ul className="" >
              <li className="text-justify" >
                <strong>Expertise:</strong> Our team comprises seasoned legal
                professionals with expertise in various fields of law.
              </li>
              <li className="text-justify">
                <strong>Client-Centric Approach:</strong> We prioritize your
                needs and concerns, offering personalized solutions to meet your
                unique legal requirements.
              </li>
              <li className="text-justify">
                <strong>Transparency:</strong> We believe in open communication
                and transparency. You'll be informed at every step of your legal
                journey.
              </li>
              <li className="text-justify">
                <strong>Technology-driven Solutions:</strong> Utilizing
                cutting-edge legal technology, we streamline processes to
                enhance efficiency and provide a seamless experience.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="">
            <img className="aboutusimg2" src={img2} alt="Card image cap" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Our Team</h3>
        <p>
          Meet the faces behind [Your Legal Practice]. Our team is comprised of
          passionate advocates, legal experts, and support staff dedicated to
          delivering exceptional service. Together, we work collaboratively to
          ensure the success of your legal endeavors.
        </p>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card h-100">
                <img
                  class=" card-img-top landinserviceimg"
                  src={img11}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Elza</h5>
                  <p class="card-text">
                    Our experienced advocates provide expert legal advice on
                    various legal matters.{" "}
                  </p>
                </div>{" "}
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img
                  class="card-img-top landinserviceimg"
                  src={img12}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Josphine</h5>
                  <p class="card-text">
                    Hire our skilled advocates to represent you in court.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100">
                <img
                  class="card-img-top landinserviceimg"
                  src={img13}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Christine</h5>
                  <p class="card-text">
                    Track the status of your case in real-time through our
                    online portal.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Contact Us</h3>
        <div class="container">
          <p>
            Ready to get started? Contact [Your Legal Practice] today to discuss
            your legal needs. Whether you're seeking legal advice,
            representation, or case management services, we're here to help you
            navigate the complexities of the legal system.
          </p>

          <p>We look forward to serving you!</p>
          <div class="m-1">
            <div class="fs-6  mb-2">
              Post your message below. We will get back to you ASAP
            </div>
            <form id="contact_form" name="contact_form" onSubmit={()=>{alert('Posted Succesfully')}} >
              <div class="mb-5">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div class="mb-5 row">
                <div class="col">
                  <label>Your Name:</label>
                  <input
                    type="text"
                    required
                    maxlength="50"
                    class="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div class="col">
                  <label for="email_addr">Your Email:</label>
                  <input
                    type="email"
                    required
                    maxlength="50"
                    class="form-control"
                    id="email_addr"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div class="d-grid">
                <button type="submit"  class="btn btn-success">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
