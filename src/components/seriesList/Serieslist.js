import React, { useEffect, useState } from 'react'
import {getSeries} from '../../services/httpService'
import Series from '../series/Series';
const Serieslist = ({type, status}) => {
    console.log('parent render');
    const[series,setSeries] = useState([]);
    const fetchSeries = async() => {
        const query = `
        query {
            newSchedule(type:"${type}",status:"${status}",page:1){
                matches {
                    matchName
                    matchdate
                    matchType
                    matchStatus
                    venue
                    matchdate
                    matchStatus
                    matchNumber
                    matchResult
                    homeTeamName
                    awayTeamName
                    teamsWinProbability {
                        homeTeamShortName
                        homeTeamPercentage
                        awayTeamShortName
                        awayTeamPercentage
                        tiePercentage
                    }
                }
                seriesName
                seriesID
            }
            
        }`;
        try {
            const resData = await getSeries(query);
            const data =  await resData.json();
            console.log('data = ',data);
            let temp = [];
            data?.data?.newSchedule.forEach(ele => {
                temp.push({ ...ele, isExpand: false });
            });
            setSeries(temp);
            // data?.data?.newSchedule.forEach(ele => {
            //     setSeries(prev => ([prev,{ele,isExpand:false}]));
            // });
            // setSeries(data?.data?.newSchedule);
            //console.log("series = ", data?.data?.newSchedule);
        } catch (error) {
            console.log('some error = ',error)
        }
       
    }
    useEffect(() => {
        fetchSeries();
        setSeries(prev => prev)
    },[type,status])
  return (
    <>
      <div className="series-cont">
        {series &&
          series.length &&
          series.map(
            (item) => (
                <Series series={item} />
            )
            // <p key={item.seriesID} style={{color:'white'}}>{item.seriesName}</p>
          )}
      </div>
    </>
  );
}

export default Serieslist