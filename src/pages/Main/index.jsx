import { useContext } from "react";
import Box from "@mui/material/Box";
import NewspaperHeader from "../../components/Header";
import Quote from "../../components/Quote";
import Vacancies from "../../components/Vacancies";
import News from "../../components/News";
import ProjectOverview from "../../components/ProjectOverview";
import RightControls from "../../components/RightControls";
import Education from "../../components/Education";
import Foundation from "../../components/Foundation";
import Employees from "../../components/Employees";
import Events from "../../components/Events";
import Others from "../../components/Others";
import Calendar from "../../components/Calendar";
import Footer from "../../components/Footer";
import { Content } from "./styles";
import { CopyContext } from "../../App";

const Main = ({ contentRef }) => {
  const { openDrawer } = useContext(CopyContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Content open={openDrawer}>
        {/* <LeftSlider/> */}
        <Box sx={{ mx: "auto", width: "100%", maxWidth: 675 }} ref={contentRef}>
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style={{ margin: 0, padding: 0 }}
          >
            <tbody>
              <tr>
                <td align="center">
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="632px"
                    style={{
                      maxWidth: "672px",
                      fontFamily: "Montserrat, Arial",
                      margin: 0,
                      backgroundColor: "#FEFEFE",
                      WebkitTextSizeAdjust: "none",
                    }}
                  >
                    <tbody>
                      <NewspaperHeader />
                      <Quote />
                      <Vacancies />
                      <News />
                      <ProjectOverview />
                      <Education />
                      <Foundation />
                      <Employees />
                      <Events />
                      <Others />
                      <Calendar />
                      <Footer />
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Content>
      <RightControls contentRef={contentRef} />
    </Box>
  );
};

export default Main;
