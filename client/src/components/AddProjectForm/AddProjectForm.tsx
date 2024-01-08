import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactPage.scss';


const AddProjectForm: React.FC = () => {
  return (
    <form action="" className="p-4 rounded-3 shadow" noValidate>
      <legend className='text-center'>Add a new project</legend>

      <div className="mb-3">
        <label htmlFor="projectTitle" className="form-label">Title</label>
        <input type="text" className="form-control" id="projectTitle" placeholder="title..." />
      </div>
      <div className="mb-3">
        <label htmlFor="projectYear" className="form-label">Year</label>
        <input type="number" className="form-control" id="projectYear" placeholder="1020" />
      </div>
      <div className="mb-3">
        <label htmlFor="projectType" className="form-label">Type</label>
        <input type="text" className="form-control" id="projectType" placeholder="residential..." />
      </div>
      <div className="mb-3">
        <label htmlFor="projectLocation" className="form-label">Location</label>
        <input type="text" className="form-control" id="projectLocation" placeholder="Lviv..." />
      </div>
      <div className="mb-3">
        <label htmlFor="projectStatus" className="form-label">Status</label>
        <input type="text" className="form-control" id="projectStatus" placeholder="new building..." />
      </div>
      <div className="mb-3">
        <label htmlFor="projectDimensions" className="form-label">Dimensions</label>
        <input type="text" className="form-control" id="projectDimensions" placeholder="8.5x12" />
      </div>
      <div className="mb-3">
        <label htmlFor="projectArea" className="form-label">Area</label>
        <input type="number" className="form-control" id="projectArea" placeholder="47.5" />
      </div>

      <div className="mb-3 text-center">
        <button type="button" className="btn btn-primary">Add project</button>
      </div>

    </form>
  );
};


export default AddProjectForm;
