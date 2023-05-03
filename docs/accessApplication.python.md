# `cloudflare_access_application`

Refer to the Terraform Registory for docs: [`cloudflare_access_application`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application).

# `accessApplication` Submodule <a name="`accessApplication` Submodule" id="@cdktf/provider-cloudflare.accessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessApplication <a name="AccessApplication" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application cloudflare_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  allowed_idps: typing.List[str] = None,
  app_launcher_visible: typing.Union[bool, IResolvable] = None,
  auto_redirect_to_identity: typing.Union[bool, IResolvable] = None,
  cors_headers: typing.Union[IResolvable, typing.List[AccessApplicationCorsHeaders]] = None,
  custom_deny_message: str = None,
  custom_deny_url: str = None,
  domain: str = None,
  enable_binding_cookie: typing.Union[bool, IResolvable] = None,
  http_only_cookie_attribute: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo_url: str = None,
  saas_app: AccessApplicationSaasApp = None,
  same_site_cookie_attribute: str = None,
  service_auth401_redirect: typing.Union[bool, IResolvable] = None,
  session_duration: str = None,
  skip_interstitial: typing.Union[bool, IResolvable] = None,
  type: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.allowedIdps">allowed_idps</a></code> | <code>typing.List[str]</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.appLauncherVisible">app_launcher_visible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.autoRedirectToIdentity">auto_redirect_to_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.corsHeaders">cors_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyMessage">custom_deny_message</a></code> | <code>str</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyUrl">custom_deny_url</a></code> | <code>str</code> | Option that redirects to a custom URL when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The complete URL of the asset you wish to put Cloudflare Access in front of. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.enableBindingCookie">enable_binding_cookie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.httpOnlyCookieAttribute">http_only_cookie_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#id AccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.logoUrl">logo_url</a></code> | <code>str</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.saasApp">saas_app</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sameSiteCookieAttribute">same_site_cookie_attribute</a></code> | <code>str</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.serviceAuth401Redirect">service_auth401_redirect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sessionDuration">session_duration</a></code> | <code>str</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.skipInterstitial">skip_interstitial</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.type">type</a></code> | <code>str</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.name"></a>

- *Type:* str

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#name AccessApplication#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#account_id AccessApplication#account_id}

---

##### `allowed_idps`<sup>Optional</sup> <a name="allowed_idps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.allowedIdps"></a>

- *Type:* typing.List[str]

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}

---

##### `app_launcher_visible`<sup>Optional</sup> <a name="app_launcher_visible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.appLauncherVisible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}

---

##### `auto_redirect_to_identity`<sup>Optional</sup> <a name="auto_redirect_to_identity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.autoRedirectToIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}

---

##### `cors_headers`<sup>Optional</sup> <a name="cors_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.corsHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}

---

##### `custom_deny_message`<sup>Optional</sup> <a name="custom_deny_message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyMessage"></a>

- *Type:* str

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}

---

##### `custom_deny_url`<sup>Optional</sup> <a name="custom_deny_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.customDenyUrl"></a>

- *Type:* str

Option that redirects to a custom URL when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.domain"></a>

- *Type:* str

The complete URL of the asset you wish to put Cloudflare Access in front of.

Can include subdomains or paths. Or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#domain AccessApplication#domain}

---

##### `enable_binding_cookie`<sup>Optional</sup> <a name="enable_binding_cookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.enableBindingCookie"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}

---

##### `http_only_cookie_attribute`<sup>Optional</sup> <a name="http_only_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.httpOnlyCookieAttribute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#id AccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo_url`<sup>Optional</sup> <a name="logo_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.logoUrl"></a>

- *Type:* str

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#logo_url AccessApplication#logo_url}

---

##### `saas_app`<sup>Optional</sup> <a name="saas_app" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.saasApp"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#saas_app AccessApplication#saas_app}

---

##### `same_site_cookie_attribute`<sup>Optional</sup> <a name="same_site_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sameSiteCookieAttribute"></a>

- *Type:* str

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}

---

