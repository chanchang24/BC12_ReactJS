import React, { Component } from 'react';

export default class ChooseCarColor extends Component {
  state = {
      imgName: 'black-car.jpg'
  };

  handleChangeColor = (imgName) => {
    this.setState({
        imgName // imgName: imgName
    });
  }

  render() {
    const { imgName } = this.state;

    return (
      <div className="container-fluid">
        <h1 className="text-center my-4">Choose Car Color</h1>
        <div className="row">
          <div className="col-7">
            <img src={`./images/${imgName}`} className="w-100" alt="" />
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-header">Exterior Color</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" onClick={() => this.handleChangeColor('black-car.jpg')}>
                  <div className="row">
                    <div className="col-2">
                      <img src="./images/icon-black.jpg" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Crystal Black
                    </div>
                  </div>
                </li>
                <li className="list-group-item" onClick={() => this.handleChangeColor('steel-car.jpg')}>
                  <div className="row">
                    <div className="col-2">
                      <img src="./images/icon-steel.jpg" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Modern Steel
                    </div>
                  </div>
                </li>
                <li className="list-group-item" onClick={() => this.handleChangeColor('silver-car.jpg')}>
                  <div className="row">
                    <div className="col-2">
                      <img src="./images/icon-silver.jpg" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Lunar Silver
                    </div>
                  </div>
                </li>
                <li className="list-group-item" onClick={() => this.handleChangeColor('red-car.jpg')}>
                  <div className="row">
                    <div className="col-2">
                      <img src="./images/icon-red.jpg" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Rallye Red
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
