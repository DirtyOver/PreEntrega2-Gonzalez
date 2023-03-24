import brand from "../../img/Brand.svg";
import { Link } from "react-router-dom"

const Brand = () =>{
    return(
        <Link to="/">
        <img src={brand} alt="Tienda TrendIsdead" title="Tienda TrendIsdead"></img>
        </Link>
    )
}

export default Brand;  