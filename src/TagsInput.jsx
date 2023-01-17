import React from "react";

const TagsInput = () => {
  const [tags, setTags] = React.useState([]);
  return (
    <div className="tags-input"> 
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <span>{tag}</span>
            <i className="material-icons">close</i>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => addTags(event)}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};
export default TagsInput;