##### `service_auth401_redirect`<sup>Optional</sup> <a name="service_auth401_redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.serviceAuth401Redirect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.sessionDuration"></a>

- *Type:* str

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#session_duration AccessApplication#session_duration}

---

##### `skip_interstitial`<sup>Optional</sup> <a name="skip_interstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.skipInterstitial"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.type"></a>

- *Type:* str

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#type AccessApplication#type}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#zone_id AccessApplication#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders">put_cors_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp">put_saas_app</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps">reset_allowed_idps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible">reset_app_launcher_visible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity">reset_auto_redirect_to_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders">reset_cors_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage">reset_custom_deny_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl">reset_custom_deny_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie">reset_enable_binding_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute">reset_http_only_cookie_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl">reset_logo_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp">reset_saas_app</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute">reset_same_site_cookie_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect">reset_service_auth401_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration">reset_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial">reset_skip_interstitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cors_headers` <a name="put_cors_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders"></a>

```python
def put_cors_headers(
  value: typing.Union[IResolvable, typing.List[AccessApplicationCorsHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putCorsHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]

---

##### `put_saas_app` <a name="put_saas_app" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp"></a>

```python
def put_saas_app(
  consumer_service_url: str,
  sp_entity_id: str,
  name_id_format: str = None
) -> None
```

###### `consumer_service_url`<sup>Required</sup> <a name="consumer_service_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp.parameter.consumerServiceUrl"></a>

- *Type:* str

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#consumer_service_url AccessApplication#consumer_service_url}

---

###### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp.parameter.spEntityId"></a>

- *Type:* str

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#sp_entity_id AccessApplication#sp_entity_id}

---

###### `name_id_format`<sup>Optional</sup> <a name="name_id_format" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.putSaasApp.parameter.nameIdFormat"></a>

- *Type:* str

The format of the name identifier sent to the SaaS application. Defaults to `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#name_id_format AccessApplication#name_id_format}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_allowed_idps` <a name="reset_allowed_idps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAllowedIdps"></a>

```python
def reset_allowed_idps() -> None
```

##### `reset_app_launcher_visible` <a name="reset_app_launcher_visible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAppLauncherVisible"></a>

```python
def reset_app_launcher_visible() -> None
```

##### `reset_auto_redirect_to_identity` <a name="reset_auto_redirect_to_identity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetAutoRedirectToIdentity"></a>

```python
def reset_auto_redirect_to_identity() -> None
```

##### `reset_cors_headers` <a name="reset_cors_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCorsHeaders"></a>

```python
def reset_cors_headers() -> None
```

##### `reset_custom_deny_message` <a name="reset_custom_deny_message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyMessage"></a>

```python
def reset_custom_deny_message() -> None
```

##### `reset_custom_deny_url` <a name="reset_custom_deny_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetCustomDenyUrl"></a>

```python
def reset_custom_deny_url() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_enable_binding_cookie` <a name="reset_enable_binding_cookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetEnableBindingCookie"></a>

```python
def reset_enable_binding_cookie() -> None
```

##### `reset_http_only_cookie_attribute` <a name="reset_http_only_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetHttpOnlyCookieAttribute"></a>

```python
def reset_http_only_cookie_attribute() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo_url` <a name="reset_logo_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetLogoUrl"></a>

```python
def reset_logo_url() -> None
```

##### `reset_saas_app` <a name="reset_saas_app" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSaasApp"></a>

```python
def reset_saas_app() -> None
```

##### `reset_same_site_cookie_attribute` <a name="reset_same_site_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSameSiteCookieAttribute"></a>

```python
def reset_same_site_cookie_attribute() -> None
```

##### `reset_service_auth401_redirect` <a name="reset_service_auth401_redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetServiceAuth401Redirect"></a>

```python
def reset_service_auth401_redirect() -> None
```

##### `reset_session_duration` <a name="reset_session_duration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSessionDuration"></a>

```python
def reset_session_duration() -> None
```

##### `reset_skip_interstitial` <a name="reset_skip_interstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetSkipInterstitial"></a>

