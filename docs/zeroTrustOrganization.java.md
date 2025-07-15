# `zeroTrustOrganization` Submodule <a name="`zeroTrustOrganization` Submodule" id="@cdktf/provider-cloudflare.zeroTrustOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustOrganization <a name="ZeroTrustOrganization" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.Builder.create(Construct scope, java.lang.String id)
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
//  .authDomain(java.lang.String)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .customPages(ZeroTrustOrganizationCustomPages)
//  .isUiReadOnly(java.lang.Boolean)
//  .isUiReadOnly(IResolvable)
//  .loginDesign(ZeroTrustOrganizationLoginDesign)
//  .name(java.lang.String)
//  .sessionDuration(java.lang.String)
//  .uiReadOnlyToggleReason(java.lang.String)
//  .userSeatExpirationInactiveTime(java.lang.String)
//  .warpAuthSessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to `true`, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.customPages">customPages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Lock all settings as Read-Only in the Dashboard, regardless of user permission. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.loginDesign">loginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.allowAuthenticateViaWarp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}

---

##### `authDomain`<sup>Optional</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.authDomain"></a>

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.autoRedirectToIdentity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to `true`, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.customPages"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}.

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.isUiReadOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Lock all settings as Read-Only in the Dashboard, regardless of user permission.

Updates may only be made via the API or Terraform for this account when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.loginDesign"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.uiReadOnlyToggleReason"></a>

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.userSeatExpirationInactiveTime"></a>

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}

---

##### `warpAuthSessionDuration`<sup>Optional</sup> <a name="warpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.warpAuthSessionDuration"></a>

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages">putCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign">putLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp">resetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain">resetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages">resetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly">resetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign">resetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason">resetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime">resetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration">resetWarpAuthSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPages` <a name="putCustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages"></a>

```java
public void putCustomPages(ZeroTrustOrganizationCustomPages value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `putLoginDesign` <a name="putLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign"></a>

```java
public void putLoginDesign(ZeroTrustOrganizationLoginDesign value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAllowAuthenticateViaWarp` <a name="resetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp"></a>

```java
public void resetAllowAuthenticateViaWarp()
```

##### `resetAuthDomain` <a name="resetAuthDomain" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain"></a>

```java
public void resetAuthDomain()
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity"></a>

```java
public void resetAutoRedirectToIdentity()
```

##### `resetCustomPages` <a name="resetCustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages"></a>

```java
public void resetCustomPages()
```

##### `resetIsUiReadOnly` <a name="resetIsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly"></a>

```java
public void resetIsUiReadOnly()
```

##### `resetLoginDesign` <a name="resetLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign"></a>

```java
public void resetLoginDesign()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName"></a>

```java
public void resetName()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetUiReadOnlyToggleReason` <a name="resetUiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason"></a>

```java
public void resetUiReadOnlyToggleReason()
```

##### `resetUserSeatExpirationInactiveTime` <a name="resetUserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime"></a>

```java
public void resetUserSeatExpirationInactiveTime()
```

##### `resetWarpAuthSessionDuration` <a name="resetWarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration"></a>

```java
public void resetWarpAuthSessionDuration()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganization;

ZeroTrustOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages">customPages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput">allowAuthenticateViaWarpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput">authDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput">customPagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput">isUiReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput">loginDesignInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput">uiReadOnlyToggleReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput">userSeatExpirationInactiveTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput">warpAuthSessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages"></a>

```java
public ZeroTrustOrganizationCustomPagesOutputReference getCustomPages();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a>

---

##### `loginDesign`<sup>Required</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign"></a>

```java
public ZeroTrustOrganizationLoginDesignOutputReference getLoginDesign();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="allowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authDomainInput`<sup>Optional</sup> <a name="authDomainInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput"></a>

```java
public java.lang.String getAuthDomainInput();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput"></a>

```java
public java.lang.Object getAutoRedirectToIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customPagesInput`<sup>Optional</sup> <a name="customPagesInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput"></a>

```java
public java.lang.Object getCustomPagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `isUiReadOnlyInput`<sup>Optional</sup> <a name="isUiReadOnlyInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput"></a>

```java
public java.lang.Object getIsUiReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginDesignInput`<sup>Optional</sup> <a name="loginDesignInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput"></a>

```java
public java.lang.Object getLoginDesignInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="uiReadOnlyToggleReasonInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput"></a>

```java
public java.lang.String getUiReadOnlyToggleReasonInput();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="userSeatExpirationInactiveTimeInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTimeInput();
```

- *Type:* java.lang.String

---

##### `warpAuthSessionDurationInput`<sup>Optional</sup> <a name="warpAuthSessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput"></a>

```java
public java.lang.String getWarpAuthSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUiReadOnly`<sup>Required</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly"></a>

```java
public java.lang.Object getIsUiReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReason`<sup>Required</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTime`<sup>Required</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

---

##### `warpAuthSessionDuration`<sup>Required</sup> <a name="warpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration"></a>

```java
public java.lang.String getWarpAuthSessionDuration();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustOrganizationConfig <a name="ZeroTrustOrganizationConfig" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationConfig;

ZeroTrustOrganizationConfig.builder()
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
//  .authDomain(java.lang.String)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .customPages(ZeroTrustOrganizationCustomPages)
//  .isUiReadOnly(java.lang.Boolean)
//  .isUiReadOnly(IResolvable)
//  .loginDesign(ZeroTrustOrganizationLoginDesign)
//  .name(java.lang.String)
//  .sessionDuration(java.lang.String)
//  .uiReadOnlyToggleReason(java.lang.String)
//  .userSeatExpirationInactiveTime(java.lang.String)
//  .warpAuthSessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to `true`, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages">customPages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Lock all settings as Read-Only in the Dashboard, regardless of user permission. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}

---

##### `authDomain`<sup>Optional</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to `true`, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages"></a>

```java
public ZeroTrustOrganizationCustomPages getCustomPages();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}.

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly"></a>

