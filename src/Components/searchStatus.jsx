import React from "react";
import "bootstrap/dist/css/bootstrap.css"

const SearchStatus = ({length}) => {
      const renderPhrase = (number) => {
            const lastNumber = Number(number.toString().slice(-1));
            if (number > 4 && number < 15) {
              return "человек тусанет";
            }
            if ([2, 3, 4].indexOf(lastNumber) > 0) {
              return "человека тусанут";
            }
            if (lastNumber === 1) {
              return "человек тусанет";
            }
            return "человека тусанет";
          };
      
      const statusString = renderPhrase(length);

    return (
      <h2> 
            <span className={"badge bg-"+(length > 0 ? "primary" : "danger")}> 
                  {length > 0 ? `${length} ${statusString} с тобой сегодня` : `Никто с тобой не тусанет`}
            </span>
      </h2>
    )
 }


export default SearchStatus;
