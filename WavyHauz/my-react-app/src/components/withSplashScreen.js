import React, { Component } from 'react';


function SplashMessage() {
    return (
        <div>
            <h1>
                Before you enter, Please understand how to place your orders
            </h1>
            
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }
        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 10000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }
        render() {
            //while checking user session show "loading" message
            if (this.state.loading) return SplashMessage();

            //otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    }
}