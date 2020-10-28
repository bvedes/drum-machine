import boom from "../sounds/boom.wav";
import hihat from "../sounds/hihat.wav";
import kick from "../sounds/kick.wav";
import openhat from "../sounds/openhat.wav";
import ride from "../sounds/ride.wav";
import clap from "../sounds/clap.wav";
import snare from "../sounds/snare.wav";
import tom from "../sounds/tom.wav";
import tink from "../sounds/tink.wav";

export const keyCodes = [
  {
    keyCode: 81,
    letter: "q",
    soundName: "boom",
    src: boom,
  },
  {
    keyCode: 87,
    letter: "w",
    soundName: "hihat",
    src: hihat,
  },
  {
    keyCode: 69,
    letter: "e",
    soundName: "kick",
    src: kick,
  },
  {
    keyCode: 65,
    letter: "a",
    soundName: "openhat",
    src: openhat,
  },
  {
    keyCode: 83,
    letter: "s",
    soundName: "clap",
    src: clap,
  },
  {
    keyCode: 68,
    letter: "d",
    soundName: "ride",
    src: ride,
  },
  {
    keyCode: 90,
    letter: "z",
    soundName: "snare",
    src: snare,
  },
  {
    keyCode: 88,
    letter: "x",
    soundName: "tom",
    src: tom,
  },
  {
    keyCode: 67,
    letter: "c",
    soundName: "tink",
    src: tink,
  },
];
