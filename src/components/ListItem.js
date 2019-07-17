import React, { Component } from 'react';
import "../css/List.css";
import ListCompletedBtn from "./ListCompletedBtn";

/*Material*/


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            
            <div className="listItem">
                <div className="listItemNumber">{this.props.number}</div>
                <div className="listItemWord">{this.props.word}</div>
                <div className="listItemContent">{this.props.explanation}</div>
                <div className="listItemIcons">  
                    <ListCompletedBtn />
                </div>
            </div>
        );
    }
}

export default ListItem;