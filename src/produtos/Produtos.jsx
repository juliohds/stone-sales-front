import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import $ from './../consts';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            products: null
        }
    }

    componentDidMount(){
        console.log()
        axios.get(`${$.API}/products`).then(response => {
            this.setState({ products: response.data });
        }).catch(e => {
          console.log(e)
        })
        
    }

    render(){
         
        return(
        <div style={{ width: '100%'}}>
        {this.state.products?
            this.state.products.map(prod => {
                return (
                    <div className={"container"} style={{  display: 'inline-block' }}>
                    <Grid item xs={24} key={`${prod.id}`}>
                    <Card styles={{ maxWidth: '345' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            style={{width:'150px', height:'120px'}}
                            image={prod.picture}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {prod.title}
                            </Typography>                            
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" style={{marginLeft:'20%'}}>
                                Detalhes
                            </Button>                            
                        </CardActions>
                    </Card>
                    </Grid>
                    </div>
                )
            })
        :null}  
        </div>
        );
    }

}
