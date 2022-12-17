import "./App.css";
import PaymentPage from "./Components/Payment-Page/PaymentPage.component";

function App() {
  // Hardcoded JSON with payment plan details
  const plans = [
    {
      name: "Premium care",
      whatsapp: "8 am - 11 am",
      queries: "Unlimited",
      privateChat: "With Pediatrician",
      video: " 6 free consultations (Pediatrician/ Gynaecologist)",
      additional: "20% Discount",
      growthtracking: "Monthly",
      duration: [
        {
          months: 3,
          price: 999,
        },
        {
          months: 6,
          price: 1999,
        },
        {
          months: 12,
          price: 2999,
        },
      ],
    },
    {
      name: "Basic Access+",
      whatsapp: "8 am - 11 am",
      queries: "Unlimited",
      privateChat: "NA",
      video: "2 Free Consultations (Pediatrician Only)",
      additional: "20% Discount",
      growthtracking: "Not Included",
      duration: [
        {
          months: 3,
          price: 799,
        },
        {
          months: 6,
          price: 999,
        },
        {
          months: 12,
          price: 1248,
        },
      ],
    },
    {
      name: "Basic Plan",
      whatsapp: "8 am - 11 am",
      queries: "Unlimited",
      privateChat: "NA",
      video: " No Free Consultations",
      additional: "20% Discount",
      growthtracking: "Not Included",
      duration: [
        {
          months: 3,
          price: 499,
        },
        {
          months: 6,
          price: 499,
        },
        {
          months: 12,
          price: 748,
        },
      ],
    },
  ];

  return <PaymentPage plans={plans} />;
}

export default App;
