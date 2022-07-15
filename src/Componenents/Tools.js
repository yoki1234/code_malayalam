import React, { Component } from 'react'
import AddNew from './AddNew';
import "./Tools.css"

export class Tools extends Component {
  render() {
    const {
        children,
        onAction,
        labelValue
    }=this.props;

    const onlyChild = React.Children.only(children);
    const Count = React.Children.count(onlyChild.props.children);
    return (
        <div className='list-tools'>
            <div className='list-header'>
                <select value={labelValue} onChange={onAction}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non Active</option>
                </select>
                <AddNew/>
            </div>
            {children}
            <div className='list-footer'>
                Total {Count} items
            </div>
        </div>
    )
  }
}

export default Tools

