import { useState, useEffect, useCallback, useContext } from "react";
import "./Memos.scss";
import { ChaiContext } from "../../contexts/ChaiProvider";

export const Memos = () => {
  const {
    donationList: memos,
    fetchDonationsList,
    checkUserLoginStatus,
  } = useContext(ChaiContext);

  useEffect(() => {
    const userLoginStatus = checkUserLoginStatus();
    if (userLoginStatus) fetchDonationsList();
  }, []);

  return (
    <section className="memos--container">
      <h4>Memo list</h4>
      <button onClick={() => fetchDonationsList()}>fetch memos</button>
      <section className="memos-record--container">
        <div className="memos-record__thead--row">
          <div className="memos-record__thead-row--th">Name</div>
          <div className="memos-record__thead-row--th">Message</div>
          <div className="memos-record__thead-row--th">Address</div>
        </div>
        {memos.map(([name, message, , sender_address], index) => {
          return (
            <div
              className="memos-record__tbody--row"
              key={`${sender_address}_${index}`}
            >
              <div className="memos-record__tbody-row--td">{name}</div>
              <div className="memos-record__tbody-row--td">{message}</div>
              <div className="memos-record__tbody-row--td">
                {sender_address}
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
