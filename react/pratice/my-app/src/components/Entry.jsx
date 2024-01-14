import react from "react";

function Entry(props){
    return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.face}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>
      {props.meaning}
    </dd>
  </div>;
}

export default Entry;