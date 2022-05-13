import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
  const router = useRouter();

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

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0px" }}>
        <img src={track.picture} width={200} height={200} alt="koin" />
        <div style={{ margin: "20px 0px" }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушивай - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Коментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="коментарий" multiline rows={4} fullWidth />
        <Button>Отправка</Button>
      </Grid>
      <div>
        {track.comments.map((comment, index) => (
          <div key={`${comment.text}-${index}`}>
            <div>Автор - {comment.username}</div>
            <div>Коментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
