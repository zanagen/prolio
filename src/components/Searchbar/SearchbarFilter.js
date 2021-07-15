import { Form } from "react-bootstrap";
import "./SearchbarFilter.css";

export default function SearchBarFilter() {
    return (
    <>
    <Form>
        {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="filter">
                <Form.Check
                    inline
                    label="Following"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    inline
                    label="Recents"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="Job Posts"
                    name="group1:"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                    inline
                    label="Trending"
                    name="group1:"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                    inline
                    disabled
                    label="Events (disabled)"
                    name="group1:"
                    type={type}
                    id={`inline-${type}-3`}
                />
            </div>
        ))}
    </Form>
    </>
    )
};