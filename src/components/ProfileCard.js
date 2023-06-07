import './ProfileCard.css'

function ProfileCard(props) {
    const style = { backgroundImage: `url(${props.image})` }
    return (
        <div className="profile-card">
            <div className="profile-card-image" style={style}></div>
            <div className="profile-card-title">
                {props.name}
            </div>
            <div className="profile-card-email">
                {props.email}
            </div>
        </div>
    )
}

export default ProfileCard
