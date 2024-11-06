const WelcomeMEssage = ({ clicked }) => {
  return (
    <div className="py-5 welcome-messsage">
      <h1 className="display-5 fw-bold text-black"> Oops there are no post</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4 ">See Previous posts.</p>
        <button className="btn btn-primary btn-lg" onClick={clicked}>
          Reload
        </button>
      </div>
    </div>
  );
};

export default WelcomeMEssage;
