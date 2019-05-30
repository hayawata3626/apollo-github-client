import * as React from "react";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import styled from "@emotion/styled";
import { CardProps } from "@material-ui/core/Card";

const RepositoryWrapper = styled(({ children, ...props }: CardProps) => (
  <Card {...props}>{children}</Card>
))`
  border: 1px solid #ccc;
  max-width: 800px;
  margin: 0 auto 20px auto;
  text-align: left;
  padding: 10px;
`;

type Props = {
  url: string;
  name: string;
  starCount: number;
};

const Repository: React.FC<Props> = ({ url, name, starCount }: Props) => {
  return (
    <RepositoryWrapper>
      <Typography>
        url: <Link href={url}>{url}</Link>
      </Typography>
      <Typography>name: {name}</Typography>
      <Typography>star: {starCount}</Typography>
    </RepositoryWrapper>
  );
};

export default Repository;
