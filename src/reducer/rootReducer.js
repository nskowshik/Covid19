import axios from 'axios';
const initialState = {
    covid : {}
}
function rootReducer(state = initialState) {
    axios.get("https://api.covid19india.org/state_district_wise.json").then(res => {
        Object.assign(initialState.covid,res.data)     
    })
    return state;
};
  
export default rootReducer;