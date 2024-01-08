import React from "react";
import AddProjectForm from "../../components/AddProjectForm/AddProjectForm";

import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactPage.scss';


const AddProjectPage: React.FC = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <AddProjectForm />
          </div>
        </div>
      </div>
    </div >
  );
};


export default AddProjectPage;
