"use client";

import {useState} from "react";


export default function Template({ children }) {
    const [user, setUser] = useState("");
    return (
        <div>
            {children}
            <label>User from template:</label>
            <input onChange={e => setUser(e.target.value)} value={user}/>
        </div>
    );
}