import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CardProperty = ({ property }) => {
  return (
    <li key={property.public_id} className="ml2 listaclassbox2">
      <div className="margintop5 mgt55">
        {" "}
        <img
          className="pictureProp"
          src={property.title_image_full}
          alt="pictureProp"
        />
      </div>
      <Link to={`/propiedades/${property.public_id}`}>
        <div className="divsubtitle">
          {" "}
          <p className="ssss subtitle" onClick={() => {}}>
            {property.title}
          </p>{" "}
        </div>
      </Link>
      <div className="location">
        {" "}
        <a className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>{" "}
          {property.location}
        </a>
      </div>
      <div className="priceandheart">
        {" "}

        Precio: <p className="price">{property?.operations[0]?.formatted_amount}</p>
      </div>
      <div className="divproperinfot">
        <div className=" properinfo">
          {" "}
          <img src="http://malikhassan.com/html/evernest/images/bedroom_icon.png"></img>
          Habitaciones <p className="textt"> {property?.bedrooms || 0}</p>
        </div>
        <div className=" properinfo">
          {" "}
          <img src="http://malikhassan.com/html/evernest/images/bathroom_icon.png"></img>
          Baños<p className="textt"> {property?.bathrooms || 0}</p>
        </div>
        <div className=" properinfo">
          {" "}
          <img src="http://malikhassan.com/html/evernest/images/garage_icon.png"></img>{" "}
          Garage
          <p className="textt"> {property?.parking_spaces || 0} </p>
        </div>
        <div className=" properinfo">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="hh bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </svg>{" "}
          Metros <p className="textt">{property?.construction_size || 0} M2</p>
        </div>
      </div>

      <div className="buttonb">
        <span className="tx bg-yellow">{property.property_type}</span>

        <Link className="tx bg-black" to={`/propiedades/${property.public_id}`}>
            {" "}<span  onClick={() => {}}>Ver más <RiArrowDropRightLine size={26} className="arrow" /></span>{" "}
        </Link>
      </div>
    </li>
  );
};

export default CardProperty;
