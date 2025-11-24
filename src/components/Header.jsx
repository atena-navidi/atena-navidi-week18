
const Header = ({ title = "Contact List App", subtitle = "Manage your contacts easily 📇" }) => {
  return (
    <div className="text-center my-10 px-2">
      <h1 className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500 font-extrabold text-4xl md:text-6xl drop-shadow-sm">
        {title}
      </h1>
      <p className="text-gray-400 mt-3 text-lg tracking-wide">{subtitle}</p>
    </div>
  );
};

export default Header;

