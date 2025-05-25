import { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import useHover from "../../hooks/useHover";
import { CopyContext } from "../../App";
import { Wrapper, DrawerHeader, ChildreWrapper } from "./styles";
import { DRAWER_WIDTH } from "../../constants";

const ComponentWrapper = ({ children, form = null, id }) => {
  const { openDrawer, copyMode, setOpenDrawer, setActiveBlock, activeBlock } =
    useContext(CopyContext);

  const { hovered, bind } = useHover();

  const handleOpen = () => {
    setOpenDrawer(true);
    setActiveBlock(id);
  };

  const handleClose = () => {
    setOpenDrawer(false);
    setActiveBlock(null);
    bind.onMouseLeave();
  };

  if (copyMode) return <>{children}</>;

  return (
    <Box
      onMouseEnter={bind.onMouseEnter}
      onMouseLeave={() => activeBlock !== id && bind.onMouseLeave()}
      sx={{
        position: "relative",
        display: activeBlock && activeBlock !== id ? "none" : "block",
      }}
    >
      <ChildreWrapper active={activeBlock === id}>{children}</ChildreWrapper>
      {hovered && form && (
        <>
          <Wrapper>
            <Button
              onClick={handleOpen}
              size="large"
              variant="contained"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Wrapper>
          <Drawer
            open={openDrawer}
            anchor="left"
            onClose={handleClose}
            sx={{
              "& .MuiPaper-root": {
                width: `${DRAWER_WIDTH}px`,
                boxSizing: "border-box",
              },
            }}
          >
            <DrawerHeader>
              <Typography variant="h5" sx={{ mr: "auto" }}>
                Edit block
              </Typography>

              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DrawerHeader>
            {form}
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default ComponentWrapper;
