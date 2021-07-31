import React, { Component } from "react";
export default class ContactUs extends Component {
render() {
    return (
        <section id="contact">
            <div className="row section-head">
                <div className="ten columns">
                    <p className="lead text-left">Contact me:</p>
                </div>
            </div>
            <div className="row">
                <aside className="eight columns footer-widgets">
                    <div className="widget">
                        <h4 className="text-left">Casey Thayer</h4>
                        <h4 className="text-left"><a href="mailto:casey.thayer6@gmail.com">casey.thayer6@gmail.com</a></h4>
                    </div>
                </aside>
            </div>
        </section>
    );
}
}