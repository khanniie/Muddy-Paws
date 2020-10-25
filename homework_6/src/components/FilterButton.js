import React, { Component } from 'react';

const buttonstyle_unchecked = {border:
  '0px solid rgba(200, 200, 255, 100);'};
const buttonstyle_checked = {border: '1px solid rgba(200, 200, 255, 100);'};

class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.tag = props.tag;
    this.global = props.global;
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount() {
    this.nv.addEventListener('click', this.updateFilter);
  }

  componentWillUnmount() {
    this.nv.removeEventListener('click', this.updateFilter);
  }

  updateFilter() {
    if (this.global.state.filter === this.tag){
      this.global.setState({filter:null});
    } else {
      this.global.setState({filter:this.tag});
    }
  }

  render(){
    const sty = (this.global.state.filter === this.tag) ? ' selected' : '';
    return (
      <button className={'filter_button' + sty} ref={elem => this.nv = elem}>
        {this.tag}
      </button>
    );
  };
}

export default FilterButton;
