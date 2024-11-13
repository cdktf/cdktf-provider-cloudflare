# `zeroTrustAccessOrganization` Submodule <a name="`zeroTrustAccessOrganization` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessOrganization <a name="ZeroTrustAccessOrganization" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization cloudflare_zero_trust_access_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_domain: str,
  name: str,
  account_id: str = None,
  allow_authenticate_via_warp: typing.Union[bool, IResolvable] = None,
  auto_redirect_to_identity: typing.Union[bool, IResolvable] = None,
  custom_pages: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationCustomPages]] = None,
  id: str = None,
  is_ui_read_only: typing.Union[bool, IResolvable] = None,
  login_design: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationLoginDesign]] = None,
  session_duration: str = None,
  ui_read_only_toggle_reason: str = None,
  user_seat_expiration_inactive_time: str = None,
  warp_auth_session_duration: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.authDomain">auth_domain</a></code> | <code>str</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.allowAuthenticateViaWarp">allow_authenticate_via_warp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.autoRedirectToIdentity">auto_redirect_to_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.customPages">custom_pages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]</code> | custom_pages block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.isUiReadOnly">is_ui_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.loginDesign">login_design</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]</code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.sessionDuration">session_duration</a></code> | <code>str</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.uiReadOnlyToggleReason">ui_read_only_toggle_reason</a></code> | <code>str</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime">user_seat_expiration_inactive_time</a></code> | <code>str</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.warpAuthSessionDuration">warp_auth_session_duration</a></code> | <code>str</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_domain`<sup>Required</sup> <a name="auth_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.authDomain"></a>

- *Type:* str

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#auth_domain ZeroTrustAccessOrganization#auth_domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.name"></a>

- *Type:* str

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#name ZeroTrustAccessOrganization#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#account_id ZeroTrustAccessOrganization#account_id}

---

##### `allow_authenticate_via_warp`<sup>Optional</sup> <a name="allow_authenticate_via_warp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.allowAuthenticateViaWarp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#allow_authenticate_via_warp ZeroTrustAccessOrganization#allow_authenticate_via_warp}

---

##### `auto_redirect_to_identity`<sup>Optional</sup> <a name="auto_redirect_to_identity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.autoRedirectToIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#auto_redirect_to_identity ZeroTrustAccessOrganization#auto_redirect_to_identity}

---

##### `custom_pages`<sup>Optional</sup> <a name="custom_pages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.customPages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]

custom_pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#custom_pages ZeroTrustAccessOrganization#custom_pages}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ui_read_only`<sup>Optional</sup> <a name="is_ui_read_only" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.isUiReadOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#is_ui_read_only ZeroTrustAccessOrganization#is_ui_read_only}

---

##### `login_design`<sup>Optional</sup> <a name="login_design" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.loginDesign"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]

login_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#login_design ZeroTrustAccessOrganization#login_design}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.sessionDuration"></a>

- *Type:* str

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#session_duration ZeroTrustAccessOrganization#session_duration}

---

##### `ui_read_only_toggle_reason`<sup>Optional</sup> <a name="ui_read_only_toggle_reason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.uiReadOnlyToggleReason"></a>

- *Type:* str

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#ui_read_only_toggle_reason ZeroTrustAccessOrganization#ui_read_only_toggle_reason}

---

##### `user_seat_expiration_inactive_time`<sup>Optional</sup> <a name="user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime"></a>

- *Type:* str

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#user_seat_expiration_inactive_time ZeroTrustAccessOrganization#user_seat_expiration_inactive_time}

---

##### `warp_auth_session_duration`<sup>Optional</sup> <a name="warp_auth_session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.warpAuthSessionDuration"></a>

- *Type:* str

The amount of time that tokens issued for applications will be valid.

