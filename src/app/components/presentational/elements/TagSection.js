import React from 'react'

const TagSection = ({ tagsList, selectTag }) => {
    return (
        <div className="tagContainer">
            {tagsList.map((tag, index) => (
                <TagItem
                    tag={tag}
                    key={"tag-" + index}
                    selectTag={selectTag} />
            ))}
        </div>
    );
}

const TagItem = ({ tag, selectTag }) => {
    return (
            <div className="tagItem">
                <button onClick={() => selectTag(tag)} >
                    {tag}
                </button>
            </div>
    );
}

export default TagSection;
