import React from 'react';
const List = ({peeps}) => {
  return (
    <>
      {peeps.map((janta)=>{
        const{id,name,age,image}=janta
        return(
          <div key={id} className="person">
<img src={image} alt={name} />
<div>
  <h4>{name}</h4>
  <p>{age} years</p>
</div>
          </div>
        )
      })}
    </>
  );
};

export default List;
