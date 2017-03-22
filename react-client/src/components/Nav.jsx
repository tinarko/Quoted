import ReactDOM from 'react-dom';
import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery'
class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (  
	    <form onSubmit={this.props.fetchBusinesses}>
	    	<nav className="navbar navbar-default"> 
	    		<ul className="nav navbar-nav">
	    				<li><a href="#">Fredx</a></li>
	    				<li>
	    					<a>
		    					<label> Search: 
		    						<input value={this.props.searchParams.queryString} onChange={this.props.handleQueryChange} />
		    					</label>
	    					</a> 
	    				</li>
	    				<li className="dropdown">
	    					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
		    					<label> Category: 
					 					<select value={this.props.searchParams.businessCategory} onChange={this.props.handleBusinessCategoryChange}>
					            <option value="Auto Repair">Auto Repair</option>
					            <option value="Home Repair">Home Repair</option>
					            <option value="HRSF72">HRSF72</option>
					            <option value="Test">Test</option>
					          </select>
		    					</label>
		    				</a>
	    				</li>
	    				<li> 
		    				<a>
		    					<label> Location:
					 					<select value={this.props.searchParams.location} onChange={this.props.handleLocationChange}>
					            <option value="San Francisco">San Francisco</option>
					            <option value="Oakland">Oakland</option>
					          </select>    					
		    					</label>
		    				</a>
	    				</li>
	    				<input type="submit" value="Search Businesses" className="btn btn-default"/>    				
	  			</ul>
	  		</nav>
	    </form>
    )

  }
}

export default Nav; 
