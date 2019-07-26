import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import "../css/List.css";
import ListItem from './ListItem';
import Pagination from "react-js-pagination";
import Completed from "./Completed";


class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {},
            activePage : 1,
            itemsCountPerPage : 1,
            totalItemsCount : 1,
            pageRangeDisplayed: 5
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/englishapp', {
            header: {
                'Access-Control-Allow-Origin': '*'
              }
        })
        .then(res => {
            this.setState({ 
                data : res.data.data,
                activePage : res.data.current_page,
                itemsCountPerPage : res.data.per_page,
                totalItemsCount : res.data.total 
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handlePageChange(pageNumber) {
        axios.get('http://127.0.0.1:8000/api/englishapp?page='+pageNumber, {
            header: {
                'Access-Control-Allow-Origin': '*'
              }
        })
        .then(res => {
            this.setState({ 
                data : res.data.data,
                activePage : res.data.current_page,
                itemsCountPerPage : res.data.per_page,
                totalItemsCount : res.data.total 
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onAdd(wordKey){
        let updateWords = this.state.data;
        updateWords[wordKey].status = 0;

        let url = "http://127.0.0.1:8000/api/englishapp/update/id/" + updateWords[wordKey].id;
        
        axios.put(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            this.setState({data : updateWords});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    renderItem(){
        var datas = this.state.data;
        const keys = Object.keys(datas);
        var number = this.state.activePage === 1 ? 0 : (this.state.activePage * 10) - 10 ;
        return keys.map((item, key) => 
        datas[item].status === 1 
            ?
            <ListItem
                    key={key} 
                    wordKey={key} 
                    number={++number} 
                    word={datas[item].word} 
                    explanation={datas[item].explanation}
                    onAdd={this.onAdd}
            /> 
            :
            null
        );
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={
                        () => {
                            return(
                                <div className="listContainer">
                                    {this.renderItem()}
                                    <div className="d-flex justify-content-center col-md-12">
                                        <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                        totalItemsCount={this.state.totalItemsCount}
                                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                                        onChange={this.handlePageChange}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        />
                                    </div>
                                </div>
                            )
                        }
                    } />
                    <Route path="/completed" exact strict component={Completed} />
                </Switch>
            </Router>
            
        );
    }
}

export default WordList;