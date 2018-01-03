import React, { Component } from 'react';
// import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import RaisedButton from 'material-ui/RaisedButton';
import deleteImageFromCloudinary from './deleteImageFromCloudinary'

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: ''
        }
        this.uploadWidget = this.uploadWidget.bind(this);

    }
    // componentDidMount() {
    //     axios.get('https://res.cloudinary.com/freakingjohnson/image/list/cardimages.json')
    //         .then(res => {
    //             console.log(res.data.resources);
    //             this.setState({ gallery: res.data.resources });
    //         });
    // }

    uploadWidget = () => {
        const _this = this
        window.cloudinary.openUploadWidget({ cloud_name: 'freakingjohnson', upload_preset: 'efvqy0li', tags: ['cardimages'] },
        (error, result) => {
                _this.state.gallery ? deleteImageFromCloudinary(_this.state.gallery) : undefined
                _this.setState({ gallery: '' })
                result ? _this.setState({ gallery: _this.state.gallery.concat(result[0].public_id) }) : undefined
                console.log(_this.state.gallery)
            }
        );
    }

    render() {
        const {
            gallery
        } = this.state
        console.log(gallery)
        const reference = `https://res.cloudinary.com/freakingjohnson/image/upload/${gallery}.jpg`
        const image = gallery ? <CloudinaryContext cloudName="freakingjohnson">
            <div>
                <a target="_blank" href={reference}>
                    <Image publicId={gallery}>
                        <Transformation
                            crop="scale"
                            width="300"
                            height="200"
                            dpr="auto"
                            responsive_placeholder="blank"
                        />
                    </Image>
                </a>
            </div>
        </CloudinaryContext> : undefined
        return (
            <div className="Uploader">

                <div>
                    <div>
                        <RaisedButton
                            primary={true}
                            label="add image"
                            onClick={this.uploadWidget}
                        />
                        {image}
                    </div>


                </div>
            </div>

        );
    }
}