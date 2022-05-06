import React from "react";
import { createStyles, Header, Container, Group, ActionIcon, Tooltip } from "@mantine/core";
import { MantineLogo } from "./MantineLogo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const useStyles = createStyles(theme => ({
  inner: {
    height: 56,
    marginTop: 15,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const SysHeader: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Header height={70} mb={0}>
      <Container fluid>
        <div className={classes.inner}>
          <MantineLogo />
          <Group>
            <Tooltip
              label="Repositorio"
              position="bottom"
              withArrow
              >
              <ActionIcon
                size="lg"
                sx={(theme) => ({
                  color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[6],
                })}
              >
                <FontAwesomeIcon icon={faGithub} size={"2x"} />
              </ActionIcon>
            </Tooltip>
            <ThemeSwitcher />        
          </Group>
        </div>
      </Container>
    </Header>
  );
}

SysHeader.defaultProps = {
}

export default SysHeader;
