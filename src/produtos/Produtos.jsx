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
import Modal from '@material-ui/core/Modal';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            products: null,
            detalhesModalVenda:true
        }
        
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount(){
        console.log()
        axios.get(`${$.API}/products`).then(response => {
            this.setState({ products: response.data });
        }).catch(e => {
          console.log(e)
        })
        
    }

    handleClose = () => {
    this.setState({ detalhesModalVenda: false });
    };

    render(){
         
        return(
        <div style={{ width: '100%'}}>
        <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.detalhesModalVenda}
        onClose={this.handleClose}
        >
        <div className={""}>
            <Typography variant="title" id="modal-title">
            Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </div>
        </Modal>

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
