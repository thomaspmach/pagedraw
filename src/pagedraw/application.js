// Generated by https://pagedraw.io/pages/11227
import React from 'react';
import Topbar from './topbar';
import Leftbar from './leftbar';
import Rightbar from './rightbar';
import './application.css';


function render() {
    return <div className="application-application-2">
        <div className="application-0">
            <div className="application-topbar_instance-4">
                <Topbar mode={this.props.state.mode} changeToDesign={this.props.changeToDesign} changeToCode={this.props.changeToCode} changeToResponsiveness={this.props.changeToResponsiveness} /> 
            </div>
        </div>
        <div className="application-1">
            <div className="application-leftbar_instance-1">
                <Leftbar leftMode={this.props.state.leftMode} changeLeftBar={this.props.changeLeftBar} /> 
            </div>
            <div className="application-1-1" /> 
            <div className="application-1-2">
                <div className="application-1-2-0">
                    { this.props.state.respToolbar ?
                        <div className="application-rectangle_1">
                            <div className="application-1-2-0-0-0-0">
                                <div className="application-path-8">
                                    <div className="application-1-2-0-0-0-0-0-0">
                                        <div className="application-1-2-0-0-0-0-0-0-0">
                                            <div className="application-1-2-0-0-0-0-0-0-0-0">
                                                <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1739566169168780-1531117409468-D83156EE-74F1-46D9-B391-83B79299D467.png" className="application-arrow-expand-all-1" /> 
                                            </div>
                                        </div>
                                        <div className="application-random_size-5">
                                            Random Size
                                        </div>
                                    </div>
                                </div>
                                <div className="application-path-85">
                                    <div className="application-1-2-0-0-0-0-1-0">
                                        <div className="application-1-2-0-0-0-0-1-0-0">
                                            <div className="application-1-2-0-0-0-0-1-0-0-0">
                                                <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/3566184910794914-1531117409286-A43F3CD5-801E-45F7-817A-B0EAFE117D44.png" className="application-shuffle-variant-8" /> 
                                            </div>
                                        </div>
                                        <div className="application-random_data-3">
                                            Random Data
                                        </div>
                                    </div>
                                </div>
                                <div className="application-path-4">
                                    <div className="application-1-2-0-0-0-0-2-0">
                                        <div className="application-1-2-0-0-0-0-2-0-0">
                                            <div className="application-1-2-0-0-0-0-2-0-0-0">
                                                <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/8889793607283661-1531117409285-FCB41F92-94D4-41A6-8621-1FE560A50BA3.png" className="application-credit-card-scan-7" /> 
                                            </div>
                                        </div>
                                        <div className="application-infer_constraints-7">
                                            Infer Constraints
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : null}
                </div>
                <div className="application-1-2-1">
                    <div className="application-image_2" /> 
                </div>
            </div>
            <div className="application-1-3" /> 
            <div className="application-right_instance-1">
                <Rightbar rightMode={this.props.state.rightMode} addBinding={this.props.addBinding} showBindings={this.props.state.binding} showEvents={this.props.state.event} showRepeat={this.props.state.repeat} showConditional={this.props.state.conditional} showLink={this.props.state.link} showCursor={this.props.state.cursor} addEvent={this.props.addEvent} addRepeat={this.props.addRepeat} addConditional={this.props.addConditional} addLink={this.props.addLink} addCursor={this.props.addCursor} /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}
