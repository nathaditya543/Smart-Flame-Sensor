import React from 'react'

export default function DropDown(props) {
  function SetSrcFunc(){
    var selectElement = document.querySelector('#SourceForm');
    var output = selectElement.value;
    console.log(output);
    props.SetSrc(parseInt(output))
  }
  function SetDestFunc(){
    var selectElement = document.querySelector('#DestForm');
    var output = selectElement.value;
    console.log(output);
    props.SetDest(parseInt(output))
  }

  return (
  <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
    <div style={{background: "rgba(255,255,255,0.5)", padding:"5px", borderRadius:"10px"}}>
    Source
    <select onChange={SetSrcFunc} className="form-select" id = "SourceForm" aria-label="Default select example" style = {{margin:"5px", marginLeft:"0px"}}>
      <option value="0">1</option>
      <option value="1">2</option>
      <option value="2">3</option>
      <option value="3">4</option>
      <option value="4">5</option>
      <option value="5">6</option>
      <option value="6">7</option>
      <option value="7">8</option>
      <option value="8">9</option>
    </select>
   
    Destination
    <select onChange={SetDestFunc} className="form-select" id ="DestForm" aria-label="Default select example" style={{margin:"5px", marginLeft:"0px"} }>
      <option value="0">1</option>
      <option value="1">2</option>
      <option value="2">3</option>
      <option value="3">4</option>
      <option value="4">5</option>
      <option value="5">6</option>
      <option value="6">7</option>
      <option value="7">8</option>
      <option value="8" selected>9</option>
    </select>
    </div>
  </div>
  )
}
