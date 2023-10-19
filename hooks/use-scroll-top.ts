import { useEffect, useState } from "react";

export const useScrollTop = (threshold = 10) => {
  const [scroll, setSccroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setSccroll(true);
      } else {
        setSccroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scroll;
};
