import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const AddNew = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginTop: 4,
  height: 48,
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const Item = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
}));

const ItemImg = styled(Grid)(({ theme }) => ({
  flex: "0 0 80px",
  height: "120px",
  position: "relative",
  backgroundColor: "rgb(253, 141, 70)",
  marginRight: 10,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

const UploaderWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 24,
}));

const ItemBody = styled(Grid)(({ theme }) => ({
  flex: "1 1 auto",
  width: "100%",
}));

const IS1 = {
  maxWidth: "632px",
  paddingTop: "20px",
};

const IS2 = {
  borderSpacing: "0px",
  borderBottom: "2px solid #233043",
  maxWidth: "672px",
  margin: 0,
};

const IS3 = {
  padding: "0 15px 0 0",
};

const IS4 = {
  borderBottom: "50px solid #233043",
  borderLeft: "0px solid transparent",
  borderRight: "40px solid transparent",
  height: 0,
  padding: "0 20px",
  color: "white",
  width: "fit-content",
  textAlign: "center",
  lineHeight: "50px",
  fontSize: "20px",
  fontWeight: "bold",
  fontStretch: "normal",
};

const IS5 = {
  maxWidth: "632px",
};

const IS6 = {
  padding: "10px 20px",
};

const IS7 = {
  maxWidth: "632px",
  margin: 0,
  borderRadius: "8px",
  borderCollapse: "separate",
};

const IS8 = {
  background: "#FCFCFC",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #FFE0CD",
  padding: "8px 8px 8px 8px",
};

const IS9 = {
  background: "#FD8D46",
  borderRadius: "4px",
  textAlign: "center",
};

const IS10 = {
  display: "inline-block",
  verticalAlign: "middle",
};

const IS11 = {
  fontSize: "18px",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
  textAlign: "left",
  color: "#171821",
  paddingLeft: "9px",
  paddingBottom: "4px",
  borderBottom: "1px solid #ffe0cd",
};

const IS12 = {
  padding: "5px 11px 0",
};

const IS13 = {
  width: "100%",
};

const IS14 = {
  background: "#F8F8F8",
  padding: "3px 0px",
  fontSize: "12px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.7",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#0fbc49",
};

const IS15 = {
  fontSize: "12px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.75",
  letterSpacing: "normal",
  textAlign: "left",
  color: "#535353",
};

const IS16 = {
  margin: 0,
  padding: 0,
};

const IS17 = {
  paddingRight: "4px",
};

const IS18 = { verticalAlign: "middle" };

const IS19 = {
  fontSize: "12px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.75",
  letterSpacing: "normal",
  textAlign: "right",
  color: "#535353",
  paddingLeft: "5px",
};

const IS20 = {
  margin: 0,
  margin: "10px 11px 0 0",
};

const IS21 = {
  textAlign: "right",
};

const IS22 = {
  fontSize: "14px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "left",
  textDecoration: "none",
  cursor: "pointer",
  color: "#f96b28",
};

export {
  IS1,
  IS2,
  IS3,
  IS4,
  IS5,
  IS6,
  IS7,
  IS8,
  IS9,
  IS10,
  IS11,
  IS12,
  IS13,
  IS14,
  IS15,
  IS16,
  IS17,
  IS18,
  IS19,
  IS20,
  IS21,
  IS22,
  AddNew,
  Item,
  ItemImg,
  ItemBody,
  UploaderWrapper,
};