```python
def reset_skip_interstitial() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplication.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud">aud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders">cors_headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp">saas_app</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput">allowed_idps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput">app_launcher_visible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput">auto_redirect_to_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput">cors_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput">custom_deny_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput">custom_deny_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput">enable_binding_cookie_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput">http_only_cookie_attribute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput">logo_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput">saas_app_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput">same_site_cookie_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput">service_auth401_redirect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput">session_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput">skip_interstitial_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps">allowed_idps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible">app_launcher_visible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity">auto_redirect_to_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage">custom_deny_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl">custom_deny_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie">enable_binding_cookie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute">http_only_cookie_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute">same_site_cookie_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect">service_auth401_redirect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration">session_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial">skip_interstitial</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aud`<sup>Required</sup> <a name="aud" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.aud"></a>

```python
aud: str
```

- *Type:* str

---

##### `cors_headers`<sup>Required</sup> <a name="cors_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeaders"></a>

```python
cors_headers: AccessApplicationCorsHeadersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList">AccessApplicationCorsHeadersList</a>

---

##### `saas_app`<sup>Required</sup> <a name="saas_app" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasApp"></a>

```python
saas_app: AccessApplicationSaasAppOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference">AccessApplicationSaasAppOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allowed_idps_input`<sup>Optional</sup> <a name="allowed_idps_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdpsInput"></a>

```python
allowed_idps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_launcher_visible_input`<sup>Optional</sup> <a name="app_launcher_visible_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisibleInput"></a>

```python
app_launcher_visible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_redirect_to_identity_input`<sup>Optional</sup> <a name="auto_redirect_to_identity_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentityInput"></a>

```python
auto_redirect_to_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cors_headers_input`<sup>Optional</sup> <a name="cors_headers_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.corsHeadersInput"></a>

```python
cors_headers_input: typing.Union[IResolvable, typing.List[AccessApplicationCorsHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]

---

##### `custom_deny_message_input`<sup>Optional</sup> <a name="custom_deny_message_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessageInput"></a>

```python
custom_deny_message_input: str
```

- *Type:* str

---

##### `custom_deny_url_input`<sup>Optional</sup> <a name="custom_deny_url_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrlInput"></a>

```python
custom_deny_url_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `enable_binding_cookie_input`<sup>Optional</sup> <a name="enable_binding_cookie_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookieInput"></a>

```python
enable_binding_cookie_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_only_cookie_attribute_input`<sup>Optional</sup> <a name="http_only_cookie_attribute_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttributeInput"></a>

```python
http_only_cookie_attribute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logo_url_input`<sup>Optional</sup> <a name="logo_url_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrlInput"></a>

```python
logo_url_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `saas_app_input`<sup>Optional</sup> <a name="saas_app_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.saasAppInput"></a>

```python
saas_app_input: AccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---

##### `same_site_cookie_attribute_input`<sup>Optional</sup> <a name="same_site_cookie_attribute_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttributeInput"></a>

```python
same_site_cookie_attribute_input: str
```

- *Type:* str

---

##### `service_auth401_redirect_input`<sup>Optional</sup> <a name="service_auth401_redirect_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401RedirectInput"></a>

```python
service_auth401_redirect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_duration_input`<sup>Optional</sup> <a name="session_duration_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDurationInput"></a>

```python
session_duration_input: str
```

- *Type:* str

---

##### `skip_interstitial_input`<sup>Optional</sup> <a name="skip_interstitial_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitialInput"></a>

```python
skip_interstitial_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allowed_idps`<sup>Required</sup> <a name="allowed_idps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.allowedIdps"></a>

```python
allowed_idps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_launcher_visible`<sup>Required</sup> <a name="app_launcher_visible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.appLauncherVisible"></a>

```python
app_launcher_visible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_redirect_to_identity`<sup>Required</sup> <a name="auto_redirect_to_identity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.autoRedirectToIdentity"></a>

```python
auto_redirect_to_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_deny_message`<sup>Required</sup> <a name="custom_deny_message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyMessage"></a>

