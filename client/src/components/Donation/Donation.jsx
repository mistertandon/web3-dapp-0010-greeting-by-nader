import { useEffect, useContext } from "react";
import "./Donation.scss";
import { ChaiContext } from "../../contexts/ChaiProvider";
import { WalletContext } from "../../contexts/WalletProvider";
import Navigation from "../Navigation/Navigation";

export const Donation = () => {
  const { donationList, fetchDonationsList } = useContext(ChaiContext);

  const { checkUserLoginStatus } = useContext(WalletContext);

  useEffect(() => {
    const userLoginStatus = checkUserLoginStatus();
    if (userLoginStatus) fetchDonationsList();
  }, []);

  return (
    <section className="donation--container">
      <h4>Memo list</h4>
      <Navigation />
      <button onClick={() => fetchDonationsList()}>fetch donation</button>
      <section className="donation-record--container">
        <div className="donation-record__thead--row">
          <div className="donation-record__thead-row--th">Name</div>
          <div className="donation-record__thead-row--th">Message</div>
          <div className="donation-record__thead-row--th">Address</div>
        </div>
        {donationList.map(([name, message, , sender_address], index) => {
          return (
            <div
              className="donation-record__tbody--row"
              key={`${sender_address}_${index}`}
            >
              <div className="donation-record__tbody-row--td">{name}</div>
              <div className="donation-record__tbody-row--td">{message}</div>
              <div className="donation-record__tbody-row--td">
                {sender_address}
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
