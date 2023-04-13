import { Component } from "react";
import Button from "react-bootstrap/Button";

interface TSClassComponentProps {
  textContent: string;
  count: number;
  color?: string;
}

interface TSClassComponentState {
  firstName: string;
}

class TSClassComponent extends Component<
  TSClassComponentProps,
  TSClassComponentState
> {
  state = {
    firstName: "Vincenzo",
  };
  render() {
    return (
      <div style={{ color: this.props.color || "black" }}>
        <h2>Class Component</h2>
        <p>Vediamo come lavora in TS - {this.state.firstName}</p>
        <p>
          {this.props.textContent} - {this.props.count}
        </p>
        <Button
          onClick={() => {
            this.setState({
              firstName:
                this.state.firstName === "Stefano" ? "Giovanni" : "Stefano",
            });
          }}
        >
          CHANGE NAME
        </Button>
      </div>
    );
  }
}
export default TSClassComponent;
