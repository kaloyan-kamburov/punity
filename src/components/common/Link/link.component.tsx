import React, { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useContent } from "../../../contexts/content.context";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  query?: any;
}

const Link: React.FC<Props> = ({
  href,
  children,
  className = "",
  delay = 400,
  query = {},
}) => {
  const router = useRouter();
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const { setPageExit, setPageLoaded } = useContent();

  useEffect(() => {
    let timer: any;
    if (shouldRedirect) {
      setPageExit(true);
      setPageLoaded(false);
      timer = setTimeout(() => {
        router.push({
          pathname: href,
          query,
        });
        setPageExit(false);
        setPageLoaded(true);
      }, delay);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [shouldRedirect]);

  return (
    <div
      className={`link${className ? ` ${className}` : ""}`}
      onClick={() => {
        setPageExit(true);
        setPageLoaded(false);
        setShouldRedirect(true);
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

export default Link;
