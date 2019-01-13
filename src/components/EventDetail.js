import React, { Component } from 'react';
import { getEventDetail } from '../action/eventActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GoogleMap from './GoogleMap'
import NavBar from './NavBar'
import location from '../img/location.png'
import clock from '../img/clock.png'
import classnames from 'classnames'
import EventCard from './EventCard'
class EventDetail extends Component {
    constructor(){
        super();
        this.state = {
            showAll:false,
            showMore:false
        }
    }
    componentWillMount(){
        let EventId=this.props.location.state.EventId;
        this.props.getEventDetail(EventId, this.props.history);
    }
    render(){
        console.log(this.props.Detail)
        var EventDetailData = this.props.Detail;
        var similerEvent=[];
        if(EventDetailData&&EventDetailData.similarExperiences&&EventDetailData.similarExperiences.length>0){
            EventDetailData.similarExperiences.forEach((object, index) => {
                console.log(object)
                similerEvent.push(
                    <div className="col-sm-4 event-card">
                    <EventCard 
                    title = {object.title}
                    eventTimming = {object.activityTime&&object.activityTime.activityDateString?object.activityTime.activityDateString:""}
                    eventLocation = {object.location&&object.location&&object.location.address?object.location.address:""}
                    tags = {object.tags}
                    image ={object.imageUrl}
                    activityId= {object.activityId}
                    />

                </div>
                )
            });
        }
        return(
            <div className="detail-container">
                <NavBar />
                <div className="row top-row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                       <div className="row top-row">
                       {/* left section start here */}
                       <div className = "col-sm-6">
                                <div className="event-detail-section">
                                        <div className="event-detail-image-section">
                                            <img  className="event-detail-image" src={EventDetailData.imageUrl} />
                                            <div className="event-info">
                                                <div className="row top-row event-info-title ">  {EventDetailData&& EventDetailData.title?EventDetailData.title:""}</div>
                                                <div className="row top-row event-info-time">   {EventDetailData&& EventDetailData.activityTime&&EventDetailData.activityTime.activityDateString?EventDetailData.activityTime.activityDateString:""}</div>
                                            </div>
                                        </div>
                                        <div className="event-detail-footer">
                                            <div className="row  top-row">
                                                <div className="col-sm-7">
                                                    <div className="row  top-row event-amount">{"INR" + " " +EventDetailData.amount}</div>
                                                    <div className="row  top-row">
                                                    <span className="pleople-count">54</span><span className="people-view">pleaple are viewing</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <button className="join-now-button" onClick={() => window.open(EventDetailData.whatsappUrl)}>JOIN NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                        {/* left section End here */}
                        <div className="col-sm-6">
                        {/* organiser name and event titile */}
                            <div className="row event-detai-title top-row">
                                {EventDetailData&& EventDetailData.title?EventDetailData.title:""}
                            </div>
                            <div className="row top-row">
                               By: <span className="event-detai-by">{EventDetailData&& EventDetailData.ownerName?EventDetailData.ownerName:""}</span>
                            </div>
                            {/* Location and timing */}
                            <div className="row  top-row">
                                <div className="col-sm-6">
                                    <div className="col-sm-12 event-detail-timing" >
                                    <span><img class="time-image" src={clock} /></span>
                                        {EventDetailData&& EventDetailData.activityTime&&EventDetailData.activityTime.activityDateString?EventDetailData.activityTime.activityDateString:""}
                                    </div>
                                    <div className="col-sm-12 event-detail-activetime">
                                    {EventDetailData&& EventDetailData.activityTime&&EventDetailData.activityTime.activityDateStringV1?EventDetailData.activityTime.activityDateStringV1:""}
                                    </div>
                                    </div>
                                <div className="col-sm-6">
                                    <button className="add-new-button">New Date</button>
                                </div>
                            </div>
                             {/* Addess and timing */}
                            <div className="row top-row ">
                                 <div className="col-sm-12 detail-address">
                                 <span><img class="location-image " src={location} /></span>
                                 {EventDetailData&&EventDetailData.location&& EventDetailData.location.address?EventDetailData.location.address:""}
                                 </div>
                                 <div className="col-sm-12 detail-near-by address-field">
                                 {EventDetailData&&EventDetailData.location&& EventDetailData.location.locality?EventDetailData.location.locality:""}
                                 </div>
                            </div>
                            {/* What Includes */}

                            {/* About the Event */}
                            <div className="row about-event-title top-row">
                                <div className="col-sm-12">
                                    About the Event
                                </div>
                                 <div className={classnames("col-sm-12", {"event-discription": !this.state.showMore},{"event-discription-all": this.state.showMore})}>
                                 <span className="show-more" onClick={() => this.setState({showMore:!this.state.showMore})}>{ !this.state.showMore?"...show more":"show Less"}</span>
                                 {EventDetailData&&EventDetailData.description?EventDetailData.description:""}
                                 </div>
                            </div>
                            {/* Your Host */}
                            <div className="row top-row">
                                 <div className="col-sm-12 event-host-name">
                                 Your Host
                                 </div>
                                 <div className="col-sm-12 event-host-detail">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="host-image" src={EventDetailData.ownerProfileImageUrl} />
                                        </div> 
                                        <div className="col-sm-4">
                                            <div className="host-name">Name</div>
                                            <div className="host-occu">doctor</div>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="add-new-button">Choose Date</button>
                                        </div>     
                                    </div>
                                    </div>
                                 <div className="col-sm-12 event-host-summary">
                                    {EventDetailData.ownerSummary}
                                 </div>
                            </div>
                            {/*  Gally */}
                            {/* <div className="row event-detai-title">
                                <div className="row">
                                    no image
                                </div>
                            </div> */}
                             {/*  map */}
                             <div className="row event-detai-map top-row">
                                <GoogleMap
                                 lat={EventDetailData&&EventDetailData.location&&EventDetailData.location.lat?EventDetailData.location.lat:""}
                                 lng={EventDetailData&&EventDetailData.location&&EventDetailData.location.lon?EventDetailData.location.lon:""}
                                 center = {
                                     { 
                                    lat : EventDetailData&&EventDetailData.location&&EventDetailData.location.lat?EventDetailData.location.lat:59.95,
                                    lng: EventDetailData&&EventDetailData.location&&EventDetailData.location.lon?EventDetailData.location.lon:30.33
                                 }
                                }
                                />
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className={!this.state.showAll?"other-event-conatiner":"others-event-conatiner"}>
                        
                        <div className="row top-row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-9 ">
                                <div className="row top-row other-event-title">
                                    Event happing this week
                                </div>
                                <div className="row">
                                    {similerEvent}
                                </div>
                            </div>
                            <div className="col-sm-2 show-all" onClick={() => this.setState({showAll: !this.state.showAll})}>
                               { !this.state.showAll? "show All":"show Less"}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => (
    // console.log(state.eventList)
    {
    Detail:state.eventDetail
  }
  );
export default connect(mapStateToProps, {getEventDetail})(withRouter(EventDetail));