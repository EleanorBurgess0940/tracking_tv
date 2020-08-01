import React from "react";
import "./style.css";

function UserCard() {
    return (
        <div className="container">
            <div class="card text-left">
                <h5 class="card-header">User</h5>
                <div class="card-body">
                    <h5 class="card-title">Watch list:</h5>
                    <p class="card-text">Lost</p>
                    <p class="card-text">Friends</p>
                    <p class="card-text">Friday Night Lights</p>
                    <p class="card-text">CSI: New York</p>
                    <p class="card-text">CSI: Chicago</p>

                </div>
            </div>
        </div>
    );
}

export default UserCard;