import React from 'react'
import { connect } from 'react-redux'
import {incAction} from './action/actions'

const Counter = (props) => {
    console.log("counter rendered");
    
    return(
        <div>
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.countFn()}}>ink</button>
        </div>
    )
}

const mapStateToProps = (state) => {

    return state.counterR
}

const mapDispatchToProps = (dispatch) => {

    return {
        countFn: (nc)=>{dispatch(incAction())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)