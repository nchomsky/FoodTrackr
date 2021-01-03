import axios from 'axios';

//creates an instance of the axios client with a couple of defaulted properties
export default axios.create({
    baseURL: 'https://api.nal.usda.gov/fdc/v1'
});