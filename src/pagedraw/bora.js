// Generated by https://pagedraw.io/pages/10201
import React from 'react';
import Outronome from './outronome';
import Lala from './lala';
import './bora.css';


function render() {
    return <a href="hoho" target="_blank" className="bora">
        <div className="bora-bora-9">
            <div className="bora-0-0">
                { this.props.show ?
                    <div className="bora-0-0-0-0">
                        { (this.props.list2).map((elem, i) => {
                            return <div key={i} className="bora-rectangle_2">
                                <div className="bora-0-0-0-0-0-0-0">
                                    <div className="bora-0-0-0-0-0-0-0-0" /> 
                                    <div className="bora-rectangle_3">
                                        <div className="bora-0-0-0-0-0-0-0-1-0">
                                            <div className="bora-0-0-0-0-0-0-0-1-0-0">
                                                <div className="bora-0-0-0-0-0-0-0-1-0-0-0">
                                                    <div onClick={this.props.changeToDesign} className="bora-design-1" style={{"color": this.props.color, "fontSize": this.props.number}}>
                                                        { this.props.text2 }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bora-divider-7" /> 
                                            <div className="bora-0-0-0-0-0-0-0-1-0-2">
                                                <div className="bora-0-0-0-0-0-0-0-1-0-2-0">
                                                    <div onClick={this.props.changeToCode} className="bora-code-7">
                                                        Code
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bora-0-0-0-0-0-0-0-2" /> 
                                </div>
                            </div>;
                        }) }
                    </div>
                : null}
            </div>
            <div className="bora-0-1">
                <div className="bora-0-1-0">
                    <div className="bora-0-1-0-0">
                        <div className="bora-0-1-0-0-0">
                            <div className="bora-0-1-0-0-0-0">
                                <div className="bora-rectangle_7" /> 
                            </div>
                            <div className="bora-0-1-0-0-0-1">
                                <div className="bora-rectangle_7-9">
                                    <div className="bora-0-1-0-0-0-1-0-0">
                                        <div className="bora-rectangle_8" /> 
                                    </div>
                                </div>
                            </div>
                            <div className="bora-0-1-0-0-0-2" /> 
                        </div>
                        <div className="bora-oval-8">
                            <div className="bora-0-1-0-0-1-0">
                                <div className="bora-0-1-0-0-1-0-0" /> 
                                <div className="bora-text_2">sadasd</div>
                                <div className="bora-0-1-0-0-1-0-2" /> 
                            </div>
                            <div className="bora-0-1-0-0-1-1">
                                <div className="bora-0-1-0-0-1-1-0" /> 
                                <div onClick={this.props.handleClicksdasdad} className="bora-component_1">
                                    <Outronome text={"lala"} show={false} /> 
                                </div>
                                <div className="bora-0-1-0-0-1-1-2" /> 
                            </div>
                        </div>
                    </div>
                    <div className="bora-0-1-0-1" /> 
                    <div className="bora-0-1-0-2">
                        <div className="bora-component_1_">
                            Source component not found
                        </div>
                    </div>
                </div>
                <div className="bora-0-1-1" /> 
                <div className="bora-lateral_menu-1">
                    <Lala mode={this.props.mode} /> 
                </div>
            </div>
        </div>
    </a>;
};

export default function(props) {
    return render.apply({props: props});
}