import react, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import './Home.css';
import { NotificationManager } from 'react-notifications';


function Home() {
    const location = useLocation();

    useEffect(() => {
        //console.log(location.state.user)
    }, []);

    return (
        <div className="card">
            <div className="card-header">Credit Card</div>
            <div className="card-body">
                <div className="card-title">
                    <h3 className="text-center title-2">Pay Invoice</h3>
                </div>
                <hr />
                <div className="form-group">
                    <label for="cc-payment" className="control-label mb-1">Payment amount</label>
                    <input id="cc-pament" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" value="100.00" />
                </div>
                <div className="form-group has-success">
                    <label for="cc-name" className="control-label mb-1">Name on card</label>
                    <input id="cc-name" name="cc-name" type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card"
                        aria-required="true" aria-invalid="false" aria-describedby="cc-name-error" />
                    <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                </div>
                <div className="form-group">
                    <label for="cc-number" className="control-label mb-1">Card number</label>
                    <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" value="" data-val="true"
                        data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number"
                         />
                    <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label for="cc-exp" className="control-label mb-1">Expiration</label>
                            <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" value="" data-val="true" data-val-required="Please enter the card expiration"
                                data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY"
                                 />
                            <span className="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                        </div>
                    </div>
                    <div className="col-6">
                        <label for="x_card_code" className="control-label mb-1">Security code</label>
                        <div className="input-group">
                            <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" value="" data-val="true" data-val-required="Please enter the security code"
                                data-val-cc-cvc="Please enter a valid security code" />

                        </div>
                    </div>
                </div>
                <div className="mt-3"></div>
                <div>
                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                        <i className="fa fa-lock fa-lg"></i>&nbsp;
                        <span id="payment-button-amount">Save</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;