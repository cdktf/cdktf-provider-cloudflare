# `accessApplication` Submodule <a name="`accessApplication` Submodule" id="@cdktf/provider-cloudflare.accessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessApplication <a name="AccessApplication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application cloudflare_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplication;

AccessApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .allowAuthenticateViaWarp(java.lang.Boolean)
//  .allowAuthenticateViaWarp(IResolvable)
//  .allowedIdps(java.util.List<java.lang.String>)
//  .appLauncherLogoUrl(java.lang.String)
//  .appLauncherVisible(java.lang.Boolean)
//  .appLauncherVisible(IResolvable)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .bgColor(java.lang.String)
//  .corsHeaders(IResolvable)
//  .corsHeaders(java.util.List<AccessApplicationCorsHeaders>)
//  .customDenyMessage(java.lang.String)
//  .customDenyUrl(java.lang.String)
//  .customNonIdentityDenyUrl(java.lang.String)
//  .customPages(java.util.List<java.lang.String>)
//  .domain(java.lang.String)
//  .enableBindingCookie(java.lang.Boolean)
//  .enableBindingCookie(IResolvable)
//  .footerLinks(IResolvable)
//  .footerLinks(java.util.List<AccessApplicationFooterLinks>)
//  .headerBgColor(java.lang.String)
//  .httpOnlyCookieAttribute(java.lang.Boolean)
//  .httpOnlyCookieAttribute(IResolvable)
//  .id(java.lang.String)
//  .landingPageDesign(AccessApplicationLandingPageDesign)
//  .logoUrl(java.lang.String)
//  .name(java.lang.String)
//  .optionsPreflightBypass(java.lang.Boolean)
//  .optionsPreflightBypass(IResolvable)
//  .policies(java.util.List<java.lang.String>)
//  .saasApp(AccessApplicationSaasApp)
//  .sameSiteCookieAttribute(java.lang.String)
//  .scimConfig(AccessApplicationScimConfig)
//  .selfHostedDomains(java.util.List<java.lang.String>)
//  .serviceAuth401Redirect(java.lang.Boolean)
//  .serviceAuth401Redirect(IResolvable)
//  .sessionDuration(java.lang.String)
//  .skipAppLauncherLoginPage(java.lang.Boolean)
//  .skipAppLauncherLoginPage(IResolvable)
//  .skipInterstitial(java.lang.Boolean)
//  .skipInterstitial(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .targetCriteria(IResolvable)
//  .targetCriteria(java.util.List<AccessApplicationTargetCriteria>)
//  .type(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users can authenticate to this application using their WARP session. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.allowedIdps">allowedIdps</a></code> | <code>java.util.List<java.lang.String></code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.appLauncherLogoUrl">appLauncherLogoUrl</a></code> | <code>java.lang.String</code> | The logo URL of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.appLauncherVisible">appLauncherVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.bgColor">bgColor</a></code> | <code>java.lang.String</code> | The background color of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.corsHeaders">corsHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>></code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyMessage">customDenyMessage</a></code> | <code>java.lang.String</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyUrl">customDenyUrl</a></code> | <code>java.lang.String</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customNonIdentityDenyUrl">customNonIdentityDenyUrl</a></code> | <code>java.lang.String</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customPages">customPages</a></code> | <code>java.util.List<java.lang.String></code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.enableBindingCookie">enableBindingCookie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.footerLinks">footerLinks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>></code> | footer_links block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.headerBgColor">headerBgColor</a></code> | <code>java.lang.String</code> | The background color of the header bar in the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.httpOnlyCookieAttribute">httpOnlyCookieAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#id AccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.landingPageDesign">landingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | landing_page_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.optionsPreflightBypass">optionsPreflightBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows options preflight requests to bypass Access authentication and go directly to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | The policies associated with the application, in ascending order of precedence. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.saasApp">saasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sameSiteCookieAttribute">sameSiteCookieAttribute</a></code> | <code>java.lang.String</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.selfHostedDomains">selfHostedDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains that access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.serviceAuth401Redirect">serviceAuth401Redirect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.skipAppLauncherLoginPage">skipAppLauncherLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to skip the App Launcher landing page. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.skipInterstitial">skipInterstitial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.targetCriteria">targetCriteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>></code> | target_criteria block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#account_id AccessApplication#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.allowAuthenticateViaWarp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users can authenticate to this application using their WARP session.

When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allow_authenticate_via_warp AccessApplication#allow_authenticate_via_warp}

---

##### `allowedIdps`<sup>Optional</sup> <a name="allowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.allowedIdps"></a>

- *Type:* java.util.List<java.lang.String>

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}

---

##### `appLauncherLogoUrl`<sup>Optional</sup> <a name="appLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.appLauncherLogoUrl"></a>

- *Type:* java.lang.String

The logo URL of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#app_launcher_logo_url AccessApplication#app_launcher_logo_url}

---

##### `appLauncherVisible`<sup>Optional</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.appLauncherVisible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.autoRedirectToIdentity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}

---

##### `bgColor`<sup>Optional</sup> <a name="bgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.bgColor"></a>

- *Type:* java.lang.String

The background color of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#bg_color AccessApplication#bg_color}

---

##### `corsHeaders`<sup>Optional</sup> <a name="corsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.corsHeaders"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>>

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}

---

##### `customDenyMessage`<sup>Optional</sup> <a name="customDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyMessage"></a>

- *Type:* java.lang.String

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}

---

##### `customDenyUrl`<sup>Optional</sup> <a name="customDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyUrl"></a>

- *Type:* java.lang.String

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}

---

##### `customNonIdentityDenyUrl`<sup>Optional</sup> <a name="customNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customNonIdentityDenyUrl"></a>

- *Type:* java.lang.String

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_non_identity_deny_url AccessApplication#custom_non_identity_deny_url}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customPages"></a>

- *Type:* java.util.List<java.lang.String>

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_pages AccessApplication#custom_pages}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#domain AccessApplication#domain}

---

##### `enableBindingCookie`<sup>Optional</sup> <a name="enableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.enableBindingCookie"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}

---

##### `footerLinks`<sup>Optional</sup> <a name="footerLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.footerLinks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>>

footer_links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#footer_links AccessApplication#footer_links}

---

##### `headerBgColor`<sup>Optional</sup> <a name="headerBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.headerBgColor"></a>

- *Type:* java.lang.String

The background color of the header bar in the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#header_bg_color AccessApplication#header_bg_color}

---

##### `httpOnlyCookieAttribute`<sup>Optional</sup> <a name="httpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.httpOnlyCookieAttribute"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#id AccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `landingPageDesign`<sup>Optional</sup> <a name="landingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.landingPageDesign"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

landing_page_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#landing_page_design AccessApplication#landing_page_design}

---

##### `logoUrl`<sup>Optional</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.logoUrl"></a>

- *Type:* java.lang.String

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#logo_url AccessApplication#logo_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `optionsPreflightBypass`<sup>Optional</sup> <a name="optionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.optionsPreflightBypass"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows options preflight requests to bypass Access authentication and go directly to the origin.

Cannot turn on if cors_headers is set. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#options_preflight_bypass AccessApplication#options_preflight_bypass}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

The policies associated with the application, in ascending order of precedence.

Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#policies AccessApplication#policies}

---

##### `saasApp`<sup>Optional</sup> <a name="saasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.saasApp"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#saas_app AccessApplication#saas_app}

---

##### `sameSiteCookieAttribute`<sup>Optional</sup> <a name="sameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sameSiteCookieAttribute"></a>

- *Type:* java.lang.String

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}

---

##### `scimConfig`<sup>Optional</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scimConfig"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#scim_config AccessApplication#scim_config}

---

##### `selfHostedDomains`<sup>Optional</sup> <a name="selfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.selfHostedDomains"></a>

- *Type:* java.util.List<java.lang.String>

List of domains that access will secure.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#self_hosted_domains AccessApplication#self_hosted_domains}

---

##### `serviceAuth401Redirect`<sup>Optional</sup> <a name="serviceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.serviceAuth401Redirect"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.String

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#session_duration AccessApplication#session_duration}

---

##### `skipAppLauncherLoginPage`<sup>Optional</sup> <a name="skipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.skipAppLauncherLoginPage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to skip the App Launcher landing page. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#skip_app_launcher_login_page AccessApplication#skip_app_launcher_login_page}

---

##### `skipInterstitial`<sup>Optional</sup> <a name="skipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.skipInterstitial"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#tags AccessApplication#tags}

---

##### `targetCriteria`<sup>Optional</sup> <a name="targetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.targetCriteria"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>>

target_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#target_criteria AccessApplication#target_criteria}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#type AccessApplication#type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#zone_id AccessApplication#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders">putCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks">putFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign">putLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp">putSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig">putScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria">putTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowAuthenticateViaWarp">resetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps">resetAllowedIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherLogoUrl">resetAppLauncherLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible">resetAppLauncherVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetBgColor">resetBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders">resetCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage">resetCustomDenyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl">resetCustomDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomNonIdentityDenyUrl">resetCustomNonIdentityDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomPages">resetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie">resetEnableBindingCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetFooterLinks">resetFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHeaderBgColor">resetHeaderBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute">resetHttpOnlyCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLandingPageDesign">resetLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl">resetLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOptionsPreflightBypass">resetOptionsPreflightBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp">resetSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute">resetSameSiteCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetScimConfig">resetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSelfHostedDomains">resetSelfHostedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect">resetServiceAuth401Redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipAppLauncherLoginPage">resetSkipAppLauncherLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial">resetSkipInterstitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTargetCriteria">resetTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsHeaders` <a name="putCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders"></a>

