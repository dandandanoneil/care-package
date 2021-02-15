import React from 'react';
import ShowMoreText from 'react-show-more-text';
import ActivePostsCard from '../ActivePostsCard'


class Readmore extends React.Component {

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        console.log(this.props.description)
        return (
            <ShowMoreText
                /* Default options */
                lines={2}
                more='Show more'
                less='Show less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={this.executeOnClick}
                expanded={false}
                width={0}
            >
                {this.props.description}
            </ShowMoreText>
        );
    }
}


export default Readmore