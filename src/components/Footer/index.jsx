import dayjs from "dayjs";

import ComponentWrapper from "../ContentWrapper";

import {
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
} from "./styles";

const Footer = () => {
  return (
    <ComponentWrapper id="footer">
      <tr>
        <td width="672" style={IS1}>
          <table style={IS2} border="0" cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <td colSpan="2" align="center" style={IS3}>
                  The Strong Press for Strong People
                </td>
              </tr>
              <tr>
                <td align="center" style={IS4}>
                  <a
                    href="https://strongsd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={IS5}
                  >
                    <img
                      src="https://aspasionov.github.io/newspaper/strongsd-white.png"
                      width="80"
                      alt="strongsd-5316c342dcb72fa12a1be2813dc54e15"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <table style={IS6} border="0" cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <td align="right" style={IS7}>
                  <a
                    href="https://www.linkedin.com/company/strongsdcom"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={IS9}
                  >
                    <img
                      src="https://aspasionov.github.io/newspaper/linkedin.png"
                      alt="linkedin-0590d031194702c08ffd2665f6a85c2c"
                    />
                  </a>
                </td>
                <td align="left" style={IS8}>
                  <a
                    href="https://www.facebook.com/strongsdcom"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={IS9}
                  >
                    <img
                      src="https://aspasionov.github.io/newspaper/facebook.png"
                      alt="facebook"
                    />
                  </a>
                </td>
                <td align="left" style={IS10}>
                  <a
                    href="https://www.instagram.com/strongsd_company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={IS9}
                  >
                    <img
                      src="https://aspasionov.github.io/newspaper/instagram.png"
                      alt="instagram"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <td width="672px" align="center" valign="middle" style={IS11}>
          © Copyright, {dayjs().format("YYYY")}
        </td>
      </tr>
    </ComponentWrapper>
  );
};

export default Footer;
