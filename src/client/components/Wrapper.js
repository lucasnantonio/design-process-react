import React, { Component } from 'react';
import { Navbar } from './Navbar'
import { ContentWrapper } from './ContentWrapper'

export class Wrapper extends Component {

constructor(props){

    super(props);

    this.sections = [
        "plan",
        "discover",
        "define",
        "develop",
        "deliver",
      ];

    this.state = {
      selectedItem: "plan",
      renderedPosts: [],
      isLoadingPosts: false,
    }

    this.changeSelectedItem = this.changeSelectedItem.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData(e){
    this.setState({isLoadingPosts: true})
    fetch(`/api/categories/${(e.currentTarget).innerHTML}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoadingPosts: false,
          renderedPosts: json});
      })

  }

  changeSelectedItem(e){
    this.getData(e)
    this.setState({
      selectedItem : e.currentTarget.innerHTML
    })
  }

  render() {
    return (
      <div className="App flex flex-column">
        <Navbar handleClick={this.changeSelectedItem} sections={this.sections} selectedItem={this.state.selectedItem} />
        <ContentWrapper {...this.state} sections={this.sections} />)
        </div>
    );
  }
}
