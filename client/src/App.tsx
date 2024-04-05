import axios, { AxiosResponse } from "axios";
import { Handshake } from "@mui/icons-material";

import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

interface projectInterface {
  project: String;
}

interface responseInterface {
  success: Boolean;
  message: string;
}

const App: FC = () => {
  const [project, setProject] = useState<projectInterface>({
    project: "",
  });

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({ project: e.target.value });
  };

  const handleSubmit = async (): Promise<void> => {
    const apiClient = axios.create({
      baseURL: "http://localhost:3005/api",
      headers: {
        "Content-type": "application/json",
      },
    });

    try {
      const response: AxiosResponse = await apiClient.post<responseInterface>(
        "/",
        {
          project: project.project,
        }
      );
      console.log(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("unknown error");
      }
    }
  };

  return (
    <Container>
      <Grid
        direction="column"
        spacing={3}
        container
        flexGrow={1}
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <Grid item>
          <Typography sx={{ p: 1 }} variant="h6" color="primary">
            Typescript <Handshake /> Express <Handshake /> MysqL CRUD app
          </Typography>
          <Divider />
        </Grid>

        <Grid item>
          <Stack direction="row" spacing={2}>
            <TextField
              size="small"
              label="project name"
              value={project.project}
              onChange={handleProjectChange}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Add Project
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