```java
public void putCorsHeaders(IResolvable OR java.util.List<AccessApplicationCorsHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>>

---

##### `putFooterLinks` <a name="putFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks"></a>

```java
public void putFooterLinks(IResolvable OR java.util.List<AccessApplicationFooterLinks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putFooterLinks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>>

---

##### `putLandingPageDesign` <a name="putLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign"></a>

```java
public void putLandingPageDesign(AccessApplicationLandingPageDesign value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putLandingPageDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---

##### `putSaasApp` <a name="putSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp"></a>

```java
public void putSaasApp(AccessApplicationSaasApp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `putScimConfig` <a name="putScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig"></a>

```java
public void putScimConfig(AccessApplicationScimConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putScimConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---

##### `putTargetCriteria` <a name="putTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria"></a>

```java
public void putTargetCriteria(IResolvable OR java.util.List<AccessApplicationTargetCriteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putTargetCriteria.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAllowAuthenticateViaWarp` <a name="resetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowAuthenticateViaWarp"></a>

```java
public void resetAllowAuthenticateViaWarp()
```

##### `resetAllowedIdps` <a name="resetAllowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps"></a>

```java
public void resetAllowedIdps()
```

##### `resetAppLauncherLogoUrl` <a name="resetAppLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherLogoUrl"></a>

```java
public void resetAppLauncherLogoUrl()
```

##### `resetAppLauncherVisible` <a name="resetAppLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible"></a>

```java
public void resetAppLauncherVisible()
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity"></a>

```java
public void resetAutoRedirectToIdentity()
```

##### `resetBgColor` <a name="resetBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetBgColor"></a>

```java
public void resetBgColor()
```

##### `resetCorsHeaders` <a name="resetCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders"></a>

```java
public void resetCorsHeaders()
```

##### `resetCustomDenyMessage` <a name="resetCustomDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage"></a>

```java
public void resetCustomDenyMessage()
```

##### `resetCustomDenyUrl` <a name="resetCustomDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl"></a>

```java
public void resetCustomDenyUrl()
```

##### `resetCustomNonIdentityDenyUrl` <a name="resetCustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomNonIdentityDenyUrl"></a>

```java
public void resetCustomNonIdentityDenyUrl()
```

##### `resetCustomPages` <a name="resetCustomPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomPages"></a>

```java
public void resetCustomPages()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetEnableBindingCookie` <a name="resetEnableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie"></a>

```java
public void resetEnableBindingCookie()
```

##### `resetFooterLinks` <a name="resetFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetFooterLinks"></a>

```java
public void resetFooterLinks()
```

##### `resetHeaderBgColor` <a name="resetHeaderBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHeaderBgColor"></a>

```java
public void resetHeaderBgColor()
```

##### `resetHttpOnlyCookieAttribute` <a name="resetHttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute"></a>

```java
public void resetHttpOnlyCookieAttribute()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId"></a>

```java
public void resetId()
```

##### `resetLandingPageDesign` <a name="resetLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLandingPageDesign"></a>

```java
public void resetLandingPageDesign()
```

##### `resetLogoUrl` <a name="resetLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl"></a>

```java
public void resetLogoUrl()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetName"></a>

```java
public void resetName()
```

##### `resetOptionsPreflightBypass` <a name="resetOptionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOptionsPreflightBypass"></a>

```java
public void resetOptionsPreflightBypass()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetSaasApp` <a name="resetSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp"></a>

```java
public void resetSaasApp()
```

##### `resetSameSiteCookieAttribute` <a name="resetSameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute"></a>

```java
public void resetSameSiteCookieAttribute()
```

##### `resetScimConfig` <a name="resetScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetScimConfig"></a>

```java
public void resetScimConfig()
```

##### `resetSelfHostedDomains` <a name="resetSelfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSelfHostedDomains"></a>

```java
public void resetSelfHostedDomains()
```

##### `resetServiceAuth401Redirect` <a name="resetServiceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect"></a>

```java
public void resetServiceAuth401Redirect()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetSkipAppLauncherLoginPage` <a name="resetSkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipAppLauncherLoginPage"></a>

```java
public void resetSkipAppLauncherLoginPage()
```

##### `resetSkipInterstitial` <a name="resetSkipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial"></a>

```java
public void resetSkipInterstitial()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetCriteria` <a name="resetTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetTargetCriteria"></a>

```java
public void resetTargetCriteria()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType"></a>

```java
public void resetType()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplication;

AccessApplication.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplication;

AccessApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplication;

AccessApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplication;

AccessApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud">aud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders">corsHeaders</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinks">footerLinks</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList">AccessApplicationFooterLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesign">landingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference">AccessApplicationLandingPageDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp">saasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference">AccessApplicationScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteria">targetCriteria</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList">AccessApplicationTargetCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarpInput">allowAuthenticateViaWarpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput">allowedIdpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrlInput">appLauncherLogoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput">appLauncherVisibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColorInput">bgColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput">corsHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput">customDenyMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput">customDenyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrlInput">customNonIdentityDenyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPagesInput">customPagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput">enableBindingCookieInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinksInput">footerLinksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColorInput">headerBgColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput">httpOnlyCookieAttributeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesignInput">landingPageDesignInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput">logoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypassInput">optionsPreflightBypassInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput">saasAppInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput">sameSiteCookieAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfigInput">scimConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomainsInput">selfHostedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput">serviceAuth401RedirectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPageInput">skipAppLauncherLoginPageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput">skipInterstitialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteriaInput">targetCriteriaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps">allowedIdps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrl">appLauncherLogoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible">appLauncherVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColor">bgColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage">customDenyMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl">customDenyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrl">customNonIdentityDenyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPages">customPages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie">enableBindingCookie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColor">headerBgColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute">httpOnlyCookieAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypass">optionsPreflightBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute">sameSiteCookieAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomains">selfHostedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect">serviceAuth401Redirect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPage">skipAppLauncherLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial">skipInterstitial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aud`<sup>Required</sup> <a name="aud" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud"></a>

```java
public java.lang.String getAud();
```

- *Type:* java.lang.String

---

##### `corsHeaders`<sup>Required</sup> <a name="corsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders"></a>

```java
public AccessApplicationCorsHeadersList getCorsHeaders();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a>

---

##### `footerLinks`<sup>Required</sup> <a name="footerLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinks"></a>

```java
public AccessApplicationFooterLinksList getFooterLinks();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList">AccessApplicationFooterLinksList</a>

---

##### `landingPageDesign`<sup>Required</sup> <a name="landingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesign"></a>

```java
public AccessApplicationLandingPageDesignOutputReference getLandingPageDesign();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference">AccessApplicationLandingPageDesignOutputReference</a>

---

##### `saasApp`<sup>Required</sup> <a name="saasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp"></a>

```java
public AccessApplicationSaasAppOutputReference getSaasApp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a>

---

##### `scimConfig`<sup>Required</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfig"></a>

```java
public AccessApplicationScimConfigOutputReference getScimConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference">AccessApplicationScimConfigOutputReference</a>

---

##### `targetCriteria`<sup>Required</sup> <a name="targetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteria"></a>

```java
public AccessApplicationTargetCriteriaList getTargetCriteria();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList">AccessApplicationTargetCriteriaList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="allowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarpInput"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedIdpsInput`<sup>Optional</sup> <a name="allowedIdpsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIdpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appLauncherLogoUrlInput`<sup>Optional</sup> <a name="appLauncherLogoUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrlInput"></a>

```java
public java.lang.String getAppLauncherLogoUrlInput();
```

- *Type:* java.lang.String

---

##### `appLauncherVisibleInput`<sup>Optional</sup> <a name="appLauncherVisibleInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput"></a>

```java
public java.lang.Object getAppLauncherVisibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput"></a>

```java
public java.lang.Object getAutoRedirectToIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bgColorInput`<sup>Optional</sup> <a name="bgColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColorInput"></a>

```java
public java.lang.String getBgColorInput();
```

- *Type:* java.lang.String

---

##### `corsHeadersInput`<sup>Optional</sup> <a name="corsHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput"></a>

```java
public java.lang.Object getCorsHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>>

---

##### `customDenyMessageInput`<sup>Optional</sup> <a name="customDenyMessageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput"></a>

```java
public java.lang.String getCustomDenyMessageInput();
```

- *Type:* java.lang.String

---

##### `customDenyUrlInput`<sup>Optional</sup> <a name="customDenyUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput"></a>

```java
public java.lang.String getCustomDenyUrlInput();
```

- *Type:* java.lang.String

---

##### `customNonIdentityDenyUrlInput`<sup>Optional</sup> <a name="customNonIdentityDenyUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrlInput"></a>

```java
public java.lang.String getCustomNonIdentityDenyUrlInput();
```

- *Type:* java.lang.String

---

##### `customPagesInput`<sup>Optional</sup> <a name="customPagesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPagesInput"></a>

```java
public java.util.List<java.lang.String> getCustomPagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `enableBindingCookieInput`<sup>Optional</sup> <a name="enableBindingCookieInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput"></a>

```java
public java.lang.Object getEnableBindingCookieInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `footerLinksInput`<sup>Optional</sup> <a name="footerLinksInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.footerLinksInput"></a>

```java
public java.lang.Object getFooterLinksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>>

---

##### `headerBgColorInput`<sup>Optional</sup> <a name="headerBgColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColorInput"></a>

```java
public java.lang.String getHeaderBgColorInput();
```

- *Type:* java.lang.String

---

##### `httpOnlyCookieAttributeInput`<sup>Optional</sup> <a name="httpOnlyCookieAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput"></a>

```java
public java.lang.Object getHttpOnlyCookieAttributeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `landingPageDesignInput`<sup>Optional</sup> <a name="landingPageDesignInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.landingPageDesignInput"></a>

```java
public AccessApplicationLandingPageDesign getLandingPageDesignInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---

##### `logoUrlInput`<sup>Optional</sup> <a name="logoUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput"></a>

```java
public java.lang.String getLogoUrlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsPreflightBypassInput`<sup>Optional</sup> <a name="optionsPreflightBypassInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypassInput"></a>

```java
public java.lang.Object getOptionsPreflightBypassInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `saasAppInput`<sup>Optional</sup> <a name="saasAppInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput"></a>

```java
public AccessApplicationSaasApp getSaasAppInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `sameSiteCookieAttributeInput`<sup>Optional</sup> <a name="sameSiteCookieAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput"></a>

```java
public java.lang.String getSameSiteCookieAttributeInput();
```

- *Type:* java.lang.String

---

##### `scimConfigInput`<sup>Optional</sup> <a name="scimConfigInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.scimConfigInput"></a>

```java
public AccessApplicationScimConfig getScimConfigInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---

##### `selfHostedDomainsInput`<sup>Optional</sup> <a name="selfHostedDomainsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getSelfHostedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAuth401RedirectInput`<sup>Optional</sup> <a name="serviceAuth401RedirectInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput"></a>

```java
public java.lang.Object getServiceAuth401RedirectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `skipAppLauncherLoginPageInput`<sup>Optional</sup> <a name="skipAppLauncherLoginPageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPageInput"></a>

```java
public java.lang.Object getSkipAppLauncherLoginPageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipInterstitialInput`<sup>Optional</sup> <a name="skipInterstitialInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput"></a>

```java
public java.lang.Object getSkipInterstitialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetCriteriaInput`<sup>Optional</sup> <a name="targetCriteriaInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.targetCriteriaInput"></a>

```java
public java.lang.Object getTargetCriteriaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedIdps`<sup>Required</sup> <a name="allowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps"></a>

```java
public java.util.List<java.lang.String> getAllowedIdps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appLauncherLogoUrl`<sup>Required</sup> <a name="appLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherLogoUrl"></a>

```java
public java.lang.String getAppLauncherLogoUrl();
```

- *Type:* java.lang.String

---

##### `appLauncherVisible`<sup>Required</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible"></a>

```java
public java.lang.Object getAppLauncherVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bgColor`<sup>Required</sup> <a name="bgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.bgColor"></a>

```java
public java.lang.String getBgColor();
```

- *Type:* java.lang.String

---

##### `customDenyMessage`<sup>Required</sup> <a name="customDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage"></a>

```java
public java.lang.String getCustomDenyMessage();
```

- *Type:* java.lang.String

---

##### `customDenyUrl`<sup>Required</sup> <a name="customDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl"></a>

```java
public java.lang.String getCustomDenyUrl();
```

- *Type:* java.lang.String

---

##### `customNonIdentityDenyUrl`<sup>Required</sup> <a name="customNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customNonIdentityDenyUrl"></a>

```java
public java.lang.String getCustomNonIdentityDenyUrl();
```

- *Type:* java.lang.String

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customPages"></a>

```java
public java.util.List<java.lang.String> getCustomPages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `enableBindingCookie`<sup>Required</sup> <a name="enableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie"></a>

```java
public java.lang.Object getEnableBindingCookie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerBgColor`<sup>Required</sup> <a name="headerBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.headerBgColor"></a>

```java
public java.lang.String getHeaderBgColor();
```

- *Type:* java.lang.String

---

##### `httpOnlyCookieAttribute`<sup>Required</sup> <a name="httpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute"></a>

```java
public java.lang.Object getHttpOnlyCookieAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `optionsPreflightBypass`<sup>Required</sup> <a name="optionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.optionsPreflightBypass"></a>

```java
public java.lang.Object getOptionsPreflightBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sameSiteCookieAttribute`<sup>Required</sup> <a name="sameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute"></a>

```java
public java.lang.String getSameSiteCookieAttribute();
```

- *Type:* java.lang.String

---

##### `selfHostedDomains`<sup>Required</sup> <a name="selfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.selfHostedDomains"></a>

```java
public java.util.List<java.lang.String> getSelfHostedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAuth401Redirect`<sup>Required</sup> <a name="serviceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect"></a>

```java
public java.lang.Object getServiceAuth401Redirect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `skipAppLauncherLoginPage`<sup>Required</sup> <a name="skipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipAppLauncherLoginPage"></a>

```java
public java.lang.Object getSkipAppLauncherLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipInterstitial`<sup>Required</sup> <a name="skipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial"></a>

```java
public java.lang.Object getSkipInterstitial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessApplicationConfig <a name="AccessApplicationConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationConfig;

AccessApplicationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .allowAuthenticateViaWarp(java.lang.Boolean)
//  .allowAuthenticateViaWarp(IResolvable)
//  .allowedIdps(java.util.List<java.lang.String>)
//  .appLauncherLogoUrl(java.lang.String)
//  .appLauncherVisible(java.lang.Boolean)
//  .appLauncherVisible(IResolvable)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .bgColor(java.lang.String)
//  .corsHeaders(IResolvable)
//  .corsHeaders(java.util.List<AccessApplicationCorsHeaders>)
//  .customDenyMessage(java.lang.String)
//  .customDenyUrl(java.lang.String)
//  .customNonIdentityDenyUrl(java.lang.String)
//  .customPages(java.util.List<java.lang.String>)
//  .domain(java.lang.String)
//  .enableBindingCookie(java.lang.Boolean)
//  .enableBindingCookie(IResolvable)
//  .footerLinks(IResolvable)
//  .footerLinks(java.util.List<AccessApplicationFooterLinks>)
//  .headerBgColor(java.lang.String)
//  .httpOnlyCookieAttribute(java.lang.Boolean)
//  .httpOnlyCookieAttribute(IResolvable)
//  .id(java.lang.String)
//  .landingPageDesign(AccessApplicationLandingPageDesign)
//  .logoUrl(java.lang.String)
//  .name(java.lang.String)
//  .optionsPreflightBypass(java.lang.Boolean)
//  .optionsPreflightBypass(IResolvable)
//  .policies(java.util.List<java.lang.String>)
//  .saasApp(AccessApplicationSaasApp)
//  .sameSiteCookieAttribute(java.lang.String)
//  .scimConfig(AccessApplicationScimConfig)
//  .selfHostedDomains(java.util.List<java.lang.String>)
//  .serviceAuth401Redirect(java.lang.Boolean)
//  .serviceAuth401Redirect(IResolvable)
//  .sessionDuration(java.lang.String)
//  .skipAppLauncherLoginPage(java.lang.Boolean)
//  .skipAppLauncherLoginPage(IResolvable)
//  .skipInterstitial(java.lang.Boolean)
//  .skipInterstitial(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .targetCriteria(IResolvable)
//  .targetCriteria(java.util.List<AccessApplicationTargetCriteria>)
//  .type(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users can authenticate to this application using their WARP session. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps">allowedIdps</a></code> | <code>java.util.List<java.lang.String></code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherLogoUrl">appLauncherLogoUrl</a></code> | <code>java.lang.String</code> | The logo URL of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible">appLauncherVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.bgColor">bgColor</a></code> | <code>java.lang.String</code> | The background color of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders">corsHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>></code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage">customDenyMessage</a></code> | <code>java.lang.String</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl">customDenyUrl</a></code> | <code>java.lang.String</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl">customNonIdentityDenyUrl</a></code> | <code>java.lang.String</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages">customPages</a></code> | <code>java.util.List<java.lang.String></code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie">enableBindingCookie</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.footerLinks">footerLinks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>></code> | footer_links block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.headerBgColor">headerBgColor</a></code> | <code>java.lang.String</code> | The background color of the header bar in the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute">httpOnlyCookieAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#id AccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.landingPageDesign">landingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | landing_page_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.optionsPreflightBypass">optionsPreflightBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows options preflight requests to bypass Access authentication and go directly to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | The policies associated with the application, in ascending order of precedence. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp">saasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute">sameSiteCookieAttribute</a></code> | <code>java.lang.String</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains">selfHostedDomains</a></code> | <code>java.util.List<java.lang.String></code> | List of domains that access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect">serviceAuth401Redirect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipAppLauncherLoginPage">skipAppLauncherLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to skip the App Launcher landing page. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial">skipInterstitial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.targetCriteria">targetCriteria</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>></code> | target_criteria block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type">type</a></code> | <code>java.lang.String</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#account_id AccessApplication#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users can authenticate to this application using their WARP session.

When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allow_authenticate_via_warp AccessApplication#allow_authenticate_via_warp}

---

##### `allowedIdps`<sup>Optional</sup> <a name="allowedIdps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps"></a>

```java
public java.util.List<java.lang.String> getAllowedIdps();
```

- *Type:* java.util.List<java.lang.String>

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}

---

##### `appLauncherLogoUrl`<sup>Optional</sup> <a name="appLauncherLogoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherLogoUrl"></a>

```java
public java.lang.String getAppLauncherLogoUrl();
```

- *Type:* java.lang.String

The logo URL of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#app_launcher_logo_url AccessApplication#app_launcher_logo_url}

---

##### `appLauncherVisible`<sup>Optional</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible"></a>

```java
public java.lang.Object getAppLauncherVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}

---

##### `bgColor`<sup>Optional</sup> <a name="bgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.bgColor"></a>

```java
public java.lang.String getBgColor();
```

- *Type:* java.lang.String

The background color of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#bg_color AccessApplication#bg_color}

---

##### `corsHeaders`<sup>Optional</sup> <a name="corsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders"></a>

```java
public java.lang.Object getCorsHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>>

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}

---

##### `customDenyMessage`<sup>Optional</sup> <a name="customDenyMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage"></a>

```java
public java.lang.String getCustomDenyMessage();
```

- *Type:* java.lang.String

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}

---

##### `customDenyUrl`<sup>Optional</sup> <a name="customDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl"></a>

```java
public java.lang.String getCustomDenyUrl();
```

- *Type:* java.lang.String

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}

---

##### `customNonIdentityDenyUrl`<sup>Optional</sup> <a name="customNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customNonIdentityDenyUrl"></a>

```java
public java.lang.String getCustomNonIdentityDenyUrl();
```

- *Type:* java.lang.String

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_non_identity_deny_url AccessApplication#custom_non_identity_deny_url}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customPages"></a>

```java
public java.util.List<java.lang.String> getCustomPages();
```

- *Type:* java.util.List<java.lang.String>

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_pages AccessApplication#custom_pages}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#domain AccessApplication#domain}

---

##### `enableBindingCookie`<sup>Optional</sup> <a name="enableBindingCookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie"></a>

```java
public java.lang.Object getEnableBindingCookie();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}

---

##### `footerLinks`<sup>Optional</sup> <a name="footerLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.footerLinks"></a>

```java
public java.lang.Object getFooterLinks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>>

footer_links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#footer_links AccessApplication#footer_links}

---

##### `headerBgColor`<sup>Optional</sup> <a name="headerBgColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.headerBgColor"></a>

```java
public java.lang.String getHeaderBgColor();
```

- *Type:* java.lang.String

The background color of the header bar in the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#header_bg_color AccessApplication#header_bg_color}

---

##### `httpOnlyCookieAttribute`<sup>Optional</sup> <a name="httpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```java
public java.lang.Object getHttpOnlyCookieAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#id AccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `landingPageDesign`<sup>Optional</sup> <a name="landingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.landingPageDesign"></a>

```java
public AccessApplicationLandingPageDesign getLandingPageDesign();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

landing_page_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#landing_page_design AccessApplication#landing_page_design}

---

##### `logoUrl`<sup>Optional</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#logo_url AccessApplication#logo_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `optionsPreflightBypass`<sup>Optional</sup> <a name="optionsPreflightBypass" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.optionsPreflightBypass"></a>

```java
public java.lang.Object getOptionsPreflightBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows options preflight requests to bypass Access authentication and go directly to the origin.

Cannot turn on if cors_headers is set. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#options_preflight_bypass AccessApplication#options_preflight_bypass}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

The policies associated with the application, in ascending order of precedence.

Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#policies AccessApplication#policies}

---

##### `saasApp`<sup>Optional</sup> <a name="saasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp"></a>

```java
public AccessApplicationSaasApp getSaasApp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#saas_app AccessApplication#saas_app}

---

##### `sameSiteCookieAttribute`<sup>Optional</sup> <a name="sameSiteCookieAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```java
public java.lang.String getSameSiteCookieAttribute();
```

- *Type:* java.lang.String

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}

---

##### `scimConfig`<sup>Optional</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.scimConfig"></a>

```java
public AccessApplicationScimConfig getScimConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#scim_config AccessApplication#scim_config}

---

##### `selfHostedDomains`<sup>Optional</sup> <a name="selfHostedDomains" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.selfHostedDomains"></a>

```java
public java.util.List<java.lang.String> getSelfHostedDomains();
```

- *Type:* java.util.List<java.lang.String>

List of domains that access will secure.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#self_hosted_domains AccessApplication#self_hosted_domains}

---

##### `serviceAuth401Redirect`<sup>Optional</sup> <a name="serviceAuth401Redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect"></a>

```java
public java.lang.Object getServiceAuth401Redirect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#session_duration AccessApplication#session_duration}

---

##### `skipAppLauncherLoginPage`<sup>Optional</sup> <a name="skipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipAppLauncherLoginPage"></a>

```java
public java.lang.Object getSkipAppLauncherLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to skip the App Launcher landing page. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#skip_app_launcher_login_page AccessApplication#skip_app_launcher_login_page}

---

##### `skipInterstitial`<sup>Optional</sup> <a name="skipInterstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial"></a>

```java
public java.lang.Object getSkipInterstitial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#tags AccessApplication#tags}

---

##### `targetCriteria`<sup>Optional</sup> <a name="targetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.targetCriteria"></a>

```java
public java.lang.Object getTargetCriteria();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>>

target_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#target_criteria AccessApplication#target_criteria}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#type AccessApplication#type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#zone_id AccessApplication#zone_id}

---

### AccessApplicationCorsHeaders <a name="AccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationCorsHeaders;

AccessApplicationCorsHeaders.builder()
//  .allowAllHeaders(java.lang.Boolean)
//  .allowAllHeaders(IResolvable)
//  .allowAllMethods(java.lang.Boolean)
//  .allowAllMethods(IResolvable)
//  .allowAllOrigins(java.lang.Boolean)
//  .allowAllOrigins(IResolvable)
//  .allowCredentials(java.lang.Boolean)
//  .allowCredentials(IResolvable)
//  .allowedHeaders(java.util.List<java.lang.String>)
//  .allowedMethods(java.util.List<java.lang.String>)
//  .allowedOrigins(java.util.List<java.lang.String>)
//  .maxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders">allowAllHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Value to determine whether all HTTP headers are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods">allowAllMethods</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Value to determine whether all methods are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins">allowAllOrigins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Value to determine whether all origins are permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of HTTP headers to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | List of methods to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | List of origins permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | The maximum time a preflight request will be cached. |

---

##### `allowAllHeaders`<sup>Optional</sup> <a name="allowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders"></a>

```java
public java.lang.Object getAllowAllHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Value to determine whether all HTTP headers are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allow_all_headers AccessApplication#allow_all_headers}

---

##### `allowAllMethods`<sup>Optional</sup> <a name="allowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods"></a>

```java
public java.lang.Object getAllowAllMethods();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allow_all_methods AccessApplication#allow_all_methods}

---

##### `allowAllOrigins`<sup>Optional</sup> <a name="allowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```java
public java.lang.Object getAllowAllOrigins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allow_all_origins AccessApplication#allow_all_origins}

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allow_credentials AccessApplication#allow_credentials}

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allowed_headers AccessApplication#allowed_headers}

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allowed_methods AccessApplication#allowed_methods}

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allowed_origins AccessApplication#allowed_origins}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#max_age AccessApplication#max_age}

---

### AccessApplicationFooterLinks <a name="AccessApplicationFooterLinks" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationFooterLinks;

AccessApplicationFooterLinks.builder()
//  .name(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.name">name</a></code> | <code>java.lang.String</code> | The name of the footer link. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.url">url</a></code> | <code>java.lang.String</code> | The URL of the footer link. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#url AccessApplication#url}

---

### AccessApplicationLandingPageDesign <a name="AccessApplicationLandingPageDesign" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationLandingPageDesign;

AccessApplicationLandingPageDesign.builder()
//  .buttonColor(java.lang.String)
//  .buttonTextColor(java.lang.String)
//  .imageUrl(java.lang.String)
//  .message(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonColor">buttonColor</a></code> | <code>java.lang.String</code> | The button color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonTextColor">buttonTextColor</a></code> | <code>java.lang.String</code> | The button text color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | The URL of the image to be displayed in the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.message">message</a></code> | <code>java.lang.String</code> | The message of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.title">title</a></code> | <code>java.lang.String</code> | The title of the landing page. |

---

##### `buttonColor`<sup>Optional</sup> <a name="buttonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonColor"></a>

```java
public java.lang.String getButtonColor();
```

- *Type:* java.lang.String

The button color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#button_color AccessApplication#button_color}

---

##### `buttonTextColor`<sup>Optional</sup> <a name="buttonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.buttonTextColor"></a>

```java
public java.lang.String getButtonTextColor();
```

- *Type:* java.lang.String

The button text color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#button_text_color AccessApplication#button_text_color}

---

##### `imageUrl`<sup>Optional</sup> <a name="imageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

The URL of the image to be displayed in the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#image_url AccessApplication#image_url}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

The message of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#message AccessApplication#message}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#title AccessApplication#title}

---

### AccessApplicationSaasApp <a name="AccessApplicationSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasApp;

AccessApplicationSaasApp.builder()
//  .accessTokenLifetime(java.lang.String)
//  .allowPkceWithoutClientSecret(java.lang.Boolean)
//  .allowPkceWithoutClientSecret(IResolvable)
//  .appLauncherUrl(java.lang.String)
//  .authType(java.lang.String)
//  .consumerServiceUrl(java.lang.String)
//  .customAttribute(IResolvable)
//  .customAttribute(java.util.List<AccessApplicationSaasAppCustomAttribute>)
//  .customClaim(IResolvable)
//  .customClaim(java.util.List<AccessApplicationSaasAppCustomClaim>)
//  .defaultRelayState(java.lang.String)
//  .grantTypes(java.util.List<java.lang.String>)
//  .groupFilterRegex(java.lang.String)
//  .hybridAndImplicitOptions(AccessApplicationSaasAppHybridAndImplicitOptions)
//  .nameIdFormat(java.lang.String)
//  .nameIdTransformJsonata(java.lang.String)
//  .redirectUris(java.util.List<java.lang.String>)
//  .refreshTokenOptions(IResolvable)
//  .refreshTokenOptions(java.util.List<AccessApplicationSaasAppRefreshTokenOptions>)
//  .samlAttributeTransformJsonata(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .spEntityId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.accessTokenLifetime">accessTokenLifetime</a></code> | <code>java.lang.String</code> | The lifetime of the Access Token after creation. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.allowPkceWithoutClientSecret">allowPkceWithoutClientSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow PKCE flow without a client secret. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.appLauncherUrl">appLauncherUrl</a></code> | <code>java.lang.String</code> | The URL where this applications tile redirects users. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.authType">authType</a></code> | <code>java.lang.String</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl">consumerServiceUrl</a></code> | <code>java.lang.String</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute">customAttribute</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>></code> | custom_attribute block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customClaim">customClaim</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>></code> | custom_claim block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | The relay state used if not provided by the identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | The OIDC flows supported by this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.groupFilterRegex">groupFilterRegex</a></code> | <code>java.lang.String</code> | A regex to filter Cloudflare groups returned in ID token and userinfo endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.hybridAndImplicitOptions">hybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | hybrid_and_implicit_options block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat">nameIdFormat</a></code> | <code>java.lang.String</code> | The format of the name identifier sent to the SaaS application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdTransformJsonata">nameIdTransformJsonata</a></code> | <code>java.lang.String</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.refreshTokenOptions">refreshTokenOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>></code> | refresh_token_options block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.samlAttributeTransformJsonata">samlAttributeTransformJsonata</a></code> | <code>java.lang.String</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Define the user information shared with access. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId">spEntityId</a></code> | <code>java.lang.String</code> | A globally unique name for an identity or service provider. |

---

##### `accessTokenLifetime`<sup>Optional</sup> <a name="accessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.accessTokenLifetime"></a>

```java
public java.lang.String getAccessTokenLifetime();
```

- *Type:* java.lang.String

The lifetime of the Access Token after creation.

Valid units are `m` and `h`. Must be greater than or equal to 1m and less than or equal to 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#access_token_lifetime AccessApplication#access_token_lifetime}

---

##### `allowPkceWithoutClientSecret`<sup>Optional</sup> <a name="allowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.allowPkceWithoutClientSecret"></a>

```java
public java.lang.Object getAllowPkceWithoutClientSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow PKCE flow without a client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#allow_pkce_without_client_secret AccessApplication#allow_pkce_without_client_secret}

---

##### `appLauncherUrl`<sup>Optional</sup> <a name="appLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.appLauncherUrl"></a>

```java
public java.lang.String getAppLauncherUrl();
```

- *Type:* java.lang.String

The URL where this applications tile redirects users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#app_launcher_url AccessApplication#app_launcher_url}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#auth_type AccessApplication#auth_type}

---

##### `consumerServiceUrl`<sup>Optional</sup> <a name="consumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl"></a>

```java
public java.lang.String getConsumerServiceUrl();
```

- *Type:* java.lang.String

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#consumer_service_url AccessApplication#consumer_service_url}

---

##### `customAttribute`<sup>Optional</sup> <a name="customAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customAttribute"></a>

```java
public java.lang.Object getCustomAttribute();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>>

custom_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_attribute AccessApplication#custom_attribute}

---

##### `customClaim`<sup>Optional</sup> <a name="customClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.customClaim"></a>

```java
public java.lang.Object getCustomClaim();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>>

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#custom_claim AccessApplication#custom_claim}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.defaultRelayState"></a>

```java
public java.lang.String getDefaultRelayState();
```

- *Type:* java.lang.String

The relay state used if not provided by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#default_relay_state AccessApplication#default_relay_state}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

The OIDC flows supported by this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#grant_types AccessApplication#grant_types}

---

##### `groupFilterRegex`<sup>Optional</sup> <a name="groupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.groupFilterRegex"></a>

```java
public java.lang.String getGroupFilterRegex();
```

- *Type:* java.lang.String

A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#group_filter_regex AccessApplication#group_filter_regex}

---

##### `hybridAndImplicitOptions`<sup>Optional</sup> <a name="hybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.hybridAndImplicitOptions"></a>

```java
public AccessApplicationSaasAppHybridAndImplicitOptions getHybridAndImplicitOptions();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

hybrid_and_implicit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#hybrid_and_implicit_options AccessApplication#hybrid_and_implicit_options}

---

##### `nameIdFormat`<sup>Optional</sup> <a name="nameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat"></a>

```java
public java.lang.String getNameIdFormat();
```

- *Type:* java.lang.String

The format of the name identifier sent to the SaaS application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name_id_format AccessApplication#name_id_format}

---

##### `nameIdTransformJsonata`<sup>Optional</sup> <a name="nameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdTransformJsonata"></a>

```java
public java.lang.String getNameIdTransformJsonata();
```

- *Type:* java.lang.String

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name_id_transform_jsonata AccessApplication#name_id_transform_jsonata}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#redirect_uris AccessApplication#redirect_uris}

---

##### `refreshTokenOptions`<sup>Optional</sup> <a name="refreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.refreshTokenOptions"></a>

```java
public java.lang.Object getRefreshTokenOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>>

refresh_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#refresh_token_options AccessApplication#refresh_token_options}

---

##### `samlAttributeTransformJsonata`<sup>Optional</sup> <a name="samlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.samlAttributeTransformJsonata"></a>

```java
public java.lang.String getSamlAttributeTransformJsonata();
```

- *Type:* java.lang.String

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#saml_attribute_transform_jsonata AccessApplication#saml_attribute_transform_jsonata}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Define the user information shared with access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#scopes AccessApplication#scopes}

---

##### `spEntityId`<sup>Optional</sup> <a name="spEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId"></a>

```java
public java.lang.String getSpEntityId();
```

- *Type:* java.lang.String

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#sp_entity_id AccessApplication#sp_entity_id}

---

### AccessApplicationSaasAppCustomAttribute <a name="AccessApplicationSaasAppCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomAttribute;

AccessApplicationSaasAppCustomAttribute.builder()
    .source(AccessApplicationSaasAppCustomAttributeSource)
//  .friendlyName(java.lang.String)
//  .name(java.lang.String)
//  .nameFormat(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | A friendly name for the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.name">name</a></code> | <code>java.lang.String</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.nameFormat">nameFormat</a></code> | <code>java.lang.String</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the attribute must be always present. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.source"></a>

```java
public AccessApplicationSaasAppCustomAttributeSource getSource();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#source AccessApplication#source}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

A friendly name for the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#friendly_name AccessApplication#friendly_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `nameFormat`<sup>Optional</sup> <a name="nameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.nameFormat"></a>

```java
public java.lang.String getNameFormat();
```

- *Type:* java.lang.String

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name_format AccessApplication#name_format}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#required AccessApplication#required}

---

### AccessApplicationSaasAppCustomAttributeSource <a name="AccessApplicationSaasAppCustomAttributeSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomAttributeSource;

AccessApplicationSaasAppCustomAttributeSource.builder()
    .name(java.lang.String)
//  .nameByIdp(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name">name</a></code> | <code>java.lang.String</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.nameByIdp">nameByIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping from IdP ID to claim name. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `nameByIdp`<sup>Optional</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource.property.nameByIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNameByIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name_by_idp AccessApplication#name_by_idp}

---

### AccessApplicationSaasAppCustomClaim <a name="AccessApplicationSaasAppCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomClaim;

AccessApplicationSaasAppCustomClaim.builder()
    .source(AccessApplicationSaasAppCustomClaimSource)
//  .name(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.name">name</a></code> | <code>java.lang.String</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the attribute must be always present. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the claim. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.source"></a>

```java
public AccessApplicationSaasAppCustomClaimSource getSource();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#source AccessApplication#source}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#required AccessApplication#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#scope AccessApplication#scope}

---

### AccessApplicationSaasAppCustomClaimSource <a name="AccessApplicationSaasAppCustomClaimSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomClaimSource;

AccessApplicationSaasAppCustomClaimSource.builder()
    .name(java.lang.String)
//  .nameByIdp(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.name">name</a></code> | <code>java.lang.String</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.nameByIdp">nameByIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A mapping from IdP ID to claim name. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `nameByIdp`<sup>Optional</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource.property.nameByIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNameByIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name_by_idp AccessApplication#name_by_idp}

---

### AccessApplicationSaasAppHybridAndImplicitOptions <a name="AccessApplicationSaasAppHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppHybridAndImplicitOptions;

AccessApplicationSaasAppHybridAndImplicitOptions.builder()
//  .returnAccessTokenFromAuthorizationEndpoint(java.lang.Boolean)
//  .returnAccessTokenFromAuthorizationEndpoint(IResolvable)
//  .returnIdTokenFromAuthorizationEndpoint(java.lang.Boolean)
//  .returnIdTokenFromAuthorizationEndpoint(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint">returnAccessTokenFromAuthorizationEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the authorization endpoint will return an access token. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint">returnIdTokenFromAuthorizationEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the authorization endpoint will return an id token. |

---

##### `returnAccessTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="returnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```java
public java.lang.Object getReturnAccessTokenFromAuthorizationEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the authorization endpoint will return an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#return_access_token_from_authorization_endpoint AccessApplication#return_access_token_from_authorization_endpoint}

---

##### `returnIdTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="returnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint"></a>

```java
public java.lang.Object getReturnIdTokenFromAuthorizationEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the authorization endpoint will return an id token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#return_id_token_from_authorization_endpoint AccessApplication#return_id_token_from_authorization_endpoint}

---

### AccessApplicationSaasAppRefreshTokenOptions <a name="AccessApplicationSaasAppRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppRefreshTokenOptions;

AccessApplicationSaasAppRefreshTokenOptions.builder()
//  .lifetime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.property.lifetime">lifetime</a></code> | <code>java.lang.String</code> | How long a refresh token will be valid for after creation. |

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions.property.lifetime"></a>

```java
public java.lang.String getLifetime();
```

- *Type:* java.lang.String

How long a refresh token will be valid for after creation.

Valid units are `m`, `h` and `d`. Must be longer than 1m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#lifetime AccessApplication#lifetime}

---

### AccessApplicationScimConfig <a name="AccessApplicationScimConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfig;

AccessApplicationScimConfig.builder()
    .idpUid(java.lang.String)
    .remoteUri(java.lang.String)
//  .authentication(AccessApplicationScimConfigAuthentication)
//  .deactivateOnDelete(java.lang.Boolean)
//  .deactivateOnDelete(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .mappings(IResolvable)
//  .mappings(java.util.List<AccessApplicationScimConfigMappings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.idpUid">idpUid</a></code> | <code>java.lang.String</code> | The UID of the IdP to use as the source for SCIM resources to provision to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.remoteUri">remoteUri</a></code> | <code>java.lang.String</code> | The base URI for the application's SCIM-compatible API. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.deactivateOnDelete">deactivateOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If false, propagates DELETE requests to the target application for SCIM resources. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether SCIM provisioning is turned on for this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.mappings">mappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>></code> | mappings block. |

---

##### `idpUid`<sup>Required</sup> <a name="idpUid" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.idpUid"></a>

```java
public java.lang.String getIdpUid();
```

- *Type:* java.lang.String

The UID of the IdP to use as the source for SCIM resources to provision to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#idp_uid AccessApplication#idp_uid}

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.remoteUri"></a>

```java
public java.lang.String getRemoteUri();
```

- *Type:* java.lang.String

The base URI for the application's SCIM-compatible API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#remote_uri AccessApplication#remote_uri}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.authentication"></a>

```java
public AccessApplicationScimConfigAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#authentication AccessApplication#authentication}

---

##### `deactivateOnDelete`<sup>Optional</sup> <a name="deactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.deactivateOnDelete"></a>

```java
public java.lang.Object getDeactivateOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If false, propagates DELETE requests to the target application for SCIM resources.

If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#deactivate_on_delete AccessApplication#deactivate_on_delete}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether SCIM provisioning is turned on for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#enabled AccessApplication#enabled}

---

##### `mappings`<sup>Optional</sup> <a name="mappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig.property.mappings"></a>

```java
public java.lang.Object getMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>>

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#mappings AccessApplication#mappings}

---

### AccessApplicationScimConfigAuthentication <a name="AccessApplicationScimConfigAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigAuthentication;

AccessApplicationScimConfigAuthentication.builder()
    .scheme(java.lang.String)
//  .authorizationUrl(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .password(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .token(java.lang.String)
//  .tokenUrl(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scheme">scheme</a></code> | <code>java.lang.String</code> | The authentication scheme to use when making SCIM requests to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | URL used to generate the auth code used during token generation. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID used to authenticate when generating a token for authenticating with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Secret used to authenticate when generating a token for authenticating with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.password">password</a></code> | <code>java.lang.String</code> | Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The authorization scopes to request when generating the token used to authenticate with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.token">token</a></code> | <code>java.lang.String</code> | Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | URL used to generate the token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.user">user</a></code> | <code>java.lang.String</code> | User name used to authenticate with the remote SCIM service. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

The authentication scheme to use when making SCIM requests to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#scheme AccessApplication#scheme}

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

URL used to generate the auth code used during token generation.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#authorization_url AccessApplication#authorization_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#client_id AccessApplication#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Secret used to authenticate when generating a token for authenticating with the remove SCIM service.

Required when using `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#client_secret AccessApplication#client_secret}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#password AccessApplication#password}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.

Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#scopes AccessApplication#scopes}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#token AccessApplication#token}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

URL used to generate the token used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.client_id`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#token_url AccessApplication#token_url}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

User name used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.password`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#user AccessApplication#user}

---

### AccessApplicationScimConfigMappings <a name="AccessApplicationScimConfigMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigMappings;

AccessApplicationScimConfigMappings.builder()
    .schema(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filter(java.lang.String)
//  .operations(AccessApplicationScimConfigMappingsOperations)
//  .transformJsonata(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.schema">schema</a></code> | <code>java.lang.String</code> | Which SCIM resource type this mapping applies to. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not this mapping is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.filter">filter</a></code> | <code>java.lang.String</code> | A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | operations block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.transformJsonata">transformJsonata</a></code> | <code>java.lang.String</code> | A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Which SCIM resource type this mapping applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#schema AccessApplication#schema}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not this mapping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#enabled AccessApplication#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#filter AccessApplication#filter}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.operations"></a>

```java
public AccessApplicationScimConfigMappingsOperations getOperations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#operations AccessApplication#operations}

---

##### `transformJsonata`<sup>Optional</sup> <a name="transformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings.property.transformJsonata"></a>

```java
public java.lang.String getTransformJsonata();
```

- *Type:* java.lang.String

A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#transform_jsonata AccessApplication#transform_jsonata}

---

### AccessApplicationScimConfigMappingsOperations <a name="AccessApplicationScimConfigMappingsOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigMappingsOperations;

AccessApplicationScimConfigMappingsOperations.builder()
//  .create(java.lang.Boolean)
//  .create(IResolvable)
//  .delete(java.lang.Boolean)
//  .delete(IResolvable)
//  .update(java.lang.Boolean)
//  .update(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not this mapping applies to create (POST) operations. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not this mapping applies to DELETE operations. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.update">update</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not this mapping applies to update (PATCH/PUT) operations. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not this mapping applies to create (POST) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#create AccessApplication#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not this mapping applies to DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#delete AccessApplication#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations.property.update"></a>

```java
public java.lang.Object getUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not this mapping applies to update (PATCH/PUT) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#update AccessApplication#update}

---

### AccessApplicationTargetCriteria <a name="AccessApplicationTargetCriteria" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationTargetCriteria;

AccessApplicationTargetCriteria.builder()
    .port(java.lang.Number)
    .protocol(java.lang.String)
    .targetAttributes(IResolvable)
    .targetAttributes(java.util.List<AccessApplicationTargetCriteriaTargetAttributes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.port">port</a></code> | <code>java.lang.Number</code> | The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The communication protocol your application secures. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.targetAttributes">targetAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>></code> | target_attributes block. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#port AccessApplication#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The communication protocol your application secures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#protocol AccessApplication#protocol}

---

##### `targetAttributes`<sup>Required</sup> <a name="targetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria.property.targetAttributes"></a>

```java
public java.lang.Object getTargetAttributes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>>

target_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#target_attributes AccessApplication#target_attributes}

---

### AccessApplicationTargetCriteriaTargetAttributes <a name="AccessApplicationTargetCriteriaTargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationTargetCriteriaTargetAttributes;

AccessApplicationTargetCriteriaTargetAttributes.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.name">name</a></code> | <code>java.lang.String</code> | The key of the attribute. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The values of the attribute. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#name AccessApplication#name}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The values of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/access_application#values AccessApplication#values}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessApplicationCorsHeadersList <a name="AccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationCorsHeadersList;

new AccessApplicationCorsHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get"></a>

```java
public AccessApplicationCorsHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>>

---


### AccessApplicationCorsHeadersOutputReference <a name="AccessApplicationCorsHeadersOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationCorsHeadersOutputReference;

new AccessApplicationCorsHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders">resetAllowAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods">resetAllowAllMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins">resetAllowAllOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAllHeaders` <a name="resetAllowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders"></a>

```java
public void resetAllowAllHeaders()
```

##### `resetAllowAllMethods` <a name="resetAllowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods"></a>

```java
public void resetAllowAllMethods()
```

##### `resetAllowAllOrigins` <a name="resetAllowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins"></a>

```java
public void resetAllowAllOrigins()
```

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders"></a>

```java
public void resetAllowedHeaders()
```

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods"></a>

```java
public void resetAllowedMethods()
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins"></a>

```java
public void resetAllowedOrigins()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput">allowAllHeadersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput">allowAllMethodsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput">allowAllOriginsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders">allowAllHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods">allowAllMethods</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins">allowAllOrigins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAllHeadersInput`<sup>Optional</sup> <a name="allowAllHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput"></a>

```java
public java.lang.Object getAllowAllHeadersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAllMethodsInput`<sup>Optional</sup> <a name="allowAllMethodsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput"></a>

```java
public java.lang.Object getAllowAllMethodsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAllOriginsInput`<sup>Optional</sup> <a name="allowAllOriginsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput"></a>

```java
public java.lang.Object getAllowAllOriginsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Object getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `allowAllHeaders`<sup>Required</sup> <a name="allowAllHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders"></a>

```java
public java.lang.Object getAllowAllHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAllMethods`<sup>Required</sup> <a name="allowAllMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods"></a>

```java
public java.lang.Object getAllowAllMethods();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAllOrigins`<sup>Required</sup> <a name="allowAllOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins"></a>

```java
public java.lang.Object getAllowAllOrigins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>

---


### AccessApplicationFooterLinksList <a name="AccessApplicationFooterLinksList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationFooterLinksList;

new AccessApplicationFooterLinksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get"></a>

```java
public AccessApplicationFooterLinksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>>

---


### AccessApplicationFooterLinksOutputReference <a name="AccessApplicationFooterLinksOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationFooterLinksOutputReference;

new AccessApplicationFooterLinksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationFooterLinks">AccessApplicationFooterLinks</a>

---


### AccessApplicationLandingPageDesignOutputReference <a name="AccessApplicationLandingPageDesignOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationLandingPageDesignOutputReference;

new AccessApplicationLandingPageDesignOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonColor">resetButtonColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonTextColor">resetButtonTextColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetImageUrl">resetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetButtonColor` <a name="resetButtonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonColor"></a>

```java
public void resetButtonColor()
```

##### `resetButtonTextColor` <a name="resetButtonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetButtonTextColor"></a>

```java
public void resetButtonTextColor()
```

##### `resetImageUrl` <a name="resetImageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetImageUrl"></a>

```java
public void resetImageUrl()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColorInput">buttonColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput">buttonTextColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColor">buttonColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColor">buttonTextColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buttonColorInput`<sup>Optional</sup> <a name="buttonColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColorInput"></a>

```java
public java.lang.String getButtonColorInput();
```

- *Type:* java.lang.String

---

##### `buttonTextColorInput`<sup>Optional</sup> <a name="buttonTextColorInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput"></a>

```java
public java.lang.String getButtonTextColorInput();
```

- *Type:* java.lang.String

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrlInput"></a>

```java
public java.lang.String getImageUrlInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `buttonColor`<sup>Required</sup> <a name="buttonColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonColor"></a>

```java
public java.lang.String getButtonColor();
```

- *Type:* java.lang.String

---

##### `buttonTextColor`<sup>Required</sup> <a name="buttonTextColor" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.buttonTextColor"></a>

```java
public java.lang.String getButtonTextColor();
```

- *Type:* java.lang.String

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesignOutputReference.property.internalValue"></a>

```java
public AccessApplicationLandingPageDesign getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationLandingPageDesign">AccessApplicationLandingPageDesign</a>

---


### AccessApplicationSaasAppCustomAttributeList <a name="AccessApplicationSaasAppCustomAttributeList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomAttributeList;

new AccessApplicationSaasAppCustomAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get"></a>

```java
public AccessApplicationSaasAppCustomAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>>

---


### AccessApplicationSaasAppCustomAttributeOutputReference <a name="AccessApplicationSaasAppCustomAttributeOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomAttributeOutputReference;

new AccessApplicationSaasAppCustomAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat">resetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource"></a>

```java
public void putSource(AccessApplicationSaasAppCustomAttributeSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName"></a>

```java
public void resetFriendlyName()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNameFormat` <a name="resetNameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat"></a>

```java
public void resetNameFormat()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference">AccessApplicationSaasAppCustomAttributeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput">friendlyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput">nameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat">nameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.source"></a>

```java
public AccessApplicationSaasAppCustomAttributeSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference">AccessApplicationSaasAppCustomAttributeSourceOutputReference</a>

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput"></a>

```java
public java.lang.String getFriendlyNameInput();
```

- *Type:* java.lang.String

---

##### `nameFormatInput`<sup>Optional</sup> <a name="nameFormatInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput"></a>

```java
public java.lang.String getNameFormatInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput"></a>

```java
public AccessApplicationSaasAppCustomAttributeSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameFormat`<sup>Required</sup> <a name="nameFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat"></a>

```java
public java.lang.String getNameFormat();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>

---


### AccessApplicationSaasAppCustomAttributeSourceOutputReference <a name="AccessApplicationSaasAppCustomAttributeSourceOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomAttributeSourceOutputReference;

new AccessApplicationSaasAppCustomAttributeSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp">resetNameByIdp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameByIdp` <a name="resetNameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp"></a>

```java
public void resetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput">nameByIdpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp">nameByIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameByIdpInput`<sup>Optional</sup> <a name="nameByIdpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNameByIdpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameByIdp`<sup>Required</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNameByIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue"></a>

```java
public AccessApplicationSaasAppCustomAttributeSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeSource">AccessApplicationSaasAppCustomAttributeSource</a>

---


### AccessApplicationSaasAppCustomClaimList <a name="AccessApplicationSaasAppCustomClaimList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomClaimList;

new AccessApplicationSaasAppCustomClaimList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get"></a>

```java
public AccessApplicationSaasAppCustomClaimOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>>

---


### AccessApplicationSaasAppCustomClaimOutputReference <a name="AccessApplicationSaasAppCustomClaimOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomClaimOutputReference;

new AccessApplicationSaasAppCustomClaimOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource"></a>

```java
public void putSource(AccessApplicationSaasAppCustomClaimSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference">AccessApplicationSaasAppCustomClaimSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.source"></a>

```java
public AccessApplicationSaasAppCustomClaimSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference">AccessApplicationSaasAppCustomClaimSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput"></a>

```java
public AccessApplicationSaasAppCustomClaimSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>

---


### AccessApplicationSaasAppCustomClaimSourceOutputReference <a name="AccessApplicationSaasAppCustomClaimSourceOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppCustomClaimSourceOutputReference;

new AccessApplicationSaasAppCustomClaimSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp">resetNameByIdp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameByIdp` <a name="resetNameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp"></a>

```java
public void resetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput">nameByIdpInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp">nameByIdp</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameByIdpInput`<sup>Optional</sup> <a name="nameByIdpInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNameByIdpInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameByIdp`<sup>Required</sup> <a name="nameByIdp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNameByIdp();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue"></a>

```java
public AccessApplicationSaasAppCustomClaimSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimSource">AccessApplicationSaasAppCustomClaimSource</a>

---


### AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference <a name="AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference;

new AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint">resetReturnAccessTokenFromAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint">resetReturnIdTokenFromAuthorizationEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReturnAccessTokenFromAuthorizationEndpoint` <a name="resetReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint"></a>

```java
public void resetReturnAccessTokenFromAuthorizationEndpoint()
```

##### `resetReturnIdTokenFromAuthorizationEndpoint` <a name="resetReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint"></a>

```java
public void resetReturnIdTokenFromAuthorizationEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput">returnAccessTokenFromAuthorizationEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput">returnIdTokenFromAuthorizationEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint">returnAccessTokenFromAuthorizationEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint">returnIdTokenFromAuthorizationEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `returnAccessTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="returnAccessTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput"></a>

```java
public java.lang.Object getReturnAccessTokenFromAuthorizationEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `returnIdTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="returnIdTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput"></a>

```java
public java.lang.Object getReturnIdTokenFromAuthorizationEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `returnAccessTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="returnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```java
public java.lang.Object getReturnAccessTokenFromAuthorizationEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `returnIdTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="returnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint"></a>

```java
public java.lang.Object getReturnIdTokenFromAuthorizationEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue"></a>

```java
public AccessApplicationSaasAppHybridAndImplicitOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---


### AccessApplicationSaasAppOutputReference <a name="AccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppOutputReference;

new AccessApplicationSaasAppOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute">putCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim">putCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions">putHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions">putRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAccessTokenLifetime">resetAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret">resetAllowPkceWithoutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAppLauncherUrl">resetAppLauncherUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetConsumerServiceUrl">resetConsumerServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute">resetCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomClaim">resetCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetDefaultRelayState">resetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGrantTypes">resetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGroupFilterRegex">resetGroupFilterRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions">resetHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat">resetNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata">resetNameIdTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRefreshTokenOptions">resetRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata">resetSamlAttributeTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSpEntityId">resetSpEntityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomAttribute` <a name="putCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute"></a>

```java
public void putCustomAttribute(IResolvable OR java.util.List<AccessApplicationSaasAppCustomAttribute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomAttribute.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>>

---

##### `putCustomClaim` <a name="putCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim"></a>

```java
public void putCustomClaim(IResolvable OR java.util.List<AccessApplicationSaasAppCustomClaim> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>>

---

##### `putHybridAndImplicitOptions` <a name="putHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions"></a>

```java
public void putHybridAndImplicitOptions(AccessApplicationSaasAppHybridAndImplicitOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `putRefreshTokenOptions` <a name="putRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions"></a>

```java
public void putRefreshTokenOptions(IResolvable OR java.util.List<AccessApplicationSaasAppRefreshTokenOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.putRefreshTokenOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>>

---

##### `resetAccessTokenLifetime` <a name="resetAccessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAccessTokenLifetime"></a>

```java
public void resetAccessTokenLifetime()
```

##### `resetAllowPkceWithoutClientSecret` <a name="resetAllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret"></a>

```java
public void resetAllowPkceWithoutClientSecret()
```

##### `resetAppLauncherUrl` <a name="resetAppLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAppLauncherUrl"></a>

```java
public void resetAppLauncherUrl()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetConsumerServiceUrl` <a name="resetConsumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetConsumerServiceUrl"></a>

```java
public void resetConsumerServiceUrl()
```

##### `resetCustomAttribute` <a name="resetCustomAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomAttribute"></a>

```java
public void resetCustomAttribute()
```

##### `resetCustomClaim` <a name="resetCustomClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetCustomClaim"></a>

```java
public void resetCustomClaim()
```

##### `resetDefaultRelayState` <a name="resetDefaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetDefaultRelayState"></a>

```java
public void resetDefaultRelayState()
```

##### `resetGrantTypes` <a name="resetGrantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGrantTypes"></a>

```java
public void resetGrantTypes()
```

##### `resetGroupFilterRegex` <a name="resetGroupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetGroupFilterRegex"></a>

```java
public void resetGroupFilterRegex()
```

##### `resetHybridAndImplicitOptions` <a name="resetHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions"></a>

```java
public void resetHybridAndImplicitOptions()
```

##### `resetNameIdFormat` <a name="resetNameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```java
public void resetNameIdFormat()
```

##### `resetNameIdTransformJsonata` <a name="resetNameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata"></a>

```java
public void resetNameIdTransformJsonata()
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRedirectUris"></a>

```java
public void resetRedirectUris()
```

##### `resetRefreshTokenOptions` <a name="resetRefreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetRefreshTokenOptions"></a>

```java
public void resetRefreshTokenOptions()
```

##### `resetSamlAttributeTransformJsonata` <a name="resetSamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata"></a>

```java
public void resetSamlAttributeTransformJsonata()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSpEntityId` <a name="resetSpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetSpEntityId"></a>

```java
public void resetSpEntityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute">customAttribute</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaim">customClaim</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList">AccessApplicationSaasAppCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions">hybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.idpEntityId">idpEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptions">refreshTokenOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList">AccessApplicationSaasAppRefreshTokenOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint">ssoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput">accessTokenLifetimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput">allowPkceWithoutClientSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrlInput">appLauncherUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">consumerServiceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttributeInput">customAttributeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaimInput">customClaimInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayStateInput">defaultRelayStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypesInput">grantTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegexInput">groupFilterRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput">hybridAndImplicitOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput">nameIdFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput">nameIdTransformJsonataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput">refreshTokenOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput">samlAttributeTransformJsonataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput">spEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetime">accessTokenLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret">allowPkceWithoutClientSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrl">appLauncherUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl">consumerServiceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegex">groupFilterRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat">nameIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata">nameIdTransformJsonata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata">samlAttributeTransformJsonata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId">spEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `customAttribute`<sup>Required</sup> <a name="customAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttribute"></a>

```java
public AccessApplicationSaasAppCustomAttributeList getCustomAttribute();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttributeList">AccessApplicationSaasAppCustomAttributeList</a>

---

##### `customClaim`<sup>Required</sup> <a name="customClaim" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaim"></a>

```java
public AccessApplicationSaasAppCustomClaimList getCustomClaim();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaimList">AccessApplicationSaasAppCustomClaimList</a>

---

##### `hybridAndImplicitOptions`<sup>Required</sup> <a name="hybridAndImplicitOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions"></a>

```java
public AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference getHybridAndImplicitOptions();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">AccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a>

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.idpEntityId"></a>

```java
public java.lang.String getIdpEntityId();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `refreshTokenOptions`<sup>Required</sup> <a name="refreshTokenOptions" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptions"></a>

```java
public AccessApplicationSaasAppRefreshTokenOptionsList getRefreshTokenOptions();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList">AccessApplicationSaasAppRefreshTokenOptionsList</a>

---

##### `ssoEndpoint`<sup>Required</sup> <a name="ssoEndpoint" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.ssoEndpoint"></a>

```java
public java.lang.String getSsoEndpoint();
```

- *Type:* java.lang.String

---

##### `accessTokenLifetimeInput`<sup>Optional</sup> <a name="accessTokenLifetimeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput"></a>

```java
public java.lang.String getAccessTokenLifetimeInput();
```

- *Type:* java.lang.String

---

##### `allowPkceWithoutClientSecretInput`<sup>Optional</sup> <a name="allowPkceWithoutClientSecretInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput"></a>

```java
public java.lang.Object getAllowPkceWithoutClientSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appLauncherUrlInput`<sup>Optional</sup> <a name="appLauncherUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrlInput"></a>

```java
public java.lang.String getAppLauncherUrlInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `consumerServiceUrlInput`<sup>Optional</sup> <a name="consumerServiceUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput"></a>

```java
public java.lang.String getConsumerServiceUrlInput();
```

- *Type:* java.lang.String

---

##### `customAttributeInput`<sup>Optional</sup> <a name="customAttributeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customAttributeInput"></a>

```java
public java.lang.Object getCustomAttributeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomAttribute">AccessApplicationSaasAppCustomAttribute</a>>

---

##### `customClaimInput`<sup>Optional</sup> <a name="customClaimInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.customClaimInput"></a>

```java
public java.lang.Object getCustomClaimInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppCustomClaim">AccessApplicationSaasAppCustomClaim</a>>

---

##### `defaultRelayStateInput`<sup>Optional</sup> <a name="defaultRelayStateInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayStateInput"></a>

```java
public java.lang.String getDefaultRelayStateInput();
```

- *Type:* java.lang.String

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypesInput"></a>

```java
public java.util.List<java.lang.String> getGrantTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupFilterRegexInput`<sup>Optional</sup> <a name="groupFilterRegexInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegexInput"></a>

```java
public java.lang.String getGroupFilterRegexInput();
```

- *Type:* java.lang.String

---

##### `hybridAndImplicitOptionsInput`<sup>Optional</sup> <a name="hybridAndImplicitOptionsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput"></a>

```java
public AccessApplicationSaasAppHybridAndImplicitOptions getHybridAndImplicitOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppHybridAndImplicitOptions">AccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `nameIdFormatInput`<sup>Optional</sup> <a name="nameIdFormatInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```java
public java.lang.String getNameIdFormatInput();
```

- *Type:* java.lang.String

---

##### `nameIdTransformJsonataInput`<sup>Optional</sup> <a name="nameIdTransformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput"></a>

```java
public java.lang.String getNameIdTransformJsonataInput();
```

- *Type:* java.lang.String

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenOptionsInput`<sup>Optional</sup> <a name="refreshTokenOptionsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput"></a>

```java
public java.lang.Object getRefreshTokenOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>>

---

##### `samlAttributeTransformJsonataInput`<sup>Optional</sup> <a name="samlAttributeTransformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput"></a>

```java
public java.lang.String getSamlAttributeTransformJsonataInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spEntityIdInput`<sup>Optional</sup> <a name="spEntityIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```java
public java.lang.String getSpEntityIdInput();
```

- *Type:* java.lang.String

---

##### `accessTokenLifetime`<sup>Required</sup> <a name="accessTokenLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.accessTokenLifetime"></a>

```java
public java.lang.String getAccessTokenLifetime();
```

- *Type:* java.lang.String

---

##### `allowPkceWithoutClientSecret`<sup>Required</sup> <a name="allowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret"></a>

```java
public java.lang.Object getAllowPkceWithoutClientSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appLauncherUrl`<sup>Required</sup> <a name="appLauncherUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.appLauncherUrl"></a>

```java
public java.lang.String getAppLauncherUrl();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `consumerServiceUrl`<sup>Required</sup> <a name="consumerServiceUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```java
public java.lang.String getConsumerServiceUrl();
```

- *Type:* java.lang.String

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.defaultRelayState"></a>

```java
public java.lang.String getDefaultRelayState();
```

- *Type:* java.lang.String

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupFilterRegex`<sup>Required</sup> <a name="groupFilterRegex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.groupFilterRegex"></a>

```java
public java.lang.String getGroupFilterRegex();
```

- *Type:* java.lang.String

---

##### `nameIdFormat`<sup>Required</sup> <a name="nameIdFormat" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```java
public java.lang.String getNameIdFormat();
```

- *Type:* java.lang.String

---

##### `nameIdTransformJsonata`<sup>Required</sup> <a name="nameIdTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata"></a>

```java
public java.lang.String getNameIdTransformJsonata();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samlAttributeTransformJsonata`<sup>Required</sup> <a name="samlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata"></a>

```java
public java.lang.String getSamlAttributeTransformJsonata();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId"></a>

```java
public java.lang.String getSpEntityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue"></a>

```java
public AccessApplicationSaasApp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---


### AccessApplicationSaasAppRefreshTokenOptionsList <a name="AccessApplicationSaasAppRefreshTokenOptionsList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppRefreshTokenOptionsList;

new AccessApplicationSaasAppRefreshTokenOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get"></a>

```java
public AccessApplicationSaasAppRefreshTokenOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>>

---


### AccessApplicationSaasAppRefreshTokenOptionsOutputReference <a name="AccessApplicationSaasAppRefreshTokenOptionsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationSaasAppRefreshTokenOptionsOutputReference;

new AccessApplicationSaasAppRefreshTokenOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime"></a>

```java
public void resetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime">lifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput"></a>

```java
public java.lang.String getLifetimeInput();
```

- *Type:* java.lang.String

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime"></a>

```java
public java.lang.String getLifetime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppRefreshTokenOptions">AccessApplicationSaasAppRefreshTokenOptions</a>

---


### AccessApplicationScimConfigAuthenticationOutputReference <a name="AccessApplicationScimConfigAuthenticationOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigAuthenticationOutputReference;

new AccessApplicationScimConfigAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl">resetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationUrl` <a name="resetAuthorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl"></a>

```java
public void resetAuthorizationUrl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl"></a>

```java
public void resetTokenUrl()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput"></a>

```java
public java.lang.String getAuthorizationUrlInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput"></a>

```java
public java.lang.String getTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference.property.internalValue"></a>

```java
public AccessApplicationScimConfigAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

---


### AccessApplicationScimConfigMappingsList <a name="AccessApplicationScimConfigMappingsList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigMappingsList;

new AccessApplicationScimConfigMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get"></a>

```java
public AccessApplicationScimConfigMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>>

---


### AccessApplicationScimConfigMappingsOperationsOutputReference <a name="AccessApplicationScimConfigMappingsOperationsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigMappingsOperationsOutputReference;

new AccessApplicationScimConfigMappingsOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.update">update</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput"></a>

```java
public java.lang.Object getCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput"></a>

```java
public java.lang.Object getDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput"></a>

```java
public java.lang.Object getUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.update"></a>

```java
public java.lang.Object getUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue"></a>

```java
public AccessApplicationScimConfigMappingsOperations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---


### AccessApplicationScimConfigMappingsOutputReference <a name="AccessApplicationScimConfigMappingsOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigMappingsOutputReference;

new AccessApplicationScimConfigMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata">resetTransformJsonata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations"></a>

```java
public void putOperations(AccessApplicationScimConfigMappingsOperations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.putOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetTransformJsonata` <a name="resetTransformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata"></a>

```java
public void resetTransformJsonata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference">AccessApplicationScimConfigMappingsOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operationsInput">operationsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput">transformJsonataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonata">transformJsonata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operations"></a>

```java
public AccessApplicationScimConfigMappingsOperationsOutputReference getOperations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperationsOutputReference">AccessApplicationScimConfigMappingsOperationsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.operationsInput"></a>

```java
public AccessApplicationScimConfigMappingsOperations getOperationsInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOperations">AccessApplicationScimConfigMappingsOperations</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `transformJsonataInput`<sup>Optional</sup> <a name="transformJsonataInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput"></a>

```java
public java.lang.String getTransformJsonataInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `transformJsonata`<sup>Required</sup> <a name="transformJsonata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.transformJsonata"></a>

```java
public java.lang.String getTransformJsonata();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>

---


### AccessApplicationScimConfigOutputReference <a name="AccessApplicationScimConfigOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationScimConfigOutputReference;

new AccessApplicationScimConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings">putMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetDeactivateOnDelete">resetDeactivateOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetMappings">resetMappings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication"></a>

```java
public void putAuthentication(AccessApplicationScimConfigAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

---

##### `putMappings` <a name="putMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings"></a>

```java
public void putMappings(IResolvable OR java.util.List<AccessApplicationScimConfigMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.putMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetDeactivateOnDelete` <a name="resetDeactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetDeactivateOnDelete"></a>

```java
public void resetDeactivateOnDelete()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMappings` <a name="resetMappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.resetMappings"></a>

```java
public void resetMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference">AccessApplicationScimConfigAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappings">mappings</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList">AccessApplicationScimConfigMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput">deactivateOnDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUidInput">idpUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappingsInput">mappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUriInput">remoteUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDelete">deactivateOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUid">idpUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUri">remoteUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authentication"></a>

```java
public AccessApplicationScimConfigAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthenticationOutputReference">AccessApplicationScimConfigAuthenticationOutputReference</a>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappings"></a>

```java
public AccessApplicationScimConfigMappingsList getMappings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappingsList">AccessApplicationScimConfigMappingsList</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.authenticationInput"></a>

```java
public AccessApplicationScimConfigAuthentication getAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigAuthentication">AccessApplicationScimConfigAuthentication</a>

---

##### `deactivateOnDeleteInput`<sup>Optional</sup> <a name="deactivateOnDeleteInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput"></a>

```java
public java.lang.Object getDeactivateOnDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpUidInput`<sup>Optional</sup> <a name="idpUidInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUidInput"></a>

```java
public java.lang.String getIdpUidInput();
```

- *Type:* java.lang.String

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.mappingsInput"></a>

```java
public java.lang.Object getMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigMappings">AccessApplicationScimConfigMappings</a>>

---

##### `remoteUriInput`<sup>Optional</sup> <a name="remoteUriInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUriInput"></a>

```java
public java.lang.String getRemoteUriInput();
```

- *Type:* java.lang.String

---

##### `deactivateOnDelete`<sup>Required</sup> <a name="deactivateOnDelete" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.deactivateOnDelete"></a>

```java
public java.lang.Object getDeactivateOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpUid`<sup>Required</sup> <a name="idpUid" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.idpUid"></a>

```java
public java.lang.String getIdpUid();
```

- *Type:* java.lang.String

---

##### `remoteUri`<sup>Required</sup> <a name="remoteUri" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.remoteUri"></a>

```java
public java.lang.String getRemoteUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfigOutputReference.property.internalValue"></a>

```java
public AccessApplicationScimConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationScimConfig">AccessApplicationScimConfig</a>

---


### AccessApplicationTargetCriteriaList <a name="AccessApplicationTargetCriteriaList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationTargetCriteriaList;

new AccessApplicationTargetCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get"></a>

```java
public AccessApplicationTargetCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>>

---


### AccessApplicationTargetCriteriaOutputReference <a name="AccessApplicationTargetCriteriaOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationTargetCriteriaOutputReference;

new AccessApplicationTargetCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes">putTargetAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetAttributes` <a name="putTargetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes"></a>

```java
public void putTargetAttributes(IResolvable OR java.util.List<AccessApplicationTargetCriteriaTargetAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.putTargetAttributes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributes">targetAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList">AccessApplicationTargetCriteriaTargetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput">targetAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetAttributes`<sup>Required</sup> <a name="targetAttributes" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributes"></a>

```java
public AccessApplicationTargetCriteriaTargetAttributesList getTargetAttributes();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList">AccessApplicationTargetCriteriaTargetAttributesList</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `targetAttributesInput`<sup>Optional</sup> <a name="targetAttributesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput"></a>

```java
public java.lang.Object getTargetAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteria">AccessApplicationTargetCriteria</a>

---


### AccessApplicationTargetCriteriaTargetAttributesList <a name="AccessApplicationTargetCriteriaTargetAttributesList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationTargetCriteriaTargetAttributesList;

new AccessApplicationTargetCriteriaTargetAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get"></a>

```java
public AccessApplicationTargetCriteriaTargetAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>>

---


### AccessApplicationTargetCriteriaTargetAttributesOutputReference <a name="AccessApplicationTargetCriteriaTargetAttributesOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_application.AccessApplicationTargetCriteriaTargetAttributesOutputReference;

new AccessApplicationTargetCriteriaTargetAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationTargetCriteriaTargetAttributes">AccessApplicationTargetCriteriaTargetAttributes</a>

---



