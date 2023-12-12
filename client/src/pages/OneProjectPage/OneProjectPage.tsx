
import 'bootstrap/scss/bootstrap.scss';
import './OneProjectPage.scss';


const OneProjectPage: React.FC = () => {


  return (
    <div className='project-page py-5'>

      <div className='container'>
        <div className='row'>
          {/* <div className="col-12 col-md-4 bg-primary-subtle"> */}
          <div className="col-12 col-md-4">
            <div className='px-4 py-2 shadow project-page__info'>
              <p className='mb-5 fs-2 fw-semibold text-center'>Title</p>
              <ul className='project-page__info-list'>
                <li className='py-3 py-sm-4'>
                  <p className='mb-2 fs-5 fw-semibold info'>2023</p>
                  <p className='mb-2 subinfo'>year</p>
                </li>
                <li className='py-3 py-sm-4'>
                  <p className='mb-2 fs-5 fw-semibold info'>250 м</p>
                  <p className='mb-2 subinfo'>Area/Scale</p>
                </li>
                <li className='py-3 py-sm-4'>
                  <p className='mb-2 fs-5 fw-semibold info'>residental</p>
                  <p className='mb-2 subinfo'>type/secotr</p>
                </li>
                <li className='py-3 py-sm-4'>
                  <p className='mb-2 fs-5 fw-semibold info'>2</p>
                  <p className='mb-2 subinfo'>floor</p>
                </li>
                <li className='py-3 py-sm-4'>
                  <p className='mb-2 fs-5 fw-semibold info'>Lviv</p>
                  <p className='mb-2 subinfo'>location</p>
                </li>
                <li className='py-3 py-sm-4'>
                  <p className='mb-2 fs-5 fw-semibold info'>duplex</p>
                  <p className='mb-2 subinfo'>category</p>
                </li>
                <li className='py-3 py-sm-4'>
                  <p className='mb-2 fs-5 fw-semibold info'>new build</p>
                  <p className='mb-2 subinfo'>scope</p>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-12 col-md-8 bg-warning-subtle"> */}
          <div className="col-12 col-md-8">
            <div className='px-0 px-md-3 project-page-description'>
              <p className='mb-5 fs-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <div className='mb-5 image-wrapper'>
                <img src="https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" alt="" />
              </div>

              <p className='mb-5 fs-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className='image-wrapper'>
                <img src="https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-iconic-buildings-of-modern-architecture-7-1536x994.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default OneProjectPage;