import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <button
        onClick={() => logout()}
        className="bg-[#ff0000] flex justify-center items-center transition w-full max-w-[120px] min-h-[30px] text-white backdrop-blur-[32px] rounded-[32px] py-1 px-6 mt-6"
      >
        Sign Out
      </button>
    )
  );
};

export default LogoutButton;
