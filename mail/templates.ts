import { MailerData } from "../types";

const Templates = {

  HTML: (data: MailerData) => {
    const { receiver_name, sender_identity, sender_email, subject, message, receiver_email, noreply } = data;
    return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>E-MAIL</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <style type="text/css">
              #outlook a {
                padding: 0;
              }
              body {
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
              }
              table,
              td {
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
              img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
              }
              p {
                display: block;
                margin: 13px 0;
              }
            </style>
            <style type="text/css">
              @media only screen and (min-width: 480px) {
                .mj-column-per-100 {
                  width: 100% !important;
                  max-width: 100%;
                }
              }
            </style>
            <style media="screen and (min-width:480px)">
              .moz-text-html .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
              }
            </style>
            <style type="text/css">
              @media only screen and (max-width: 480px) {
                table.mj-full-width-mobile {
                  width: 100% !important;
                }
                td.mj-full-width-mobile {
                  width: auto !important;
                }
              }
            </style>
          </head>
          <body style="word-spacing: normal; background-color: #e7e7e7">
            <div
              style="
                display: none;
                font-size: 1px;
                color: #ffffff;
                line-height: 1px;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
              "
            >
              Sent from Everything Mail (E-Mail)
            </div>
            <div style="background-color: #e7e7e7">
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="background: #040b4f; background-color: #040b4f; width: 100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <div style="margin: 0px auto; max-width: 600px">
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="width: 100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  direction: ltr;
                                  font-size: 0px;
                                  padding: 20px 0;
                                  padding-bottom: 0;
                                  text-align: center;
                                "
                              >
                                <div
                                  class="mj-column-per-100 mj-outlook-group-fix"
                                  style="
                                    font-size: 0px;
                                    text-align: left;
                                    direction: ltr;
                                    display: inline-block;
                                    vertical-align: top;
                                    width: 100%;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="vertical-align: top"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            font-size: 0px;
                                            padding: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              border-collapse: collapse;
                                              border-spacing: 0px;
                                            "
                                          >
                                            <tbody>
                                              <tr>
                                                <td style="width: 100%">
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                style="
                  background: #1f2e78;
                  background-color: #1f2e78;
                  margin: 0px auto;
                "
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="background: #1f2e78; background-color: #1f2e78; width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          direction: ltr;
                          font-size: 0px;
                          padding: 20px 0;
                          text-align: center;
                        "
                      >
                        <div
                          class="mj-column-per-100 mj-outlook-group-fix"
                          style="
                            font-size: 0px;
                            text-align: left;
                            direction: ltr;
                            display: inline-block;
                            vertical-align: top;
                            width: 100%;
                          "
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="vertical-align: top"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="center"
                                  style="
                                    font-size: 0px;
                                    padding: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td style="width: 100%">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="body-section"
                style="
                  -webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
                  -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
                  box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15);
                  margin: 0px auto;
                  max-width: 600px;
                "
              >
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          direction: ltr;
                          font-size: 0px;
                          padding: 20px 0;
                          padding-bottom: 10;
                          padding-top: 10;
                          text-align: center;
                        "
                      >
                        <div
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                            font-size: 20px;
                            font-weight: 400;
                            line-height: 16px;
                            text-align: center;
                            color: #000000;
                          "
                        >
                          ${message}
                        </div>
                        <!-- regards -->
                        <div
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                            font-size: 13px;
                            font-weight: 400;
                            line-height: 16px;
                            padding-top: 10px;
                            margin-left: 10px;
                            text-align: left;
                            color: #000000;
                          "
                        >
                          Regards, <br />
                          <b>${sender_identity || 'E-Mail Team'}</b>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <div style="margin: 0px auto; max-width: 600px">
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="width: 100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  direction: ltr;
                                  font-size: 0px;
                                  padding: 20px 0;
                                  text-align: center;
                                "
                              >
                                <div style="margin: 0px auto; max-width: 600px">
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="width: 100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            direction: ltr;
                                            font-size: 0px;
                                            padding: 20px 0;
                                            text-align: center;
                                          "
                                        >
                                          <div
                                            class="mj-column-per-100 mj-outlook-group-fix"
                                            style="
                                              font-size: 0px;
                                              text-align: left;
                                              direction: ltr;
                                              display: inline-block;
                                              vertical-align: top;
                                              width: 100%;
                                            "
                                          >
                                            <table
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              role="presentation"
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    style="
                                                      vertical-align: top;
                                                      padding: 0;
                                                    "
                                                  >
                                                    <table
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      role="presentation"
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            style="
                                                              font-size: 0px;
                                                              padding: 0;
                                                              word-break: break-word;
                                                            "
                                                          >
                                                            <table
                                                              align="center"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              role="presentation"
                                                              style="
                                                                float: none;
                                                                display: inline-table;
                                                              "
                                                            >
                                                              <tr>
                                                                <td
                                                                  style="
                                                                    padding: 4px;
                                                                    vertical-align: middle;
                                                                  "
                                                                >
                                                                  <table
                                                                    border="0"
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    role="presentation"
                                                                    style="
                                                                      background: #a1a0a0;
                                                                      border-radius: 3px;
                                                                      width: 30px;
                                                                    "
                                                                  >
                                                                    <tr>
                                                                      <td
                                                                        style="
                                                                          font-size: 0;
                                                                          height: 30px;
                                                                          vertical-align: middle;
                                                                          width: 30px;
                                                                        "
                                                                      >
                                                                        <a
                                                                          href="#"
                                                                          target="_blank"
                                                                          ><img
                                                                            height="30"
                                                                            src="https://www.mailjet.com/images/theme/v1/icons/ico-social/github.png"
                                                                            style="
                                                                              border-radius: 3px;
                                                                              display: block;
                                                                            "
                                                                            width="30"
                                                                        /></a>
                                                                      </td>
                                                                    </tr>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                            <table
                                                              align="center"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              role="presentation"
                                                              style="
                                                                float: none;
                                                                display: inline-table;
                                                              "
                                                            >
                                                              <tr>
                                                                <td
                                                                  style="
                                                                    padding: 4px;
                                                                    vertical-align: middle;
                                                                  "
                                                                >
                                                                  <table
                                                                    border="0"
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    role="presentation"
                                                                    style="
                                                                      background: #a1a0a0;
                                                                      border-radius: 3px;
                                                                      width: 30px;
                                                                    "
                                                                  >
                                                                    <tr>
                                                                      <td
                                                                        style="
                                                                          font-size: 0;
                                                                          height: 30px;
                                                                          vertical-align: middle;
                                                                          width: 30px;
                                                                        "
                                                                      >
                                                                        <a
                                                                          href="https://twitter.com/intent/tweet?url=https://twitter.com/themanbentil"
                                                                          target="_blank"
                                                                          ><img
                                                                            height="30"
                                                                            src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png"
                                                                            style="
                                                                              border-radius: 3px;
                                                                              display: block;
                                                                            "
                                                                            width="30"
                                                                        /></a>
                                                                      </td>
                                                                    </tr>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                            <table
                                                              align="center"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              role="presentation"
                                                              style="
                                                                float: none;
                                                                display: inline-table;
                                                              "
                                                            >
                                                              <tr>
                                                                <td
                                                                  style="
                                                                    padding: 4px;
                                                                    vertical-align: middle;
                                                                  "
                                                                >
                                                                  <table
                                                                    border="0"
                                                                    cellpadding="0"
                                                                    cellspacing="0"
                                                                    role="presentation"
                                                                    style="
                                                                      background: #a1a0a0;
                                                                      border-radius: 3px;
                                                                      width: 30px;
                                                                    "
                                                                  >
                                                                    <tr>
                                                                      <td
                                                                        style="
                                                                          font-size: 0;
                                                                          height: 30px;
                                                                          vertical-align: middle;
                                                                          width: 30px;
                                                                        "
                                                                      >
                                                                        <a
                                                                          href="https://www.linkedin.com/shareArticle?mini=true&url=https://linkedin.com/in/bentil&title=&summary=&source="
                                                                          target="_blank"
                                                                          ><img
                                                                            height="30"
                                                                            src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png"
                                                                            style="
                                                                              border-radius: 3px;
                                                                              display: block;
                                                                            "
                                                                            width="30"
                                                                        /></a>
                                                                      </td>
                                                                    </tr>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            style="
                                                              font-size: 0px;
                                                              padding: 10px 25px;
                                                              word-break: break-word;
                                                            "
                                                          >
                                                            <div
                                                              style="
                                                                font-family: 'Helvetica Neue',
                                                                  Helvetica, Arial,
                                                                  sans-serif;
                                                                font-size: 11px;
                                                                font-weight: bold;
                                                                line-height: 24px;
                                                                text-align: center;
                                                                color: #445566;
                                                              "
                                                            >
                                                              Support Everythingmail on
                                                              all socials.
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            style="
                                                              font-size: 0px;
                                                              padding: 10px 25px;
                                                              word-break: break-word;
                                                            "
                                                          >
                                                            <div
                                                              style="
                                                                font-family: 'Helvetica Neue',
                                                                  Helvetica, Arial,
                                                                  sans-serif;
                                                                font-size: 11px;
                                                                font-weight: 400;
                                                                line-height: 16px;
                                                                text-align: center;
                                                                color: #445566;
                                                              "
                                                            >
                                                              This email was sent using
                                                              <a
                                                                class="footer-link"
                                                                href="#"
                                                                style="color: #888888"
                                                                >Everythingmail</a
                                                              >. Feel free to check it
                                                              out for your projects and
                                                              contribute to it.
                                                            </div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            style="
                                                              font-size: 0px;
                                                              padding: 10px 25px;
                                                              word-break: break-word;
                                                            "
                                                          >
                                                            <div
                                                              style="
                                                                font-family: 'Helvetica Neue',
                                                                  Helvetica, Arial,
                                                                  sans-serif;
                                                                font-size: 11px;
                                                                font-weight: 400;
                                                                line-height: 16px;
                                                                text-align: center;
                                                                color: #445566;
                                                              "
                                                            >
                                                              &copy; Everythingmail OS.,
                                                              All Rights Reserved.
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div style="margin: 0px auto; max-width: 600px">
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="width: 100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            direction: ltr;
                                            font-size: 0px;
                                            padding: 20px 0;
                                            padding-top: 0;
                                            text-align: center;
                                          "
                                        >
                                          <div
                                            class="mj-column-per-100 mj-outlook-group-fix"
                                            style="
                                              font-size: 0;
                                              line-height: 0;
                                              text-align: left;
                                              display: inline-block;
                                              width: 100%;
                                              direction: ltr;
                                            "
                                          >
                                            <div
                                              class="mj-column-per-100 mj-outlook-group-fix"
                                              style="
                                                font-size: 0px;
                                                text-align: left;
                                                direction: ltr;
                                                display: inline-block;
                                                vertical-align: top;
                                                width: 100%;
                                              "
                                            >
                                              <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                role="presentation"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        vertical-align: top;
                                                        padding-right: 0;
                                                      "
                                                    >
                                                      <table
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        role="presentation"
                                                        width="100%"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              align="center"
                                                              style="
                                                                font-size: 0px;
                                                                padding: 10px 25px;
                                                                word-break: break-word;
                                                              "
                                                            >
                                                              <div
                                                                style="
                                                                  font-family: 'Helvetica Neue',
                                                                    Helvetica, Arial,
                                                                    sans-serif;
                                                                  font-size: 11px;
                                                                  font-weight: bold;
                                                                  line-height: 16px;
                                                                  text-align: center;
                                                                  color: #445566;
                                                                "
                                                              >
                                                                <a
                                                                  class="footer-link"
                                                                  href="#"
                                                                  style="color: #888888"
                                                                  >Privacy</a
                                                                >&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<a
                                                                  class="footer-link"
                                                                  href="#"
                                                                  style="color: #888888"
                                                                  >Unsubscribe</a
                                                                >
                                                              </div>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </body>
        </html>
                
        `;
  },

  TEXT: (data: MailerData) => {
    const { receiver_name, sender_identity, sender_email, subject, message, receiver_email, noreply } = data;
    return `	
              
        `;
  }
};

export default Templates;