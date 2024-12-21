"use client";

import useEventListener from "@/hooks/use-event";

function playSound(event: KeyboardEvent | MouseEvent, type: "down" | "up") {
  let sound: string | null = null;

  if (event instanceof KeyboardEvent) {
    switch (event.key) {
      case " ":
        sound = `${type}_space`;
        break;
      case "Enter":
        sound = `${type}_enter`;
        break;
      default:
        sound = `${type}${Math.floor(Math.random() * 7) + 1}`;
    }
  } else if (event instanceof MouseEvent) {
    sound = `${type}_mouse`;
  }

  if (sound) {
    const audio = new Audio(`/sounds/${sound}.mp3`);
    audio.play();
  }
}

export default function KeyboardSounds() {
  useEventListener("html", "keydown", (event) => {
    if (!(event instanceof KeyboardEvent)) return;
    playSound(event, "down");
  });

  useEventListener("html", "keyup", (event) => {
    if (!(event instanceof KeyboardEvent)) return;
    playSound(event, "up");
  });

  useEventListener("html", "mousedown", (event) => {
    if (!(event instanceof MouseEvent)) return;
    playSound(event, "down");
  });

  useEventListener("html", "mouseup", (event) => {
    if (!(event instanceof MouseEvent)) return;
    playSound(event, "up");
  });

  return <></>;
}
