import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

const Results = ({input}) => {
    
const resultData = calculateInvestmentResults(input)
const intialInvestment = resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment;
  return (
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                resultData.map((YearData)=>{
                const totalIntrest = YearData.valueEndOfYear-YearData.annualInvestment * YearData.year - intialInvestment;
                const totalAmountInvested = YearData.valueEndOfYear- totalIntrest;
                return ( 
                     <tr key={YearData.year}>
                        <td>{YearData.year}</td>
                        <td>{formatter.format(YearData.valueEndOfYear)}</td>
                        <td>{formatter.format(YearData.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>             
                     </tr>
                   )
                })
            }
        </tbody>
    </table>
  )
}

export default Results