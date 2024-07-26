import { useState, useEffect } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setPlayerName(name);
    }, [name]);

    function handleEditClick() {
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
        setIsEditing(!isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleEditClick();
        }
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}
