import { Pause, PlayArrow } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";

interface PlayerProps {}

const Player: React.FC<PlayerProps> = () => {
  const track: ITrack = {
    _id: "1",
    name: "Track 1",
    artist: "Исполнитель 1",
    text: "Какой-то текст",
    listens: 5,
    audio:
      "http://localhost:5000/audio/6e2cc0ab-6eb5-4030-9ee1-17aa1811ddfb.mp3",
    picture:
      "http://localhost:5000/image/6d348e66-71f0-4dec-8554-3e18b5401f63.png",
    comments: [],
  };

  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
    </div>
  );
};

export default Player;
