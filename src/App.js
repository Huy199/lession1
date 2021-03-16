import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Color from './components/Color';
import Reset from './components/Reset';






class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			color : 'red',
			fontSize : 14
		};
		this.onChangeSize = this.onChangeSize.bind(this); 
		this.onSettingDefault = this.onSettingDefault.bind(this);

	}
	onSetColor = (colors) => {
		this.setState({
			color : colors
		});

	}
	onChangeSize(size){
		
		this.setState({
            fontSize : (this.state.fontSize + size >= 8 && this.state.fontSize + size <= 36 )
             ? this.state.fontSize + size : this.state.fontSize
        });

	}
	onSettingDefault(value){
		if(value){
			this.setState({
				color : 'red',
				fontSize : 12
			});
		}
	}
	


  render() {
    return (
    	<div className="container nt-50">
    		<div className="row">
    			<Color color = {this.state.color} onReceiveColor={this.onSetColor} />
    			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    				<SizeSetting 
    						fontSize={this.state.fontSize} 
    						onChangeSize={this.onChangeSize}
    						/>
					<Reset onSettingDefault = {this.onSettingDefault} />	
				</div>
				<Result color={this.state.color} fontSize={this.state.fontSize}/>
			</div>
		</div>

    

    


      );

    }
}
export default App;
