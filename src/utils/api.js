import axios from "axios";
import { useParams } from "react-router-dom";


async function fetchApi(url) {
 
  try {
    const result = await axios.get(url, { headers :
     {accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`},}
    );
    return result;
  } catch (error) {
    console.error(error);
  }
}

export { fetchApi };
