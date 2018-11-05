import React, { Component } from 'react';

export default class Header extends Component{
    
    render(){
         
        return(
            <div className="header">
                <a href="#default" className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Stone_pagamentos.png" width='100' height="50" alt=""/>
                </a>
                <a href="#default" className="breadTitleHeader">
                    Loja Virtual Stone Sales
                </a>
                <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Administrativo</a>
                <a href="#about">About</a>
                </div>
            </div>
        );
    }

}