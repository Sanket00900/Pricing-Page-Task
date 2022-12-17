import React, { useState } from "react";
import "./PaymentPage.styles.css";

const PaymentPage = ({ plans }) => {
  // State to keep track of the selected plan and duration
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  // Function to handle plan selection
  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  // Function to handle duration selection
  const handleDurationSelection = (duration) => {
    setSelectedDuration(duration);
  };

  // Function to handle purchase
  const handlePurchase = () => {
    alert("Thank you for purchasing!");
  };

  return (
    <div className="main">
      <h1 className="heading">Unlock worry free parenting for you</h1>
      <p className="sub-heading">
        Get Pediatrician led holistic care for your baby
      </p>
      <div className="plan-container">
        {plans.map((plan) => (
          <div className="plan">
            <div key={plan.name}>
              <h2 className="plan-heading">{plan.name}</h2>
              <ul className="features-list">
                <li>
                  <span className="plan-features-text">WhatsApp Group: </span>
                  {plan.whatsapp}
                </li>
                <li>
                  <span className="plan-features-text">
                    Basic Medical Queries:
                  </span>
                  {plan.queries}
                </li>
                <li>
                  <span className="plan-features-text">Private Chat: </span>
                  {plan.privateChat}
                </li>
                <li>
                  <span className="plan-features-text">
                    Video Consultation:{" "}
                  </span>
                  {plan.video}
                </li>
                <li>
                  <span className="plan-features-text">
                    Additional Consultations:{" "}
                  </span>
                  {plan.additional}
                </li>
                <li>
                  <span className="plan-features-text">
                    Growth tracking for baby:{" "}
                  </span>
                  {plan.growthtracking}
                </li>
              </ul>

              {plan.duration.map((duration) => (
                <div className="prices">
                  <div key={duration.months}>
                    <input
                      type="radio"
                      name={plan.name}
                      value={duration.months}
                      onChange={() => handleDurationSelection(duration)}
                    />
                    &#8377;{duration.price} for {duration.months} months
                  </div>
                </div>
              ))}
              <div className="button-container">
                <button
                  className="button"
                  onClick={() => handlePlanSelection(plan)}
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="selected">
        {selectedPlan && selectedDuration && (
          <div>
            <h2 className="selected-heading">Selected Plan</h2>
            <p className="selected-details">
              {selectedPlan.name} - {selectedDuration.months} months - Price:
              &#8377;{selectedDuration.price}
            </p>
            <div className="button-container">
              <button class="button" onClick={handlePurchase}>
                Purchase
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
