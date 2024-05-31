import Avatar from "./Avatar";
import "../assets/styles/card.css"
// Profile card component
function UserProfileCard() {
    return (
      <div className="card">
        <Avatar />
        <div className="card-name">Jon Doe</div>
        <div className="card-bio">
          Jon Doe was the first programmer, to write the Hello World program.
        </div>
      </div>
    );
  }

  export default UserProfileCard;
  