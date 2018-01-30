import React, { Component } from 'react';
const zipFormat = /\b[a-zA-Z]{4}\d{2}\b/;
export class Subscribe extends Component {

  constructor() {
    super();
    this.state = {
      user: {
        "name": "",
        "gender": "Man",
        "email": "",
        "phone": "0634 796837",
        "address": [{
          "number": 7,
          "street": "Adamsdreef",
          "city": "Rhenen",
          "zipcode": "6716ME"
      }] }
    }
  }

  setUserProp = (prop, e) => {
    this.setState({
      user: {
        ...this.state.user,
        [prop]: e.target.value
      }
    })
  }

  changeGender = (gender) => {
    this.setState({
      user: {
        ...this.state.user,
        gender,
      }
    })
  }

  updateAddress = (prop, e) => {
    this.setState({
      user: {
        ...this.state.user,
        address: [{
          ...this.state.user.address[0],
          [prop]: e.target.value
        }]
      }
    });
  }

  activeClass = (gender) => {
    return this.state.user.gender === gender ? 'button active' : 'button';
  }

  render() {
    return (
      <div className="signup-form">
        <h2>Aanmelden!</h2>
        <form onSubmit={this.submitForm}>
          <label>Naam</label>
          <input
            required
            name="Name"
            value={this.state.name}
            onChange={this.setUserProp.bind(null, 'name')}
            className="txbox"
            type="text"
            placeholder="Je naam"
          />
          <label>Telefoon</label>
          <input
            name="Phone"
            required
            className="txbox"
            type="phone"
            value={this.state.phone}
            placeholder="Je telefoonnummer"
          />
          <label>Geslacht</label>
          <div className="button-group">
            <button
              className={this.activeClass('Man')}
              onClick={this.changeGender.bind(null, 'Man')}
              type="button"
            >Man</button>
            <button
              className={this.activeClass('Vrouw')}
              onClick={this.changeGender.bind(null, 'Vrouw')}
              type="button"
              >Vrouw</button>
          </div>
          <label>E-mailadres</label>
          <input
            name="Email"
            required
            className="txbox"
            type="email"
            placeholder="Je e-mailadres"
          />
          <h3>Postadres</h3>
          <label>Nummer</label>
          <input
            name="Nummer"
            required
            className="txbox"
            value={this.state.user.address[0].number}
            onChange={this.updateAddress.bind(null, 'number')}
            type="text"
            placeholder="huisnummer"
          />
          <label>Straat</label>
          <input
            name="Straat"
            required
            className="txbox"
            value={this.state.user.address[0].street}
            onChange={this.updateAddress.bind(null, 'street')}
            type="text"
            placeholder="Straat"
          />
          <label>Stad</label>
          <input
            name="Stad"
            required
            className="txbox"
            value={this.state.user.address[0].city}
            onChange={this.updateAddress.bind(null, 'city')}
            type="text"
            placeholder="Stad"
          />
          <label>Postcode</label>
          <input
            name="Postcode"
            required
            className="txbox"
            value={this.state.user.address[0].zipcode}
            onChange={this.updateAddress.bind(null, 'zipcode')}
            type="text"
            placeholder="Postcode"
          />
          <button
            className="btn __green"
            type="submit"
          >Aanmelden</button>
        </form>
      </div>
    )
  }
}
