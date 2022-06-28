import React from "react";
import "./match.css";
const Match = ({ match }) => {
  const {
    matchName,
    matchNumber,
    matchType,
    matchResult,
    matchStatus,
    venue,
    matchdate,
    homeTeamName,
    awayTeamName,
    teamsWinProbability,
  } = match;
  const {
    homeTeamShortName,
    homeTeamPercentage,
    awayTeamShortName,
    awayTeamPercentage,
    tiePercentage,
  } = teamsWinProbability;
  return (
    <div className="match-card">
      <div className="match-header">
        <div className="left">
          <div className="upper-box">
            <span className="match-name">{matchType}</span>
            <span className="match-status">{matchStatus}</span>
          </div>
          <div className="location">
            <i
              style={{ color: "red" }}
              className="fa-solid fa-location-dot"
            ></i>
            <span>{venue}</span>
          </div>
        </div>
        <div className="notify">
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>
      <div className="match-details">
        <div className="match-info">
          <span>{homeTeamName}</span>
          <span className="vs">{matchType}</span>
          <span>{awayTeamName}</span>
        </div>
        <div className="match-time">{matchdate}</div>
      </div>
      <div className="match-bottom">
        <p>Win Percentage</p>
        <div className="match-line">
          <div
            style={{ width: `${homeTeamPercentage}%` }}
            className="left-line"
          ></div>
          <div
            style={{ width: `${awayTeamPercentage}%` }}
            className="right-line"
          ></div>
        </div>
        <div className="team-per">
          <div className="left-team">
            <span>{homeTeamShortName}</span>
            <span>({homeTeamPercentage})</span>
          </div>
          <div className="right-team">
            <span>{awayTeamShortName}</span>
            <span>({awayTeamPercentage})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
