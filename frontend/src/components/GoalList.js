import React from 'react'

const GoalList = props =>{
  console.log("before");
  console.log(props.goals);
  console.log("after");
  return(
        <ul className="ldPersonalisedStyleInAppCss">
          {/*LD Instead to go statically I load the list items by mapping "map" each prob element,
          so in array. "map" will return a new array of elements that got translated from Javascript to JSX  */}
          {props.goals.map(anArrayElementInJavascript => {return <li>{anArrayElementInJavascript.text}</li>})}
        
        {/* <li>list item one</li>
        <li>list item two</li>
        <li>list item three f</li> */}
      </ul>
    );
};

export default GoalList; 