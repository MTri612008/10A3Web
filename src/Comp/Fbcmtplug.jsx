import React, { Component } from 'react';
import Facebook from 'facebook-js-sdk';


class Fbcmtplug extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 componentDidMount() {
    Facebook.init({
      appId: '660285872919937'
    });
  }


  render() {
    return (
      <div>
        <div className="fb-comments" data-href={this.props.url} data-width="100%" data-num-posts="20" data-order-by="time_reverse"></div>
      </div>
    );
  }
}

export default Fbcmtplug;