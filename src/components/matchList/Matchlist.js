import React from 'react'
import Match from '../matches/Match'
import './matchlist.css'
const Matchlist = ({matches}) => {
    console.log('match list called, ',matches);
  return (
    <div className="match-list">
      {
        matches && matches.length && matches.map(match => 
            <Match match={match} />
        )
      }
    </div>
  );
}

export default Matchlist