import { useState } from "react";
import { billingData } from "../../data";
import BillingTableRow from "../molecules/billing-table-row";

interface IBillingHistoryProps {}

const BillingHistory: React.FunctionComponent<IBillingHistoryProps> = (
  props
) => {
  const [checkboxes, setCheckboxes] = useState(
    billingData.map((data) => false)
  );
  const allBoxesChecked = checkboxes.every((checkbox) => checkbox === true);
  const handleAllCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes(checkboxes.map((data) => e.target.checked));
  };
  const updateCheckbox = (index: number, update: boolean) => {
    const newboxes = [...checkboxes];
    newboxes[index] = update;
    setCheckboxes(newboxes);
  };
  return (
    <div className="billing">
      <div className="billing__header">
        <h2 className="billing__heading">Billing history</h2>
        <button className="billing__download">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4523_14569)">
              <path
                d="M6.66667 14.1667L10 17.5M10 17.5L13.3333 14.1667M10 17.5V10M17.4 15.075C18.1245 14.5655 18.6678 13.8385 18.9511 12.9993C19.2343 12.1601 19.2428 11.2525 18.9753 10.4082C18.7078 9.56386 18.1782 8.82674 17.4634 8.3038C16.7486 7.78086 15.8857 7.49931 15 7.5H13.95C13.6994 6.52323 13.2304 5.61604 12.5784 4.84674C11.9265 4.07743 11.1085 3.46605 10.186 3.05863C9.26356 2.65121 8.26071 2.45836 7.25294 2.4946C6.24518 2.53084 5.25877 2.79523 4.36797 3.26786C3.47717 3.74049 2.70519 4.40904 2.11016 5.22319C1.51513 6.03734 1.11255 6.97587 0.932723 7.96813C0.752897 8.96038 0.800514 9.9805 1.07199 10.9517C1.34346 11.9229 1.83172 12.8198 2.50001 13.575"
                stroke="#344054"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4523_14569">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Download all
        </button>
      </div>
      <div className="billing__table-container">
        <table className="billing__table">
          <tbody>
            <tr>
              <th className="billing__table--head">
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name="invoice"
                  id="invoice"
                  hidden
                  checked={allBoxesChecked}
                  onChange={handleAllCheckboxChange}
                />
                <label htmlFor="invoice">
                  <span className="checkbox">
                    <span className="check">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 3.5L5.25001 9.91667L2.33334 7"
                          stroke="#7F56D9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  Invoice
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00001 3.33334V12.6667M8.00001 12.6667L12.6667 8.00001M8.00001 12.6667L3.33334 8.00001"
                      stroke="#667085"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
              </th>
              <th className="billing__table--head amount-table">Amount</th>
              <th className="billing__table--head date-table">Date</th>
              <th className="billing__table--head status-table">Status</th>
              <th className="billing__table--head users-table">
                Users on plan
              </th>
              <th className="billing__table--head download-table"></th>
            </tr>
          </tbody>
          {billingData.map((data, index) => (
            <BillingTableRow
              key={data.date}
              {...data}
              index={index}
              checked={checkboxes[index]}
              updateCheckbox={updateCheckbox}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default BillingHistory;
