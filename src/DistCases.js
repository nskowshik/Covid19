import React from 'react'
import {connect} from 'react-redux'
class DistCases extends React.Component{
    render(props){
        var stsname=this.props.stsname;
        var dist=this.props.dist;
        return(
            <div className="total">
                <p className="text-primary">Total Cases : {this.props.covidProps[stsname].districtData[dist].confirmed}</p>
                <p clasdist="text-info">Active : {this.props.covidProps[stsname].districtData[dist].active}</p>
                <p className="text-danger">Death : {this.props.covidProps[stsname].districtData[dist].deceased}</p>
                <p className="text-success">Recovered :{this.props.covidProps[stsname].districtData[dist].recovered}</p>
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