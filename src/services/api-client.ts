import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a730bdebc1384653968588b26cb5313d'
    }
})