```java
public java.lang.Object getIsUiReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Lock all settings as Read-Only in the Dashboard, regardless of user permission.

Updates may only be made via the API or Terraform for this account when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign"></a>

```java
public ZeroTrustOrganizationLoginDesign getLoginDesign();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}

---

##### `warpAuthSessionDuration`<sup>Optional</sup> <a name="warpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration"></a>

```java
public java.lang.String getWarpAuthSessionDuration();
```

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}

---

### ZeroTrustOrganizationCustomPages <a name="ZeroTrustOrganizationCustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationCustomPages;

ZeroTrustOrganizationCustomPages.builder()
//  .forbidden(java.lang.String)
//  .identityDenied(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden">forbidden</a></code> | <code>java.lang.String</code> | The uid of the custom page to use when a user is denied access after failing a non-identity rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied">identityDenied</a></code> | <code>java.lang.String</code> | The uid of the custom page to use when a user is denied access. |

---

##### `forbidden`<sup>Optional</sup> <a name="forbidden" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden"></a>

```java
public java.lang.String getForbidden();
```

- *Type:* java.lang.String

The uid of the custom page to use when a user is denied access after failing a non-identity rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}

---

##### `identityDenied`<sup>Optional</sup> <a name="identityDenied" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied"></a>

```java
public java.lang.String getIdentityDenied();
```

- *Type:* java.lang.String

The uid of the custom page to use when a user is denied access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}

---

### ZeroTrustOrganizationLoginDesign <a name="ZeroTrustOrganizationLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationLoginDesign;

ZeroTrustOrganizationLoginDesign.builder()
//  .backgroundColor(java.lang.String)
//  .footerText(java.lang.String)
//  .headerText(java.lang.String)
//  .logoPath(java.lang.String)
//  .textColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | The background color on your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText">footerText</a></code> | <code>java.lang.String</code> | The text at the bottom of your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText">headerText</a></code> | <code>java.lang.String</code> | The text at the top of your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | The URL of the logo on your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor">textColor</a></code> | <code>java.lang.String</code> | The text color on your login page. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

The background color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

The text at the bottom of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

The text at the top of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}

---

##### `logoPath`<sup>Optional</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

The URL of the logo on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

The text color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustOrganizationCustomPagesOutputReference <a name="ZeroTrustOrganizationCustomPagesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationCustomPagesOutputReference;

new ZeroTrustOrganizationCustomPagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden">resetForbidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied">resetIdentityDenied</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForbidden` <a name="resetForbidden" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden"></a>

```java
public void resetForbidden()
```

##### `resetIdentityDenied` <a name="resetIdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```java
public void resetIdentityDenied()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput">forbiddenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput">identityDeniedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden">forbidden</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied">identityDenied</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forbiddenInput`<sup>Optional</sup> <a name="forbiddenInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```java
public java.lang.String getForbiddenInput();
```

- *Type:* java.lang.String

---

##### `identityDeniedInput`<sup>Optional</sup> <a name="identityDeniedInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```java
public java.lang.String getIdentityDeniedInput();
```

- *Type:* java.lang.String

---

##### `forbidden`<sup>Required</sup> <a name="forbidden" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden"></a>

```java
public java.lang.String getForbidden();
```

- *Type:* java.lang.String

---

##### `identityDenied`<sup>Required</sup> <a name="identityDenied" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```java
public java.lang.String getIdentityDenied();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---


### ZeroTrustOrganizationLoginDesignOutputReference <a name="ZeroTrustOrganizationLoginDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_organization.ZeroTrustOrganizationLoginDesignOutputReference;

new ZeroTrustOrganizationLoginDesignOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath">resetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```java
public void resetBackgroundColor()
```

##### `resetFooterText` <a name="resetFooterText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText"></a>

```java
public void resetFooterText()
```

##### `resetHeaderText` <a name="resetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```java
public void resetHeaderText()
```

##### `resetLogoPath` <a name="resetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```java
public void resetLogoPath()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput">footerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput">headerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput">logoPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText">footerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText">headerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```java
public java.lang.String getFooterTextInput();
```

- *Type:* java.lang.String

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```java
public java.lang.String getHeaderTextInput();
```

- *Type:* java.lang.String

---

##### `logoPathInput`<sup>Optional</sup> <a name="logoPathInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```java
public java.lang.String getLogoPathInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---



