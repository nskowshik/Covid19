import axios from 'axios';
const initialState = {
    covid : {}
}
function rootReducer(state = initialState) {
    axios.get("https://data.covid19india.org/v4/min/data.min.json").then(res => {
        Object.assign(initialState.covid,res.data)     
    })
    return state;
};
  
export default rootReducer;