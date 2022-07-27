import { createContext, ReactNode, useContext, useState } from "react";

type ContentContextType = {
  appLoaded: boolean;
  pageExit: boolean;
  pageLoaded: boolean;
  setAppLoaded: () => void;
  setPageExit: (pageExit: boolean) => void;
  setPageLoaded: (pageLoaded: boolean) => void;
};

const ContentContextDefaultValues: ContentContextType = {
  appLoaded: false,
  pageExit: false,
  pageLoaded: false,
  setAppLoaded: () => {},
  setPageExit: () => {},
  setPageLoaded: () => {},
};

const ContentContext = createContext<ContentContextType>(
  ContentContextDefaultValues
);

export function useContent() {
  return useContext(ContentContext);
}

type ProviderProps = {
  children: ReactNode;
};

export function ContentProvider({ children }: ProviderProps) {
  const [appLoaded, setAppLoaded] = useState<boolean>(false);
  const [pageExit, setPageExit] = useState<boolean>(false);
  const [pageLoaded, setPageLoaded] = useState<boolean>(true);

  const loadApp = () => setAppLoaded(true);

  const triggerPageExit = (pageExit: boolean) => setPageExit(pageExit);

  const triggerPageLoaded = (pageLoaded: boolean) => setPageLoaded(pageLoaded);

  const value = {
    appLoaded,
    pageExit,
    pageLoaded,
    setAppLoaded: loadApp,
    setPageExit: triggerPageExit,
    setPageLoaded: triggerPageLoaded,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
