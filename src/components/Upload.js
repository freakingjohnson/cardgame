import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone'

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: '',
            file: '',
            fileURL: ''
        }
        // this.uploadWidget = this.uploadWidget.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }


    onDrop = (file) => {
        this.setState({
            file: file
        })
        console.log(file)

    }

    onDropRejected = (event) => {
        this.setState({
            file: undefined
        })
        alert("try again")
    }
    handleUpload = (event) => {
        console.log(this.state.file)
        const uploaders = this.state.file.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `cardimages`);
            formData.append("upload_preset", "efvqy0li"); // Replace the preset name with your own
            formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);
            return axios.post("https://api.cloudinary.com/v1_1/freakingjohnson/image/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app
                this.setState ({
                    fileURL: fileURL
                })
                console.log(data);
            })
        });
    }

    render() {
        const {
            file
        } = this.state
        console.log(file)
        let preview = file ? file[0].preview : ''
        return (
            <div className="Uploader">

                <div>
                    <div>
                        <Dropzone
                            maxSize={50000}
                            onDrop={this.onDrop.bind(this)}
                            onDropRejected={this.onDropRejected}
                            multiple={false}
                        >
                            <p>drop file here</p>
                        </Dropzone>
                        <RaisedButton
                            primary={true}
                            label="upload image"
                            onClick={this.handleUpload}
                            disabled={!file ? true : false}
                        />
                    </div>
                    <aside>
                        <div>
                            <img src={preview} alt='preview' />
                        </div>
                    </aside>

                </div>
            </div>

        );
    }
}