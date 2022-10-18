import { API_BASE_URL } from "../config/constants";
import { getHeaders } from "../utils/getHeaders";
import { serializeObject } from "../utils/serializeObject";

class EasyBrokerService {

  async getProperty(property_id){
    return await fetch(
      `${API_BASE_URL}/properties/${property_id}`,
      getHeaders()
    );
  }
  async getProperties(objectSearch) {
    return await fetch(
      `${API_BASE_URL}/properties?${serializeObject(objectSearch)}`,
      getHeaders()
    );
  }

  async getAllProperties() {
    return await fetch(`${API_BASE_URL}/properties/all`, getHeaders());
  }
}

export default new EasyBrokerService();
