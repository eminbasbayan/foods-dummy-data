import React from "react";

function Show(props) {
  return (
    <div class="card mb-3 d-block mx-auto mt-3">
      <img src={props.img} class="card-img-top img-fluid" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Show;
