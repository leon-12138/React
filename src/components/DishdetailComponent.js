import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(dish) {
        if (dish != null) {
            const rightPart = dish.comments.map((comment) => {
                return(
                    <div key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>{`-- ${comment.author} , ${comment.date}`}</p>
                    </div>
                );
            });
            
           return (
            <div>
                <h4>Comments</h4>
                {rightPart}
            </div>
           );     
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dishSelected;

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.props.renderFunc(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>
            </div>
        );

    }

}
export default DishDetail;


