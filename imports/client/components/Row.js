import React from 'react';
import Cell from '/imports/client/components/Cell';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    const { cells } = props;
    this.state = {
      cells
    };
    this.renderCells = this.renderCells.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { cells } = nextProps;
    this.setState({
      cells
    });
  }

  renderCells() {
    const { cells } = this.state;
    const { open, mark } = this.props;
    return cells.map((cell, index) => {
      return (
        <Cell
          key={index}
          cell={cell}
          open={open}
          mark={mark}
        />
      );
    });
  }

  render() {
    return (
      <tr>
        {this.renderCells()}
      </tr>
    );
  }
}

