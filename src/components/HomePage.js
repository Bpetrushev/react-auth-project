import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card } from '../UI/UI'

export default function HomePage() {
    const { currentUser } = useAuth();

    useEffect(() => {
    }, []);

    return (
        <Card>
            <h2>Profile</h2>
            <h3>Welcome, {currentUser && currentUser.email}</h3>
        </Card>
    )
}
