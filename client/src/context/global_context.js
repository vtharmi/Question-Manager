import React, { useState } from "react";

import { SearchContext, QuestionDialog } from "./context";

const GlobalContext = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestionDialog, setOpenQuestionDialog] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
      }}
    >
      <QuestionDialog.Provider
        value={{
          openQuestionDialog: openQuestionDialog,
          setOpenQuestionDialog: setOpenQuestionDialog,
        }}
      >
        {props.children}
      </QuestionDialog.Provider>
    </SearchContext.Provider>
  );
};

export default GlobalContext;