```python
custom_deny_message: str
```

- *Type:* str

---

##### `custom_deny_url`<sup>Required</sup> <a name="custom_deny_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.customDenyUrl"></a>

```python
custom_deny_url: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `enable_binding_cookie`<sup>Required</sup> <a name="enable_binding_cookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.enableBindingCookie"></a>

```python
enable_binding_cookie: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_only_cookie_attribute`<sup>Required</sup> <a name="http_only_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.httpOnlyCookieAttribute"></a>

```python
http_only_cookie_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `same_site_cookie_attribute`<sup>Required</sup> <a name="same_site_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sameSiteCookieAttribute"></a>

```python
same_site_cookie_attribute: str
```

- *Type:* str

---

##### `service_auth401_redirect`<sup>Required</sup> <a name="service_auth401_redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.serviceAuth401Redirect"></a>

```python
service_auth401_redirect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

---

##### `skip_interstitial`<sup>Required</sup> <a name="skip_interstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.skipInterstitial"></a>

```python
skip_interstitial: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessApplication.AccessApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessApplicationConfig <a name="AccessApplicationConfig" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: str = None,
  allowed_idps: typing.List[str] = None,
  app_launcher_visible: typing.Union[bool, IResolvable] = None,
  auto_redirect_to_identity: typing.Union[bool, IResolvable] = None,
  cors_headers: typing.Union[IResolvable, typing.List[AccessApplicationCorsHeaders]] = None,
  custom_deny_message: str = None,
  custom_deny_url: str = None,
  domain: str = None,
  enable_binding_cookie: typing.Union[bool, IResolvable] = None,
  http_only_cookie_attribute: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo_url: str = None,
  saas_app: AccessApplicationSaasApp = None,
  same_site_cookie_attribute: str = None,
  service_auth401_redirect: typing.Union[bool, IResolvable] = None,
  session_duration: str = None,
  skip_interstitial: typing.Union[bool, IResolvable] = None,
  type: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name">name</a></code> | <code>str</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps">allowed_idps</a></code> | <code>typing.List[str]</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible">app_launcher_visible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity">auto_redirect_to_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders">cors_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage">custom_deny_message</a></code> | <code>str</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl">custom_deny_url</a></code> | <code>str</code> | Option that redirects to a custom URL when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain">domain</a></code> | <code>str</code> | The complete URL of the asset you wish to put Cloudflare Access in front of. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie">enable_binding_cookie</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute">http_only_cookie_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#id AccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl">logo_url</a></code> | <code>str</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp">saas_app</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute">same_site_cookie_attribute</a></code> | <code>str</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect">service_auth401_redirect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration">session_duration</a></code> | <code>str</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial">skip_interstitial</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type">type</a></code> | <code>str</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#name AccessApplication#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#account_id AccessApplication#account_id}

---

##### `allowed_idps`<sup>Optional</sup> <a name="allowed_idps" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.allowedIdps"></a>

```python
allowed_idps: typing.List[str]
```

- *Type:* typing.List[str]

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}

---

##### `app_launcher_visible`<sup>Optional</sup> <a name="app_launcher_visible" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.appLauncherVisible"></a>

```python
app_launcher_visible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}

---

##### `auto_redirect_to_identity`<sup>Optional</sup> <a name="auto_redirect_to_identity" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.autoRedirectToIdentity"></a>

```python
auto_redirect_to_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}

---

##### `cors_headers`<sup>Optional</sup> <a name="cors_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.corsHeaders"></a>

```python
cors_headers: typing.Union[IResolvable, typing.List[AccessApplicationCorsHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}

---

##### `custom_deny_message`<sup>Optional</sup> <a name="custom_deny_message" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyMessage"></a>

```python
custom_deny_message: str
```

- *Type:* str

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}

---

##### `custom_deny_url`<sup>Optional</sup> <a name="custom_deny_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.customDenyUrl"></a>

```python
custom_deny_url: str
```

- *Type:* str

Option that redirects to a custom URL when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The complete URL of the asset you wish to put Cloudflare Access in front of.

Can include subdomains or paths. Or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#domain AccessApplication#domain}

---

##### `enable_binding_cookie`<sup>Optional</sup> <a name="enable_binding_cookie" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.enableBindingCookie"></a>

```python
enable_binding_cookie: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}

