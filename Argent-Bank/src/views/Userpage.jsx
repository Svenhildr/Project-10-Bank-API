import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "../css/main.css";
import EditUserName from "../components/EditName";

const AccountSection = ({ title, amount, description }) => (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>
);

// Validation des props pour AccountSection
AccountSection.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const UserPage = () => {
    const dispatch = useDispatch();
    const { firstName, lastName, status } = useSelector((state) => state.user);
    /*     // const user = useSelector((state) => state.user);

    const handleSaveUsername = (newUsername) => {
        // Mise à jour du username dans le Redux store
        dispatch(setUser({ username: newUsername }));
    }; */

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {firstName} {lastName}!
                </h1>
                <EditUserName currentFirstName={firstName} currentLastName={lastName} /* onSave={handleSaveUsername} */ />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountSection title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <AccountSection title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <AccountSection title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    );
};

export default UserPage;
