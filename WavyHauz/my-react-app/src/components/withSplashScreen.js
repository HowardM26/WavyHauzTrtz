import React, { Component } from 'react';
import './withSplashScreen.css';


function SplashMessage() {
    return (
        <div className="splash-screen" aria-live='polite'>
            <p>
                <strong>Please read before putting in orders</strong>
            </p>
            <p>
                Orders are shipped out every <strong>MONDAY & TUESDAY</strong> to guarantee freshness and good quality products. 
                Please allow 2-3 days for your orders to arrive (holidays may affect arrival times). 
                <strong>ANY ORDER PROCESSED AFTER 12 PM ON TUESDAYS</strong> will be shipped out the following week.
            </p>
            <p>
                If your products arrive 2 days past the expected arrival date, a partial refund will be given. 
                If products arrive 3 or more days past the expected date, or if the box is damaged (resulting in items being damaged, 
                smushed, opened, etc.), or if you are not satisfied with your order, a full refund will be issued OR you will be 
                sent a new box with the same items. Customers requesting full refunds must send photos of damaged items to  
                <a href="mailto:Wavyhzz93@gmail.com">Wavyhzz93@gmail.com</a>.
            </p>
            <p>
                If you would like your order to arrive faster than 3 days, text your name, address, and order to 
                 <a href="tel:8046213741">804-621-3741</a>. Shipping costs will be added to your order.
            </p>
            
        </div>
    );
}

function withSplashScreen(WrappedComponent) {
    // eslint-disable-next-line react/display-name
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        componentDidMount() {
            // Simulate loading time
            setTimeout(() => {
                this.setState({ loading: false });
            }, 10000); // Adjust timing as needed
        }

        render() {
            if (this.state.loading) {
                return <SplashMessage />;
            }
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withSplashScreen;
