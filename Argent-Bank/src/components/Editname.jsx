/* import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "../css/main.css";
import { apiService } from "../services/ApiServices.js";
import { setUser } from "../features/user/userSlice.js";

const EditUserName = ({ currentFirstName, currentLastName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState(currentFirstName);
    const [lastName, setLastName] = useState(currentLastName);
    const dispatch = useDispatch();

    const handleDropdownChange = () => {
        setIsOpen(!isOpen);
    };

    const handleSave = () => {
        // enregistre le nouveau nom
        dispatch({ type: "user/setUser", payload: { firstName, lastName } });
        setIsOpen(false);
    };

    const handleCancel = () => {
        // Annule l'enregistrement de la modification de nom
        setFirstName(currentFirstName);
        setLastName(currentLastName);
        setIsOpen(false);
    };

    return (
        <div className="editUsernameContainer">
            <div className="editUsernameHeader">
                <button className="edit-button" onClick={handleDropdownChange}>
                    Edit Name
                </button>
            </div>

            {isOpen && (
                <div className="editUsernameContent">
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
};

EditUserName.propTypes = {
    currentFirstName: PropTypes.string.isRequired,
    currentLastName: PropTypes.string.isRequired
};

export default EditUserName;
 */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { apiService } from "../services/ApiServices";
import { setUser } from "../features/user/userSlice";
import "../css/main.css";

const EditUserName = ({ currentFirstName, currentLastName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState(currentFirstName);
    const [lastName, setLastName] = useState(currentLastName);
    const [hasError, setHasError] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token); // Récupération du token depuis Redux

    const handleDropdownChange = () => {
        setIsOpen(!isOpen);
    };

    const handleSave = async () => {
        setHasError(false);
        if (!token) {
            setHasError("Token is missing. Please sign in again.");
            return;
        }

        // Appel à l'API pour mettre à jour le nom
        const result = await apiService.updateUserName(token, firstName, lastName);
        if (result.status !== 200) {
            setHasError(result.errorMsg);
            return;
        }

        // Mise à jour des infos dans Redux
        dispatch(setUser({ firstName: result.firstName, lastName: result.lastName }));

        setIsOpen(false);
    };

    const handleCancel = () => {
        // Annule l'édition et réinitialise les valeurs
        setFirstName(currentFirstName);
        setLastName(currentLastName);
        setIsOpen(false);
    };

    return (
        <div className="editUsernameContainer">
            <div className="editUsernameHeader">
                <button className="edit-button" onClick={handleDropdownChange}>
                    Edit Name
                </button>
            </div>

            {isOpen && (
                <div className="editUsernameContent">
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                    {hasError && <p className="error">{hasError}</p>}
                </div>
            )}
        </div>
    );
};

EditUserName.propTypes = {
    currentFirstName: PropTypes.string.isRequired,
    currentLastName: PropTypes.string.isRequired
};

export default EditUserName;
