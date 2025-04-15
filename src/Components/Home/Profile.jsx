const Profile = (props) => {
    const checkLead = () => {
        return props.isLead ? "photo lead" : "photo";
    }

    return (
        <>
            <div className="profile">
                <img className={checkLead()} src={props.image}/>
                <h1 className="name">{props.name}</h1>
                <p className="description">{props.description}</p>
            </div>
        </>
    );
}

export default Profile;