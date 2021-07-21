import "./Tag.css";

function Tag(props) {
    return (
        <div className="tagText">
            <span>#{props.name}</span>
        </div>
    );
}

export default Tag;

/* may need to change span to href to link to search results page for props.name */
