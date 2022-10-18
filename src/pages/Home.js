import { useState } from "react";
import OurTeam from "./OurTeam";
import GeneralContainer from "../components/GeneralContainer/GeneralContainer";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
import CardProperty from "../components/CardProperty/CardProperty";

const Home = () => {
  const { sortProperties, propertyTypes, locations } = useGlobal();
  const [formSearch, setFormSearch] = useState({
    name: "",
    bedrooms: null,
    bathrooms: null,
    parking_spaces: null,
    max_price: 0,
    property_type: null,
    location: null,
    construction_size: 0,
  });

  const navigate = useNavigate();

  const handleChange = (ev) => {
    setFormSearch({
      ...formSearch,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("formSearch", JSON.stringify(formSearch));
    navigate("/propiedades");
  };

  return (
    <>
      <GeneralContainer />

      <section className="homeclass">
        <section className="baners">
          <section className="bannerosc"> </section>
          <section className="banner container">
            <div className="containerS">
              <h1 className="sliderh1">Encuentra la casa de tus sueños</h1>
              <h3 className="sbt text2">
                Tu hogar debe contar la historia de quién eres y ser una
                colección de lo que amas
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="formbanner">
              <div className="formbannerback">
                <div className="divinputform">
                  <select
                    id="inputBuscarLocacion"
                    className="inputform"
                    name="location"
                    onChange={handleChange}
                    value={formSearch.location}
                  >
                    <option value="">Todas las locaciones</option>
                    {locations.map((location, i) => (
                      <option key={i} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="divinputform">
                  <select
                    id="inputBuscarType"
                    placeholder="tipo"
                    className="inputform"
                    name="property_type"
                    onChange={handleChange}
                    value={formSearch.property_type}
                  >
                    <option value="">Todos los tipos</option>
                    {propertyTypes.map((propertyType, i) => (
                      <option key={i} value={propertyType}>
                        {propertyType}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="divinputform">
                  <select
                    id="inputBuscarBedroom"
                    placeholder="tipo"
                    className="inputform"
                    name="bedrooms"
                    onChange={handleChange}
                    value={formSearch.bedrooms}
                  >
                    <option value="">Habitaciones</option>
                    {[...Array(7).keys()].map((value, i) => (
                      <option key={i} value={value + 1}>
                        {value + 1}
                      </option>
                    ))}
                  </select>
                </div>
                

                <div className="divinputform">
                  <select
                    id="inputBuscarBathroom"
                    placeholder="tipo"
                    className="inputform"
                    name="bathrooms"
                    onChange={handleChange}
                    value={formSearch.bathrooms}
                  >
                    <option>Baños</option>
                    {[...Array(7).keys()].map((value) => (
                      <option key={value} value={value + 1}>
                        {value + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="divinputform">
                  <select
                    id="inputBuscarParking"
                    placeholder="tipo"
                    className="inputform"
                    name="parking_spaces"
                    value={formSearch.parking_spaces}
                    onChange={handleChange}
                  >
                    <option value="">Estacionamiento</option>
                    {[...Array(6).keys()].map((value) => (
                      <option key={value} value={value + 1}>
                        {value + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="divinputform">
                  <div className="rangess sss form-control inputt22 corrigiendo2 inputform">
                    {" "}
                    <input
                      className="rangoo corrigiendo3"
                      onChange={handleChange}
                      id="lbrange"
                      type="range"
                      min="0"
                      max="30000"
                      step="1"
                      name="construction_size"
                      value={formSearch.construction_size}
                    />{" "}
                    Mínimo<div id="lbrangev"> {formSearch.construction_size} M2 </div>{" "}
                  </div>
                </div>
                <div className="divinputform">
                  <div className="rangess sss form-control inputt22 corrigiendo2 inputform">
                    {" "}
                    <input
                      className="rangoo corrigiendo3"
                      onChange={handleChange}
                      id="lbrange"
                      type="range"
                      min="0"
                      max="25000000"
                      step="1000000"
                      name="max_price"
                      value={formSearch.max_price}
                    />{" "}
                    Máximo<div id="lbrangev"> $ {formSearch.max_price} </div>{" "}
                  </div>
                </div>

                <div className="divinputform">
                  <button
                    id="BotonBuscar"
                    type="submit"
                    className="btban buttonsearch abababa"
                  >
                    {" "}
                    <p className="kkppk text1 xdxdbb kkppk2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>{" "}
                      Buscar
                    </p>{" "}
                  </button>
                </div>

                <div className="divinputform displaynonex">
                  <button
                    id="BotonBuscar2"
                    type="submit"
                    className="btban buttonsearch corrigiendo4"
                  >
                    {" "}
                    <p className="kkppk text1 xdxdbb kkppk2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>{" "}
                      Buscar
                    </p>{" "}
                  </button>
                </div>
              </div>
            </form>
          </section>
        </section>

        <section className="container">
          <div className="featuredproptext">
            {" "}
            <h1 className="titletext">Propiedades destacadas</h1>
            <h3 className="text2">
              Nuestros clientes son lo mas importante para nosotros.
            </h3>{" "}
          </div>
          <div>
            <ul className="listabox spspc grid-1-3">
              {sortProperties.slice(0, 3).map((property) => (
                // <li key={property.public_id} className="ml2 listaclassbox2">
                //   <div className="margintop5 mgt55">
                //     {" "}
                //     <img
                //       className="pictureProp"
                //       src={property.title_image_full}
                //       alt="pictureProp"
                //     />
                //   </div>
                //   <div className="divsubtitle">
                //     {" "}
                //     <p className="ssss subtitle" onClick={() => consoleLog()}>
                //       {property.title}
                //     </p>{" "}
                //   </div>
                //   <div className="location">
                //     {" "}
                //     <a className="location">
                //       <svg
                //         xmlns="http://www.w3.org/2000/svg"
                //         width="16"
                //         height="16"
                //         fill="currentColor"
                //         class="bi bi-geo-alt-fill"
                //         viewBox="0 0 16 16"
                //       >
                //         <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                //       </svg>{" "}
                //       {property.location}
                //     </a>
                //   </div>
                //   <div className="priceandheart">
                //     {" "}
                //     <a onClick={() => consoleLog()} className="hearticon">
                //       <svg
                //         xmlns="http://www.w3.org/2000/svg"
                //         width="16"
                //         height="16"
                //         fill="currentColor"
                //         class="bi bi-heart-fill"
                //         viewBox="0 0 16 16"
                //       >
                //         <path
                //           fill-rule="evenodd"
                //           d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                //         />
                //       </svg>{" "}
                //     </a>
                //     {/* <a className="hearticon"><i class='fas fa-exchange-alt'></i></a>   */}
                //     <p className="price">
                //       {property?.operations[0]?.formatted_amount}
                //     </p>
                //   </div>
                //   <div className="divproperinfot">
                //     <div className=" properinfo">
                //       {" "}
                //       <img src="http://malikhassan.com/html/evernest/images/bedroom_icon.png"></img>
                //       Habitaciones{" "}
                //       <p className="textt"> {property?.bedrooms || 0}</p>
                //     </div>
                //     <div className=" properinfo">
                //       {" "}
                //       <img src="http://malikhassan.com/html/evernest/images/bathroom_icon.png"></img>
                //       Baños<p className="textt"> {property?.bathrooms || 0}</p>
                //     </div>
                //     <div className=" properinfo">
                //       {" "}
                //       <img src="http://malikhassan.com/html/evernest/images/garage_icon.png"></img>{" "}
                //       Garage
                //       <p className="textt"> {property?.parking_spaces || 0} </p>
                //     </div>
                //     <div className=" properinfo">
                //       {" "}
                //       <svg
                //         xmlns="http://www.w3.org/2000/svg"
                //         width="22"
                //         height="22"
                //         fill="currentColor"
                //         class="hh bi bi-house-door"
                //         viewBox="0 0 16 16"
                //       >
                //         <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                //       </svg>{" "}
                //       Metros{" "}
                //       <p className="textt">
                //         {property?.construction_size || 0} M2
                //       </p>
                //     </div>
                //   </div>

                //   <div className="buttonb" onClick={() => consoleLog()}>
                //     <button className="ff2 stylebutton1 buttonsearch2">
                //       {" "}
                //     </button>
                //     <a className="tx twhite">
                //       {" "}
                //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Casa
                //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                //       en venta{" "}
                //     </a>
                //     <button className="ff2 stylebutton2 buttonsearch2">
                //       {" "}
                //     </button>
                //   </div>
                // </li>
                <CardProperty key={property.public_id} property={property} />
              ))}
            </ul>
          </div>
        </section>

        <section className="buyorsell">
          <h1 className="sliderh2">
            En decoración coloca siempre una pieza controvertida.{" "}
          </h1>
          <h1 className="sliderh2">
            Dará tema de conversación a tus invitados{" "}
          </h1>
          <br></br> <br></br>
          <p className="textwhite">
            {" "}
            Total de propiedades vendidas en los últimos 6 meses:
          </p>
          <div className="dflex ">
            <div className="circll"> 25 </div>
            <p className="mleft"> PROPIEDADES PREMIUM</p>
          </div>
        </section>

        <section className="sold">
          <img alt="Vendida" className="imggg imghovdiag" src=" https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.01.31-AM-480x331.jpeg"></img>
          <img alt="Vendida"  className="imggg imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.01.11-AM-480x331.jpeg"></img>
          <img alt="Vendida"  className="imggg imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.00.55-AM-480x331.jpeg"></img>
          <img alt="Vendida"  className="imggg imghovdiag" src="https://www.ankararealestate.mx/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-24-at-9.00.16-AM-480x331.jpeg"></img>
        </section>

        <section className="meetouragents">
          <OurTeam />
        </section>
      </section>
    </>
  );
};

export default Home;
