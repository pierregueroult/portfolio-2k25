"use client";

import { useEffect, type RefObject } from "react";

const useEventListener = (
  target: RefObject<HTMLElement> | HTMLElement | string,
  eventName: keyof DocumentEventMap,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const element =
      target instanceof HTMLElement
        ? target
        : typeof target === "string"
          ? document.querySelector(target)
          : target.current;

    if (!element) return;

    element.addEventListener(eventName, handler);

    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [target, eventName, handler]);
};

export default useEventListener;
