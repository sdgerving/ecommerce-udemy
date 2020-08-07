import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout,isAuthenticated} from'../auth';

const isActive =(history,path)=>{
	if(history.location.pathname===path){
		return{color: '#000000'};
	}else{
		return {color: '#ffffff'};
	}
};

const Menu = ({history}) =>(
<div>
		<ul className="nav nav-tabs bg-primary">
			<li className="nav-item">
				<Link className="nav-link" style={isActive(history,'/')}  to="/">
				Home
				</Link>
			</li>
			
			{!isAuthenticated()&&(
			<Fragment>
			<li className="nav-item">
				<Link className="nav-link" style={isActive(history,'/signin')}  to="/signin">
				Sign In
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" style={isActive(history,'/signup')}  to="/signup">
				Sign up
				</Link>
			</li>
			</Fragment>
			)}
			{isAuthenticated() &&(
			<li className="nav-item">
				<Link className="nav-link" style={{cursor: 'pointer',color:'#ffffff'}}  onClick={()=>
					signout(()=>{
						history.push("/");
					})
				}
					>
				Sign out
				</Link>
			</li>
			)}
			
		</ul>
	</div>
);
export default withRouter(Menu);