Must be in the format 30m or 2h45m. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#warp_auth_session_duration ZeroTrustAccessOrganization#warp_auth_session_duration}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#zone_id ZeroTrustAccessOrganization#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages">put_custom_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign">put_login_design</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAllowAuthenticateViaWarp">reset_allow_authenticate_via_warp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAutoRedirectToIdentity">reset_auto_redirect_to_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetCustomPages">reset_custom_pages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetIsUiReadOnly">reset_is_ui_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetLoginDesign">reset_login_design</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetSessionDuration">reset_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUiReadOnlyToggleReason">reset_ui_read_only_toggle_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUserSeatExpirationInactiveTime">reset_user_seat_expiration_inactive_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetWarpAuthSessionDuration">reset_warp_auth_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_pages` <a name="put_custom_pages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages"></a>

```python
def put_custom_pages(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationCustomPages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]

---

##### `put_login_design` <a name="put_login_design" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign"></a>

```python
def put_login_design(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationLoginDesign]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_allow_authenticate_via_warp` <a name="reset_allow_authenticate_via_warp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAllowAuthenticateViaWarp"></a>

```python
def reset_allow_authenticate_via_warp() -> None
```

##### `reset_auto_redirect_to_identity` <a name="reset_auto_redirect_to_identity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAutoRedirectToIdentity"></a>

```python
def reset_auto_redirect_to_identity() -> None
```

##### `reset_custom_pages` <a name="reset_custom_pages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetCustomPages"></a>

```python
def reset_custom_pages() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_ui_read_only` <a name="reset_is_ui_read_only" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetIsUiReadOnly"></a>

```python
def reset_is_ui_read_only() -> None
```

##### `reset_login_design` <a name="reset_login_design" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetLoginDesign"></a>

```python
def reset_login_design() -> None
```

##### `reset_session_duration` <a name="reset_session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetSessionDuration"></a>

```python
def reset_session_duration() -> None
```

##### `reset_ui_read_only_toggle_reason` <a name="reset_ui_read_only_toggle_reason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUiReadOnlyToggleReason"></a>

```python
def reset_ui_read_only_toggle_reason() -> None
```

##### `reset_user_seat_expiration_inactive_time` <a name="reset_user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUserSeatExpirationInactiveTime"></a>

```python
def reset_user_seat_expiration_inactive_time() -> None
```

##### `reset_warp_auth_session_duration` <a name="reset_warp_auth_session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetWarpAuthSessionDuration"></a>

```python
def reset_warp_auth_session_duration() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustAccessOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustAccessOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustAccessOrganization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustAccessOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPages">custom_pages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList">ZeroTrustAccessOrganizationCustomPagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesign">login_design</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList">ZeroTrustAccessOrganizationLoginDesignList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarpInput">allow_authenticate_via_warp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomainInput">auth_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentityInput">auto_redirect_to_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPagesInput">custom_pages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnlyInput">is_ui_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesignInput">login_design_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDurationInput">session_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReasonInput">ui_read_only_toggle_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTimeInput">user_seat_expiration_inactive_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDurationInput">warp_auth_session_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarp">allow_authenticate_via_warp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomain">auth_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentity">auto_redirect_to_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnly">is_ui_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDuration">session_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReason">ui_read_only_toggle_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTime">user_seat_expiration_inactive_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDuration">warp_auth_session_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_pages`<sup>Required</sup> <a name="custom_pages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPages"></a>

```python
custom_pages: ZeroTrustAccessOrganizationCustomPagesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList">ZeroTrustAccessOrganizationCustomPagesList</a>

---

##### `login_design`<sup>Required</sup> <a name="login_design" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesign"></a>

```python
login_design: ZeroTrustAccessOrganizationLoginDesignList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList">ZeroTrustAccessOrganizationLoginDesignList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allow_authenticate_via_warp_input`<sup>Optional</sup> <a name="allow_authenticate_via_warp_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarpInput"></a>

```python
allow_authenticate_via_warp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_domain_input`<sup>Optional</sup> <a name="auth_domain_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomainInput"></a>

```python
auth_domain_input: str
```

