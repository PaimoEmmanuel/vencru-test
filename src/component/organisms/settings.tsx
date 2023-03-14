import { useState } from "react";
import CardDetails from "../molecules/card-details";
import BillingHistory from "../molecules/billing-history";

interface ISettingsProps {}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  const tabs = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notifications",
    "Integrations",
    "API",
  ];
  const [selectedCard, setSelectedCard] = useState<"visa" | "mastercard">(
    "visa"
  );
  return (
    <div className="settings">
      <div className="settings__heading">
        <h1 className="settings__heading--primary">Settings</h1>
        <p className="settings__heading--secondary">
          Manage your team and preferences here.
        </p>
      </div>
      <ul className="settings__tab-btns">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`settings__tab-btn ${tab === "Billing" ? "active" : ""}`}
          >
            <button title={tab}>{tab}</button>
          </li>
        ))}
      </ul>
      <div className="settings__payment">
        <h2 className="settings__payment--heading">Payment method</h2>
        <p className="settings__payment--text">
          Update your billing details and address.
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="settings__contact">
          <div className="settings__contact--text">
            <h3 className="settings__contact--primary">Contact email</h3>
            <p className="settings__contact--secondary">
              Where should invoices be sent?
            </p>
          </div>
          <div>
            <div className="settings__contact--input">
              <input type="radio" name="email" id="email" />
              <label htmlFor="email">
                <p>Send to my account email</p>
                <span>olivia@untitledui.com</span>
              </label>
            </div>
            <div className="settings__contact--input">
              <input type="radio" name="email" id="alt-email" />
              <div>
                <label htmlFor="alt-email">
                  <span>Send to an alternative email</span>
                </label>
                <div className="settings__contact--input-grp">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3333 3.00001C18.3333 2.08334 17.5833 1.33334 16.6667 1.33334H3.33332C2.41666 1.33334 1.66666 2.08334 1.66666 3.00001M18.3333 3.00001V13C18.3333 13.9167 17.5833 14.6667 16.6667 14.6667H3.33332C2.41666 14.6667 1.66666 13.9167 1.66666 13V3.00001M18.3333 3.00001L9.99999 8.83334L1.66666 3.00001"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="text" value="billing@untitledui.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="settings__contact">
          <div className="settings__contact--text">
            <h3 className="settings__contact--primary">Contact details</h3>
            <p className="settings__contact--secondary">
              Select default payment method.
            </p>
          </div>
          <div className="settings__card-container">
            <CardDetails
              cardType="visa"
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
            <CardDetails
              cardType="mastercard"
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
            <button className="settings__card--add">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4.16666V15.8333M4.16667 10H15.8333"
                  stroke="#667085"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add new payment method
            </button>
          </div>
        </div>
      </form>
      <BillingHistory />
    </div>
  );
};

export default Settings;
