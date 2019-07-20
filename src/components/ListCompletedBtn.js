import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SelectBox from './SelectBox';

class ListCompletedBtn extends React.Component{

  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }
  
  onAdd(e, wordKey){
    e.preventDefault();
    this.props.onAdd(wordKey);
  }

  onEdit(e, wordKey){
    e.preventDefault();
    console.log(wordKey);
  }

  onDel(e, wordKey){
    e.preventDefault();
    console.log(wordKey);
  }


  render(){
    return(
      <div>
        <div className="buttonGroups">
          <button type="button" className="btnAdd" onClick={(e) => this.onAdd(e, this.props.wordKey)}>
            <AddIcon/>
          </button>
          <button type="button" className="btnEdit" onClick={(e) => this.onAdd(e, this.props.wordKey)}>
            <EditIcon/>
          </button>
          <button type="button" className="btnDel" onClick={(e) => this.onAdd(e, this.props.wordKey)}>
            <DeleteIcon/>
          </button>
        </div>
        <SelectBox/>
      </div>
    )
  }
}

export default ListCompletedBtn;