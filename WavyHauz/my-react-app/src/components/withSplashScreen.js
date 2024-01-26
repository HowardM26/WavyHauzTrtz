import React, { Component } from 'react';
import './withSplashScreen.css'


function SplashMessage() {
    return(
    <div className='splash-screen'>
     
     <p>"Please read before putting in orders"
Orders are shipped out every MONDAY & TUESDAY to guarantee freshness and good quality products, Please allow 2-3 days for your orders to arrive (holidays may have affect on arrival times). ANY ORDER PROCESSED AFTER 12PM ON TUESDAYS will be shipped out the following week.
If your products arrive 2 days past expected arrival date a partial refund will be given, if products arrive 3 or more days past expected date, if box is damaged resulting in items inside being damaged, smushed, opened etc..or you're not satisfied with your order a full refund will be issued OR you will be sent a new box with same items, costumers requesting full refunds must send photos of damaged items to mctee1219@gmail.com.
If you would like your order to arrive faster than 3 days text your name, address and order to 804-621-3741 & let us know, shipping cost will be added to your order.
      
        </p>
    </div>
    );
}

 function withSplashScreen(WrappedComponent) {
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
            console.log(SplashMessage())
            //otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        };
    };
}

export default withSplashScreen;