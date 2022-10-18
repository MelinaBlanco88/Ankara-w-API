import "./pages.css";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// import Carousel from 'react-bootstrap/Carousel'
import Carrousel from "../components/Carrousel/Carrousel";
import { Link, useParams } from "react-router-dom";
import EasyBrokerService from "../services/EasyBrokerService";
import Wrapper from "../components/Wrapper/Wrapper";
import { STATUS } from "../config/constants";

const Details = () => {
  const {
    textoParaFoto,
    setTextoParaFoto,
    modalOnOff,
    setModalOnOff,
    btng4,
    setBtng4,
    changeBtng,
  } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(STATUS.LOADING);
  const [property, setProperty] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    EasyBrokerService.getProperty(id)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setStatus(STATUS.SUCCESS);
      })
      .catch((err) => {
        setStatus(STATUS.ERROR);
      });
  }, [id]);

  const rangechange = () => {
    const putrange = document.getElementById("lbrange").value;
    const put = document.getElementById("lbrangev");
    console.log("putrange", putrange);
    put.innerHTML = `$ ${putrange}`;
  };

  const consoleLog = () => {
    console.log("aca voy a details");
  };

  const functionpic = (n) => {
    setModalOnOff(true);
    changeBtng(n);
  };

  //////////////////////////////////

  const cambiarfotomenos = () => {
    // limite de fotos ( PONER EL LENGHT DE ARRAY DE FOTOS)

    if (btng4 > 1) {
      let counter = btng4;
      console.log("counter", counter);
      console.log("btgn4 ", btng4);
      counter--;
      setBtng4(counter);
      console.log("counter", counter);
      console.log("btgn4", btng4);
    } else {
    }

    if (btng4 == 1) {
      setTextoParaFoto("Living");
    }
    if (btng4 == 2) {
      setTextoParaFoto("Living");
    }
    if (btng4 == 3) {
      setTextoParaFoto("Habitacion");
    }
    if (btng4 == 4) {
      setTextoParaFoto("Patio");
    }

    console.log("XXXXXXXXXXXX", textoParaFoto);
  };

  const cambiarfotomas = () => {
    // limite de fotos ( PONER EL LENGHT DE ARRAY DE FOTOS)
    if (btng4 < 4) {
      let counter = btng4;
      console.log("counter", counter);
      console.log("btgn4 ", btng4);
      counter++;
      setBtng4(counter);
      console.log("counter", counter);
      console.log("btgn4", btng4);
    } else {
    }

    if (btng4 == 1) {
      setTextoParaFoto("Habitacion");
    }
    if (btng4 == 2) {
      setTextoParaFoto("Patio");
    }
    if (btng4 == 3) {
      setTextoParaFoto("Living");
    }
    if (btng4 == 4) {
      setTextoParaFoto("Living");
    }

    console.log("XXXXXXXXXXXX", textoParaFoto);
  };

  console.log(property?.description);
  ///////////////////////////////////

  return (
    <Wrapper status={status}>
      {property && (
        <>
          <section className="divtitulo">
            <h1 className="titulo">{property.title}</h1>
          </section>

          <section className="propiedad">
            <div className="treintaporc">
              <section className=" center total">
                <section className="mmrr62 center lefttotal">
                  <div className="titlfilt">
                    {" "}
                    <h4 className="center ptext3"> </h4>{" "}
                  </div>

                  <Link to="/propiedades">
                    <button className="buttonsearch2">
                      <p className="text5">Ver propiedades</p>
                    </button>
                  </Link>
                </section>
              </section>
            </div>

            <div className="setentaporc">
              <div className="galeryprop">
                <Carrousel images={property.property_images} />
              </div>
              
              <>
                <div className="infoproppp">
                  <div className="flexh">
                    <h1 className="tittt sinmargin">{property.title}</h1>
                    <div className="priceandheart corrigiendo5">
                      {" "}

                      <p className="price">
                        {property.operations[0]?.formatted_amount}
                      </p>
                    </div>
                  </div>

                  <h4 className="ggg">
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
                    {property.location?.name}
                  </h4>

                  <div className="content-caracteristicas">
                    <p className="aaa footer15imp footer15impc">Descripción</p>
                    <p style={{ whiteSpace: "pre-line", }} className="bbb footer15imp ptextn">{property.description}</p>
                  </div>

                  <div className="content-caracteristicas">
                    <p className="aaa footer15imp footer15impc">Detalles</p>
                    <div className="listadetalles grid-1-2">
                        <li>
                          {" "}

                          <ul className="display-none">
                            {" "}
                            <p className="margrigh blbl">Nombre:</p>{" "}
                            <p className="margrigh2">{property.title}</p>
                          </ul>
                          <ul className="listadetalles2">
                            {" "}
                            <p className="margrigh blbl">Precio:</p>{" "}
                            <p className="margrigh2">$ 14,900,000</p>
                          </ul>
                          <ul className="listadetalles2">
                            {" "}
                            <p className="margrigh blbl">Baños:</p>{" "}
                            <p className="margrigh2">{property.bathrooms || 0}</p>
                          </ul>
                          <ul className="listadetalles2">
                            {" "}
                            <p className="margrigh blbl">Habitaciones:</p>{" "}
                            <p className="margrigh2">{property.bedrooms || 0}</p>
                          </ul>
                        </li>

                        <li>
                          {" "}
                          <ul className="listadetalles2">
                            {" "}
                            <p className="margrigh blbl">Estacionamiento:</p>{" "}
                            <p className="margrigh2">
                              {property.parking_spaces || 0}
                            </p>
                          </ul>
                          <ul className="listadetalles2">
                            {" "}
                            <p className="margrigh blbl">Metros:</p>{" "}
                            <p className="margrigh2">
                              {property.construction_size || 0}
                            </p><p className="margrigh2">M2</p>
                          </ul>
                          <ul className="listadetalles2">
                            {" "}
                            <p className="margrigh blbl">Tipo:</p>{" "}
                            <p className="margrigh2">{property.property_type}</p>
                          </ul>

                        </li>
                    </div>
                  </div>

                  <div className="content-caracteristicas">      
                    <p className="aaa footer15imp footer15impc">
                      Caracteristicas
                    </p>
                    <div className="listadetallescarac">
                      {property.features?.map((feature, i) => (
                        <div>
                          <li className="listaCaracteristicas">
                            <div className="checkPropiedades">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                class="bi bi-check"
                                viewBox="3 0.2 16 16"
                              >
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                              </svg>{" "}
                            </div>
                            <div>
                              {" "}
                              <ul className="listadetalles22">
                                {" "}
                                <p className="caractext">{feature.name}</p>
                              </ul>{" "}
                            </div>
                          </li>
                        </div>
                      ))}
                      
                    </div>
                  </div>
                  
                  <div className="content-caracteristicas">
                    <p className="aaa footer15imp footer15impc">Beneficios </p>
                    <p className="bbb footer15imp ptextn">
                      - Un recibidor que integra a la sala de doble altura con
                      iluminación natural que te permitirá vivir momentos de
                      convivencia inolvidables.<br></br>
                      <br></br> - Integración estratégica al comedor y cocina
                      funcional diseñada con acabados de alta calidad que comunica
                      a su zona de servicio.<br></br>
                      <br></br> - Tres amplias habitaciones con baño integrado y
                      vestidor que te permitirán privacidad y confort. Medio baño
                      que ofrece servicio para tus visitas.<br></br>
                      <br></br> - Oficina que permite el acceso al garage con gran
                      ventanal y cubo de escaleras con iluminación natural.
                      <br></br>
                    </p>
                  </div>
                </div>

                <section className="textocont2 display-none">
                  <div className="imagen">
                    <p className="margrigh33 footer15imp ptextn">
                      Quiero conocer más esta propiedad{" "}
                    </p>
                    <p className="footer15imp footer15impc">
                      DESCARGA EL BROCHURE{" "}
                    </p>

                    <form
                      action="https://formsubmit.co/contacto@ankararealestate.com.mx"
                      method="POST"
                    >
                      {/* <form id="formulario1" onSubmit={enviarcontacto} className=" formulario"> */}

                      <div className="div1">
                        <div className="divflex1">
                          <input
                            id="name"
                            className="form-control3 inputt"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            //  value={formDataUser.name}
                            //     onChange={handleChange}
                            required
                          />

                          <input
                            id="phone"
                            className="form-control3 inputt"
                            type="number"
                            name="phone"
                            placeholder="Telefono"
                            //  value={formDataUser.phone}
                            //     onChange={handleChange}
                          />
                        </div>

                        <div className="divflex2">
                          <input
                            id="email"
                            className="form-control3"
                            type="email"
                            name="email"
                            placeholder="email"
                            //      value={formDataUser.email}
                            //     onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="div2">
                        <button type="submit" className="buttonsearch2">
                          {" "}
                          <p className="xd text5">Descargar BROCHURE</p>
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </>
            </div>
          </section>
        </>
      )}
    </Wrapper>
  );
};

export default Details;
