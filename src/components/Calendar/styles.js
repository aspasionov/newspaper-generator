import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

const IS1 = { textAlign: "center" };

const IS2 = { fontSize: "18px" };
const IS3 = { padding: "20px 0" };

const IS4 = { backgroundColor: "#233043", padding: "4px 0" };

const IS5 = { color: "white", fontSize: "10px", lineHeight: "25px" };

const IS6 = { textAlign: "center" };

const IS7 = {
  height: 57,
  width: 88,
  borderWidth: 1,
  backgroundColor: "#F9F9F9",
};

const IS8 = { border: "1px solid #C0C6C9", paddingTop: 40 };

const IS9 = { textAlign: "right" };

const IS10 = {
  fontSize: 12,
  lineHeight: "13px",
  color: "#C0C6C9",
  padding: 2,
};

const IS11 = { height: "57px", width: "88px", borderWidth: "1px" };

const IS12 = { border: "1px solid #C0C6C9" };

const IS13 = {
  height: 38,
};

const IS14 = { textAlign: "right" };

const IS15 = {
  fontSize: "12px",
  color: "#1F2021",
  padding: "2px",
};

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& img": {
    marginRight: "10px",
    flex: "0 0 auto",
  },
}));

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

export {
  StyledMenuItem,
  AddNew,
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
};
