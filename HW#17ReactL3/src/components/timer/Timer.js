

import React, { Component } from 'react';


class Timer extends Component {
    state = {
        count: Math.round(this.props.time / 1000),
        start: true,
        canvasWidth: 600,
        change: (600 / (Math.round(this.props.time / (this.props.step*1000)))).toFixed(2),
        canvasId: '_' + Math.random().toString(36).substr(2, 9) 
    }

    componentDidMount() {

        let startState={...this.state};
        setInterval(() => {

            if((this.state.count===0|| this.state.count<0) && this.props.autostart==true){
                this.setState(startState)
            }


            if (this.state.start) {
                if (this.state.count !== 0 && this.state.count>0) {
                    this.props.onTick(this.state);
                    this.startTime();
                    this.changeCount();
                    this.changeWidth();
 
                }
            } else {
                this.pauseTime();
            }

            console.log(startState)
        }, this.props.step*1000);
    }

    startTime = () => {
        this.setState({
            start: true,
        });

        //console.log('step',this.props.step)
    }

    pauseTime = () => {
        this.setState({
            start: false,
            count: this.state.count
        });
    }

    changeCount = () => {
        this.setState({ count: this.state.count - this.props.step })
    }

    changeWidth = () => {
        this.setState({ 
            canvasWidth: (this.state.canvasWidth - this.state.change) 
        },()=>{
                let canvasId = this.state.canvasId;
                let myEl = document.getElementById(canvasId);
                let ctx = myEl.getContext("2d");
                ctx.fillStyle=`rgb(28,140,54)`;
                ctx.fillRect(0, 0, myEl.width, 100);
        })
    }

    getCanvasContext = ()=>{
        let canvasId = this.state.canvasId;
        let myEl = document.getElementById(canvasId);
        let ctx = myEl.getContext("2d");
        ctx.fillStyle=`rgb(28,140,54)`;
        let width = this.state.canvasWidth;
        console.log('width1',width);
        ctx.rect(0, 0, width, 100);
        ctx.fill()
    }



    render() {

        let btn;
        if(this.state.start==true){
            btn=<button onClick={this.pauseTime}>pause</button>;
        }else{
            btn=<button onClick={this.startTime}>start</button>    
        }

        return (
            <div className="timer">
                <h2 className="seconds">
                    Time: {this.state.count} seconds!
                </h2>
                <div className="btns">
                {btn}

                </div>
                <canvas width={this.state.canvasWidth} height="50" id={this.state.canvasId}/>
            </div>
        )
    }
}

export default Timer;