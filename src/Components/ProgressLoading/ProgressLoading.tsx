import { Grid, Stack } from "@mui/material";
import ReactLoading, { LoadingType } from "react-loading";

type ProgressLoadingProps = {
  type?: LoadingType | undefined;
  color?: string;
};

export const ProgressLoading = ({
  type = "spinningBubbles",
  color = "#0000ff",
}: ProgressLoadingProps) => {
  return (
    <Stack justifyContent="center">
      <Grid margin="auto" mt={2}>
        <ReactLoading type={type} color={color} />
      </Grid>
    </Stack>
  );
};
