// Higher Order Component (HOC) - A component (HOC) that renders another component (regular react component)
// Reuse code
// Render hijacking
// Prop manipulation
// Astract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	// return HOC
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
	// return HOC
	return (props) => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>Please login to view the information</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
// 	<AdminInfo isAdmin info="There are the details" />,
// 	document.getElementById('app')
// );

ReactDOM.render(
	<AuthInfo isAuthenticated info="There are the details" />,
	document.getElementById('app')
);
