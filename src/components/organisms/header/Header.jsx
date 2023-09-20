import SearchBar from "../../atoms/SearchBar";
import { Grid } from "@mui/material";
import SimpleBadge from "../../molecules/Badge";

export const Header = () => {
  return (
    <Grid
      sx={{
        position: "fixed",
        zIndex: 999,
        
        height: "70px",

        top: 0,
        left: 0,
        right: 0,

        background: "rgba(142, 51, 51, 0.35)",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        WebkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
      container
    >
      <Grid item sm={1}></Grid>
      <Grid
        item
        xs={6}
        sx={{
          padding: "6px",
        }}
      >
        <SearchBar />
      </Grid>
      <Grid
        sx={{
          marginTop: "10px",
          cursor: "pointer",
        }}
        item
        xs={4}
      >
        <SimpleBadge />
      </Grid>
    </Grid>
  );
};
