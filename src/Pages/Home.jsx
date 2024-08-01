import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoImg from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidArrowToRight } from "react-icons/bi";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";
import DoctorList from "../Components/Doctors/DoctorList";
import Faqlist from "../Components/faq/Faqlist";
import Testimonial from "../Components/Testimonials/Testimonial";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/doctors");
  };
  return (
    //  hero section

    <>
      {/* Hero section start */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero Content */}

            <div className="flex mt-[-40px] gap-[40px]  justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt=""></img>
              </div>

              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full  mb-[20px]"></img>
                <img src={heroImg03} alt="" className="w-full"></img>
              </div>
            </div>

            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[48px] md:leading-[60px]">
                  Live a healthy life, longer life with Medicare
                </h1>

                <p className="text_para mt-[25px]">
                  At Medicare, we are dedicated to providing exceptional
                  healthcare services tailored to your individual needs. We
                  strive to ensure your experience with us is comfortable and
                  effective. Book an appointment today and experience the
                  difference in patient-centered care at Medicare
                </p>

                <button onClick={handleNavigate} className="btn">
                  {" "}
                  Request an appointment{" "}
                </button>
              </div>

              {/* hero counter */}

              <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    30+
                  </h2>
                  <span className="w-[100px] h-3 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para  mt-[15px]"> Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    15+
                  </h2>
                  <span className="w-[100px] h-3 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para  mt-[15px]"> Clinic locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    100%
                  </h2>
                  <span className="w-[100px] h-3 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para  mt-[15px]"> Patient Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}

      <section className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading  text-center ">
            {" "}
            Providing the best medical services
          </h2>
          <p className="text_para text-center mt-3">
            World-class care for everyone, Our health system offers unmatched,
            expert health care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01}></img>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a doctor
              </h2>

              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone, Our health system offers
                unmatched, expert health care
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BiSolidArrowToRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02}></img>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Find a location
              </h2>

              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone, Our health system offers
                unmatched, expert health care
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BiSolidArrowToRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03}></img>
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Book Appointment
              </h2>

              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for everyone, Our health system offers
                unmatched, expert health care
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BiSolidArrowToRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About start */}
      <About />
      {/* about End */}

      {/* Services Start */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center mt-5">
              World-class care for everyone. Our health system offers
              unmatched,expert health care
            </p>
          </div>
        </div>

        <ServiceList />
      </section>
      {/*Services end */}

      {/* features Section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row ">
            {/* Features Content */}
            <div className="xl:w-[670px] ">
              <h2 className="heading">
                Get Virtual treatment <br /> anytime
              </h2>

              <ul className="pl-4 mt-[20px]">
                <li className="text_para">
                  1. Schedule the appointment directly
                </li>
                <li className="text_para mt-[5px]">
                  2. Search for your physician here, and contact his office
                </li>
                <li className="text_para mt-[5px]">
                  3.View our physician who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </ul>
            </div>

            {/* Feature Image */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt=""></img>

              <div className="w=[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-20 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb=[26px] rounded-[10px]">
                <div className="flex items-cemter justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue,24
                    </p>

                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                      10:00
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px lg:py-3 lg:px-[9px]">
                    <img src={videoImg} alt=""></img>
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon}></img>
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700 text-headingColor]">
                    Jikku Vijay
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features end */}

      {/* Our great doctor */}

      <section>
        <div className="container mt-[70px]">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center mt-5">
              World-class care for everyone. Our health system offers
              unmatched,expert health care
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* Our great doctors,end */}

      {/* FAQ section */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/4 md:block">
              {" "}
              <img src={faqImg}></img>{" "}
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Frequently asked questions by our patients
              </h2>
              <Faqlist />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ end */}

      {/* testimonials */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say!</h2>
            <p className="text_para text-center mt-5">
              World-class care for everyone. Our health system offers
              unmatched,expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>

      {/* testimonials */}
    </>
  );
};

export default Home;
