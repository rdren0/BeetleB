import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icons: {
    height: "200px",
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="link"
        color="default"
        className={classes.icons}
        startIcon={<FacebookIcon style={{ height: "100px", width: "100px" }} />}
        href="https://www.facebook.com/beetlebarber"
      />
      <Button
        variant="link"
        color="default"
        className={classes.icons}
        startIcon={
          <InstagramIcon style={{ height: "100px", width: "100px" }} />
        }
        href="https://www.instagram.com/beetlebarber/"
      />
    </div>
  );
}
