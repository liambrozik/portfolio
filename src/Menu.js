import React, { Component } from 'react';
import './Menu.css';
import NavlistItem from './NavlistItem.js'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "false"
        }
    }
    render() {
        return (
            <div className={"Menu "+ this.props.VIEW + " " + this.props.scheme + " " + this.state.open} >
                <div className={"MenuFade " + this.props.VIEW + " " + this.state.open}></div>
                <button className={"MenuBtn " + this.props.VIEW + " " + this.props.scheme} onClick={(status) => this.onMenuBtnClick(this.state.open)}>
                {(this.state.open) === "true" ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars" aria-hidden="true"></i> }
                </button>
                <NavlistItem 
                onClick={(page) => this.onClick(page)}
                context="menu" 
                current={"false"} 
                text="Home"/>
                <NavlistItem 
                onClick={(page) => this.onClick(page)}
                context="menu" 
                current={this.props.mode === "Web Development" ? "true" : "false"} 
                text="Web Development"/>
                <NavlistItem 
                onClick={(page) => this.onClick(page)}
                context="menu" 
                current={this.props.mode === "Video" ? "true" : "false"}  text="Video"/>
            </div>
        );
    }

    onMenuBtnClick(status) {
        var menuOpen;
        if (status === "false") {
            menuOpen = "true";
        } else {
            menuOpen = "false";
        }
        this.setState({
            open: menuOpen
        });
    }

    onClick(info) {
        this.setState({
            open: "false"
        });
        this.props.onClick(info);
    }
}

export default Menu;
