import React from "react";
import PropTypes from "prop-types";
// import Layout from "../components/Layout";
import "../css/main.css";

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

// Validation des props
AccountSection.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const UserPage = () => {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis!
                </h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountSection title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <AccountSection title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <AccountSection title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    );
};

export default UserPage;
