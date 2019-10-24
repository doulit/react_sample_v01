import React,{ Component } from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
	return(
		<div>
	    	<p>이름 : {name}</p>
	    	<p>children : {children}</p>
		</div>
	)

}

MyComponent.defaultProps = {
	name: '기본이름'
}
MyComponent.propTypes = {
	name: PropTypes.string
}

export default MyComponent;
