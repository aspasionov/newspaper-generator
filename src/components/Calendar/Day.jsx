import { IS7, IS8, IS9, IS10, IS11, IS12, IS13, IS14, IS15 } from "./styles";

const Day = ({ day }) => {
  const [first, second, third, fourth, fifth, sixth] = day?.holidays || [];

  if (day.outside) {
    return (
      <td style={IS7}>
        <table border="0" cellSpacing="0" cellPadding="0" width="100%">
          <tr>
            <td style={IS8}>
              <table border="0" cellSpacing="0" cellPadding="0" width="100%">
                <tr style={IS9}>
                  <td style={IS10}>{day.date}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    );
  }

  return (
    <td style={IS11}>
      <table border="0" cellSpacing="0" cellPadding="0" width="100%">
        <tr>
          <td style={IS12}>
            <table
              style={{
                ...IS13,
                padding: fourth ? "2px 1px 0 2px" : "2px 2px 18px 2px",
              }}
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
            >
              <tr>
                {[first, second, third].map((holiday) =>
                  holiday ? (
                    <td valign="top" width="24px" key={holiday.id}>
                      <img
                        title={holiday.title}
                        width="24px"
                        height="16px"
                        src={holiday.img}
                        alt={holiday.title}
                      />
                    </td>
                  ) : (
                    <td valign="top" width="24px"></td>
                  )
                )}
              </tr>
              {fourth && (
                <tr>
                  {[fourth, fifth, sixth].map((holiday) =>
                    holiday ? (
                      <td valign="top" width="24px" key={holiday.id}>
                        <img
                          title={holiday.title}
                          width="24px"
                          height="16px"
                          src={holiday.img}
                          alt={holiday.title}
                        />
                      </td>
                    ) : (
                      <td valign="top" width="24px"></td>
                    )
                  )}
                </tr>
              )}
            </table>
            <table border="0" cellSpacing="0" cellPadding="0" width="100%">
              <tr style={IS14}>
                <td style={{ ...IS15, lineHeight: fourth ? "11px" : "13px" }}>
                  {day.date}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  );
};

export default Day;
