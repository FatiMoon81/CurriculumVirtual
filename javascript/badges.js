class BootstrapBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #a64bfc;">
          <img src="../img/bootstrap_logo.png" alt="">  
          <span>Bootstrap</span> 
        </span>
    `;
  }
}

customElements.define('badge-bs', BootstrapBadge);

class CSharpBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #7646be;">
            <img src="../img/CSharpLogo.png" alt="">
            C#
        </span>
    `;
  }
}

customElements.define('badge-csharp', CSharpBadge);

class CSSBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #5892d4;">
            <img src="../img/CSS_Logo.png" alt="">
            CSS
        </span>
    `;
  }
}

customElements.define('badge-css', CSSBadge);

class ExcelBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #1cae2b;">
            <img src="../img/Excel_Logo.png" alt="">
            Excel
        </span>
    `;
  }
}

customElements.define('badge-excel', ExcelBadge);

class GitHubBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #585757;">
            <img src="../img/Github_Logo.png" alt="">
            GitHub
        </span>
    `;
  }
}

customElements.define('badge-github', GitHubBadge);

class HTMLBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #e97b60;">
            <img src="../img/HTML_Logo.png" alt="">
            HTML
        </span>
    `;
  }
}

customElements.define('badge-html', HTMLBadge);

class JavaBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #7b9efd;">
            <img src="../img/JavaLogo.png" alt="">
            Java
        </span>
    `;
  }
}

customElements.define('badge-java', JavaBadge);

class JSBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
      </style>
        <span class="badge rounded-pill" style="background-color: #fad646;">
            <img src="../img/JS_Logo.png" alt="">
            JavaScript
        </span>
    `;
  }
}

customElements.define('badge-js', JSBadge);

class LeafletBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #a2c855;">
            <img src="../img/Leaflet_Logo.png" alt="">
            Leaflet
        </span>
    `;
  }
}

customElements.define('badge-leaflet', LeafletBadge);

class MySQLBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #ffb43c;">
            <img src="../img/MySQL_Logo.png" alt="">
            MySQL
        </span>
    `;
  }
}

customElements.define('badge-mysql', MySQLBadge);

class NetBeansBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #e65782;">
            <img src="../img/NetBeans_Logo.png" alt="">
            NetBeans
        </span>
    `;
  }
}

customElements.define('badge-netbeans', NetBeansBadge);

class PHPBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #acb7d4;">
            <img src="../img/php_Logo.png" alt="">
            php
        </span>
    `;
  }
}

customElements.define('badge-php', PHPBadge);

class PgAdminBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #00c5db;">
            <img src="../img/pgAdmin4Logo.png" alt="">
            pgAdmin4
        </span>
    `;
  }
}

customElements.define('badge-pgadmin', PgAdminBadge);

class PostgresSQLBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #336791;">
            <img src="../img/postgresql_Logo.png" alt="">
            PostgreSQL
        </span>
    `;
  }
}

customElements.define('badge-postgres', PostgresSQLBadge);

class VSBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #9b5fdf;">
            <img src="../img/VSLogo.png" alt="">
            Visual Studio
        </span>
    `;
  }
}

customElements.define('badge-vs', VSBadge);

class VSCodeBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #5fbdfd;">
            <img src="../img/VSCode_Logo.png" alt="">
            VS Code
        </span>
    `;
  }
}

customElements.define('badge-vscode', VSCodeBadge);

class XAMPPBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css");
        </style>
        <span class="badge rounded-pill" style="background-color: #fb7922;">
            <img src="../img/xampp_logo.png" alt="">
            XAMPP
        </span>
    `;
  }
}

customElements.define('badge-xampp', XAMPPBadge);


