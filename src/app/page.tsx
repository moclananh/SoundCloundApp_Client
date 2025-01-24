import MainSlider from "@/components/slider/main.slider";
import { sendRequest } from "@/utils/service";
import { Container } from "@mui/material";
export default async function HomePage() {
  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/top`,
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  });

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/top`,
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  });

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/top`,
    method: "POST",
    body: { category: "PARTY", limit: 10 },
  });
  return (
    <Container>
      <MainSlider data={chills.data ?? []} title="Chill" />
      <MainSlider data={workouts.data ?? []} title="Workout" />
      <MainSlider data={party.data ?? []} title="Party" />
    </Container>
  );
}
