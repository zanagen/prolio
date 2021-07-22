import Tag from "../Tag/Tag";

/* keeps key of the new Tag and the Tag itself */
function ListItem(props) {
    return <div>{props.value}</div>;
}

/* takes in a list of strings, creates Tags from the list */
export default function TagList(props) {
    const tags = props.tags;
    const tagList = tags.map((tag) => (
        <ListItem key={tag.toString()} value={<Tag name={String(tag)} />} />
    ));
    return <div className={props.containerName}>{tagList}</div>;
}
