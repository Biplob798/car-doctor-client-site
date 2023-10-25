import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-white border">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card  flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl font-bold text-center border-bottom">
                Register{" "}
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-[#FF3811]"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center py-4 border-t-2 my-4">
              Already have a account{" "}
              <Link to="/login">
                <span className="text-red-600 link link-hover">Sign in </span>
              </Link>{" "}
              please
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
