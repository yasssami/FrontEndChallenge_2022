import '../index.css';
import PropTypes from 'prop-types';
import react from 'react';
const Header = ({title}) => {
     return (
         <header className='header'>
             <h1 style={{backgroundColor: 'AliceBlue'}}>{title} <span role="img" aria-label='rocket'>🚀</span></h1>
         </header>
     )
    };
Header.defaultProps={title: 'Spacestagram',}
Header.propTypes={title:PropTypes.string.isRequired,}
export default Header