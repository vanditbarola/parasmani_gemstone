// pages/admin/login.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogin = () => {
    // Replace 'admin' and 'password' with your desired credentials
    if (username === 'admin' && password === 'password') {
      // Save the login state (this is a simple example, you might want to use a more secure method)
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <div className="bg-white rounded-md p-8 flex flex-col gap-4 items-center">
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white rounded-md px-8 py-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
