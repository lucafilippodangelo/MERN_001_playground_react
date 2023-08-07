import React from 'react'

const GoalList = props =>{
  console.log("before");
  console.log(props.goals);
  console.log("after");
  return(
        <ul className="ldPersonalisedStyleInAppCss">
          {/*LD Instead to go statically I load the list items by mapping "map" each prob element,
          so in array. "map" will return a new array of elements that got translated from Javascript to JSX  */}
            {props.goals.map(anArrayElementInJavascript => 
              {return <li key={anArrayElementInJavascript.id}> {anArrayElementInJavascript.text} </li>})
            }
      </ul>
    );
};

export default GoalList; 