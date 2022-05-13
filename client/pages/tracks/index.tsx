import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: "2",
      name: "Track 1",
      artist: "Исполнитель 1",
      text: "Какой-то текст",
      listens: 5,
      audio:
        "http://localhost:5000/audio/6e2cc0ab-6eb5-4030-9ee1-17aa1811ddfb.mp3",
      picture:
        "http://localhost:5000/image/6d348e66-71f0-4dec-8554-3e18b5401f63.png",
      comments: [],
    },
    {
      _id: "3",
      name: "Track 1",
      artist: "Исполнитель 1",
      text: "Какой-то текст",
      listens: 5,
      audio:
        "http://localhost:5000/audio/6e2cc0ab-6eb5-4030-9ee1-17aa1811ddfb.mp3",
      picture:
        "http://localhost:5000/image/6d348e66-71f0-4dec-8554-3e18b5401f63.png",
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
