import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Produtos from './../produtos/Produtos';

export default class Home extends Component{

    render(){
         
        return(
            <div className="home">
                <div className="container">
                <Grid container spacing={24}>
                    <Produtos />
                </Grid>
                </div>
            </div>
        );
    }

}