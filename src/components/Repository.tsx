import * as React from "react";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

type Props = {
  url: string;
  name: string;
  starCount: number;
};

const Repository = ({ url, name, starCount }: Props) => {
  return (
    <Card
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        maxWidth: "800px",
        margin: "0 auto 20px auto",
        textAlign: "left",
        padding: "10px"
      }}
    >
      <Typography>
        url: <Link href={url}>{url}</Link>
      </Typography>
      <Typography>name: {name}</Typography>
      <Typography>star: {starCount}</Typography>
    </Card>
  );
};

export default Repository;
