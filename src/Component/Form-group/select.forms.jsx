import React from "react";

function Select({id,data, defaultOpt}) {
  return (
    <div  className="form-group mb-3 border-dark">
      <select name={id} id={id}   className="form-control custom-select">
      {/* <option  selected disabled hidden>{defaultOpt}</option> */}
        {data.map((item,ind)=>(
          <div key={ind}>
        <option  defaultValue disabled hidden>{item.defaultOpt}</option>
        <option value={item.value} key={ind}>{item.value}</option>
          </div>
        
        ))}
      </select>
    </div>
  );
}

export default Select;
