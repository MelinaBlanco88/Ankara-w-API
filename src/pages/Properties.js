import { useState, useEffect } from "react";
import CardProperty from "../components/CardProperty/CardProperty";
import { useGlobal } from "../context/GlobalContext";

const Properties = () => {
  const {
    sortProperties,
    handleSort,
    pages,
    handleSearch,
    propertyTypes,
    locations,
  } = useGlobal();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState(() => {
    return {
      limit: 10,
      page: 1,
    };
  });
  const [formSearch, setFormSearch] = useState(() => {
    if (localStorage.getItem("formSearch")) {
      const objectSearch = JSON.parse(localStorage.getItem("formSearch"));
      return {
        name: objectSearch.name || "",
        bedrooms: objectSearch.bedrooms || null,
        bathrooms: objectSearch.bathrooms || null,
        parking_spaces: objectSearch.parking_spaces || null,
        max_price: objectSearch.max_price || 0,
        property_type: objectSearch.property_type || null,
        location: objectSearch.location || null,
        construction_size: objectSearch.construction_size || 0,
      };
    } else {
      return {
        name: "",
        bedrooms: null,
        bathrooms: null,
        parking_spaces: null,
        max_price: 0,
        property_type: null,
        location: null,
        construction_size: 0,
      };
    }
  });

  useEffect(() => {
    if (localStorage.getItem("formSearch")) {
      let objectSearch = {
        max_price: formSearch.max_price,
        min_bedrooms: formSearch.bedrooms || 1,
        min_parking_spaces: formSearch.parking_spaces || 1,
        min_bathrooms: formSearch.bathrooms || 1,
        property_type: formSearch.property_type || "",
        location: formSearch.location || "",
      };
      getProperties(objectSearch);
    }
  }, []);

  const getProperties = async (objectSearch) => {
    handleSearch(objectSearch);
    if (localStorage.getItem("formSearch")) {
      localStorage.clear();
    }
  };

  const handleChange = (ev) => {
    setFormSearch({
      ...formSearch,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    getProperties({
      max_price: formSearch.max_price,
      min_bedrooms: formSearch.bedrooms || 0,
      min_parking_spaces: formSearch.parking_spaces || 0,
      min_bathrooms: formSearch.bathrooms || 0,
      property_type: formSearch.property_type || "",
      location: formSearch.location || "",
      construction_size: formSearch.construction_size || 0,
    });
    setSort("");
  };

  const handlePage = async (page) => {
    if (page === filter.page) return;
    setFilter({
      ...filter,
      page: page,
    });
  };

  const handleNextPage = async () => {
    if (filter.page === filter.pages) return;
    const nextPage = filter.page + 1;
    setFilter({
      ...filter,
      page: nextPage,
    });
  };

  const handlePrevPage = async () => {
    if (filter.page === 1) return;
    const prevPage = filter.page - 1;
    setFilter({
      ...filter,
      page: prevPage,
    });
  };

  return (
    <>
      <section className="divtitulo">
        <h1 className="titulo"> Propiedades</h1>
      </section>

      <section className="tttx center ">
        <section className="mmrr6 center lefttotal">
          <div className="titlfilt">
            {" "}
            <h4 className="center ptext3"> </h4>{" "}
          </div>

          <form onSubmit={handleSubmit} className="boxyellow ifilters">
            {/* <div className="containerinput">
              <input
                placeholder="Buscar por nombre.."
                className=" sss form-control inputt sbsb"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div> */}
            <div className="containerinput">
              <select
                className="form-control inputt"
                name="location"
                id="favoriteOnly"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>

            <div className="containerinput">
              <select
                placeholder="tipo"
                className="form-control inputt"
                name="property_type"
                id="favoriteOnly"
                value={formSearch.property_type}
                onChange={handleChange}
              >
                <option value="">Todos los tipos</option>
                {propertyTypes.map((propertyType, i) => (
                  <option key={i} value={propertyType}>
                    {propertyType}
                  </option>
                ))}
              </select>
            </div>
            <div className="containerinput">
              <select
                placeholder="tipo"
                className="form-control inputt"
                id="favoriteOnly"
                name="bedrooms"
                value={formSearch.bedrooms}
                onChange={handleChange}
              >
                <option value="">Habitaciones</option>
                {[...Array(7).keys()].map((value, i) => (
                  <option key={i} value={value + 1}>
                    {value + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="containerinput">
              <select
                placeholder="tipo"
                className="form-control inputt"
                id="favoriteOnly"
                name="bathrooms"
                value={formSearch.bathrooms}
                onChange={handleChange}
              >
                <option value="">Baños</option>
                {[...Array(7).keys()].map((value, i) => (
                  <option key={i} value={value + 1}>
                    {value + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="containerinput">
              <select
                placeholder="tipo"
                className="form-control inputt"
                id="favoriteOnly"
                name="parking_spaces"
                value={formSearch.parking_spaces}
                onChange={handleChange}
              >
                <option value="">Estacionamiento</option>
                {[...Array(7).keys()].map((value, i) => (
                  <option key={i} value={value + 1}>
                    {value + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className=" lbrangeclass containerinput">
              <div className="rangess sss form-control inputt">
                {" "}
                <input
                  onChange={handleChange}
                  classname="lbrangeclass2"
                  id="lbrange"
                  type="range"
                  min="0"
                  max="25000000"
                  step="10"
                  name="max_price"
                  value={formSearch.construction_size}
                />{" "}
                <div id="lbrangev"> {formSearch.construction_size} M2</div>{" "}
              </div>
            </div>

            <div className=" lbrangeclass containerinput">
              <div className="rangess sss form-control inputt">
                {" "}
                <input
                  onChange={handleChange}
                  classname="lbrangeclass2"
                  id="lbrange"
                  type="range"
                  min="3000000"
                  max="25000000"
                  step="1000000"
                  name="max_price"
                  value={formSearch.max_price}
                />{" "}
                <div id="lbrangev"> $ {formSearch.max_price} </div>{" "}
              </div>
            </div>
            <button type="submit" className="buttonsearch2">
              <p className="text5">Buscar</p>
            </button>
          </form>
        </section>
        <section className="bothtog center">
          <section className="toptotal center">
            <div className="boxyellow2">
              <form className="center ff2">
                <p className="df">
                  <label for="favoriteOnly">
                    <h4 className="txtx center ptext3">Ordenar por:</h4>
                  </label>
                </p>
                <p className="mf">
                  <select
                    className="xxxxi inputt "
                    name="favoriteOnly"
                    id="favoriteOnly"
                    value={sort}
                    onChange={(e) => {
                      handleSort(e.target.value);
                      setFilter({ ...filter, page: 1 });
                    }}
                  >
                    <option value="" readOnly>
                      Seleccionar
                    </option>
                    <option value="asc">Precio mas bajo</option>
                    <option value="desc">Precio mas alto</option>
                  </select>
                </p>
                {/* <p>
                  <input
                    className="bblp bbt text5 buttonsearch2 "
                    type="submit"
                    value="Buscar"
                  />
                </p> */}
              </form>
            </div>
          </section>
          <section className="righttotal">
            <div>
              <ul className="grid-1-2">
                {sortProperties
                  .slice(
                    (filter.page - 1) * filter.limit,
                    filter.page * filter.limit
                  )
                  .map((property) => (
                    <CardProperty
                      key={property.public_id}
                      property={property}
                    />
                  ))}
              </ul>
              {pages > 1 && (
                <div className="pages">
                  {" "}
                  <div
                    onClick={() => handlePrevPage()}
                    className="wwwl center circlepages"
                  >
                    ˂˂
                  </div>{" "}
                  {[...Array(pages).keys()].map((value, i) => (
                    <div
                      className=" center circlepages"
                      key={i}
                      onClick={() => handlePage(value + 1)}
                      value={value + 1}
                    >
                      {value + 1}
                    </div>
                  ))}
                  <div
                    onClick={() => handleNextPage()}
                    className="wwwl center circlepages"
                  >
                    {" "}
                    ˃˃
                  </div>{" "}
                </div>
              )}
            </div>

            {/* </>
                        })}   */}
          </section>
        </section>
      </section>

      {/* <Contactbar /> */}
    </>
  );
};

export default Properties;