- *Type:* str

---

##### `auto_redirect_to_identity_input`<sup>Optional</sup> <a name="auto_redirect_to_identity_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentityInput"></a>

```python
auto_redirect_to_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_pages_input`<sup>Optional</sup> <a name="custom_pages_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPagesInput"></a>

```python
custom_pages_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationCustomPages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_ui_read_only_input`<sup>Optional</sup> <a name="is_ui_read_only_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnlyInput"></a>

```python
is_ui_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `login_design_input`<sup>Optional</sup> <a name="login_design_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesignInput"></a>

```python
login_design_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationLoginDesign]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `session_duration_input`<sup>Optional</sup> <a name="session_duration_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDurationInput"></a>

```python
session_duration_input: str
```

- *Type:* str

---

##### `ui_read_only_toggle_reason_input`<sup>Optional</sup> <a name="ui_read_only_toggle_reason_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReasonInput"></a>

```python
ui_read_only_toggle_reason_input: str
```

- *Type:* str

---

##### `user_seat_expiration_inactive_time_input`<sup>Optional</sup> <a name="user_seat_expiration_inactive_time_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```python
user_seat_expiration_inactive_time_input: str
```

- *Type:* str

---

##### `warp_auth_session_duration_input`<sup>Optional</sup> <a name="warp_auth_session_duration_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDurationInput"></a>

```python
warp_auth_session_duration_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allow_authenticate_via_warp`<sup>Required</sup> <a name="allow_authenticate_via_warp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarp"></a>

```python
allow_authenticate_via_warp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_domain`<sup>Required</sup> <a name="auth_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomain"></a>

```python
auth_domain: str
```

- *Type:* str

---

##### `auto_redirect_to_identity`<sup>Required</sup> <a name="auto_redirect_to_identity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentity"></a>

```python
auto_redirect_to_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ui_read_only`<sup>Required</sup> <a name="is_ui_read_only" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnly"></a>

```python
is_ui_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

---

##### `ui_read_only_toggle_reason`<sup>Required</sup> <a name="ui_read_only_toggle_reason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReason"></a>

```python
ui_read_only_toggle_reason: str
```

- *Type:* str

---

##### `user_seat_expiration_inactive_time`<sup>Required</sup> <a name="user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTime"></a>

```python
user_seat_expiration_inactive_time: str
```

- *Type:* str

---

##### `warp_auth_session_duration`<sup>Required</sup> <a name="warp_auth_session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDuration"></a>

```python
warp_auth_session_duration: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessOrganizationConfig <a name="ZeroTrustAccessOrganizationConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_domain: str,
  name: str,
  account_id: str = None,
  allow_authenticate_via_warp: typing.Union[bool, IResolvable] = None,
  auto_redirect_to_identity: typing.Union[bool, IResolvable] = None,
  custom_pages: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationCustomPages]] = None,
  id: str = None,
  is_ui_read_only: typing.Union[bool, IResolvable] = None,
  login_design: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationLoginDesign]] = None,
  session_duration: str = None,
  ui_read_only_toggle_reason: str = None,
  user_seat_expiration_inactive_time: str = None,
  warp_auth_session_duration: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.authDomain">auth_domain</a></code> | <code>str</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.name">name</a></code> | <code>str</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.allowAuthenticateViaWarp">allow_authenticate_via_warp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.autoRedirectToIdentity">auto_redirect_to_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.customPages">custom_pages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]</code> | custom_pages block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.isUiReadOnly">is_ui_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.loginDesign">login_design</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]</code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.sessionDuration">session_duration</a></code> | <code>str</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.uiReadOnlyToggleReason">ui_read_only_toggle_reason</a></code> | <code>str</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.userSeatExpirationInactiveTime">user_seat_expiration_inactive_time</a></code> | <code>str</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.warpAuthSessionDuration">warp_auth_session_duration</a></code> | <code>str</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_domain`<sup>Required</sup> <a name="auth_domain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.authDomain"></a>

