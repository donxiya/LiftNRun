import React, { Component } from "react";
import "../../style/main.scss";

export default class History extends Component {
    ShowHistory = event => {
        const id = event.target.id;
        document.getElementById(id).classList.add('showDetail ');
        document.getElementById(id).classList.remove('hideDetail');
    }
    HideHistory = event => {
        const id = event.target.id;
        document.getElementById(id).classList.add('hideDetail ');
        document.getElementById(id).classList.remove('showDetail');
    }
    generateJSX = () => {
        var detail;
        if (this.props.type === "weight") {
            detail = <div class="container">
                <div className="titleClass">Type</div>
                <div className="contentClass">{this.props.workoutType}</div>
                <div className="titleClass">Body </div>
                <div className="contentClass">{this.props.bodypart}</div>
                <div className="titleClass">Type</div>
                <div className="contentClass">{this.props.weight}</div>
                <div className="contentClass">{this.props.set} sets for {this.props.rep} </div>
                <div className="titleClass">Type</div>
                <div className="contentClass">Rest time {this.props.timer} </div>
            </div>
        } else {
            detail =
                <div class="container">
                    <div className="titleClass">Running Time {this.props.time} </div>
                </div>
        }
    }

    render() {
        return (
            <div>
                {this.generateJSX()}
                <div className="historyTitle" onclick={this.ShowHistory}>
                    {this.props.date}{this.props.type}
                </div>
                <div className="history" id={this.props.id}>
                    <div className="hideHistory" onclick={this.HideHistory}>
                        Exit</div>
                </div>
            </div>
        )
    }
}
