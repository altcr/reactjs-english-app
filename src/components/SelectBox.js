import React, { Component } from 'react';

class SelectBox extends Component {

  render() {
    return (
      <div className="selectDiv">
        <select className="form-control">
          <option value="">Seçiniz</option>
          <option>Ekle</option>
          <option>Düzenle</option>
          <option>Sil</option>
        </select>
      </div>
    );
  }

}
export default SelectBox;
