import MasterCardSVG from "../atoms/mastercard";
import VisaCardSVG from "../atoms/visa";
interface ICardDetailsProps {
  cardType: "visa" | "mastercard";
  selectedCard: "visa" | "mastercard";
  setSelectedCard: React.Dispatch<React.SetStateAction<"visa" | "mastercard">>;
}

const cardTypes = {
  visa: {
    svg: <VisaCardSVG />,
    name: "Visa",
  },
  mastercard: {
    svg: <MasterCardSVG />,
    name: "Mastercard",
  },
};
const CardDetails: React.FunctionComponent<ICardDetailsProps> = ({
  cardType,
  selectedCard,
  setSelectedCard,
}) => {
  return (
    <div
      className={`settings__card-details ${
        selectedCard === cardType ? "selected" : ""
      }`}
    >
      <input
        className="settings__card-radio"
        type="radio"
        name="card"
        hidden
        id={cardType}
        value={cardType}
        checked={selectedCard === cardType}
        onChange={(e) => {
          setSelectedCard(e.target.value as ICardDetailsProps["cardType"]);
        }}
      />
      <label className="settings__card-label" htmlFor={cardType}>
        <>{cardTypes[cardType].svg}</>
        <div className="settings__card-text">
          <p className="settings__card-number">
            {cardTypes[cardType].name} ending in 1234
          </p>
          <p className="settings__card-expiry">Expiry 06/2024</p>
          <div className="settings__card--btns">
            <button className="settings__card--default" type="button">
              Set as default
            </button>
            <button className="settings__card--edit" type="button">
              Edit
            </button>
          </div>
        </div>
        {selectedCard === cardType ? (
          <svg
            className="settings__card-check"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="7.5"
              fill="#7F56D9"
            />
            <path
              d="M11.3334 5.5L6.75002 10.0833L4.66669 8"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="7.5"
              stroke="#7F56D9"
            />
          </svg>
        ) : (
          <svg
            className="settings__card-check"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="7.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="7.5"
              stroke="#D0D5DD"
            />
          </svg>
        )}
      </label>
    </div>
  );
};

export default CardDetails;
