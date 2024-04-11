"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[1079],{48370:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return v}});var r=a(58168),o=a(80045),n=(a(88763),a(15680)),s=a(83407);const d=["components"],i={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",t)},l=c("InlineAlert"),p=c("InlineNestedAlert"),m={_frontmatter:i},b=s.A;function v(e){let{components:t}=e,a=(0,o.A)(e,d);return(0,n.mdx)(b,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"oauth-server-to-server-credential-implementation-guide"},"OAuth Server-to-Server credential implementation guide"),(0,n.mdx)("p",null,"The following guide goes over finer implementation details for OAuth Server-to-Server credentials. At the end of the guide is a list of recommended industry-standard OAuth2 libraries. Before you proceed, we recommend you become familiar with the server to server authentication credentials in our ",(0,n.mdx)("a",{parentName:"p",href:"./index.md"},"server to server authentication guide"),"."),(0,n.mdx)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#setting-up-the-oauth-server-to-server-credential"},"Setting up the OAuth Server-to-Server credential")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#generate-access-tokens"},"Generate access tokens")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#generating-access-tokens-programmatically"},"Generating access tokens programmatically")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#generating-access-tokens-using-standard-oauth2-libraries"},"Generating access tokens using standard OAuth2 libraries")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#rotating-client-secrets"},"Rotating client secrets")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#rotating-client-secrets-programmatically"},"Rotating client secrets programmatically"))),(0,n.mdx)("h2",{id:"setting-up-the-oauth-server-to-server-credential"},"Setting up the OAuth Server-to-Server credential"),(0,n.mdx)("p",null,"Depending on the API or an Event to your project on the Adobe Developer Console, you can select the OAuth Server-to-Server credential. The OAuth Server-to-Server credential is available for all APIs and Events supporting the ",(0,n.mdx)("a",{parentName:"p",href:"./index.md#service-account-jwt-credential-deprecated"},"Service Account (JWT) credential ",(0,n.mdx)("em",{parentName:"a"},"(deprecated)")),"."),(0,n.mdx)("h3",{id:"credential-name"},"Credential Name"),(0,n.mdx)("p",null,"An admin in your organization can manage all OAuth Server-to-Server credentials by visiting the ",(0,n.mdx)("a",{parentName:"p",href:"https://adminconsole.adobe.com"},"Adobe Admin Console")," > Users > API credentials. To find the correct API credential easily on the Admin Console, you can provide your OAuth Server-to-Server credential a name during credential setup."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/5530d/oauth-server-to-server-credential-name.webp 320w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/0c8fb/oauth-server-to-server-credential-name.webp 640w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/94b1e/oauth-server-to-server-credential-name.webp 1280w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/0b34d/oauth-server-to-server-credential-name.webp 1920w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/d5269/oauth-server-to-server-credential-name.webp 2560w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/bb936/oauth-server-to-server-credential-name.webp 2660w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/dd4a7/oauth-server-to-server-credential-name.png 320w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/0f09e/oauth-server-to-server-credential-name.png 640w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/bbbf7/oauth-server-to-server-credential-name.png 1280w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/ac7a9/oauth-server-to-server-credential-name.png 1920w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/c7a69/oauth-server-to-server-credential-name.png 2560w","/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/07a05/oauth-server-to-server-credential-name.png 2660w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/33a838f93a58be827eca950a1713e3e0/bbbf7/oauth-server-to-server-credential-name.png",alt:"oauth server to server credential name",title:"oauth server to server credential name",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"This name can be modified later in your project by visiting the OAuth Server-to-Server credential overview page."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/5530d/oauth-server-to-server-credential-name-update.webp 320w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/0c8fb/oauth-server-to-server-credential-name-update.webp 640w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/94b1e/oauth-server-to-server-credential-name-update.webp 1280w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/0b34d/oauth-server-to-server-credential-name-update.webp 1920w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/d5269/oauth-server-to-server-credential-name-update.webp 2560w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/74786/oauth-server-to-server-credential-name-update.webp 2654w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/dd4a7/oauth-server-to-server-credential-name-update.png 320w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/0f09e/oauth-server-to-server-credential-name-update.png 640w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/bbbf7/oauth-server-to-server-credential-name-update.png 1280w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/ac7a9/oauth-server-to-server-credential-name-update.png 1920w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/c7a69/oauth-server-to-server-credential-name-update.png 2560w","/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/ba8b5/oauth-server-to-server-credential-name-update.png 2654w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/98b3ca8587dba0a18d438130f5648d0e/bbbf7/oauth-server-to-server-credential-name-update.png",alt:"oauth server to server credential name update",title:"oauth server to server credential name update",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h3",{id:"selecting-product-profiles"},"Selecting Product Profiles"),(0,n.mdx)("p",null,"Depending on the API or Event you add, you may be asked to select product profiles to assign to your credential. These product profiles govern what data your application can/cannot access in your organization. "),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/5530d/oauth-server-to-server-credential-product-profiles.webp 320w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/0c8fb/oauth-server-to-server-credential-product-profiles.webp 640w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/94b1e/oauth-server-to-server-credential-product-profiles.webp 1280w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/0b34d/oauth-server-to-server-credential-product-profiles.webp 1920w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/d5269/oauth-server-to-server-credential-product-profiles.webp 2560w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/37bd2/oauth-server-to-server-credential-product-profiles.webp 2638w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/dd4a7/oauth-server-to-server-credential-product-profiles.png 320w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/0f09e/oauth-server-to-server-credential-product-profiles.png 640w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/bbbf7/oauth-server-to-server-credential-product-profiles.png 1280w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/ac7a9/oauth-server-to-server-credential-product-profiles.png 1920w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/c7a69/oauth-server-to-server-credential-product-profiles.png 2560w","/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/0a739/oauth-server-to-server-credential-product-profiles.png 2638w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/b86562d7e4bc775c4f9d47c451f7cd65/bbbf7/oauth-server-to-server-credential-product-profiles.png",alt:"oauth server to server credential product profiles",title:"oauth server to server credential product profiles",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"The product profile selection works the same way as it does for Service Account (JWT) credentials."),(0,n.mdx)("h2",{id:"generate-access-tokens"},"Generate access tokens"),(0,n.mdx)("p",null,"Generating access tokens for experimentation with the OAuth Server-to-Server credential is straightforward. You can use the 'Generate access token' button on the credential overview page or copy the cURL command and use the command line to generate an access token for quick use."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.00000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/5530d/oauth-server-to-server-credential-generate-access-tokens.webp 320w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/0c8fb/oauth-server-to-server-credential-generate-access-tokens.webp 640w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/94b1e/oauth-server-to-server-credential-generate-access-tokens.webp 1280w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/0b34d/oauth-server-to-server-credential-generate-access-tokens.webp 1920w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/d5269/oauth-server-to-server-credential-generate-access-tokens.webp 2560w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/b41fb/oauth-server-to-server-credential-generate-access-tokens.webp 2676w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/dd4a7/oauth-server-to-server-credential-generate-access-tokens.png 320w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/0f09e/oauth-server-to-server-credential-generate-access-tokens.png 640w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/bbbf7/oauth-server-to-server-credential-generate-access-tokens.png 1280w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/ac7a9/oauth-server-to-server-credential-generate-access-tokens.png 1920w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/c7a69/oauth-server-to-server-credential-generate-access-tokens.png 2560w","/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/c24eb/oauth-server-to-server-credential-generate-access-tokens.png 2676w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/3d50e43d4e207f91c14fefb93b6666a7/bbbf7/oauth-server-to-server-credential-generate-access-tokens.png",alt:"oauth server to server credential generate access tokens",title:"oauth server to server credential generate access tokens",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h3",{id:"generating-access-tokens-programmatically"},"Generating access tokens programmatically"),(0,n.mdx)("p",null,"See this cURL request to understand how your integration or application can generate access tokens programmatically. "),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -d 'client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&grant_type=client_credentials&scope={SCOPES}'\n")),(0,n.mdx)("p",null,"Your integration can generate access tokens when needed. However, it is a good practice to cache access tokens for reuse until they expire. Integrations should avoid generating a new access token when a previously generated access token has not expired and can be reused. Adobe can throttle your integration if it generates too many access tokens."),(0,n.mdx)("p",null,"Access tokens usually expire in 24 hours. To check the expiry time of an access token, see the ",(0,n.mdx)("inlineCode",{parentName:"p"},"expires_in")," field in the API response returned by the above cURL request. Note: The ",(0,n.mdx)("inlineCode",{parentName:"p"},"expires_in")," time is in seconds. See ",(0,n.mdx)("a",{parentName:"p",href:"./IMS.md#fetching-access-tokens"},"API reference"),"."),(0,n.mdx)("h3",{id:"generating-access-tokens-using-standard-oauth2-libraries"},"Generating access tokens using standard OAuth2 libraries"),(0,n.mdx)("p",null,"We recommend using a standard OAuth 2.0 library to implement your application's access token generation logic. The  OAuth community site ",(0,n.mdx)("a",{parentName:"p",href:"https://oauth.net"},"https://oauth.net")," has a huge list of community-maintained OAuth2 libraries. Some widely known and maintained OAuth2 libraries from that list are -"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/jaredhanson/passport"},"PassportJS")," (Node.js)"),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://spring.io/projects/spring-security"},"Spring Security")," (Java)"),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/lepture/authlib"},"Authlib")," (Python)"),(0,n.mdx)("li",{parentName:"ol"},"View more libraries at ",(0,n.mdx)("a",{parentName:"li",href:"https://oauth.net/code/"},"https://oauth.net/code/"))),(0,n.mdx)(l,{slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"Using industry-standard libraries is the quickest and most secure way of integrating with OAuth. We recommend developers diligently pick the OAuth 2.0 library that works best for their application."),(0,n.mdx)("h2",{id:"rotating-client-secrets"},"Rotating client secrets"),(0,n.mdx)("p",null,"The OAuth Server-to-Server credentials provide freedom from automatically expiring certificates used in the Service Account (JWT) credential that must be updated annually. Instead, the OAuth Server-to-Server credential allows you to rotate your client secret as needed. "),(0,n.mdx)("p",null,"Rotating your application's client secrets is highly recommended in case of a leak or unauthorized access. Furthermore, rotating client secrets periodically is an industry-standard practice that strengthens your application security posture. "),(0,n.mdx)("p",null,"You can rotate secrets for your credential through the Dev Console UI and ",(0,n.mdx)("a",{parentName:"p",href:"#rotating-client-secrets-programmatically"},"programmatically through the API"),"."),(0,n.mdx)("p",null,"To rotate client secrets through the UI, follow the steps below on the credential overview screen - "),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Add a new client secret to your credential .\n",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.50000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/5530d/oauth-server-to-server-credential-add-client-secret.webp 320w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/0c8fb/oauth-server-to-server-credential-add-client-secret.webp 640w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/94b1e/oauth-server-to-server-credential-add-client-secret.webp 1280w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/0b34d/oauth-server-to-server-credential-add-client-secret.webp 1920w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/d5269/oauth-server-to-server-credential-add-client-secret.webp 2560w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/d130a/oauth-server-to-server-credential-add-client-secret.webp 2806w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/dd4a7/oauth-server-to-server-credential-add-client-secret.png 320w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/0f09e/oauth-server-to-server-credential-add-client-secret.png 640w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/bbbf7/oauth-server-to-server-credential-add-client-secret.png 1280w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/ac7a9/oauth-server-to-server-credential-add-client-secret.png 1920w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/c7a69/oauth-server-to-server-credential-add-client-secret.png 2560w","/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/1cc5d/oauth-server-to-server-credential-add-client-secret.png 2806w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/57b6fb0d7a32d5d37b117da44fbb318e/bbbf7/oauth-server-to-server-credential-add-client-secret.png",alt:"oauth server to server credential add client secret",title:"oauth server to server credential add client secret",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/5530d/oauth-server-to-server-credential-added-client-secret.webp 320w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/0c8fb/oauth-server-to-server-credential-added-client-secret.webp 640w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/94b1e/oauth-server-to-server-credential-added-client-secret.webp 1280w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/0b34d/oauth-server-to-server-credential-added-client-secret.webp 1920w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/d5269/oauth-server-to-server-credential-added-client-secret.webp 2560w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/f8bed/oauth-server-to-server-credential-added-client-secret.webp 2822w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/dd4a7/oauth-server-to-server-credential-added-client-secret.png 320w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/0f09e/oauth-server-to-server-credential-added-client-secret.png 640w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/bbbf7/oauth-server-to-server-credential-added-client-secret.png 1280w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/ac7a9/oauth-server-to-server-credential-added-client-secret.png 1920w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/c7a69/oauth-server-to-server-credential-added-client-secret.png 2560w","/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/df3e7/oauth-server-to-server-credential-added-client-secret.png 2822w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/6d1a41edfde485d9a5b3d5a73140e38f/bbbf7/oauth-server-to-server-credential-added-client-secret.png",alt:"oauth server to server credential added client secret",title:"oauth server to server credential added client secret",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Update your application to replace your old client secret with the new one you added.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Check the client secret last used timestamp to make sure your application is no longer using the old client secret.\n",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.81249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/5530d/oauth-server-to-server-credential-check-client-secret-timestamps.webp 320w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/0c8fb/oauth-server-to-server-credential-check-client-secret-timestamps.webp 640w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/94b1e/oauth-server-to-server-credential-check-client-secret-timestamps.webp 1280w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/0b34d/oauth-server-to-server-credential-check-client-secret-timestamps.webp 1920w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/d5269/oauth-server-to-server-credential-check-client-secret-timestamps.webp 2560w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/b0015/oauth-server-to-server-credential-check-client-secret-timestamps.webp 2808w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/dd4a7/oauth-server-to-server-credential-check-client-secret-timestamps.png 320w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/0f09e/oauth-server-to-server-credential-check-client-secret-timestamps.png 640w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/bbbf7/oauth-server-to-server-credential-check-client-secret-timestamps.png 1280w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/ac7a9/oauth-server-to-server-credential-check-client-secret-timestamps.png 1920w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/c7a69/oauth-server-to-server-credential-check-client-secret-timestamps.png 2560w","/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/89060/oauth-server-to-server-credential-check-client-secret-timestamps.png 2808w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/a125a55510674825f3840583efaf4bdf/bbbf7/oauth-server-to-server-credential-check-client-secret-timestamps.png",alt:"oauth server to server credential check client secret timestamps",title:"oauth server to server credential check client secret timestamps",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Once sure that you have successfully replaced the client secret, you can delete the old client secret.\n",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/5530d/oauth-server-to-server-credential-delete-old-client-secret.webp 320w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/0c8fb/oauth-server-to-server-credential-delete-old-client-secret.webp 640w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/94b1e/oauth-server-to-server-credential-delete-old-client-secret.webp 1280w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/0b34d/oauth-server-to-server-credential-delete-old-client-secret.webp 1920w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/d5269/oauth-server-to-server-credential-delete-old-client-secret.webp 2560w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/2a6bf/oauth-server-to-server-credential-delete-old-client-secret.webp 2812w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/dd4a7/oauth-server-to-server-credential-delete-old-client-secret.png 320w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/0f09e/oauth-server-to-server-credential-delete-old-client-secret.png 640w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/bbbf7/oauth-server-to-server-credential-delete-old-client-secret.png 1280w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/ac7a9/oauth-server-to-server-credential-delete-old-client-secret.png 1920w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/c7a69/oauth-server-to-server-credential-delete-old-client-secret.png 2560w","/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/9f463/oauth-server-to-server-credential-delete-old-client-secret.png 2812w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-dev-console/static/7f022599b119680ddd7af0beb1652111/bbbf7/oauth-server-to-server-credential-delete-old-client-secret.png",alt:"oauth server to server credential delete old client secret",title:"oauth server to server credential delete old client secret",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)(p,{variant:"info",iconPosition:"right",mdxType:"InlineNestedAlert"},"Once a client secret is deleted, you cannot restore it. So be extra sure you have replaced the old client secret with the new one in all locations."))),(0,n.mdx)(l,{slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"Once a client secret is deleted, you cannot restore it. So be extra sure you have replaced the old client secret with the new one in all locations."),(0,n.mdx)("h3",{id:"rotating-client-secrets-programmatically"},"Rotating client secrets programmatically"),(0,n.mdx)("p",null,"Follow the steps below to rotate client secrets programmatically for the OAuth Server-to-Server credential."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Add I/O Management API to your project: This API allows your credential to read, add, and delete its client secrets.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Go to the OAuth Server-to-Server credential overview page and grab the URL. For example - "),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre"},"https://developer.adobe.com/console/projects/23294/4566206088344958295/credentials/436084/details/oauthservertoserver\n"))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Grab the value of ",(0,n.mdx)("inlineCode",{parentName:"p"},"org id")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"credential id")," from the URL by comparing it to the templated URL below."),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre"},"https://developer.adobe.com/console/projects/{orgId}/{projectId}/credentials/{credentialId}/details/oauthservertoserver\n"))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Construct the secrets request endpoint by substituting the value of ",(0,n.mdx)("inlineCode",{parentName:"p"},"org id")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"credential id")," in the URL below. "),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre"},"https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets\n")),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre"},"https://api.adobe.io/console/organizations/23294/credentials/436084/secrets\n"))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Generate an access token using the existing client secret (see the section on ",(0,n.mdx)("a",{parentName:"p",href:"#generate-access-tokens"},"generating access tokens"),").  Make sure to include scopes that the I/O Management API requires: "),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre"},"AdobeID, openid, read_organizations, additional_info.projectedProductContext, additional_info.roles, adobeio_api, read_client_secret, manage_client_secrets\n"))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Call the API to list all existing client secrets. Note: you can grab your ",(0,n.mdx)("inlineCode",{parentName:"p"},"client_id")," from the OAuth Server-to-Server credential overview page. "),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X GET 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets' \\\n     -H 'Authorization: Bearer {ACCESS TOKEN GENERATED IN STEP 5}'\n     -H 'x-api-key: {CLIENT ID FROM STEP 6}'\n"))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Call the API to add another client secret to your credential. The API response contains the ",(0,n.mdx)("inlineCode",{parentName:"p"},"client_secret")," that was added and its ",(0,n.mdx)("inlineCode",{parentName:"p"},"uuid"),". This ",(0,n.mdx)("inlineCode",{parentName:"p"},"client_secret")," will never be returned in plain text by any other API response. However, you can still find it on the Developer Console UI."),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X POST 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets' \\\n     -H 'Authorization: Bearer {ACCESS TOKEN GENERATED IN STEP 5}'\n     -H 'x-api-key: {CLIENT ID FROM STEP 6}'\n"))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Update your application to use the new client secret. ")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Call the API to list all client secrets for your credential. You can confirm that you have successfully updated the client secret in your applications by comparing the last used timestamps for the secrets. Grab the value of the ",(0,n.mdx)("inlineCode",{parentName:"p"},"uuid")," field for your older secret that you wish to delete.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Call the API to delete the old client secret from your credential by passing the ",(0,n.mdx)("inlineCode",{parentName:"p"},"uuid")," in the URL"),(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X DELETE 'https://api.adobe.io/console/organizations/{orgId}/credentials/{credentialId}/secrets/{uuid from step 9}' \\\n     -H 'Authorization: Bearer {ACCESS TOKEN GENERATED IN STEP 5}'\n     -H 'x-api-key: {CLIENT ID FROM STEP 6}'\n")))))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authentication-server-to-server-authentication-implementation-md-65396a4ac6581d2c1adf.js.map