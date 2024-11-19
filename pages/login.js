import LoginForm from '../components/LoginForm';
import { loginUser } from '../services/auth.service';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuth, setAuth } from '../services/identity.service';

function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const auth = getAuth();
    const onSubmit = async (data) => {
        try {
            const response = await loginUser(data);
            if (response?.success) {
                setAuth(response)
                router.push('/dashboard');
            } else {
                setError(response?.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again later.');
        }
    };

    useEffect(() => {
        if (auth?.token) {
            router.push('/dashboard')
        }
    }, [auth])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <h2 className="text-3xl font-bold text-center">DSA Tracker Login</h2>
                {error && <div className="text-red-600 text-sm text-center mb-4">{error}</div>}
                <LoginForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default LoginPage;
