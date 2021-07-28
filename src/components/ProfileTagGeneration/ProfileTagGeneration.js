import ProfileTag from "../ProfileTag/ProfileTag";

/* keeps key of the new Tag and the Tag itself */
function ListItem(props) {
    return <div>{props.value}</div>;
}

/* takes in a list of strings, creates Tags from the list */
export default function ProfileTagList(props) {
    const profileTags = props.profileTags;
    console.log(profileTags);
    const profileTagList = profileTags.map((profileTag) => (
        <ListItem
            key={profileTag.username.toString()}
            value={
                <ProfileTag
                    name={String(profileTag.name)}
                    title={String(profileTag.jobTitle)}
                    userPic={String(profileTag.profilePicSrc)}
                    userStatus={String(profileTag.userStatus)}
                />
            }
        />
    ));
    console.log(profileTagList);
    return <div className={props.containerName}>{profileTagList}</div>;
}
