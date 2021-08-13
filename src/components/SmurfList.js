import React from 'react';
import Smurf from './Smurf';

import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux'

 const SmurfList = (props)=> {
    const { smurfs, isLoading, error } = props
    // const isLoading = false;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return(<div className="listContainer">
        <Smurf smurf={testSmurf}/>
        {smurfs.map(d => (
            <div className="card-body">
            <h3 className="card-title">{d.name}</h3>
                <hr/>
                <p className="card-text"><b>Position:</b> {d.position}</p>
                <p className="card-text"><b>Nickname:</b> {d.nickname}</p>
                <p className="card-text"><b>Description:</b> {d.description}</p>
            </div>
        ))}
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.