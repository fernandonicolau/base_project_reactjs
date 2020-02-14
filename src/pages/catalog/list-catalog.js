import React, { Component } from 'react';
import Grid from '../../components/grid/grid-component'

import * as apiCatalog from '../../services/api';


export default class Main extends Component {
    state = {
        catalog: [],
        infoPaginate: {
            page: 1
        },
    }

    componentDidMount(){
        this.loadCatalog();
    }

    loadCatalog = async (page = 1) => {
        const response = await apiCatalog.getCatalog(page);
        const { objects, ...infoPaginate } = response.data;
        this.setState({catalog: objects, infoPaginate, page});   
    }

    render() {
        return <Grid state={this.state}/>
    }
}
