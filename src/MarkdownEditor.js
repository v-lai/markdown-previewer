import React, { Component } from 'react';
import Remarkable from 'remarkable';
import './MarkdownEditor.css'

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n'};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
      <h1 className="title">React Markdown Editor</h1>
        <div className="left">
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            defaultValue={this.state.value} />
        </div>
        <div className="right">
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}
