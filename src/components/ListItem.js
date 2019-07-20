import React, { Component } from 'react';
import "../css/List.css";
import ListCompletedBtn from "./ListCompletedBtn";


/*Material*/


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(wordKey){
        this.props.onAdd(wordKey);
    }

    render() { 
        return (
            <div className="listItem col-lg-8 ">
                <div className="listItemNumber">{this.props.number}</div>
                <div className="listItemWord">{this.props.word}</div>
                <div className="listItemContent">{this.props.explanation}</div>
                <div className="listItemIcons">  
                    <ListCompletedBtn wordKey={this.props.wordKey} onAdd={this.onAdd}/>
                </div>
            </div>
        );
    }
}

export default ListItem;