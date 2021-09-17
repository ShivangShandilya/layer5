"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8169],{52455:function(e,n,i){i.d(n,{Z:function(){return c}});var t=i(67294),o=i(11521),r=i(25444),a=i(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.secondaryColor})),s=i(61424),c=function(){var e=(0,t.useState)(!1),n=e[0],i=e[1];return t.createElement(a,null,t.createElement("div",{className:"go-back"},t.createElement(r.Link,{to:"/community/handbook"},t.createElement(o.PSe,null),t.createElement("h4",null,"Table of Content")),t.createElement("div",{className:"toc-toggle-btn"},n?t.createElement(s.QAE,{className:"toc-menu-icon",onClick:function(){i(!n)}}):t.createElement(s.Ejh,{className:"toc-menu-icon",onClick:function(){i(!n)}}))),t.createElement("div",{className:"toc-list"},t.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/about",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"About")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/community",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Community")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/contribution",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Contribution")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/repository-overview",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Repository Overview")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/projects",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Projects")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/mentorship-programs",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Mentorship Programs")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/learn-layer5",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Learn Layer5")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/connect-with-us",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Connect with us")),t.createElement("li",null,t.createElement(r.Link,{to:"/community/handbook/code-of-conduct",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Code of Conduct")))))}},96414:function(e,n,i){i.r(n),i.d(n,{default:function(){return j}});var t=i(67294),o=i(70456),r=i(20092),a=i(36179),s=i(57067),c=i(21101),l=i(22626),m=i(52455),u=i(31995),d=i(86519),A=i(47488),g=i(65262),h=i(98128),p=[{id:1,name:"Goggle Season of Docs",description:"Google Season of Docs provides support for open source projects to improve their documentation and allows professional technical writers to gain experience in open source. This is to raise awareness of open source, docs, and technical writing. Google season of docs started in 2019. Each year, layer5 submits a new project idea for technical writers to contribute to for a particular period. Also, stipends are awarded to the contributors.",buttonLink:"/programs/gsod",imageLink:g.Z,imagePosition:"second"},{id:2,name:"Google Summer of Codes",description:"Google Summer of Codes is a global program focused on bringing more student developers into open source software development. Students work with an open-source organization on a 10-week programming project during their break from school. Every Summer, Layer5 submits a new project idea for student developers to contribute to for a particular period. Also, stipends are awarded at the end of the program to the contributors.",buttonLink:"/programs/gsoc",imageLink:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMTEiIHg9IjAiIHk9IjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE5MiAxOTIiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE5MiAxOTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MCwuc3Qxe29wYWNpdHk6LjgxO2ZpbGw6I2ZjYmEwM30uc3Qxe29wYWNpdHk6LjkxfTwvc3R5bGU+PGc+PHBhdGggZD0iTTE1OC4xLDMzLjdoLTM2LjRMOTYsOEw3MC4zLDMzLjdIMzMuOXYzNi40TDguMiw5NS45bDI1LjcsMjUuN1YxNThoMzYuNEw5NiwxODMuN2wyNS43LTI1LjdoMzYuNHYtMzYuNCBsMjUuNy0yNS43bC0yNS43LTI1LjdWMzMuN3ogTTE1OC43LDk1LjljMCwzNC42LTI4LjEsNjIuNy02Mi43LDYyLjdzLTYyLjctMjguMS02Mi43LTYyLjdTNjEuNCwzMy4yLDk2LDMzLjIgUzE1OC43LDYxLjMsMTU4LjcsOTUuOXoiIGNsYXNzPSJzdDAiLz48cGF0aCBkPSJNOTYsNDEuMmMtMzAuMiwwLTU0LjcsMjQuNS01NC43LDU0LjdzMjQuNSw1NC43LDU0LjcsNTQuN3M1NC43LTI0LjUsNTQuNy01NC43UzEyNi4yLDQxLjIsOTYsNDEuMnogTTc5LjksNzUuNnY5TDY1LjQsOTUuOWwxNC41LDExLjN2OWwtMS0wLjdMNTcuNCw5OC43TDU2LDk3LjZ2LTMuNGwxLjQtMS4xbDIxLjUtMTYuN0w3OS45LDc1LjZMNzkuOSw3NS42eiBNMTA1LjcsNzAuNEw5My44LDEyMyBsLTAuMSwwLjRoLTcuNGwwLjQtMmwxMS45LTUyLjVsMC4xLTAuNGg3LjRMMTA1LjcsNzAuNHogTTEzNiw5Ny42bC0xLjQsMS4xTDExMywxMTUuNGwtMSwwLjd2LTlsMTQuNS0xMS4zTDExMiw4NC41di05bDAsMGwxLDAuNyBMMTM0LjUsOTNsMS40LDEuMXYzLjVIMTM2eiIgY2xhc3M9InN0MSIvPjwvZz48L3N2Zz4=",imagePosition:"first"},{id:3,name:"Hacktoberfest",description:"Hacktoberfest is open to everyone in the global community. Whether you’re a developer, student learning to code, event host, or a company of any size, you can help drive the growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge. Every year in October, Hacktoberfest is held. So far, Layer5 has been a participant organization with different projects and issues such as first-timers-only, help-wanted, and good-first-issues for open-source contributors. This is to help towards completing the Hacktoberfest challenge.",buttonLink:"/programs/hacktoberfest",imageLink:A.Z,imagePosition:"second"},{id:4,name:"Linux Foundation",description:"The Linux Foundation (Mentorship Programs) are designed to help developers with the necessary skills–many of whom are first-time open source contributors–experiment, learn, and contribute effectively to open source communities. Layer5, as an organization, has been participating in the Linux Foundation mentorship program since 2019. The program offers mentorships, program certification, and also stipend for the mentee.",buttonLink:"/programs/lfx",imageLink:"data:image/png;base64,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",imagePosition:"first"},{id:5,name:"MLH Fellowship Program",description:"The MLH Fellowship is a 12-week internship alternative for students interested in becoming software engineers. Instead of an internship at a single company, you'll contribute to the type of Open Source projects that every company depends on. The programs pair fun, educational curriculum with practical experience that you can put on your resume right away. It's collaborative, remote, and happens under the guidance of expert mentors. Layer5, as an organization, participates in the program by submitting a project idea for contributors to work on and also provides mentorship during the time phase given.",buttonLink:"/programs/mlh",imageLink:d.Z,imagePosition:"second"},{id:6,name:"CommunityBridge",description:"The Linux Foundation's CommunityBridge is building a healthy ecosystem around the open source software by funding projects, securing code, and connecting with talented developers. Layer5 has been participating in the  CommunityBridge's mentorship program since 2019.",buttonLink:"/programs/communitybridge",imageLink:h.Z,imagePosition:"first"},{id:7,name:"Layer5",description:"At Layer5, we take our internships seriously. Interns are expected to work hard, learn much, and be recognized for doing so. Past interns have presented their projects at KubeCon, DockerCon, and similar technical conferences. Our community of contributors is the key ingredient to the success of every one of our projects. Interns engage as part of the community. Whether interning directly with Layer5 or through one of Layer5's partner programs, your contributions will affect people you've never met as the Layer5 projects are being broadly referenced and used in organizations large and small.",buttonLink:"/careers/internships/",imageLink:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjEuNjIgMTc3LjYzIj48dGl0bGU+bGF5ZXI1LXdoaXRlLWJnPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjYxLjEyIDQxLjcyIDQyLjM2IDQxLjcyIDQyLjM2IDEzNS41IDEzMS4yNiAxMzUuNSAxMzEuMjYgMTE2Ljc1IDYxLjEyIDExNi43NSA2MS4xMiA0MS43MiIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxwb2x5Z29uIHBvaW50cz0iMTc4LjIgNDEuNzIgMTQwLjY5IDEzNS41IDE2Mi4wOCAxMzUuNSAxODcuNTggNjkuODYgMjA1Ljc1IDExNi43NSAxNzQuNTggMTE2Ljc1IDE2Ny41OCAxMzUuNSAyMzQuNDcgMTM1LjUgMTk2Ljk1IDQxLjcyIDE3OC4yIDQxLjcyIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIyNjAuOTQgNzQuNTUgMjM3LjUgNDEuNzIgMjE0LjA1IDQxLjcyIDI1MS41NiA5Ny45OSAyNTEuNTYgMTM1LjUgMjcwLjMyIDEzNS41IDI3MC4zMiA5Ny45OSAzMDcuODMgNDEuNzIgMjg0LjY4IDQxLjcyIDI2MC45NCA3NC41NSIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzE1LjkyIDU2LjQ5IDMxNS45MiA2MC40OCAzMTUuOTIgNzkuMjMgMzE1LjkyIDEwMi4xMSAzMTUuOTIgMTM1LjUgNDA0LjgyIDEzNS41IDQwNC44MiAxMTYuNzUgMzM0LjY4IDExNi43NSAzMzQuNjggMTAyLjExIDMzNC42OCA5Ny45OSAzODguNTcgOTcuOTkgMzg4LjU3IDc5LjIzIDMzNC42OCA3OS4yMyAzMzQuNjggNjAuNDggNDA0LjgyIDYwLjQ4IDQwNC44MiA0MS43MiAzMTUuOTIgNDEuNzIgMzE1LjkyIDU2LjQ5IiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBhdGggZD0iTTQzNS4yOCw1OS42aDQ4LjExVjc5LjExSDQ0MC40OEw0NDAuNjYsOTdoMTIuODdsMzQsMzguNTFoMjMuMTVMNDc2LjY4LDk3SDQ5MGExNC41NiwxNC41NiwwLDAsMCwxNC41Ny0xNC41NlY1Ni4yOUExNC41NywxNC41NywwLDAsMCw0OTAsNDEuNzJoLTczVjEzNS41aDE4Ljc2WiIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxyZWN0IGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiB4PSI1NzguOTciIHk9IjQyLjEyIiB3aWR0aD0iMzYuOTMiIGhlaWdodD0iMTcuNzkiIHN0eWxlPSJmaWxsOiMwMGIzOWYiLz48cGF0aCBpZD0iX1BhdGhfMiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik02MTkuMjYsMTAyLjA1Vjk0LjY4YzAtOC40OS03LjE0LTE1LjM3LTE2LTE1LjM3SDU0My43MlY3NC40Nkg1MjEuOXYyMWg3NS41NHY2LjU3WiIgc3R5bGU9ImZpbGw6IzAwYjM5ZiIvPjxwb2x5Z29uIGlkPSJfUGF0aF8zIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgcG9pbnRzPSI1NDMuNzIgNjguNjUgNTQzLjcyIDU5LjkxIDU3Mi45NCA1OS45MSA1NzIuOTQgNDIuMTIgNTIxLjkgNDIuMTIgNTIxLjkgNjguNjUgNTQzLjcyIDY4LjY1IiBzdHlsZT0iZmlsbDojMDBkM2E5Ii8+PHBhdGggaWQ9Il9QYXRoXzQiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNNTk3LjQ0LDEwNy43N3YxMC4zNUg1NjguMjJ2MTcuNzloMzZhMTQuNzcsMTQuNzcsMCwwLDAsMTUtMTQuNDlWMTA3Ljc3WiIgc3R5bGU9ImZpbGw6IzAwZDNhOSIvPjxwYXRoIGlkPSJfUGF0aF81IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgZD0iTTU0MiwxMDguNzN2OS4zOWgyMC4yMnYxNy43OWgtMjZhMTQuNzcsMTQuNzcsMCwwLDEtMTUtMTQuNDlWMTA4LjczWiIgc3R5bGU9ImZpbGw6IzAwYjM5ZiIvPjwvc3ZnPg==",imagePosition:"second"},{id:8,name:"She Code Africa Contributhon",description:"She Code Africa is a non-profit organization focused on celebrating and empowering young girls and women in tech across Africa.The She Code Africa Contributhon Program is a virtual open-source boot camp for 4 weeks where ladies get the opportunity to work with open source organizations on selected projects with dedicated mentorship and on completion of the program, a stipend of $500 is awarded. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsors and mentor open source organizations to work on projects used by millions of people all over the world.Layer5 is participating in Contributhon as a Mentoring Organization. This program engages more with the open-source ecosystem in Africa and diversifies contributions. Most especially, we love making an impact. Various project ideas are submitted for the selected ladies to contribute during the one-month time phase.",buttonLink:"/programs/sca-contributhon",imageLink:u.Z,imagePosition:"first"}],L=o.ZP.div.withConfig({displayName:"mentorships__ConductWrapper",componentId:"sc-164dynu-0"})(["\n\n    padding: 0 5rem 3rem 20rem;\n    margin-top: -32rem; \n    .explain-2{\n      padding: 25px 0px;\n      .text{\n          padding: 1.25rem 1.25rem 0px 1.25rem;\n          h2{\n              font-weight: 700;\n              font-size: 40px;\n              padding: 1.25rem 0px;\n          }\n          p{\n              color: ",";\n              \n          }\n      }\n      img{\n          padding-top:5rem;\n          height: auto;\n          width: 23rem;\n          display: block;\n          margin-left: auto;\n          margin-right: auto;\n      }\n      Button{\n          margin: 1.25rem 0px;\n          color: white;\n      }\n  }\n  @media only screen and (max-width: 750px){\n      margin-top: -2rem;\n      margin-left: 0;\n      padding: 1rem 1.5rem;\n  \n  }\n\n  @media only screen and (max-width: 475px){\n        margin-top: -2rem;\n        margin-left: 0rem;\n      } \n  }\n\n  @media only screen and (min-width: 765px){\n  .first {\n    .list{\n      display:flex;\n      flex-wrap:wrap\n    }\n    #col1 {\n      order: 2;\n    }\n    #col2 {\n      order: 1;\n    }\n       }\n      }\n\n"],(function(e){return e.theme.tertiaryColor})),N=function(){var e=t.useMemo((function(){return p}));return t.createElement(c.U,null,t.createElement("div",{className:"page-header-section"},t.createElement("h1",null,"Mentorship Programs")),t.createElement(m.Z,null),t.createElement(L,null,t.createElement(s.W2,null,e.map((function(e){var n=e.id,i=e.name,o=e.description,r=e.buttonLink,a=e.imageLink,c=e.imagePosition;return t.createElement("div",{className:c},t.createElement("div",{className:"explain-2 list",key:n},t.createElement(s.X2,null,t.createElement(s.JX,{lg:6,md:6,sm:12,id:"col1"},t.createElement("div",{className:"text"},t.createElement("h2",null,i),t.createElement("p",null,o),t.createElement(l.Z,{primary:!0,id:"learn",type:"button",title:"Learn More",url:r}))),t.createElement(s.JX,{lg:6,md:6,sm:12,id:"col2"},t.createElement("img",{src:a,alt:"logo"})))))})))))},M=i(97264),b=i(34967),y=i(97956),I=i(38155),j=function(){return t.createElement(o.f6,{theme:I.Z},t.createElement(r.Z,null,t.createElement(y.Z,null),t.createElement(a.Z,{title:"Mentorship Programs",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),t.createElement(M.Z,null),t.createElement(N,null),t.createElement(b.Z,null)))}},21101:function(e,n,i){i.d(n,{U:function(){return t}});var t=i(70456).ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"sc-l1w5w5-0"})(["\n    .highlight{\n      font-weight: 600;\n    }\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n    ul > li {\n        color: ",";\n      }\n    ol > li {\n        color: ",";\n      }\n    ul > li > span {\n        color: ",";\n      }\n    ol > li > span {\n      color: ",";\n    }  \n    }\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n    .page-section{\n      margin-top: -29rem;\n      margin-left: 20rem;\n    }\n    \n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n    \n    table {\n    border-collapse: collapse;\n    width: 98%;\n    margin: 1rem 0 2rem 0;\n    .github-icon{\n      height: 1.7rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .site-icon{\n      height: 1.6rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n        }\n\n  td, th {\n    border: 0.05rem solid ",";\n    text-align: left;\n    padding: 0.5rem;\n        }\n      .linkscol{\n        text-align: center;\n        width:8%;\n      }\n  tbody:nth-child(even) {\n    background-color: ",";\n        }\n\n  .codes{\n    width:75%\n    margin-top:-2rem;\n  }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n    }\n    }\n\n    @media only screen and (max-width: 475px){\n        .page-header-section h1{\n            padding: 0 1rem;\n            line-height: 3rem;\n            padding-top: 4rem;\n        }\n        .page-section{\n          margin-top: -2rem;\n          margin-left: 0rem;\n        }\n        table{\n          margin-left: -1.5rem;\n        }\n        .frontendTable{\n          margin-left: -2.8rem; \n        }\n    }\n  .channels-list {\n    padding-left: 40px;\n  }\n  .channels-img {\n    width: 30px;\n    height: 30px;\n  }\n  .channels-para {\n    display: flex;\n    align-items: flex-end;\n  }\n"],(function(e){return e.theme.menuColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.black}),(function(e){return e.theme.black}),(function(e){return e.theme.tertiaryColor}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.secondaryLightColorTwo}))}}]);
//# sourceMappingURL=component---src-pages-community-handbook-mentorship-programs-js-69042ad82dab224d32da.js.map