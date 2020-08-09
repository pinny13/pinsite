import React from "react";
import "./index.css";

interface SquareProps {
  totalWidth: number;
  size: number;
  moveBy: number;
}

interface SquareState {
  top: number;
  left: number;
}

export class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);

    this.state = {
      top: 0,
      left: 0
    };
  }

  public render() {
    return (
      <div className="container">
        <div
          className="square"
          style={{ top: this.state.top, left: this.state.left }}
        >
          {this.generateSquare()}
        </div>
      </div>
    );
  }

  private generateSquare() {
    let dTop = 0; //this.props.moveBy;
    let dLeft = 0;
    const cells = [];
    const cellSize = this.props.totalWidth / this.props.size;

    for (let t = 0; t < this.props.size; t++) {
      for (let l = 0; l < this.props.size; l++) {
        [dTop, dLeft] = this.getNewDirection(t, l);
        const onClickHandler = (dT: number, dL: number) => () =>
          this.onCellClick(dT, dL);
        cells.push(
          <div
            key={`${t}${l}`}
            className="cell"
            style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
            onClick={onClickHandler(dTop, dLeft)}
          ></div>
        );
      }
    }

    return cells;
  }

  private getNewDirection(top: number, left: number): number[] {
    let topDelta = 0;
    let leftDelta = 0;

    if (top === 0) {
      topDelta = -this.props.moveBy;
    }
    if (top === this.props.size - 1) {
      topDelta = this.props.moveBy;
    }

    if (left === 0) {
      leftDelta = -this.props.moveBy;
    }
    if (left === this.props.size - 1) {
      leftDelta = this.props.moveBy;
    }

    // Implement non-edge cases

    return [topDelta, leftDelta];
  }

  private onCellClick(dTop: number, dLeft: number) {
    this.setState({
      top: this.state.top + dTop,
      left: this.state.left + dLeft
    });
  }
}
