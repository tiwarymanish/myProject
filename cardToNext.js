import React ,{Component} from 'react';
//import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const styles = {
                root :{
                  height: 700,
                  width: 800,
                  margin: 30,
                  marginLeft: 250,
                  textAlign: 'center',
                  backgroundColor:'#97A899',
                  display: 'inline-block',
                 border: '2px solid #FF9800'
                } ,

                root1:{
                  height: 400,
                  width: 400,
                  margin: 60,
                  marginDown: 80,
                  textAlign: 'center',
                  display: 'inline-block'
                },
                button:{
                  marginLeft:40,
                  textAlign:'left',
                  hoverColor:'#37BC9B'
                }
    };
const objArray=[{title: 'WF'}];

class CardQ extends Component{

	
	render()
	{
  
  
		return(
             <div style={styles.root} >
            
             <h1>Workflow</h1>

             <h2>Manish</h2>
             
             <Paper style={styles.root1}>

             
             </Paper>

             <div style={styles.button}>
             <FlatButton label="Edit" primary={true} />
             <FlatButton label="Download" secondary={true} />
             </div>
            
             </div>
			)
	}
}
export default CardQ;