```python
auth_domain: str
```

- *Type:* str

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#auth_domain ZeroTrustAccessOrganization#auth_domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#name ZeroTrustAccessOrganization#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#account_id ZeroTrustAccessOrganization#account_id}

---

##### `allow_authenticate_via_warp`<sup>Optional</sup> <a name="allow_authenticate_via_warp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```python
allow_authenticate_via_warp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#allow_authenticate_via_warp ZeroTrustAccessOrganization#allow_authenticate_via_warp}

---

##### `auto_redirect_to_identity`<sup>Optional</sup> <a name="auto_redirect_to_identity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.autoRedirectToIdentity"></a>

```python
auto_redirect_to_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#auto_redirect_to_identity ZeroTrustAccessOrganization#auto_redirect_to_identity}

---

##### `custom_pages`<sup>Optional</sup> <a name="custom_pages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.customPages"></a>

```python
custom_pages: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationCustomPages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]

custom_pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#custom_pages ZeroTrustAccessOrganization#custom_pages}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ui_read_only`<sup>Optional</sup> <a name="is_ui_read_only" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.isUiReadOnly"></a>

```python
is_ui_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#is_ui_read_only ZeroTrustAccessOrganization#is_ui_read_only}

---

##### `login_design`<sup>Optional</sup> <a name="login_design" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.loginDesign"></a>

```python
login_design: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationLoginDesign]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]

login_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#login_design ZeroTrustAccessOrganization#login_design}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.sessionDuration"></a>

```python
session_duration: str
```

- *Type:* str

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#session_duration ZeroTrustAccessOrganization#session_duration}

---

##### `ui_read_only_toggle_reason`<sup>Optional</sup> <a name="ui_read_only_toggle_reason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```python
ui_read_only_toggle_reason: str
```

- *Type:* str

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#ui_read_only_toggle_reason ZeroTrustAccessOrganization#ui_read_only_toggle_reason}

---

##### `user_seat_expiration_inactive_time`<sup>Optional</sup> <a name="user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```python
user_seat_expiration_inactive_time: str
```

- *Type:* str

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#user_seat_expiration_inactive_time ZeroTrustAccessOrganization#user_seat_expiration_inactive_time}

---

##### `warp_auth_session_duration`<sup>Optional</sup> <a name="warp_auth_session_duration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.warpAuthSessionDuration"></a>

```python
warp_auth_session_duration: str
```

- *Type:* str

The amount of time that tokens issued for applications will be valid.

Must be in the format 30m or 2h45m. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#warp_auth_session_duration ZeroTrustAccessOrganization#warp_auth_session_duration}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#zone_id ZeroTrustAccessOrganization#zone_id}

---

### ZeroTrustAccessOrganizationCustomPages <a name="ZeroTrustAccessOrganizationCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages(
  forbidden: str = None,
  identity_denied: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.forbidden">forbidden</a></code> | <code>str</code> | The id of the forbidden page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.identityDenied">identity_denied</a></code> | <code>str</code> | The id of the identity denied page. |

---

##### `forbidden`<sup>Optional</sup> <a name="forbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.forbidden"></a>

```python
forbidden: str
```

- *Type:* str

The id of the forbidden page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#forbidden ZeroTrustAccessOrganization#forbidden}

---

##### `identity_denied`<sup>Optional</sup> <a name="identity_denied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.identityDenied"></a>

```python
identity_denied: str
```

- *Type:* str

The id of the identity denied page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#identity_denied ZeroTrustAccessOrganization#identity_denied}

---

### ZeroTrustAccessOrganizationLoginDesign <a name="ZeroTrustAccessOrganizationLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign(
  background_color: str = None,
  footer_text: str = None,
  header_text: str = None,
  logo_path: str = None,
  text_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.backgroundColor">background_color</a></code> | <code>str</code> | The background color on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.footerText">footer_text</a></code> | <code>str</code> | The text at the bottom of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.headerText">header_text</a></code> | <code>str</code> | The text at the top of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.logoPath">logo_path</a></code> | <code>str</code> | The URL of the logo on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.textColor">text_color</a></code> | <code>str</code> | The text color on the login page. |

---

##### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

The background color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#background_color ZeroTrustAccessOrganization#background_color}

---

##### `footer_text`<sup>Optional</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

The text at the bottom of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#footer_text ZeroTrustAccessOrganization#footer_text}

---

##### `header_text`<sup>Optional</sup> <a name="header_text" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

The text at the top of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#header_text ZeroTrustAccessOrganization#header_text}

---

##### `logo_path`<sup>Optional</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

The URL of the logo on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#logo_path ZeroTrustAccessOrganization#logo_path}

---

##### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

The text color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/resources/zero_trust_access_organization#text_color ZeroTrustAccessOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessOrganizationCustomPagesList <a name="ZeroTrustAccessOrganizationCustomPagesList" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessOrganizationCustomPagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationCustomPages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]]

---


### ZeroTrustAccessOrganizationCustomPagesOutputReference <a name="ZeroTrustAccessOrganizationCustomPagesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetForbidden">reset_forbidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetIdentityDenied">reset_identity_denied</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forbidden` <a name="reset_forbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetForbidden"></a>

