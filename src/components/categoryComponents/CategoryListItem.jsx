import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';

//Styling
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

export default class CategoryListItem extends Component {

  render() {
    return (
      <li>
        <Link to={"/Category/" + this.props.item.id}>
          <CategoryItem item={this.props.item} />
        </Link>
        <span> </span>  {/* Just one space added before delete button */}
        <Button type="button"
          onClick={() => {
            this.props.deleteCategoryClicked(
              this.props.item.id
            )
          }}
        ><DeleteIcon></DeleteIcon></Button>

        <span> </span>

        <Link to={"/CategoryUpdate/" + this.props.item.id}>
          <Button type="button"><UpdateIcon></UpdateIcon></Button>
        </Link>

      </li>
    );
  }
}
