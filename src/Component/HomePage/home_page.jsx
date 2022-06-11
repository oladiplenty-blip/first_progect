import { Carousel } from "bootstrap";
import React from "react";
import "./home_page.css";
import hero from "../../Assets/hero-img.jpg";
import Input from "../Form-group/form-group";
import Select from "../Form-group/select.forms";
import Marquee from "react-fast-marquee";

function HomePage() {
  const cards = [
    {
      icon: "fas fa-headset fa-2x mt-2",
      text: "Remte Nards",
      val: 3,
    },
    {
      icon: "fas fa-route fa-2x mt-2",
      text: "On site Nards",
      val: 373,
    },
    {
      icon: "fas fa-thumbs-up fa-2x mt-2",
      text: "Resolution",
      val: "99.3%",
    },
    {
      icon: "fas fa-star fa-2x mt-2",
      text: "Nards Rating",
      val: "4.9+",
    },
    {
      icon: "fas fa-clock-rotate-left fa-2x mt-2",
      text: "Avg. Responce",
      val: "1min",
    },
    {
      icon: "fas fa-earth-asia fa-2x mt-2",
      text: "Contry",
      val: 34,
    },
  ];
  const marqCard = [
    { name: "Julie S.", text: "" },
    { name: "PatriciaT.", text: "" },
    { name: "Anne M.", text: "" },
    { name: "Lynn M.", text: "" },
    { name: "Milena S.", text: "" },
    { name: "Kiren W.", text: "" },
    { name: "Shannon C.", text: "" },
    { name: "Morgan G.", text: "" },
    { name: "", text: "" },
  ];

  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="row hero">
          <div className="col-sm-6">
            <p className="boldDisplay">Our Header</p>
            <h2 className="text-muted">Our Services: </h2>
            <div className="card shadow-lg pa-2">
              <div className="container">
                <h2>How can we help you?</h2>
                <Select
                  id={"when"}
                  defaultOpt="Remote or on-site support"
                  data={[
                    { defaultOpt: "Remote or on-site support" },
                    { value: "Remote Support" },
                    { value: "On-site support" },
                  ]}
                />
                <Select
                  id={"when"}
                  data={[
                    { defaultOpt: "When do you need help" },
                    { value: "As soon as possible" },
                    { value: "Schedule a convenient time" },
                  ]}
                />
                <Select
                  id={"what"}
                  data={[
                    { defaulOpt: "What can we help with" },
                    { value: "Computer support" },
                    { value: "Mobile devices" },
                    { value: "Other Support" },
                  ]}
                />

                <div className="form-group">
                  <textarea
                    className="form-control my-4"
                    id=""
                    cols="64"
                    rows="5"
                    placeholder="E.g I am unable to send emails from Outlook, Emails are not leaving my drafts folder"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-sm-block px-4 mb-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <img
              src={hero}
              height="100%"
              width="100%"
              className="rounded-lg"
            ></img>
          </div>
        </div>
        <div className="row my-4">
          {cards.map((card, index) => {
            return (
              <div className="col" key={index}>
                <div className="card shadow-sm border-0 py-2 px-2 text-dark">
                  <div className="row">
                    <div className="col-2">
                      <i className={card.icon}></i>
                    </div>
                    <div className="col-10 text-center">
                      <h5 className="text-center">{card.val}</h5>
                      {card.text}
                    </div>
                  </div>

                  <div className="card-icon"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-fluid py-5 my-5">
        <div className="row">
          <div className="col-sm-5 bg-dark mx-2 rounded-lg"></div>
          <div className="col-sm-6">
            <h1 className="boldDisplay2">Reliable IT Support, On-demand</h1>
            <p className="lead">
              E-commerce provides users with IT support services for computers,
              mobile phones, Wifi, internet, email, backups, printers, software
              applications, tech lessons and more. <br></br>
              <br></br>You can get support within minutes or schedule a
              convenient time. <br></br>Remote work is growing, and work hours
              are no longer limited to 9 to 5. <br></br>
              <br></br>Do your off-site employees have limited access to IT?{" "}
              <br></br>
              <br></br>Users and businesses can now get 24/7 on demand direct
              access to our IT specialists.
            </p>
            <div className="booknerd">
              <button className="btn btn-dange btn-xs-blockr btn-lg text-light shadow-lg mx-5 pa-2 btn-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary my-2">
        <Marquee width="100%" direction="left" height="100px">
          This is a sample scrolling text that has scrolls in the upper
          direction.
        </Marquee>
      </div>
      <div>
        <Marquee width="100%" direction="left" height="35vh">
          <div className="row marq">
            {marqCard.map((card, index) => {
              <div className="card py-3 px-2 col-3 marq-card" key={index}>
                <div className="d-flex justify-content-between mb-3">
                  <h3>{card.name}</h3>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                </div>

                <div>
                  <p className="text-danger">
                    {" "}
                    <q>Saved my life as I was panicking</q>{" "}
                  </p>

                  <div className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consequatur soluta, nam tenetur possimus
                    excepturi error debitis doloremque illo doloribus.
                  </div>
                </div>
              </div>;
            })}
          </div>
        </Marquee>
      </div>

      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="boldDisplay2">IT Support for your Business</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              unde reiciendis delectus minima inventore dignissimos consectetur
              assumenda, neque architecto corporis quos quidem in eligendi ad?
              Soluta eveniet, <br></br>
              <br></br>alias dolor accusamus cumque quaerat, nobis illo
              consectetur, magnam iusto officiis quas voluptates labore.
              Voluptatum nostrum impedit placeat ipsum suscipit vel explicabo
              vitae. <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              hic est atque neque tempore commodi maxime excepturi repellat quas
              <br></br>
              <br></br>tempora. Nisi assumenda quisquam in officia ut
              exercitationem sit et placeat?
            </p>
            <div className="booknard">
              <button className="btn btn-danger text-light shadow-lg  pa-2 btn-lg">
                FIND OUT MORE
              </button>
            </div>
          </div>
          <div className="col-sm-5 bg-danger rounded-lg"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-sm-6 bg-dark rounded-lg"></div>
          <div className="col-sm-6">
            <p className="boldDisplay2">How to Book a</p>
            <h1 className="sdisplay text-danger">IT Support 24x7</h1>
            <p className="lead">
              E-commerce provides users with IT support services for computers,
              mobile phones, Wifi, internet, email, backups, printers, software
              applications, tech lessons and more. <br></br>
              <br></br>You can get support within minutes or schedule a
              convenient time. <br></br>Remote work is growing, and
            </p>
            <div className="booknard3">
              <button className="btn btn-block btn-md-none btn-danger text-light shadow-lg pa-2 btn-lg">
                BOOK A NERD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row bg-danger">
          <div className="col-sm-4 "></div>
          <div className="col-sm-4"></div>
          <div className="last text-light">2022, Website.com</div>
        </div>
       */}
    </div>
  );
}

export default HomePage;
