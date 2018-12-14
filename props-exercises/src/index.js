import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function PropsExercise({ propsData }) {
    return (
        <div className="top-wrapper">
            <div className="wrapper addresslabel-wrapper">
                <AddressLabel person={propsData.person}/>
            </div>
            <div className="wrapper envelope-wrapper">
                <Envelope toPerson={propsData.toPerson} fromPerson={propsData.fromPerson} stamp={propsData.stamp}/>
            </div>
            <EmailLine />
        </div>
    );
}

function AddressLabel({ person }) {
    const { firstName, lastName, address, city, postal } = person

    return (
        <div className="address-label">
            <div className="address-content">
                <span>{`${firstName}, ${lastName}`}</span><br/>
                <span>{address}</span><br/>
                <span>{`${city}, ${postal}`}</span>
            </div>
        </div>
    );
}

const Envelope = ({toPerson, fromPerson, stamp}) => (
    <div className="envelope-sec">
        <AddressLabel person={fromPerson}/>
        <span className="stamp-sec"><Stamp url={stamp}/></span>
        <div className="toperson-sec">
            <AddressLabel person={toPerson}/>
        </div>
    </div>
);

const Stamp = ({ url }) => (
    <img 
        src = {url}
        alt = "Stamp Image"
    />
);

const EmailLine = () => (
    <div className=" wrapper emailline-wrapper">
        <input type="checkbox"/>
        <i className="fas fa-thumbtack pinch-font"/>
        <div>
            <div className="email-header">
                <span>Sender</span><span className="subject">Subject</span><span className="date">Date</span>
            </div>
            <div>
                Message
            </div>
        </div>
    </div>
);

const propsData = {
    person: {
        firstName: "Bruce",
        lastName: "Lee",
        address: "123 Fake St.",
        city: "Boston",
        postal: "MA 02118"
    },
    fromPerson: {
        firstName: "Mr. Sender",
        lastName: "",
        address: "123 Fake St.",
        city: "Boston",
        postal: "MA 02118"
    },
    toPerson: {
        firstName: "Mrs. Receiver",
        lastName: "",
        address: "123 Fake St.",
        city: "San Francisco",
        postal: "CA 84121"
    },
    stamp: "https://cdn.shopify.com/s/files/1/0979/4264/products/custom-couple-stamp-1_x700.png?v=1535096148"
};

ReactDOM.render(<PropsExercise propsData={propsData} />, document.getElementById('root'));

