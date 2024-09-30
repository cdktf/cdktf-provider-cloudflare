# `zeroTrustAccessOrganization` Submodule <a name="`zeroTrustAccessOrganization` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessOrganization <a name="ZeroTrustAccessOrganization" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization cloudflare_zero_trust_access_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganization;

ZeroTrustAccessOrganization.Builder.create(Construct scope, java.lang.String id)
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
    .authDomain(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .allowAuthenticateViaWarp(java.lang.Boolean)
//  .allowAuthenticateViaWarp(IResolvable)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .customPages(IResolvable)
//  .customPages(java.util.List<ZeroTrustAccessOrganizationCustomPages>)
//  .id(java.lang.String)
//  .isUiReadOnly(java.lang.Boolean)
//  .isUiReadOnly(IResolvable)
//  .loginDesign(IResolvable)
//  .loginDesign(java.util.List<ZeroTrustAccessOrganizationLoginDesign>)
//  .sessionDuration(java.lang.String)
//  .uiReadOnlyToggleReason(java.lang.String)
//  .userSeatExpirationInactiveTime(java.lang.String)
//  .warpAuthSessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.customPages">customPages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>></code> | custom_pages block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.loginDesign">loginDesign</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>></code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.authDomain"></a>

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#auth_domain ZeroTrustAccessOrganization#auth_domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#name ZeroTrustAccessOrganization#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#account_id ZeroTrustAccessOrganization#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.allowAuthenticateViaWarp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#allow_authenticate_via_warp ZeroTrustAccessOrganization#allow_authenticate_via_warp}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.autoRedirectToIdentity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#auto_redirect_to_identity ZeroTrustAccessOrganization#auto_redirect_to_identity}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.customPages"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>>

custom_pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#custom_pages ZeroTrustAccessOrganization#custom_pages}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.isUiReadOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#is_ui_read_only ZeroTrustAccessOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.loginDesign"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>>

login_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#login_design ZeroTrustAccessOrganization#login_design}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.String

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#session_duration ZeroTrustAccessOrganization#session_duration}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.uiReadOnlyToggleReason"></a>

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#ui_read_only_toggle_reason ZeroTrustAccessOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime"></a>

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#user_seat_expiration_inactive_time ZeroTrustAccessOrganization#user_seat_expiration_inactive_time}

---

##### `warpAuthSessionDuration`<sup>Optional</sup> <a name="warpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.warpAuthSessionDuration"></a>

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format 30m or 2h45m. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#warp_auth_session_duration ZeroTrustAccessOrganization#warp_auth_session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#zone_id ZeroTrustAccessOrganization#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages">putCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign">putLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAllowAuthenticateViaWarp">resetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetCustomPages">resetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetIsUiReadOnly">resetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetLoginDesign">resetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUiReadOnlyToggleReason">resetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUserSeatExpirationInactiveTime">resetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetWarpAuthSessionDuration">resetWarpAuthSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomPages` <a name="putCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages"></a>

```java
public void putCustomPages(IResolvable OR java.util.List<ZeroTrustAccessOrganizationCustomPages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>>

---

##### `putLoginDesign` <a name="putLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign"></a>

```java
public void putLoginDesign(IResolvable OR java.util.List<ZeroTrustAccessOrganizationLoginDesign> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAllowAuthenticateViaWarp` <a name="resetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAllowAuthenticateViaWarp"></a>

```java
public void resetAllowAuthenticateViaWarp()
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAutoRedirectToIdentity"></a>

```java
public void resetAutoRedirectToIdentity()
```

##### `resetCustomPages` <a name="resetCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetCustomPages"></a>

```java
public void resetCustomPages()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetId"></a>

```java
public void resetId()
```

##### `resetIsUiReadOnly` <a name="resetIsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetIsUiReadOnly"></a>

```java
public void resetIsUiReadOnly()
```

##### `resetLoginDesign` <a name="resetLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetLoginDesign"></a>

```java
public void resetLoginDesign()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetUiReadOnlyToggleReason` <a name="resetUiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUiReadOnlyToggleReason"></a>

```java
public void resetUiReadOnlyToggleReason()
```

##### `resetUserSeatExpirationInactiveTime` <a name="resetUserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUserSeatExpirationInactiveTime"></a>

```java
public void resetUserSeatExpirationInactiveTime()
```

##### `resetWarpAuthSessionDuration` <a name="resetWarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetWarpAuthSessionDuration"></a>

```java
public void resetWarpAuthSessionDuration()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganization;

ZeroTrustAccessOrganization.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganization;

ZeroTrustAccessOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganization;

ZeroTrustAccessOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganization;

ZeroTrustAccessOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustAccessOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustAccessOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustAccessOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustAccessOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPages">customPages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList">ZeroTrustAccessOrganizationCustomPagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList">ZeroTrustAccessOrganizationLoginDesignList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarpInput">allowAuthenticateViaWarpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomainInput">authDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPagesInput">customPagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnlyInput">isUiReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesignInput">loginDesignInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReasonInput">uiReadOnlyToggleReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTimeInput">userSeatExpirationInactiveTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDurationInput">warpAuthSessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customPages`<sup>Required</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPages"></a>

```java
public ZeroTrustAccessOrganizationCustomPagesList getCustomPages();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList">ZeroTrustAccessOrganizationCustomPagesList</a>

---

##### `loginDesign`<sup>Required</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesign"></a>

```java
public ZeroTrustAccessOrganizationLoginDesignList getLoginDesign();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList">ZeroTrustAccessOrganizationLoginDesignList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="allowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarpInput"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authDomainInput`<sup>Optional</sup> <a name="authDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomainInput"></a>

```java
public java.lang.String getAuthDomainInput();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentityInput"></a>

```java
public java.lang.Object getAutoRedirectToIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customPagesInput`<sup>Optional</sup> <a name="customPagesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPagesInput"></a>

```java
public java.lang.Object getCustomPagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isUiReadOnlyInput`<sup>Optional</sup> <a name="isUiReadOnlyInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnlyInput"></a>

```java
public java.lang.Object getIsUiReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginDesignInput`<sup>Optional</sup> <a name="loginDesignInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesignInput"></a>

```java
public java.lang.Object getLoginDesignInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="uiReadOnlyToggleReasonInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReasonInput"></a>

```java
public java.lang.String getUiReadOnlyToggleReasonInput();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="userSeatExpirationInactiveTimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTimeInput();
```

- *Type:* java.lang.String

---

##### `warpAuthSessionDurationInput`<sup>Optional</sup> <a name="warpAuthSessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDurationInput"></a>

```java
public java.lang.String getWarpAuthSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowAuthenticateViaWarp`<sup>Required</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isUiReadOnly`<sup>Required</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnly"></a>

```java
public java.lang.Object getIsUiReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReason`<sup>Required</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTime`<sup>Required</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

---

##### `warpAuthSessionDuration`<sup>Required</sup> <a name="warpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDuration"></a>

```java
public java.lang.String getWarpAuthSessionDuration();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessOrganizationConfig <a name="ZeroTrustAccessOrganizationConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganizationConfig;

ZeroTrustAccessOrganizationConfig.builder()
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
    .authDomain(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .allowAuthenticateViaWarp(java.lang.Boolean)
//  .allowAuthenticateViaWarp(IResolvable)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .customPages(IResolvable)
//  .customPages(java.util.List<ZeroTrustAccessOrganizationCustomPages>)
//  .id(java.lang.String)
//  .isUiReadOnly(java.lang.Boolean)
//  .isUiReadOnly(IResolvable)
//  .loginDesign(IResolvable)
//  .loginDesign(java.util.List<ZeroTrustAccessOrganizationLoginDesign>)
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.allowAuthenticateViaWarp">allowAuthenticateViaWarp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.customPages">customPages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>></code> | custom_pages block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.loginDesign">loginDesign</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>></code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.warpAuthSessionDuration">warpAuthSessionDuration</a></code> | <code>java.lang.String</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#auth_domain ZeroTrustAccessOrganization#auth_domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#name ZeroTrustAccessOrganization#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#account_id ZeroTrustAccessOrganization#account_id}

---

##### `allowAuthenticateViaWarp`<sup>Optional</sup> <a name="allowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```java
public java.lang.Object getAllowAuthenticateViaWarp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#allow_authenticate_via_warp ZeroTrustAccessOrganization#allow_authenticate_via_warp}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#auto_redirect_to_identity ZeroTrustAccessOrganization#auto_redirect_to_identity}

---

##### `customPages`<sup>Optional</sup> <a name="customPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.customPages"></a>

```java
public java.lang.Object getCustomPages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>>

custom_pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#custom_pages ZeroTrustAccessOrganization#custom_pages}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.isUiReadOnly"></a>

```java
public java.lang.Object getIsUiReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#is_ui_read_only ZeroTrustAccessOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.loginDesign"></a>

```java
public java.lang.Object getLoginDesign();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>>

login_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#login_design ZeroTrustAccessOrganization#login_design}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#session_duration ZeroTrustAccessOrganization#session_duration}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#ui_read_only_toggle_reason ZeroTrustAccessOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#user_seat_expiration_inactive_time ZeroTrustAccessOrganization#user_seat_expiration_inactive_time}

---

##### `warpAuthSessionDuration`<sup>Optional</sup> <a name="warpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.warpAuthSessionDuration"></a>

```java
public java.lang.String getWarpAuthSessionDuration();
```

- *Type:* java.lang.String

The amount of time that tokens issued for applications will be valid.

Must be in the format 30m or 2h45m. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#warp_auth_session_duration ZeroTrustAccessOrganization#warp_auth_session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#zone_id ZeroTrustAccessOrganization#zone_id}

---

### ZeroTrustAccessOrganizationCustomPages <a name="ZeroTrustAccessOrganizationCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganizationCustomPages;

ZeroTrustAccessOrganizationCustomPages.builder()
//  .forbidden(java.lang.String)
//  .identityDenied(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.forbidden">forbidden</a></code> | <code>java.lang.String</code> | The id of the forbidden page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.identityDenied">identityDenied</a></code> | <code>java.lang.String</code> | The id of the identity denied page. |

---

##### `forbidden`<sup>Optional</sup> <a name="forbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.forbidden"></a>

```java
public java.lang.String getForbidden();
```

- *Type:* java.lang.String

The id of the forbidden page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#forbidden ZeroTrustAccessOrganization#forbidden}

---

##### `identityDenied`<sup>Optional</sup> <a name="identityDenied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.identityDenied"></a>

```java
public java.lang.String getIdentityDenied();
```

- *Type:* java.lang.String

The id of the identity denied page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#identity_denied ZeroTrustAccessOrganization#identity_denied}

---

### ZeroTrustAccessOrganizationLoginDesign <a name="ZeroTrustAccessOrganizationLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganizationLoginDesign;

ZeroTrustAccessOrganizationLoginDesign.builder()
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | The background color on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.footerText">footerText</a></code> | <code>java.lang.String</code> | The text at the bottom of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.headerText">headerText</a></code> | <code>java.lang.String</code> | The text at the top of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | The URL of the logo on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.textColor">textColor</a></code> | <code>java.lang.String</code> | The text color on the login page. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

The background color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#background_color ZeroTrustAccessOrganization#background_color}

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

The text at the bottom of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#footer_text ZeroTrustAccessOrganization#footer_text}

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

The text at the top of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#header_text ZeroTrustAccessOrganization#header_text}

---

##### `logoPath`<sup>Optional</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

The URL of the logo on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#logo_path ZeroTrustAccessOrganization#logo_path}

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

The text color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_organization#text_color ZeroTrustAccessOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessOrganizationCustomPagesList <a name="ZeroTrustAccessOrganizationCustomPagesList" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganizationCustomPagesList;

new ZeroTrustAccessOrganizationCustomPagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get"></a>

```java
public ZeroTrustAccessOrganizationCustomPagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>>

---


### ZeroTrustAccessOrganizationCustomPagesOutputReference <a name="ZeroTrustAccessOrganizationCustomPagesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganizationCustomPagesOutputReference;

new ZeroTrustAccessOrganizationCustomPagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetForbidden">resetForbidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetIdentityDenied">resetIdentityDenied</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForbidden` <a name="resetForbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetForbidden"></a>

```java
public void resetForbidden()
```

##### `resetIdentityDenied` <a name="resetIdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```java
public void resetIdentityDenied()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbiddenInput">forbiddenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDeniedInput">identityDeniedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbidden">forbidden</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDenied">identityDenied</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forbiddenInput`<sup>Optional</sup> <a name="forbiddenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```java
public java.lang.String getForbiddenInput();
```

- *Type:* java.lang.String

---

##### `identityDeniedInput`<sup>Optional</sup> <a name="identityDeniedInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```java
public java.lang.String getIdentityDeniedInput();
```

- *Type:* java.lang.String

---

##### `forbidden`<sup>Required</sup> <a name="forbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbidden"></a>

```java
public java.lang.String getForbidden();
```

- *Type:* java.lang.String

---

##### `identityDenied`<sup>Required</sup> <a name="identityDenied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```java
public java.lang.String getIdentityDenied();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages">ZeroTrustAccessOrganizationCustomPages</a>

---


### ZeroTrustAccessOrganizationLoginDesignList <a name="ZeroTrustAccessOrganizationLoginDesignList" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganizationLoginDesignList;

new ZeroTrustAccessOrganizationLoginDesignList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get"></a>

```java
public ZeroTrustAccessOrganizationLoginDesignOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>>

---


### ZeroTrustAccessOrganizationLoginDesignOutputReference <a name="ZeroTrustAccessOrganizationLoginDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_organization.ZeroTrustAccessOrganizationLoginDesignOutputReference;

new ZeroTrustAccessOrganizationLoginDesignOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetLogoPath">resetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```java
public void resetBackgroundColor()
```

##### `resetFooterText` <a name="resetFooterText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetFooterText"></a>

```java
public void resetFooterText()
```

##### `resetHeaderText` <a name="resetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```java
public void resetHeaderText()
```

##### `resetLogoPath` <a name="resetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```java
public void resetLogoPath()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerTextInput">footerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerTextInput">headerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPathInput">logoPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerText">footerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerText">headerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```java
public java.lang.String getFooterTextInput();
```

- *Type:* java.lang.String

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```java
public java.lang.String getHeaderTextInput();
```

- *Type:* java.lang.String

---

##### `logoPathInput`<sup>Optional</sup> <a name="logoPathInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```java
public java.lang.String getLogoPathInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign">ZeroTrustAccessOrganizationLoginDesign</a>

---



