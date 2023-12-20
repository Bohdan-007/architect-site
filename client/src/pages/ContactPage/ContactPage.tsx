import React from "react";
import { useInView } from 'react-intersection-observer';
import TeamList from "../../components/TeamList/TeamList";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './ContactPage.scss';


const ContactPage: React.FC = () => {
  const [refEmployee, inViewEmployee] = useInView({ triggerOnce: true });

  const [refDesc, inViewDesc] = useInView({ triggerOnce: true });
  const [refEmail, inViewEmail] = useInView({ triggerOnce: true });


  return (
    <div className="contact-page py-5">
      <div className="container">
        <div className="row">
          {/* <div className="col-12 col-lg-6 bg-primary-subtle mb-5 mb-lg-0"> */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <TeamList />
          </div>

          {/* <div className="col-12 col-lg-6 bg-secondary-subtle"> */}
          <div className="col-12 col-lg-6">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div >
  );
};


export default ContactPage;
