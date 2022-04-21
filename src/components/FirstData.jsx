import React from 'react';

const FirstData = () => {
    return (
      <div className="container">
        <div className="card-body my-5 py-lg-3 w-50 text-lg-center">
          <h5 className="card-title text-primary fw-bold fs-1">
            Powering World Class
          </h5>
          <h5 className="card-title text-warning fw-bold fs-1">
            Online Education
          </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Recusandae consequuntur nisi doloribus eaque dolor, quia dolores
            delectus sapiente minima autem quibusdam, doloremque obcaecati quo
            eos in! Porro fuga eaque rerum commodi labore. Beatae sit provident
            aperiam sed, impedit nihil modi nam minima aliquid consequatur,
            aspernatur nesciunt totam quis voluptate non.
          </p>
          <a
            href="#"
            className="btn btn-primary my-4 py-md-2 bg-warning border-warning"
          >
            Get In Touch
          </a>
          <a
            href="#"
            className="btn btn-primary p-lg-2 bg-dark border-dark mx-5"
          >
            Download Brochure
          </a>
          {/* <span>
            <img
              src="https://picsum.photos/210"
              class="rounded float-end"
              alt="univo_cover"
            ></img>
          </span> */}
        </div>

        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in fw-bold">Our Story..!</div>
              <div className="intro-heading">
                <p className=' fs-6 fw-light fst-italic'>
                  It began with the idea to democratize education from the best
                  universities of India and the World to reach learners from all
                  backgrounds powered by robust technology platforms and support
                  services. India is a powerhouse of talent, waiting to be
                  unleashed and on its way to become a global knowledge driven
                  economy. Online education is the only medium which can support
                  and power this dream by reaching unreachable learners and
                  equipping them with the right skillsets to fulfil aspirations
                  and ambitions. And so, a group of visionary educators decided
                  to take this mission of educating a billion minds and
                  transcend boundaries and barriers with online education to
                  fulfil the dreams of young India. With this passion, vision
                  and dream, Univo was born.
                </p>
              </div>
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="#"
              >
                Want To Know More
              </a>
            </div>
          </div>
        </header>
      </div>
    );
};

export default FirstData;