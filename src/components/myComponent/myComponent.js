import React, { Component } from 'react';
import TreeView from 'react-expandable-treeview';
 
class MyComponent extends Component { 
 
        constructor(props) {
          super(props);
          this.testData = JSON.parse(""+this.props.info);
        }
 
  renderNode(node) {
    return <span>{node.name}</span>;
  }

  render() {
    
    return (
      <div style={{ padding: 20 }}>
        
        <TreeView 
          data={ this.testData}
          renderNode={this.renderNode}
          />
      </div>
    )
  }
}

export default MyComponent;
