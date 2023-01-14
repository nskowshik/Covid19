import React from 'react'
import {connect} from 'react-redux'
class DistCases extends React.Component{
    render(props){
        var stsname=this.props.stsname;
        var dist=this.props.dist;
        const distTotal =  this.props.covidProps[stsname].districts[dist].total
        return(
            <div className="total">
                <p className="text-primary">Vacinated 1: {distTotal?.vaccinated1}</p>
                <p clasdist="text-info">Vacinated 2  : {distTotal?.vaccinated2}</p>
                <p className="text-danger">Total Vacination : {distTotal?.vaccinated1 + distTotal?.vaccinated2}</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        covidProps : state.covid
    } ;
}
export default connect(mapStateToProps)(DistCases)