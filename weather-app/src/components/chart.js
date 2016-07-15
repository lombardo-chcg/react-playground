import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  let total = 0;
  for (let x = 0; x < data.length; x++ ) {
    total += Number(data[x])
  }
  return Math.round(total/data.length)
}

export default (props) => {
  return (
    <div>
      <Sparklines width={90} height={60} margin={5} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
    </div>
  )
}
