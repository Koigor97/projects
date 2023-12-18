import SignUpForm from "../components/SignUpForm";
import PlaceHolder from "../components/Placeholder";

function SignUp() {
  return (
    <section>
      <PlaceHolder />
      <div className="p-4">
        <h1 className=" text-3xl text-center font-semibold my-7">Sign Up 🥂</h1>
        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUp;
