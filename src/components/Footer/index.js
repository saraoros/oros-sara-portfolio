import React from "react";

function Footer(props) {
  return (
    <div class="footer-basic" id="contact-me">
      <footer>
        <div class="column"></div>
        <div class="social">
          <a
            href="https://www.linkedin.com/in/sara-oros1018/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icon ion-social-linkedin"></i>
          </a>

          <a
            href="https://github.com/saraoros"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icon ion-social-github"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li>
            <a href="mailto:saragochez13@gmail.com"> Email Me Here</a>
          </li>
        </ul>
        <p class="copyright">© 2022 Sara Oros</p>
      </footer>
    </div>
  );
}

export default Footer;
