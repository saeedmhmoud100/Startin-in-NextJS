import React from "react";


type props = {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}

export default function Layout(props) {
    return (
        <div>
            <div>{props.children}</div>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {props.users}
                    {props.revenue}
                </div>
                <div style={{display: "flex", flex: 1}}>
                    {props.notifications}
                </div>
            </div>
        </div>
    );
}
