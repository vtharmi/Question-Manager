import { createContext } from "react";

// search context
export const SearchContext = createContext({
  searchQuery: undefined,
  setSearchQuery: () => {},
});

// create question dialog context
export const QuestionDialog = createContext({
  openQuestionDialog: undefined,
  setOpenQuestionDialog: () => {},
});
