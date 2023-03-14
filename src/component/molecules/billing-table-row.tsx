import AvatarGroup from "../atoms/avatar-group";

interface IBillingTableRowProps {
  plan: string;
  amount: string;
  date: string;
  status: string;
  index: number;
  users: string[];
  checked: boolean;
  setCheckboxes: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const BillingTableRow: React.FunctionComponent<IBillingTableRowProps> = ({
  plan,
  amount,
  date,
  status,
  index,
  users,
  checked,
  setCheckboxes,
}) => {
  return (
    <tr>
      <td className="billing__table--data">
        <div className="billing__table--data-wrap">
          <input
            className="checkbox-input"
            type="checkbox"
            name="date"
            id={date}
            hidden
            checked={checked}
            onChange={(e) => {
              setCheckboxes((checkboxes) => {
                const newboxes = [...checkboxes];
                newboxes[index] = e.target.checked;
                return newboxes;
              });
            }}
          />
          <label htmlFor={date}>
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </span>
            {plan}
          </label>
        </div>
      </td>
      <td className="billing__table--data text-gray-100">{amount}</td>
      <td className="billing__table--data text-gray-100">{date}</td>
      <td className="billing__table--data">
        <div className="status-paid">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="#12B76A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{status}</span>
        </div>
      </td>
      <td className="billing__table--data">
        <AvatarGroup avatars={users} />
      </td>
      <td className="billing__table--data">
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4523_14569)">
              <path
                d="M6.66667 14.1667L10 17.5M10 17.5L13.3333 14.1667M10 17.5V10M17.4 15.075C18.1245 14.5655 18.6678 13.8385 18.9511 12.9993C19.2343 12.1601 19.2428 11.2525 18.9753 10.4082C18.7078 9.56386 18.1782 8.82674 17.4634 8.3038C16.7486 7.78086 15.8857 7.49931 15 7.5H13.95C13.6994 6.52323 13.2304 5.61604 12.5784 4.84674C11.9265 4.07743 11.1085 3.46605 10.186 3.05863C9.26356 2.65121 8.26071 2.45836 7.25294 2.4946C6.24518 2.53084 5.25877 2.79523 4.36797 3.26786C3.47717 3.74049 2.70519 4.40904 2.11016 5.22319C1.51513 6.03734 1.11255 6.97587 0.932723 7.96813C0.752897 8.96038 0.800514 9.9805 1.07199 10.9517C1.34346 11.9229 1.83172 12.8198 2.50001 13.575"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4523_14569">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default BillingTableRow;
