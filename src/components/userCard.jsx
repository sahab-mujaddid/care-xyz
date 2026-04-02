"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const userCard = () => {

    const session= useSession();

    return (
        <div>
            <h2>user-client</h2>
            <div>{session.stringify(session)}</div>
        </div>
    );
};

export default userCard;