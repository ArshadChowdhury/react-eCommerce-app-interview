import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left-row">
            <span className="icon-flex">
              <i className="fa fa-phone"></i>
              <label htmlFor="">+8801676830816</label>
            </span>
            <span className="icon-flex">
              <i className="fa fa-envelope"></i>
              <label htmlFor="">arshadchowdhury46@gmail.com</label>
            </span>
          </div>
          <div className="right-row">
            <span>
              <label htmlFor="">Need Help ?</label>
            </span>
            <span>
              <span>🇧🇩 </span>
              <label htmlFor="">EN</label>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
