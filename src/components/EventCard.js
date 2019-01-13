import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import { withRouter } from 'react-router-dom';

class EventCard extends Component{ 
    constructor(){
        super();
    }
    handleClick = (EventId) => {
        console.log(EventId)
        this.props.history.push({
            pathname:'/eventdetail',
            state:{ EventId:EventId }
          })
    }
    render(){
        console.log(this.props)
        return(
            <div>
            <Card onClick={() => this.handleClick(this.props.activityId)}>
              <CardImg top width="100%" height="270px" src={this.props.image} alt="Card image cap" />
              <CardBody height="180px">
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.eventTimming  + " " + this.props.eventLocation}</CardSubtitle>
                <Button className="event-card-button">{this.props.tags&&this.props.tags[0]?this.props.tags[0]:"tomorrow"}</Button>
              </CardBody>
            </Card>
          </div>
        );
    }
};

export default withRouter(EventCard);