```python
def reset_forbidden() -> None
```

##### `reset_identity_denied` <a name="reset_identity_denied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```python
def reset_identity_denied() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbiddenInput">forbidden_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDeniedInput">identity_denied_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbidden">forbidden</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDenied">identity_denied</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forbidden_input`<sup>Optional</sup> <a name="forbidden_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```python
forbidden_input: str
```

- *Type:* str

---

##### `identity_denied_input`<sup>Optional</sup> <a name="identity_denied_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```python
identity_denied_input: str
```

- *Type:* str

---

##### `forbidden`<sup>Required</sup> <a name="forbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbidden"></a>

```python
forbidden: str
```

- *Type:* str

---

##### `identity_denied`<sup>Required</sup> <a name="identity_denied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```python
identity_denied: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessOrganizationCustomPages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>]

---


### ZeroTrustAccessOrganizationLoginDesignList <a name="ZeroTrustAccessOrganizationLoginDesignList" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessOrganizationLoginDesignOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessOrganizationLoginDesign]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]]

---


### ZeroTrustAccessOrganizationLoginDesignOutputReference <a name="ZeroTrustAccessOrganizationLoginDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_organization

zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetBackgroundColor">reset_background_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetFooterText">reset_footer_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetHeaderText">reset_header_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetLogoPath">reset_logo_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetTextColor">reset_text_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background_color` <a name="reset_background_color" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```python
def reset_background_color() -> None
```

##### `reset_footer_text` <a name="reset_footer_text" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetFooterText"></a>

```python
def reset_footer_text() -> None
```

##### `reset_header_text` <a name="reset_header_text" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```python
def reset_header_text() -> None
```

##### `reset_logo_path` <a name="reset_logo_path" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```python
def reset_logo_path() -> None
```

##### `reset_text_color` <a name="reset_text_color" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetTextColor"></a>

```python
def reset_text_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerTextInput">footer_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerTextInput">header_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPathInput">logo_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColorInput">text_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerText">footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerText">header_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPath">logo_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `footer_text_input`<sup>Optional</sup> <a name="footer_text_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```python
footer_text_input: str
```

- *Type:* str

---

##### `header_text_input`<sup>Optional</sup> <a name="header_text_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```python
header_text_input: str
```

- *Type:* str

---

##### `logo_path_input`<sup>Optional</sup> <a name="logo_path_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```python
logo_path_input: str
```

- *Type:* str

---

##### `text_color_input`<sup>Optional</sup> <a name="text_color_input" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```python
text_color_input: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

---

##### `logo_path`<sup>Required</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessOrganizationLoginDesign]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>]

---



