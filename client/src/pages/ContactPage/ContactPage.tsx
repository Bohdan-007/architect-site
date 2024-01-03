import React from "react";
import TeamList from "../../components/TeamList/TeamList";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";

import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactPage.scss';


const ContactPage: React.FC = () => {
  return (
    <div className="contact-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <TeamList />
          </div>
          <div className="col-12 col-lg-6">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div >
  );
};


export default ContactPage;
