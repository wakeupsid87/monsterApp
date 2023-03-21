import { Component } from 'react';
import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      // className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
      className={` search-box ${className}`}
    />
  );
};
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         // className="search-box"
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//         className={` search-box ${this.props.className}`}
//       />
//     );
//   }
// }

export default SearchBox;
