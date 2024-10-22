import Profile from "../../assets/profile.png"
const Header = () => {
    return (
        <div>
           <header className="flex justify-between p-4">
              <h2 className="text-4xl">Knowledge Cafe</h2>
              <img src={Profile} alt="A girls Image" />
            </header> 
        </div>
    );
};

export default Header;