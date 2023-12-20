import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './FeedbackForm.scss';


const FeedbackForm: React.FC = () => {
  return (
    <form action="" className={`p-3 rounded-2 shadow animate__animated animate__fadeInRight`}>
      <legend className='mb-4 text-center fs-3 fw-semibold'>Feedback</legend>
      <div className="mb-3">
        <label htmlFor="formGroupUserName" className="form-label fst-italic">Name</label>
        <input type="text" className="form-control rounded-1 shadow-none" id="formGroupUserName" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupPhone" className="form-label fst-italic">Phone</label>
        <input type="text" className="form-control rounded-1 shadow-none" id="formGroupPhone" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupEmail" className="form-label fst-italic">Email</label>
        <input type="email" className="form-control rounded-1 shadow-none" id="formGroupEmail" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupComment" className="form-label fst-italic">Comment</label>
        <textarea className="form-control rounded-1 shadow-none" id="formGroupComment"></textarea>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary">Send</button>
      </div>
    </form>
  );
};


export default FeedbackForm;
