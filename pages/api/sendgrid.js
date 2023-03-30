import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${req.body.email}`, 
      from: "administrador@toknow.online",
      subject: "Bienvenid@s a la comunidad toKnow",
      html: `<!doctype html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <title>Bienvenid@s a la g19 de Kodemia community con Sendgrid for Next.js</title>
      
          <!--[if !mso]>
      
      <!-- -->
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
      
          <!--<![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
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
            table {
              border-spacing: 0;
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
      
          <!--[if mso]>                    <xml>                      <o:OfficeDocumentSettings>                          <o:AllowPNG/>                          <o:PixelsPerInch>96</o:PixelsPerInch>                      </o:OfficeDocumentSettings>                    </xml>                        <style type="text/css">             table { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }             .mj-outlook-group-fix { width:100% !important; }             .block-grid-outlook .button-container a {background: transparent !important;}           </style>                  <![endif]-->
      
          <!--[if !mso]>
      
      <!-->
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
          <link href="https://s3.amazonaws.com/assets.knak.io/custom-fonts/Google/fonts.css" rel="stylesheet" type="text/css">
          <link href="https://fonts.googleapis.com/css?family=Google+Sans" rel="stylesheet" type="text/css">
          <link href="https://assets.knak.io/custom-fonts/Helvetica/Helvetica.css" rel="stylesheet" type="text/css">
          <style type="text/css">
            @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
            @import url(https://s3.amazonaws.com/assets.knak.io/custom-fonts/Google/fonts.css);
            @import url(https://fonts.googleapis.com/css?family=Google+Sans);
            @import url(https://assets.knak.io/custom-fonts/Helvetica/Helvetica.css);
          </style>
      
          <!--<![endif]-->
          <style type="text/css">
            @media only screen and (min-width:660px) {
              .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
              }
              .mj-column-per-50 {
                width: 50% !important;
                max-width: 50%;
              }
              .mj-column-per-22 {
                width: 22% !important;
                max-width: 22%;
              }
              .mj-column-per-78 {
                width: 78% !important;
                max-width: 78%;
              }
            }
          </style>
          <style type="text/css">
            @media only screen and (max-width:660px) {
              table.mj-full-width-mobile {
                width: 100% !important;
              }
              td.mj-full-width-mobile {
                width: auto !important;
              }
            }
            @media only screen and (min-width:660px) {
              table.mj-full-width-desktop {
                width: 100% !important;
              }
              td.mj-full-width-desktop {
                width: auto !important;
              }
            }
          </style>
          <style type="text/css">
            p {
              margin: 0 0;
            }
            ul {
              display: block;
            }
            ul li {
              list-style: disc;
            }
            li li {
              list-style: circle;
            }
            sup,
            sub {
              line-height: 0;
            }
            body a {
              text-decoration: none;
              color: #1A73E8;
            }
            .image-highlight {
              transition: 0.3s;
            }
            .image-highlight:hover {
              filter: brightness(1.2);
            }
            .button-highlight {
              transition: 0.3s;
            }
            .button-highlight:hover {
              filter: brightness(1.5);
            }
            @media only screen and (min-width: 660px) {
              .hide-on-mobile {
                display: block !important;
              }
              .hide-on-desktop {
                display: none !important;
              }
            }
            .hide-on-desktop {
              display: block;
            }
            .hide-on-mobile {
              display: none;
            }
          </style>
      
          <!--[if mso]>     <style>         .hide-on-mobile {display:block !important}     </style>   <![endif]-->
        </head>
        <body style="word-spacing:normal;background-color:#FFFFFF;">
      
          <!--[if !mso 9]>
      
      <!-->
          <div id="emailPreHeader" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
            Descubre el potencial que toKnow te ofrece!!
          </div>
          <div style="display: none; max-height: 0px; overflow: hidden;">
            &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
          </div>
      
          <!--<![endif]-->
          <div style="background-color:#FFFFFF;background-position:center center;background-size:auto;background-repeat:repeat;">
            <div class="module module-621933d5d2eed">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#FFFFFF;width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="background:#FFFFFF;background-color:#FFFFFF;Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#FFFFFF;width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:15px 20px 15px 20px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="background-color:transparent;border-radius:0px;vertical-align:top;padding:5px 0px 5px 0px;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                            <tbody>
                                              <tr>
                                                <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                    <tbody>
                                                      <tr>
                                                        <td style="width:150px;">
                                                          <div class="mktoImg" id="kimage-71lw840qe" mktolockimgsize="true" mktolockimgstyle="false">
                                                            <img alt height="auto" src="" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150">
                                                          </div>
      
                                                          <!--[if !mso 9]>
      
      <!-->
                                                          <div class="mktEditable" id="image-plain-text-olpn9k6l7" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                            [ Image ]
                                                          </div>
      
                                                          <!--<![endif]-->
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" background="" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F8F9FA;background-image:url();background-position:center top;background-size:100% 100%;background-repeat:no-repeat;width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center" style="mso-padding-left-alt:0;">
      
                      <!--[if mso | IE]><v:rect style="mso-width-percent:1000;height:20px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/zz3Udj3BFTCYn6LGeIWAXwDCwXw2r8CgSWjylaix.png" color="#F8F9FA" type="frame" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;height:20px;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <div style="line-height:0;font-size:0;">
                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;padding:0px;text-align:center;vertical-align:top;mso-padding-left-alt:0;mso-padding-right-alt:0;" class="block-grid">
      
                                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;" ><![endif]-->
                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="font-size:0px;padding:0 0 0 0;word-break:break-word;mso-padding-left-alt:0;mso-padding-right-alt:0;">
                                            <div style="mso-line-height-rule:exactly;line-height:20px;height:20px;">
                                              &nbsp;
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
      
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><p style="mso-line-height-rule:exactly;margin:0;mso-hide:all;font-size:0;line-height:0;"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p></v:textbox></v:rect><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="module module-621d33cb9fdff">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F8F9FA;width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="hide-on-mobile-outlook block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="background:#F8F9FA;background-color:#F8F9FA;Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F8F9FA;width:100%;">
                          <tbody>
                            <tr>
                              <td style="display: none; font-size: 0px; padding: 15px 20px 25px 20px; text-align: center; vertical-align: top;" class="hide-on-mobile block-grid" align="center" valign="top">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:300px;" ><![endif]-->
                                <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="left" class="text-container" style="font-size:0px;padding:0px 10px 10px 0px;word-break:break-word;">
                                          <div class="mktEditable" id="ktext-hlj794ns8" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:32px;letter-spacing:none;line-height:1.2;text-align:left;color:#202124;">
                                            <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:32px;letter-spacing:none;line-height:1.2;text-align:left;color:#202124;">
                                              <p style="margin: 0 0; mso-line-height-alt: 38px;">Bienvenid@ a la&nbsp;<br>comunidad toKnow</p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left" class="text-container" style="font-size:0px;padding:10px 10px 10px 0px;word-break:break-word;">
                                          <div class="mktEditable" id="ktext-h15van7m6" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:18px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                            <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:18px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                              <p style="margin: 0 0; mso-line-height-alt: 32px;">Hola ${req.body.fullname}
                                              <br />
                                              Tu correo para ingresar a la app es:
                                              <br />
                                              ${req.body.email},
                                              <br />
                                              Puedes ingresar dando click en:
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left" valign="middle" class="button-container" style="font-size:0px;padding:10px 20px 10px 0px;word-break:break-word;">
                                          <div>
      
                                            <!--[if mso]><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr><td align="left"><a:roundrect xmlns:a="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href=
      "https://toknow.online/" fillcolor="#1A73E8" arcsize="8%" style="v-text-anchor:middle;width:105.75pt;height:36pt;" stroke="f" 
      ><w:anchorlock/><a:textbox inset="25px,0,25px,0"><span style="color:#ffffff; font-family:sans-serif, Arial; font-size:16px"><![endif]-->
                                            <a href="https://toknow.online/" style="display: inline-block; background: #1A73E8; color: #FFFFFF; font-family: 'Google Sans', sans-serif; font-size: 16px; font-weight: bold; line-height: 1.5; margin: 0; text-align: left; text-decoration: none; text-transform: none; padding: 12px 25px 12px 25px; mso-padding-alt: 0px; border-radius: 4px; mso-border-alt: none; box-sizing: border-box; mso-line-height-alt: 48px;" target="_blank" width="141">Entrar a la app</a>
      
                                            <!--[if mso]></span></a:textbox></a:roundrect></td></tr></table><![endif]-->
      
                                            <!--[if !mso 9]>
      
      <!-->
                                            <div class="mktEditable" id="button-plain-text-hblbs96p6" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                              Entrar a la app [[https://toknow.online]]
                                            </div>
      
                                            <!--<![endif]-->
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td><td style="vertical-align:top;width:300px;" ><![endif]-->
                                <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-desktop">
                                            <tbody>
                                              <tr>
                                                <td style="width:300px;" class="mj-full-width-desktop">
                                                  <div class="mktoImg" id="kimage-v8qjlv0hf" mktolockimgsize="true" mktolockimgstyle="false">
                                                    <a href="https://mail.thinkwithgoogle.com/dc/sw2Jv2lliV95Sp9FKmB-yk9n2CCc1w7JrXRK_U_6bTcUC9NIKTmRsmd_GSXwMtaVk8_Xbt8XssvgLUVjQtd_80UoONb6YSpHMfYNcOKbGwGQvd3iiCmglGKE_L36vvg8RzaDyqYm2fSagn2_cWszHNTYuBUMgVphx03hUOaPTXys4YyGplar5j_UEeOGVVT4tT-Hh_7lictkrzt0tOsFk0-VItjrUMiiFpjM0TgchKb1mryPeTJwIAYEoMnBRQqb/MTcyLUdPUC04MTEAAAGHtF6BZXSELDirVPJN9L-R6jbSGm9wTch5hpISrYBbeHKokdoCD8uT4LiTSwUlUiKh4_0E0Zs=" target="_blank" style="text-decoration: none; color: #1A73E8;"><img alt="A Black woman with long hair holds a giant clipboard upright as her Latino associate checks off list items with an oversized pencil." height="auto" src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/LJE3PbNsYzIDfzMWBUZToYI3mtG88KTJdCQDdOwm.gif" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300"></a>
                                                  </div>
      
                                                  <!--[if !mso 9]>
      
      <!-->
                                                  <div class="mktEditable" id="image-plain-text-j3eglapch" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                    [ A Black woman with long hair holds a giant clipboard upright as her Latino associate checks off list items with an oversized pencil. ] [[https://www.thinkwithgoogle.com/login/?utm_medium=email&amp;utm_source=d-onboarding&amp;utm_team=twg-us&amp;utm_campaign=TwG-US-ONB-2022-Q2-00-Welcome-Campaign&amp;utm_content=img-banner]]
                                                  </div>
      
                                                  <!--<![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
      
              <!--[if !mso]>
      
      <!-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F8F9FA;width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="hide-on-desktop-outlook block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="background:#F8F9FA;background-color:#F8F9FA;Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F8F9FA;width:100%;">
                          <tbody>
                            <tr>
      
                              <!--[if !mso]>
      
      <!-->
                              <td style="display: block; font-size: 0px; padding: 15px 20px 15px 20px; text-align: center; vertical-align: top;" class="hide-on-desktop block-grid" align="center" valign="top">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="text-container" style="font-size:0px;padding:0px 0px 10px 0px;word-break:break-word;">
                                          <div class="mktEditable" id="ktext-ajmvfo0j8" style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:center;color:#202124;">
                                            <div style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:center;color:#202124;">
                                              <p style="margin: 0 0; mso-line-height-alt: 34px;">Bienvenid@ a la &nbsp;<br> comunidad toKnow</p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" class="text-container" style="font-size:0px;padding:10px 0px 10px 0px;word-break:break-word;">
                                          <div class="mktEditable" id="ktext-tag995g7k" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:center;color:#5F6368;">
                                            <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:center;color:#5F6368;">
                                              <p style="margin: 0 0; mso-line-height-alt: 28px;">Hola ${req.body.fullname} 
                                              <br />
                                              Tu correo para ingresar a la app es:
                                              <br />
                                              correo: ${req.body.email},
                                              <br />
                                              Puedes ingresar dando click en:
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="middle" class="button-container" style="font-size:0px;padding:10px 0px 10px 0px;word-break:break-word;">
                                          <div>
      
                                            <!--[if mso]><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr><td align="center"><a:roundrect xmlns:a="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href=
      "https://mail.thinkwithgoogle.com/dc/sw2Jv2lliV95Sp9FKmB-yk9n2CCc1w7JrXRK_U_6bTcUC9NIKTmRsmd_GSXwMtaVk8_Xbt8XssvgLUVjQtd_80UoONb6YSpHMfYNcOKbGwGQvd3iiCmglGKE_L36vvg8RzaDyqYm2fSagn2_cWszHNTYuBUMgVphx03hUOaPTXys4YyGplar5j_UEeOGVVT4tT-Hh_7lictkrzt0tOsFk0-VItjrUMiiFpjM0TgchKYfw1RNv1u2DpzU8Vavfe8W/MTcyLUdPUC04MTEAAAGHtF6BZXSELDirVPJN9L-R6jbSGm9wTch5hpISrYBbeHKokdoCD8uT4LiTSwUlUiKh4_0E0Zs=" fillcolor="#1A73E8" arcsize="8%" style="v-text-anchor:middle;width:105.75pt;height:36pt;" stroke="f" 
      ><w:anchorlock/><a:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:sans-serif, Arial; font-size:16px"><![endif]-->
                                            <a href="https://toknow.online" style="display: inline-block; background: #1A73E8; color: #FFFFFF; font-family: 'Google Sans', sans-serif; font-size: 16px; font-weight: bold; line-height: 1.5; margin: 0; text-align: center; text-decoration: none; text-transform: none; padding: 12px 25px 12px 25px; mso-padding-alt: 0px; border-radius: 4px; mso-border-alt: none; box-sizing: border-box; mso-line-height-alt: 48px;" target="_blank" width="141">Ir a la app</a>
      
                                            <!--[if mso]></center></a:textbox></a:roundrect></td></tr></table><![endif]-->
      
                                            <!--[if !mso 9]>
      
      <!-->
                                            <div class="mktEditable" id="button-plain-text-j6hz37oxe" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                              Entrar a la app [[https://toknow.online]]
                                            </div>
      
                                            <!--<![endif]-->
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                            <tbody>
                                              <tr>
                                                <td style="width:400px;">
                                                  <div class="mktoImg" id="kimage-wy5zukpxy" mktolockimgsize="true" mktolockimgstyle="false">
                                                    <a href="https://toknow.online/" target="_blank" style="text-decoration: none; color: #1A73E8;"><img alt="A Black woman with long hair holds a giant clipboard upright as her Latino associate checks off list items with an oversized pencil. Behind them, a white woman interacts with her mobile phone." height="auto" src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/SAgUdtplowzhF5vZKyOlLN5wbdCGsIPu39i5Pste.gif" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="400"></a>
                                                  </div>
      
                                                  <!--[if !mso 9]>
      
      <!-->
                                                  <div class="mktEditable" id="image-plain-text-8rm8621sq" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                    [ A Black woman with long hair holds a giant clipboard upright as her Latino associate checks off list items with an oversized pencil. Behind them, a white woman interacts with her mobile phone. ] [[https://toknow.online/]]
                                                  </div>
      
                                                  <!--<![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
      
                              <!--<![endif]-->
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
      
              <!--<![endif]-->
            </div>
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
              <tbody>
                <tr>
                  <td align="center">
      
                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="hide-on-mobile-outlook block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    <div style="Margin:0px auto;max-width:640px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                          <tr>
                            <td style="display: none; font-size: 0px; padding: 40px 20px 20px 20px; text-align: center; vertical-align: top;" class="hide-on-mobile block-grid" align="center" valign="top">
      
                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                        <div class="mktEditable" id="ktext-j9b7zvpws" style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:left;color:#202124;">
                                          <div style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:left;color:#202124;">
                                            <p style="margin: 0 0; mso-line-height-alt: 34px;">Qué vas a encontrar:</p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
      
                              <!--[if mso | IE]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
      
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
      
            <!--[if !mso]>
      
      <!-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
              <tbody>
                <tr>
                  <td align="center">
      
                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="hide-on-desktop-outlook block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    <div style="Margin:0px auto;max-width:640px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                          <tr>
      
                            <!--[if !mso]>
      
      <!-->
                            <td style="display: block; font-size: 0px; padding: 25px 20px 15px 20px; text-align: center; vertical-align: top;" class="hide-on-desktop block-grid" align="center" valign="top">
      
                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="center" class="text-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                        <div class="mktEditable" id="ktext-g0vstkm5s" style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:center;color:#202124;">
                                          <div style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:center;color:#202124;">
                                            <p style="margin: 0 0; mso-line-height-alt: 34px;">Qué vas a encontrar:</p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
      
                              <!--[if mso | IE]></td></tr></table><![endif]-->
                            </td>
      
                            <!--<![endif]-->
                          </tr>
                        </tbody>
                      </table>
                    </div>
      
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
      
            <!--<![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
              <tbody>
                <tr>
                  <td align="center">
      
                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    <div style="Margin:0px auto;max-width:640px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                          <tr>
                            <td style="font-size:0px;padding:0px;text-align:center;vertical-align:top;" class="block-grid">
      
                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;" ><![endif]-->
                              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 20px 10px 20px;word-break:break-word;">
      
                                        <!--[if !mso]>
      
      <!-- -->
                                        <p style="border-top: solid 1px #AAAAAA; font-size: 1px; margin: 0px auto; width: 100%; text-align: center;"></p>
      
                                        <!--<![endif]-->
      
                                        <!--Divider-->
      
                                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #AAAAAA;font-size:1px;margin:0px auto;width:600px;text-align:center;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]-->
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
      
                              <!--[if mso | IE]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
      
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="module module-621fbd115c924">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:10px 20px 10px 20px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;vertical-align:top;">
      
                                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:132px;" ><![endif]-->
                                  <div class="mj-column-per-22 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:22%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0 0 0px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="width:105px;">
                                                            <div class="mktoImg" id="kimage-8n6ovpi1j" mktolockimgsize="true" mktolockimgstyle="false">
                                                              <img alt="A medley of geometric shapes floats around a line drawing of a person’s profile, signifying insights, ideas, and inspiration." height="auto" src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/kq3Y81ZqgNxb2QFUHn5triXTO9LUf9p1X4tH1X9v.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="105">
                                                            </div>
      
                                                            <!--[if !mso 9]>
      
      <!-->
                                                            <div class="mktEditable" id="image-plain-text-dbia8ojwp" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                              [ A medley of geometric shapes floats around a line drawing of a person’s profile, signifying insights, ideas, and inspiration. ]
                                                            </div>
      
                                                            <!--<![endif]-->
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
      
                                  <!--[if mso | IE]></td><td style="vertical-align:top;width:468px;" ><![endif]-->
                                  <div class="mj-column-per-78 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:78%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0px 0 0;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 5px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-0a7b16ep9" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 24px;"><strong>Noticias escolares</strong></p>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 10px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-2h8ns6sfi" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 28px;">Comunicados oficiales y las últimas noticias</p>
                                                      </div>
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
      
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:0px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" style="font-size:0px;padding:5px 20px 5px 20px;word-break:break-word;">
      
                                          <!--[if !mso]>
      
      <!-- -->
                                          <p style="border-top: solid 1px #AAAAAA; font-size: 1px; margin: 0px auto; width: 100%; text-align: center;"></p>
      
                                          <!--<![endif]-->
      
                                          <!--Divider-->
      
                                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #AAAAAA;font-size:1px;margin:0px auto;width:600px;text-align:center;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="module module-621fd243774f5">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:10px 20px 10px 20px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;vertical-align:top;">
      
                                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:132px;" ><![endif]-->
                                  <div class="mj-column-per-22 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:22%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0 0 0px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="width:105px;">
                                                            <div class="mktoImg" id="kimage-syo0wecxq" mktolockimgsize="true" mktolockimgstyle="false">
                                                              <img alt="A settings gear wheel and a light bulb overlap each other." height="auto" src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/J2Cxob8LwTTuEFslqSdiaodtblLikR90hB6jV2Aa.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="105">
                                                            </div>
      
                                                            <!--[if !mso 9]>
      
      <!-->
                                                            <div class="mktEditable" id="image-plain-text-vujg35dml" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                              [ A settings gear wheel and a light bulb overlap each other. ]
                                                            </div>
      
                                                            <!--<![endif]-->
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
      
                                  <!--[if mso | IE]></td><td style="vertical-align:top;width:468px;" ><![endif]-->
                                  <div class="mj-column-per-78 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:78%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0px 0 0;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 5px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-f53q2w215" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 24px;">Información útil de los próximos eventos</p>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 10px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-xuwqr1tj6" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 28px;">Aquí encontrarás información útil sobre actividades y eventos cercanos, de la escuela y del grupo</p>
                                                      </div>
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
      
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:0px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" style="font-size:0px;padding:5px 20px 5px 20px;word-break:break-word;">
      
                                          <!--[if !mso]>
      
      <!-- -->
                                          <p style="border-top: solid 1px #AAAAAA; font-size: 1px; margin: 0px auto; width: 100%; text-align: center;"></p>
      
                                          <!--<![endif]-->
      
                                          <!--Divider-->
      
                                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #AAAAAA;font-size:1px;margin:0px auto;width:600px;text-align:center;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="module module-621fd2b88613b">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:10px 20px 10px 20px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;vertical-align:top;">
      
                                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:132px;" ><![endif]-->
                                  <div class="mj-column-per-22 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:22%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0 0 0px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="width:105px;">
                                                            <div class="mktoImg" id="kimage-javauav6d" mktolockimgsize="true" mktolockimgstyle="false">
                                                              <img alt="A message is accompanied by a large colored circle featuring an exclamation point." height="auto" src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/DwDUgUmFGaoGq2sR4TNmmgkGOsnt8pbslQDXwAWt.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="105">
                                                            </div>
      
                                                            <!--[if !mso 9]>
      
      <!-->
                                                            <div class="mktEditable" id="image-plain-text-eacg972lk" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                              [ A message is accompanied by a large colored circle featuring an exclamation point. ]
                                                            </div>
      
                                                            <!--<![endif]-->
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
      
                                  <!--[if mso | IE]></td><td style="vertical-align:top;width:468px;" ><![endif]-->
                                  <div class="mj-column-per-78 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:78%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0px 0 0;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 5px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-mfricbh6n" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 24px;">Canal de dudas con profesores de grupo</p>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 10px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-b5zttuvr7" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 28px;">Canal de comunicación directo con los profesores de grupo para atender dudas específicas de tareas, examenes y calificaciones</p>
                                                      </div>
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
      
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:0px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" style="font-size:0px;padding:5px 20px 5px 20px;word-break:break-word;">
      
                                          <!--[if !mso]>
      
      <!-- -->
                                          <p style="border-top: solid 1px #AAAAAA; font-size: 1px; margin: 0px auto; width: 100%; text-align: center;"></p>
      
                                          <!--<![endif]-->
      
                                          <!--Divider-->
      
                                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #AAAAAA;font-size:1px;margin:0px auto;width:600px;text-align:center;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="module module-621fd331b8efc">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:10px 20px 10px 20px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;vertical-align:top;">
      
                                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:132px;" ><![endif]-->
                                  <div class="mj-column-per-22 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:22%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0 0 0px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="width:105px;">
                                                            <div class="mktoImg" id="kimage-vwpzkl8me" mktolockimgsize="true" mktolockimgstyle="false">
                                                              <img alt="A large check mark overlays a description of a helpful tip or best practice." height="auto" src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/J9O4pHHPSPxF0JIP5259Gp3yg5ExiJyPqznz6gH0.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="105">
                                                            </div>
      
                                                            <!--[if !mso 9]>
      
      <!-->
                                                            <div class="mktEditable" id="image-plain-text-4upu3x7um" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                              [ A large check mark overlays a description of a helpful tip or best practice. ]
                                                            </div>
      
                                                            <!--<![endif]-->
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
      
                                  <!--[if mso | IE]></td><td style="vertical-align:top;width:468px;" ><![endif]-->
                                  <div class="mj-column-per-78 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:78%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0px 0 0;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 5px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-wp279az6d" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 24px;">Desarrollo de habilidades digitales&nbsp;</p>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 10px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-0uixk8aby" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 28px;">Tips para mejorar los resultados de tus hijos en las herramientas tecnológicas</p>
                                                      </div>
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
      
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:0px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" style="font-size:0px;padding:5px 20px 5px 20px;word-break:break-word;">
      
                                          <!--[if !mso]>
      
      <!-- -->
                                          <p style="border-top: solid 1px #AAAAAA; font-size: 1px; margin: 0px auto; width: 100%; text-align: center;"></p>
      
                                          <!--<![endif]-->
      
                                          <!--Divider-->
      
                                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #AAAAAA;font-size:1px;margin:0px auto;width:600px;text-align:center;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="module module-621fd4d34d777">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:10px 20px 10px 20px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;vertical-align:top;">
      
                                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:132px;" ><![endif]-->
                                  <div class="mj-column-per-22 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:22%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0 0 0px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="center" class="img-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                      <tbody>
                                                        <tr>
                                                          <td style="width:105px;">
                                                            <div class="mktoImg" id="kimage-nfi57e6l8" mktolockimgsize="true" mktolockimgstyle="false">
                                                              <img alt="A medley of geometric shapes floats around a dialogue bubble, signifying insights, ideas, and inspiration." height="auto" src="https://lp.thinkwithgoogle.com/rs/googlemst2/images/yXGoyfOW2H64HYIXY5bSTITB7fuJ8yTok4Z9rnfp.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="105">
                                                            </div>
      
                                                            <!--[if !mso 9]>
      
      <!-->
                                                            <div class="mktEditable" id="image-plain-text-t07qrot0e" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                              [ A medley of geometric shapes floats around a dialogue bubble, signifying insights, ideas, and inspiration. ]
                                                            </div>
      
                                                            <!--<![endif]-->
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
      
                                  <!--[if mso | IE]></td><td style="vertical-align:top;width:468px;" ><![endif]-->
                                  <div class="mj-column-per-78 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:78%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="border-radius:0px;vertical-align:top;padding:0 0px 0 0;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 5px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-db8c3iuku" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#202124;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 24px;">Vinculación</p>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 10px 10px;word-break:break-word;">
                                                    <div class="mktEditable" id="ktext-obe4boo1t" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                      <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:16px;letter-spacing:none;line-height:1.75;text-align:left;color:#5F6368;">
                                                        <p style="margin: 0 0; mso-line-height-alt: 28px;">La vinculación con la comunidad escolar nunca había sido tan importante</p>
                                                      </div>
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
      
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:0px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0px;vertical-align:top;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" style="font-size:0px;padding:5px 20px 5px 20px;word-break:break-word;">
      
                                          <!--[if !mso]>
      
      <!-- -->
                                          <p style="border-top: solid 1px #AAAAAA; font-size: 1px; margin: 0px auto; width: 100%; text-align: center;"></p>
      
                                          <!--<![endif]-->
      
                                          <!--Divider-->
      
                                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #AAAAAA;font-size:1px;margin:0px auto;width:600px;text-align:center;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent;width:100%;" class="section">
              <tbody>
                <tr>
                  <td align="center">
      
                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="hide-on-mobile-outlook block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    <div style="background:transparent;background-color:transparent;Margin:0px auto;max-width:640px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent;width:100%;">
                        <tbody>
                          <tr>
                            <td style="display: none; font-size: 0px; padding: 40px 20px 40px 20px; text-align: center; vertical-align: top;" class="hide-on-mobile block-grid" align="center" valign="top">
      
                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="background-color:transparent;border-radius:0px;vertical-align:top;padding:5px 0px 5px 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                          <tbody>
                                            <tr>
                                              <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                <div class="mktEditable" id="ktext-yaq521hsi" style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:left;color:#202124;">
                                                  <div style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:left;color:#202124;">
                                                    <p style="margin: 0 0; mso-line-height-alt: 34px;">Disfruta de los beneficios que toKnow te ofrece!!</p>
                                                  </div>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="left" valign="middle" class="button-container" style="font-size:0px;padding:25px 0px 10px 0px;word-break:break-word;">
                                                <div>
      
                                                  <!--[if mso]><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr><td align="left"><a:roundrect xmlns:a="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href=
      "https://mail.thinkwithgoogle.com/dc/sw2Jv2lliV95Sp9FKmB-yk9n2CCc1w7JrXRK_U_6bTcvd-GC1xCHffLSkRA9B3DqspmDnlOvj5Cdpj04iJ4KwjlWxnKlxGwEM4ozKZ6vrXOYuLpCRnvmErV6hkD-sLXqtQ0VwnFHYLn9AaYRupPHAIrZCyjxyRg5X0G6m0OVhbUoNwSjy8RpIyeVQvoukjakeHvY7fPOpOGxwh1L9eM5qwaw1eWpVKqUVChfzdsyLcPJTuhIaObZPk8oPJEtRpVT/MTcyLUdPUC04MTEAAAGHtF6BZXSELDirVPJN9L-R6jbSGm9wTch5hpISrYBbeHKokdoCD8uT4LiTSwUlUiKh4_0E0Zs=" fillcolor="#1A73E8" arcsize="8%" style="v-text-anchor:middle;width:103.5pt;height:36pt;" stroke="f" 
      ><w:anchorlock/><a:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:sans-serif, Arial; font-size:16px"><![endif]-->
                                                  <a href="https://toknow.online/" style="display: inline-block; background: #1A73E8; color: #FFFFFF; font-family: 'Google Sans', sans-serif; font-size: 16px; font-weight: bold; line-height: 1.5; margin: 0; text-align: center; text-decoration: none; text-transform: none; padding: 12px 25px 12px 25px; mso-padding-alt: 0px; border-radius: 4px; mso-border-alt: none; box-sizing: border-box; mso-line-height-alt: 48px;" target="_blank" width="138">Explorar app</a>
      
                                                  <!--[if mso]></center></a:textbox></a:roundrect></td></tr></table><![endif]-->
      
                                                  <!--[if !mso 9]>
      
      <!-->
                                                  <div class="mktEditable" id="button-plain-text-7ikrlv73m" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                    Entrar a la app [[https://toknow.online]]
                                                  </div>
      
                                                  <!--<![endif]-->
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
      
                              <!--[if mso | IE]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
      
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
      
            <!--[if !mso]>
      
      <!-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent;width:100%;" class="section">
              <tbody>
                <tr>
                  <td align="center">
      
                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="hide-on-desktop-outlook block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                    <div style="background:transparent;background-color:transparent;Margin:0px auto;max-width:640px;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:transparent;width:100%;">
                        <tbody>
                          <tr>
      
                            <!--[if !mso]>
      
      <!-->
                            <td style="display: block; font-size: 0px; padding: 40px 20px 40px 20px; text-align: center; vertical-align: top;" class="hide-on-desktop block-grid" align="center" valign="top">
      
                              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                  <tbody>
                                    <tr>
                                      <td style="background-color:transparent;border-radius:0px;vertical-align:top;padding:5px 0px 5px 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                          <tbody>
                                            <tr>
                                              <td align="center" class="text-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                <div class="mktEditable" id="ktext-8uf0z0fxo" style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:center;color:#202124;">
                                                  <div style="font-family:'Google Sans', sans-serif;font-size:28px;letter-spacing:none;line-height:1.2;text-align:center;color:#202124;">
                                                    <p style="margin: 0 0; mso-line-height-alt: 34px;">Descubre los beneficios que toKnow te ofrece</p>
                                                  </div>
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td align="center" valign="middle" class="button-container" style="font-size:0px;padding:25px 0px 10px 0px;word-break:break-word;">
                                                <div>
      
                                                  <!--[if mso]><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr><td align="center"><a:roundrect xmlns:a="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href=
      "https://toknow.online/" fillcolor="#1A73E8" arcsize="8%" style="v-text-anchor:middle;width:103.5pt;height:36pt;" stroke="f" 
      ><w:anchorlock/><a:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:sans-serif, Arial; font-size:16px"><![endif]-->
                                                  <a href="https://toknow.online/" style="display: inline-block; background: #1A73E8; color: #FFFFFF; font-family: 'Google Sans', sans-serif; font-size: 16px; font-weight: bold; line-height: 1.5; margin: 0; text-align: center; text-decoration: none; text-transform: none; padding: 12px 25px 12px 25px; mso-padding-alt: 0px; border-radius: 4px; mso-border-alt: none; box-sizing: border-box; mso-line-height-alt: 48px;" target="_blank" width="138">Explorar app</a>
      
                                                  <!--[if mso]></center></a:textbox></a:roundrect></td></tr></table><![endif]-->
      
                                                  <!--[if !mso 9]>
      
      <!-->
                                                  <div class="mktEditable" id="button-plain-text-add6a89hh" style="mso-hide:all; visibility:hidden; opacity:0; color:transparent; mso-line-height-rule:exactly; line-height:0; font-size:0px; overflow:hidden; border-width:0; display:none !important;">
                                                    Explorar app [[https://toknow.online]]
                                                  </div>
      
                                                  <!--<![endif]-->
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
      
                              <!--[if mso | IE]></td></tr></table><![endif]-->
                            </td>
      
                            <!--<![endif]-->
                          </tr>
                        </tbody>
                      </table>
                    </div>
      
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
      
            <!--<![endif]-->
            <div class="module module-621cdf3722246">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F1F3F4;width:100%;" class="section">
                <tbody>
                  <tr>
                    <td align="center">
      
                      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="block-grid-outlook" style="width:640px;" width="640" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="background:#F1F3F4;background-color:#F1F3F4;Margin:0px auto;max-width:640px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F1F3F4;width:100%;">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;padding:35px 20px 65px 20px;text-align:center;vertical-align:top;" class="block-grid">
      
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="background-color:transparent;border-radius:0px;vertical-align:top;padding:5px 0px 5px 0px;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                            <tbody>
                                              <tr>
                                                <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                  <div class="mktEditable" id="ktext-0q0hjyo5h" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:12px;letter-spacing:none;line-height:1.5;text-align:left;color:#5F6368;">
                                                    <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:12px;letter-spacing:none;line-height:1.5;text-align:left;color:#5F6368;">
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 0px 0px;word-break:break-word;">
                                                  <div class="mktEditable" id="ktext-074re7g16" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:12px;letter-spacing:none;line-height:1.5;text-align:left;color:#5F6368;">
                                                    <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:12px;letter-spacing:none;line-height:1.5;text-align:left;color:#5F6368;">
                                                      
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 10px 0px;word-break:break-word;">
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" style="font-size:0px;padding:15px 0px 15px 0px;word-break:break-word;">
      
                                                  <!--[if !mso]>
      
      <!-- -->
                                                  <p style="border-top: solid 1px #AAAAAA; font-size: 1px; margin: 0px auto; width: 100%; text-align: center;"></p>
      
                                                  <!--<![endif]-->
      
                                                  <!--Divider-->
      
                                                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #AAAAAA;font-size:1px;margin:0px auto;width:600px;text-align:center;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]-->
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="left" class="text-container" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                                                  <div class="mktEditable" id="ktext-os5k4013b" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#5F6368;">
                                                    <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;font-weight:bold;letter-spacing:none;line-height:1.5;text-align:left;color:#5F6368;">
                                                      <p style="margin: 0 0; mso-line-height-alt: 21px;"><strong><span style="font-size: 14px;">Derechos reservados</span></strong></p>
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="left" class="text-container" style="font-size:0px;padding:15px 0px 0px 0px;word-break:break-word;">
                                                  <div class="mktEditable" id="ktext-d0233zj5j" style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:none;line-height:1.3;text-align:left;color:#5F6368;">
                                                    <div style="font-family:Roboto, Helvetica, Arial, sans-serif;font-size:14px;letter-spacing:none;line-height:1.3;text-align:left;color:#5F6368;">
                                                    </div>
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
      
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
      
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          &nbsp;
        </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;