import "./Form.css";
import { useState } from "react";

import bgMobile from "../assets/bg-main-mobile.png";
import bgDesktop from "../assets/bg-main-desktop.png";
import logo from "../assets/card-logo.svg";
import tick from "../assets/icon-complete.svg";
import { format } from "date-fns";

const Form = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("ABHISHEK");
  const [cardNumber, setCardNumber] = useState("1234 5678 9123 4567");
  const [date, setDate] = useState("01/23");
  const [cvc, setCvc] = useState("123");

  return (
    <>
      <section>
        <div className=" div1 ">
          <picture>
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" className=" bgMobile" />
          </picture>
        </div>

        <div className=" div2  ">
          <div className="    div3 ">
            <article className="front-card ">
              <img src={logo} alt="" className=" img2 " />

              <div>
                <h2 className=" head1 ">{cardNumber}</h2>

                <ul className="ul1 ">
                  <li className=" li1 ">{name}</li>
                  <li className="li2 ">{format(new Date(date), "MM/yy")}</li>
                </ul>
              </div>
            </article>

            <article className="back-card ">
              <p>{cvc}</p>
            </article>
          </div>

          <div className=" div4 ">
            {!confirmed && (
              <form className="    form1 ">
                <div>
                  <label htmlFor="cardholder_name">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder="e.g. Jane Appleseed"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="e.g. 1234 5678 9012 3456"
                    required
                    maxLength={19}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>

                <article className=" art1 ">
                  <div className="div5">
                    <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
                    <input
                      type="month"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="MM YY"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="div5">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="number"
                      name="cvc"
                      id="cvc"
                      placeholder="e.g. 123"
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                </article>

                <button onClick={() => setConfirmed(true)} className="btn">
                  Confirm
                </button>
              </form>
            )}

            {confirmed && <ThankYou setConfirmed={setConfirmed} />}
          </div>
        </div>
      </section>
    </>
  );
};

function ThankYou({ setConfirmed }) {
  return (
    <>
      <div className="div6 thank-you">
        <img src={tick} alt="" className="tick1" />
        <h1 className="head2">Thank you!</h1>
        <p className="para2">We've added your card details</p>
        <button onClick={() => setConfirmed(false)} className="btn btn2">
          Continue
        </button>
      </div>
    </>
  );
}

export default Form;
