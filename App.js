import React ,{Component} from 'react';
//import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import CardQ from './cardToNext';


const style = {
              styleCard:{   
                  height: 200,
                  width: 250,
                  margin: 20,
                  textAlign: 'center',
                  display: 'inline-block'
                },
                styleContainer:{

                  height:1000,
                  width:800,
                  marginLeft:40,
                  marginTop:40,
                  backgroundColor:'#97A899'

                },
                colorForWF:{
                  height: 200,
                  width: 250,
                  margin: 20,
                  textAlign: 'center',
                  display: 'inline-block',
                  backgroundColor:'#E2C044'
                },
                colorForLP:{
                  height: 200,
                  width: 250,
                  margin: 20,
                  textAlign: 'center',
                  display: 'inline-block',
                 backgroundColor:'#587B7F'
                }
     };


class App extends Component{



	constructor(props) {
    super(props);

    this.state={
      isEditing:false,
      over:false
    };
  }

  onClickCardToNext(){
    this.setState({isEditing:true});
  }

  onMouseEnterEvent(){
    this.setState({isHover:true});
  }
  onMouseLeaveEvent(){
    this.setState({isHover:false});
  }

  // getInitialState: function(){
  //   return {hover: false}
  // },
  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

	render()
	{
    
    const objArray=[{title: 'WF',subtitle: 'ader'},{title: 'LP',subtitle: 'kel'},{title: 'WF',subtitle: 'mandi'}];
    const status1=this.state.isEditing;
     const linkStyle=null;
    const listItems = objArray.map((item) => {


      if (item.title==='WF') {

        return(
              
             <Card style={style.colorForWF} onClick={this.onClickCardToNext.bind(this)}>

             
              <GridList
              cellHeight={100}>
              <GridTile style={{'width':120,'margin':15}}>
               
              
              

              <img src={"http://placehold.it/100x150"} />
              
              </GridTile>
              <GridTile style={{'width':180}}>
                <CardTitle
                 title={item.title}
                  subtitle={item.subtitle} 

                />
              </GridTile>

          </GridList>

          <CardText style={{'margin-top':10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.
          </CardText>
      </Card>
        
      );

      } else {

        return(
        
             <Card style={style.colorForLP} onClick={this.onClickCardToNext.bind(this)}>
              <GridList
              cellHeight={100}>
              <GridTile style={{'width':120,'margin':15}}>

              <img src={"http://placehold.it/100x100"} />

              </GridTile>
              <GridTile style={{'width':180}}>
                <CardTitle
                 title={item.title}
                  subtitle={item.subtitle} 

                />
              </GridTile>

          </GridList>

          <CardText style={{'margin-top':10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.
          </CardText>
      </Card>
        
      );

      }
      
    });

		return(
             <MuiThemeProvider>
              

                
                <div>

                 {

                 status1 ? <CardQ /> : listItems

                 }
            
         
          
           
                 </div>
                
              
             </MuiThemeProvider>
			);
	}
}
export default App;