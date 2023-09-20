import React from 'react';



export const Usuario = (props) => {

  const imagen = `./../img/${props.imagen}`;

  let color = 'text-bg-primary';
  switch (props.color) {
    case "primary":
        color = 'text-bg-primary';
        break;  
    case "secondary":
        color = 'text-bg-secondary';
        break;  
    case "success":
        color = 'text-bg-success';
        break;      
    case "danger":
        color = 'text-bg-danger';
        break;      
    case "warning":
        color = 'text-bg-warning';
        break;      
    default:

        break;
  }

  return (
    
        <div className={`card m-auto mt-2 ${color}`} style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top" alt=".." />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.cargo}</p>
                <a href="#" className="btn btn-primary">{props.conoceme}</a>
            </div>
        </div>
    



  )
}
