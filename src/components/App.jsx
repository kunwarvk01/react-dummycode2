import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    );
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://pbs.twimg.com/profile_images/1578020332740300805/MI63Hiia_400x400.jpg" />
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
