import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body, html {
    margin: 0;
    padding: 0;
  }
  @font-face {
  font-family: "AUTHENTICSans60";
  font-weight: 60;
  font-display: swap;
  src: local("AUTHENTICSans-60"), url("AUTHENTICSans-60.woff") format("woff");
}

@font-face {
  font-family: "AUTHENTICSans90";
  font-weight: 90;
  font-display: swap;
  src: local("AUTHENTICSans-90"), url("AUTHENTICSans-90.woff") format("woff");
}

@font-face {
  font-family: "AUTHENTICSans130";
  font-weight: 130;
  font-display: swap;
  src: local("AUTHENTICSans-130"), url("AUTHENTICSans-130.woff") format("woff");
}

@font-face {
  font-family: "AUTHENTICSans150";
  font-weight: 150;
  font-display: swap;
  src: local("AUTHENTICSans-150"), url("AUTHENTICSans-150.woff") format("woff");
}

@font-face {
  font-family: "AUTHENTICSans Condensed60";
  font-weight: 60;
  font-display: swap;
  src: local("AUTHENTICSans-Condensed-60"),
    url("AUTHENTICSans-Condensed-60.woff") format("woff");
}

@font-face {
  font-family: "AUTHENTICSans Condensed90";
  font-weight: 90;
  font-display: swap;
  src: local("AUTHENTICSans-Condensed-90"),
    url("AUTHENTICSans-Condensed-90.woff") format("woff");
}

@font-face {
  font-family: "AUTHENTICSans Condensed130";
  font-weight: 130;
  font-display: swap;
  src: local("AUTHENTICSans-Condensed-130"),
    url("AUTHENTICSans-Condensed-130.woff") format("woff");
}

@font-face {
  font-family: "AUTHENTICSans Condensed150";
  font-weight: 150;
  font-display: swap;
  src: local("AUTHENTICSans-Condensed-150"),
    url("AUTHENTICSans-Condensed-150.woff") format("woff");
}

`;
