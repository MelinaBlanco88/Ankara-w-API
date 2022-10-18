import { createContext, useContext, useEffect, useState } from "react";
import EasyBrokerService from "../services/EasyBrokerService";

const getPropertyTypes = (properties) => {
  return [...new Set(properties.map((property) => property.property_type))];
};

const getLocations = (properties) => {
  const locations = [];
  for (const property of properties) {
    const splitLocation = property.location.split(",");
    locations.push(splitLocation[splitLocation.length - 1].trim());
  }
  return [...new Set(locations)];
};

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [searchProperties, setSearchProperties] = useState();
  const [locations, setLocations] = useState([]);
  const [sortProperties, setSortProperties] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    EasyBrokerService.getAllProperties()
      .then((res) => res.json())
      .then((data) => {
        const content = data.content;
        setProperties(content);
        setSearchProperties(content);
        setPropertyTypes(getPropertyTypes(content));
        setLocations(getLocations(content));
        setSortProperties(content);
        setPages(Math.ceil(data.total / 10));
      })
      .catch();
  }, []);

  const handleSort = (sort) => {
    if (sort === "") {
      setSortProperties([...searchProperties]);
      return;
    }

    const parseProperties = [...sortProperties].map((property) => {
      return {
        ...property,
        amount: property?.operations[0].amount,
      };
    });

    const propertiesNotAmount = parseProperties.filter(
      (property) => !property.amount
    );

    const propertiesWithAmount = parseProperties.filter(
      (property) => property.amount
    );
    setSortProperties([
      ...[...propertiesWithAmount].sort((a, b) => {
        if (a.amount < b.amount) {
          return sort === "asc" ? -1 : 1;
        }
        if (a.amount > b.amount) {
          return sort === "asc" ? 1 : -1;
        }

        return 0;
      }),
      ...propertiesNotAmount,
    ]);
  };

  const handleSearch = (search) => {
    const {
      min_bedrooms,
      min_parking_spaces,
      min_bathrooms,
      property_type,
      location,
      max_price,
      construction_size,
    } = search;

    let _properties = [...properties].map((property) => {
      return {
        ...property,
        amount: property?.operations[0].amount,
      };
    });

    if (location !== "") {
      _properties = [..._properties].filter(
        (property) => property.location && property.location.includes(location)
      );
    }

    if (property_type !== "") {
      _properties = [..._properties].filter(
        (property) =>
          property.property_type && property.property_type === property_type
      );
    }

    if (min_bedrooms !== "" && Number(min_bedrooms) > 0) {
      _properties = [..._properties].filter(
        (property) =>
          property.bedrooms && property.bedrooms >= Number(min_bedrooms)
      );
    }
    if (min_bathrooms !== "" && Number(min_bathrooms) > 0) {
      _properties = [..._properties].filter(
        (property) =>
          property.bathrooms && property.bathrooms >= Number(min_bathrooms)
      );
    }
    if (min_parking_spaces !== "" && Number(min_parking_spaces) > 0) {
      _properties = [..._properties].filter(
        (property) =>
          property.parking_spaces &&
          property.parking_spaces >= Number(min_parking_spaces)
      );
    }

    if (construction_size !== "" && Number(construction_size) > 0) {
      _properties = [..._properties].filter(
        (property) =>
          property.construction_size &&
          property.construction_size <= Number(construction_size)
      );
    }

    if (max_price !== "" && Number(max_price) > 0) {
      _properties = [..._properties].filter(
        (property) => property.amount && property.amount <= Number(max_price)
      );
    }

    setSortProperties([..._properties]);
    setSearchProperties([..._properties]);
    setPages(Math.ceil(_properties.length / 10));
  };

  return (
    <GlobalContext.Provider
      value={{
        sortProperties: sortProperties,
        handleSort: handleSort,
        pages: pages,
        handleSearch: handleSearch,
        propertyTypes: propertyTypes,
        locations: locations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const {
    sortProperties,
    handleSort,
    pages,
    handleSearch,
    propertyTypes,
    locations,
  } = useContext(GlobalContext);
  return {
    sortProperties,
    handleSort,
    pages,
    handleSearch,
    propertyTypes,
    locations,
  };
};

export default GlobalProvider;
