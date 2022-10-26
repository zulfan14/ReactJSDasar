import React, { PureComponent } from "react";

export default class Operan extends PureComponent {
  render() {
    const { kegiatan, gantiProps } = this.props;
    return (
      <div>
        <h2>Kegiatan yang dioper: {kegiatan}</h2>
        <button onClick={() => gantiProps("Baca Document React")}>
          Ganti Kegiatan di Props
        </button>
      </div>
    );
  }
}
