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
    <Card>
      <Typography>
        <Link href={url}>{url}</Link>
      </Typography>
      <Typography>{name}</Typography>
      <Typography>{starCount}</Typography>
    </Card>
  );
};

export default React.memo(Repository);
