import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loaded: true
      });
    };
    img.src = this.props.src;
  }

  render() {
    // not loaded
    if (!this.state.loaded) {
      return <div className={"notLoaded"} />;
    } else {
      return (
        <div>
          <img
            src={this.props.src}
            alt="ASOS DESIGN christmas regular fit santa print shirt in black"
          />
        </div>
      );
    }
  }
}

export default Image;
