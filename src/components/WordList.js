import React, { Component } from 'react';
import axios from 'axios';
import "../css/List.css";
import ListItem from './ListItem';


class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {}
        }
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/englishapp', {
            header: {
                'Access-Control-Allow-Origin': '*'
              }
        })
        .then(res => {
            this.setState({ data : res.data });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    renderItem(){
        var datas = this.state.data;
        const keys = Object.keys(datas);
        return keys.map((item, key) =>
            <ListItem
                    key={key} 
                    number={key+1} 
                    word={datas[item].word} 
                    explanation={datas[item].explanation}
            />
        );
    }

    render() {
        return (
            <div className="listContainer">
                {this.renderItem()}
            </div>
        );
    }
}

export default WordList;