import React, { PureComponent } from "react";
import Operan from "./Operan";

export default class StateProps extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      kegiatan: "Belajar React JS !",
    };
  }

  gantiKegiatan = (kegiatan_baru) => {
    this.setState({
      kegiatan: kegiatan_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>Sedang Apa : {this.state.kegiatan}</h2>
        <button onClick={() => this.gantiKegiatan("Ngoding Ni !!")}>
          Ganti kegiatan
        </button>
        <Operan
          kegiatan={this.state.kegiatan}
          gantiProps={this.gantiKegiatan}
        />
      </div>
    );
  }
}
