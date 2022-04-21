import React from "react";


const Cards = () => {
  return (
    <React.Fragment>
      <div className=" bg-light">
        <h1 className="text-center text-black text-capitalize my-5">
          Delivering Confidence...
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card shadow p-3 mb-5 bg-body rounded">
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Personality & Profile Building</h5>
                  <p className="card-text">
                    Our commitment to you is that your learners will have a
                    transformational experience to share, always. Be it a better
                    job found, a promotion in the same organization, or starting
                    their own businesses, students graduating from your programs
                    will definitely.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-body rounded ">
                <img
                  src="https://picsum.photos/201"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Internship & Placement Assistance
                  </h5>
                  <p className="card-text">
                    We help students kick-start their careers by Our mentorship
                    panel comprises of the education is nothing without
                    employment.Be it a better job found, a promotion in the same
                    organization, or starting their own businesses
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow p-3 mb-5 bg-body rounded">
                <img
                  src="https://picsum.photos/202"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Industry Instructor</h5>
                  <p className="card-text">
                    Be it a better job found, a promotion in the same
                    organization, or starting their own businesses We help our
                    partners by bringing in industry experts to organization, or
                    starting their own businesses, students graduating from your
                    programs will definitely, make you proud.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;