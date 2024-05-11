import { Form, Link } from "react-router-dom";
import InputForm from "../components/InputForm";

import useSingup from "../hooks/useSingup";
export let action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("dispalyName");
  let email = formData.get("email");
  let url = formData.get("url");
  let password = formData.get("password");

  return { url, password, email, name };
};
function Singup() {
  let { handleGoogle, handleSubmit } = useSingup();
  return (
    <div className="place-content-center grid min-h-screen ">
      <div className=" p-10 pt-4  bg-slate-70  rounded-2xl w-96">
        <Form method="post">
          <InputForm label="user Name" name="dispalyName" type="text" />
          <InputForm label="Email" name="email" type="email" />
          <InputForm label="Photo Url" name="url" type="url" />
          <InputForm label="password" name="password" />
          <button
            onClick={handleSubmit}
            className="btn btn-accent w-full mb-3 mt-3"
          >
            Submit
          </button>
        </Form>
        <button
          onClick={handleGoogle}
          type="button"
          className="btn btn-primary w-full mb-3"
        >
          Singup
        </button>
        <Link to="/login" type="button" className="btn btn-info w-full">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Singup;
