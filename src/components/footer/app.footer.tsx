"use client";
import { useHasMounted } from "@/utils/custom.hook";
import { AppBar, colors, Container } from "@mui/material";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AppFooter = () => {
  const hasMounted = useHasMounted();
  if (!hasMounted) return <></>;
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#F2F2F2" }}
    >
      <Container sx={{ display: "flex", gap: "10px" }}>
        <AudioPlayer
          autoPlay={false}
          volume={0.3}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
          style={{
            boxShadow: "unset",
            backgroundColor: "#F2F2F2",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "150px",
          }}
        >
          <div style={{ color: "#CCC" }}>ThanhTH</div>
          <div style={{ color: "black" }}>Just a dev</div>
        </div>
      </Container>
    </AppBar>
  );
};
export default AppFooter;