---

##### `http_only_cookie_attribute`<sup>Optional</sup> <a name="http_only_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```python
http_only_cookie_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#id AccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo_url`<sup>Optional</sup> <a name="logo_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#logo_url AccessApplication#logo_url}

---

##### `saas_app`<sup>Optional</sup> <a name="saas_app" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.saasApp"></a>

```python
saas_app: AccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#saas_app AccessApplication#saas_app}

---

##### `same_site_cookie_attribute`<sup>Optional</sup> <a name="same_site_cookie_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```python
same_site_cookie_attribute: str
```

- *Type:* str

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}

---

##### `service_auth401_redirect`<sup>Optional</sup> <a name="service_auth401_redirect" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.serviceAuth401Redirect"></a>

```python
service_auth401_redirect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#session_duration AccessApplication#session_duration}

---

##### `skip_interstitial`<sup>Optional</sup> <a name="skip_interstitial" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.skipInterstitial"></a>

```python
skip_interstitial: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#type AccessApplication#type}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#zone_id AccessApplication#zone_id}

---

### AccessApplicationCorsHeaders <a name="AccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplicationCorsHeaders(
  allow_all_headers: typing.Union[bool, IResolvable] = None,
  allow_all_methods: typing.Union[bool, IResolvable] = None,
  allow_all_origins: typing.Union[bool, IResolvable] = None,
  allow_credentials: typing.Union[bool, IResolvable] = None,
  allowed_headers: typing.List[str] = None,
  allowed_methods: typing.List[str] = None,
  allowed_origins: typing.List[str] = None,
  max_age: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders">allow_all_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Value to determine whether all HTTP headers are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods">allow_all_methods</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Value to determine whether all methods are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins">allow_all_origins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Value to determine whether all origins are permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | List of HTTP headers to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | List of methods to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | List of origins permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | The maximum time a preflight request will be cached. |

---

##### `allow_all_headers`<sup>Optional</sup> <a name="allow_all_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllHeaders"></a>

```python
allow_all_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Value to determine whether all HTTP headers are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allow_all_headers AccessApplication#allow_all_headers}

---

##### `allow_all_methods`<sup>Optional</sup> <a name="allow_all_methods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllMethods"></a>

```python
allow_all_methods: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allow_all_methods AccessApplication#allow_all_methods}

---

##### `allow_all_origins`<sup>Optional</sup> <a name="allow_all_origins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```python
allow_all_origins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allow_all_origins AccessApplication#allow_all_origins}

---

##### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allow_credentials AccessApplication#allow_credentials}

---

##### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allowed_headers AccessApplication#allowed_headers}

---

##### `allowed_methods`<sup>Optional</sup> <a name="allowed_methods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allowed_methods AccessApplication#allowed_methods}

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#allowed_origins AccessApplication#allowed_origins}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#max_age AccessApplication#max_age}

---

### AccessApplicationSaasApp <a name="AccessApplicationSaasApp" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplicationSaasApp(
  consumer_service_url: str,
  sp_entity_id: str,
  name_id_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl">consumer_service_url</a></code> | <code>str</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat">name_id_format</a></code> | <code>str</code> | The format of the name identifier sent to the SaaS application. Defaults to `email`. |

---

##### `consumer_service_url`<sup>Required</sup> <a name="consumer_service_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.consumerServiceUrl"></a>

```python
consumer_service_url: str
```

- *Type:* str

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#consumer_service_url AccessApplication#consumer_service_url}

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#sp_entity_id AccessApplication#sp_entity_id}

---

##### `name_id_format`<sup>Optional</sup> <a name="name_id_format" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp.property.nameIdFormat"></a>

```python
name_id_format: str
```

- *Type:* str

