import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("errors", errors);

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="left-half">
            <h1>Contact Us</h1>
            <p>We would love to hear from you</p>
            {/* Actual Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Input */}
              <p className="input-label">Name *</p>
              <input
                className="input"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.name && (
                <span className="error">
                  {errors.name.type === "required" && "This Field is Required."}
                  {errors.name.type === "maxLength" &&
                    "Max length of name is 10 char."}
                </span>
              )}
              {/* Email Input */}
              <p className="input-label">Email *</p>
              <input
                className="input"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <span className="error">
                  {errors.email.type === "required" &&
                    "This Field is Required."}
                  {errors.email.type === "pattern" && "Invalid Email Address."}
                </span>
              )}
              {/* Phone Input */}
              <p className="input-label">Phone</p>
              <input
                className="input"
                type="text"
                placeholder="Phone"
                {...register("phoneNumber", {
                  pattern:
                    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
                })}
              />
              {errors.phoneNumber && (
                <span className="error">
                  {errors.phoneNumber && "Invalid Phone Number."}
                </span>
              )}
              {/* Message Input */}
              <p className="input-label">Message *</p>
              <input
                className="input"
                type="text"
                placeholder="Write Your Message"
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message && (
                <span className="error">"This Field is Required."</span>
              )}
              {/* Button*/}
              <div>
                <input className="submit" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
        {/* Image */}
        <div className="column">
          <img
            src="https://images.unsplash.com/photo-1596900779744-2bdc4a90509a"
            alt="livingRoom"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
