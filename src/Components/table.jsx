import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import PropTypes from "prop-types";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table table-light">
            { children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }}/>
                    <TableBody { ...{ columns, data }}/>
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    data: PropTypes.array,
    columns: PropTypes.object,
    children: PropTypes.array
};

export default Table;
