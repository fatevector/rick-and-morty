import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    filter,
    onChangeFilter,
    valueProperty,
    contentProperty
}) => {
    return (
        <div className="list-group">
            {Object.keys(items).map(item => (
                <button
                    className={
                        "list-group-item list-group-item-action" +
                        (items[item][valueProperty] === filter ? " active" : "")
                    }
                    key={items[item][contentProperty]}
                    onClick={() => onChangeFilter(items[item][valueProperty])}
                >
                    {items[item][contentProperty]}
                </button>
            ))}
        </div>
    );
};

GroupList.defaultProps = {
    valueProperty: "id",
    contentProperty: "text"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    filter: PropTypes.string,
    onChangeFilter: PropTypes.func.isRequired,
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string
};

export default GroupList;
