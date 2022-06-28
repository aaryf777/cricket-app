import React, { memo, useState } from 'react';
import Matchlist from '../matchList/Matchlist';
import './series.css'
const Series = ({series}) => {
  const [expand,setExpand] = useState(false);
  const {seriesName, matches,seriesID,isExpand} = series;
  const handleExpansion = e => {
    series.isExpand = !series.isExpand
    setExpand(p => !p);
  }
  return (
    <>
      <div className="main-cont">
        <p className="series-name">{seriesName}</p>
        <div className="icon">
          {!isExpand ? (
            <i
              onClick={handleExpansion}
              style={{ color: "rgb(84, 224, 84)" }}
              className="fa-solid fa-angle-right"
            ></i>
          ) : (
            <i
              onClick={handleExpansion}
              style={{ color: "rgb(84, 224, 84)" }}
              className="fa-solid fa-angle-down"
            ></i>
          )}
        </div>
      </div>
      {isExpand && <Matchlist matches={matches}/>}
    </>
  );
}

export default memo(Series);