The format of the name identifier sent to the SaaS application. Defaults to `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_application#name_id_format AccessApplication#name_id_format}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessApplicationCorsHeadersList <a name="AccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplicationCorsHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessApplicationCorsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessApplicationCorsHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>]]

---


### AccessApplicationCorsHeadersOutputReference <a name="AccessApplicationCorsHeadersOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplicationCorsHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders">reset_allow_all_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods">reset_allow_all_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins">reset_allow_all_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials">reset_allow_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders">reset_allowed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods">reset_allowed_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge">reset_max_age</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_all_headers` <a name="reset_allow_all_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders"></a>

```python
def reset_allow_all_headers() -> None
```

##### `reset_allow_all_methods` <a name="reset_allow_all_methods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllMethods"></a>

```python
def reset_allow_all_methods() -> None
```

##### `reset_allow_all_origins` <a name="reset_allow_all_origins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins"></a>

```python
def reset_allow_all_origins() -> None
```

##### `reset_allow_credentials` <a name="reset_allow_credentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowCredentials"></a>

```python
def reset_allow_credentials() -> None
```

##### `reset_allowed_headers` <a name="reset_allowed_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedHeaders"></a>

```python
def reset_allowed_headers() -> None
```

##### `reset_allowed_methods` <a name="reset_allowed_methods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedMethods"></a>

```python
def reset_allowed_methods() -> None
```

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.resetMaxAge"></a>

```python
def reset_max_age() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput">allow_all_headers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput">allow_all_methods_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput">allow_all_origins_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput">allow_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders">allow_all_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods">allow_all_methods</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins">allow_all_origins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_all_headers_input`<sup>Optional</sup> <a name="allow_all_headers_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput"></a>

```python
allow_all_headers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_all_methods_input`<sup>Optional</sup> <a name="allow_all_methods_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput"></a>

```python
allow_all_methods_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_all_origins_input`<sup>Optional</sup> <a name="allow_all_origins_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput"></a>

```python
allow_all_origins_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_credentials_input`<sup>Optional</sup> <a name="allow_credentials_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput"></a>

```python
allow_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_all_headers`<sup>Required</sup> <a name="allow_all_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllHeaders"></a>

```python
allow_all_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_all_methods`<sup>Required</sup> <a name="allow_all_methods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllMethods"></a>

```python
allow_all_methods: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_all_origins`<sup>Required</sup> <a name="allow_all_origins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowAllOrigins"></a>

```python
allow_all_origins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_credentials`<sup>Required</sup> <a name="allow_credentials" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessApplicationCorsHeaders, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationCorsHeaders">AccessApplicationCorsHeaders</a>, cdktf.IResolvable]

---


### AccessApplicationSaasAppOutputReference <a name="AccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_application

accessApplication.AccessApplicationSaasAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat">reset_name_id_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name_id_format` <a name="reset_name_id_format" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```python
def reset_name_id_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">consumer_service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput">name_id_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput">sp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl">consumer_service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat">name_id_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId">sp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_service_url_input`<sup>Optional</sup> <a name="consumer_service_url_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput"></a>

```python
consumer_service_url_input: str
```

- *Type:* str

---

##### `name_id_format_input`<sup>Optional</sup> <a name="name_id_format_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```python
name_id_format_input: str
```

- *Type:* str

---

##### `sp_entity_id_input`<sup>Optional</sup> <a name="sp_entity_id_input" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```python
sp_entity_id_input: str
```

- *Type:* str

---

##### `consumer_service_url`<sup>Required</sup> <a name="consumer_service_url" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```python
consumer_service_url: str
```

- *Type:* str

---

##### `name_id_format`<sup>Required</sup> <a name="name_id_format" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```python
name_id_format: str
```

- *Type:* str

---

##### `sp_entity_id`<sup>Required</sup> <a name="sp_entity_id" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.spEntityId"></a>

```python
sp_entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasAppOutputReference.property.internalValue"></a>

```python
internal_value: AccessApplicationSaasApp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessApplication.AccessApplicationSaasApp">AccessApplicationSaasApp</a>

---



