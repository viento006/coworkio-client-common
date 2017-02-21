import React from 'react';

export default class ImagePlaceholder extends React.Component {
    getFirstLetterOfTitle(){
        return this.props.title[0].toUpperCase();
    }

    render() {

        return (
            <div className="avatar-placeholder">{this.getFirstLetterOfTitle()}</div>
        )
    }

}