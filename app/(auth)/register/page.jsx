import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <p className="_social_registration_content_para _mar_b8">Get Started Now</p>
      <h4 className="_social_registration_content_title _titl4 _mar_b50">
        Registration
      </h4>

      <button type="button" className="_social_registration_content_btn _mar_b40">
        <img src="/assets/images/google.svg" alt="Image" className="_google_img" />
        <span>Register with google</span>
      </button>

      <div className="_social_registration_content_bottom_txt _mar_b40">
        <span>Or</span>
      </div>

      <form className="_social_registration_form">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_social_registration_form_input _mar_b14">
              <label className="_social_registration_label _mar_b8" htmlFor="regEmail">
                Email
              </label>
              <input
                id="regEmail"
                type="email"
                className="form-control _social_registration_input"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_social_registration_form_input _mar_b14">
              <label
                className="_social_registration_label _mar_b8"
                htmlFor="regPassword"
              >
                Password
              </label>
              <input
                id="regPassword"
                type="password"
                className="form-control _social_registration_input"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="_social_registration_form_input _mar_b14">
              <label
                className="_social_registration_label _mar_b8"
                htmlFor="regRepeatPassword"
              >
                Repeat Password
              </label>
              <input
                id="regRepeatPassword"
                type="password"
                className="form-control _social_registration_input"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
            <div className="form-check _social_registration_form_check">
              <input
                className="form-check-input _social_registration_form_check_input"
                type="checkbox"
                name="termsAgree"
                id="termsAgree"
                defaultChecked
              />
              <label
                className="form-check-label _social_registration_form_check_label"
                htmlFor="termsAgree"
              >
                I agree to terms & conditions
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
            <div className="_social_registration_form_btn _mar_t40 _mar_b60">
              <button
                type="submit"
                className="_social_registration_form_btn_link _btn1"
              >
                Login now
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="_social_registration_bottom_txt">
            <p className="_social_registration_bottom_txt_para">
               have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
