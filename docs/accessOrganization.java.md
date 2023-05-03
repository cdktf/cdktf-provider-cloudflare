# `cloudflare_access_organization`

Refer to the Terraform Registory for docs: [`cloudflare_access_organization`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization).

# `accessOrganization` Submodule <a name="`accessOrganization` Submodule" id="@cdktf/provider-cloudflare.accessOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessOrganization <a name="AccessOrganization" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization cloudflare_access_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganization;

AccessOrganization.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.String)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .id(java.lang.String)
//  .isUiReadOnly(java.lang.Boolean)
//  .isUiReadOnly(IResolvable)
//  .loginDesign(IResolvable)
//  .loginDesign(java.util.List<AccessOrganizationLoginDesign>)
//  .name(java.lang.String)
//  .uiReadOnlyToggleReason(java.lang.String)
//  .userSeatExpirationInactiveTime(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#id AccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.loginDesign">loginDesign</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>></code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.authDomain"></a>

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#auth_domain AccessOrganization#auth_domain}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#account_id AccessOrganization#account_id}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.autoRedirectToIdentity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#auto_redirect_to_identity AccessOrganization#auto_redirect_to_identity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#id AccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.isUiReadOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#is_ui_read_only AccessOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.loginDesign"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>>

login_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#login_design AccessOrganization#login_design}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#name AccessOrganization#name}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.uiReadOnlyToggleReason"></a>

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#ui_read_only_toggle_reason AccessOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime"></a>

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#user_seat_expiration_inactive_time AccessOrganization#user_seat_expiration_inactive_time}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#zone_id AccessOrganization#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.putLoginDesign">putLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetAutoRedirectToIdentity">resetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetIsUiReadOnly">resetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetLoginDesign">resetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetUiReadOnlyToggleReason">resetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetUserSeatExpirationInactiveTime">resetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLoginDesign` <a name="putLoginDesign" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.putLoginDesign"></a>

```java
public void putLoginDesign(IResolvable OR java.util.List<AccessOrganizationLoginDesign> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.putLoginDesign.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAutoRedirectToIdentity` <a name="resetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetAutoRedirectToIdentity"></a>

```java
public void resetAutoRedirectToIdentity()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetId"></a>

```java
public void resetId()
```

##### `resetIsUiReadOnly` <a name="resetIsUiReadOnly" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetIsUiReadOnly"></a>

```java
public void resetIsUiReadOnly()
```

##### `resetLoginDesign` <a name="resetLoginDesign" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetLoginDesign"></a>

```java
public void resetLoginDesign()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetName"></a>

```java
public void resetName()
```

##### `resetUiReadOnlyToggleReason` <a name="resetUiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetUiReadOnlyToggleReason"></a>

```java
public void resetUiReadOnlyToggleReason()
```

##### `resetUserSeatExpirationInactiveTime` <a name="resetUserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetUserSeatExpirationInactiveTime"></a>

```java
public void resetUserSeatExpirationInactiveTime()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganization;

AccessOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganization;

AccessOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganization;

AccessOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesign">loginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList">AccessOrganizationLoginDesignList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomainInput">authDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.autoRedirectToIdentityInput">autoRedirectToIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnlyInput">isUiReadOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesignInput">loginDesignInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.uiReadOnlyToggleReasonInput">uiReadOnlyToggleReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTimeInput">userSeatExpirationInactiveTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loginDesign`<sup>Required</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesign"></a>

```java
public AccessOrganizationLoginDesignList getLoginDesign();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList">AccessOrganizationLoginDesignList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `authDomainInput`<sup>Optional</sup> <a name="authDomainInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomainInput"></a>

```java
public java.lang.String getAuthDomainInput();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentityInput`<sup>Optional</sup> <a name="autoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.autoRedirectToIdentityInput"></a>

```java
public java.lang.Object getAutoRedirectToIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isUiReadOnlyInput`<sup>Optional</sup> <a name="isUiReadOnlyInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnlyInput"></a>

```java
public java.lang.Object getIsUiReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginDesignInput`<sup>Optional</sup> <a name="loginDesignInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesignInput"></a>

```java
public java.lang.Object getLoginDesignInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="uiReadOnlyToggleReasonInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.uiReadOnlyToggleReasonInput"></a>

```java
public java.lang.String getUiReadOnlyToggleReasonInput();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="userSeatExpirationInactiveTimeInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTimeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

---

##### `autoRedirectToIdentity`<sup>Required</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isUiReadOnly`<sup>Required</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnly"></a>

```java
public java.lang.Object getIsUiReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `uiReadOnlyToggleReason`<sup>Required</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

---

##### `userSeatExpirationInactiveTime`<sup>Required</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessOrganizationConfig <a name="AccessOrganizationConfig" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganizationConfig;

AccessOrganizationConfig.builder()
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
//  .accountId(java.lang.String)
//  .autoRedirectToIdentity(java.lang.Boolean)
//  .autoRedirectToIdentity(IResolvable)
//  .id(java.lang.String)
//  .isUiReadOnly(java.lang.Boolean)
//  .isUiReadOnly(IResolvable)
//  .loginDesign(IResolvable)
//  .loginDesign(java.util.List<AccessOrganizationLoginDesign>)
//  .name(java.lang.String)
//  .uiReadOnlyToggleReason(java.lang.String)
//  .userSeatExpirationInactiveTime(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.authDomain">authDomain</a></code> | <code>java.lang.String</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.autoRedirectToIdentity">autoRedirectToIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#id AccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.isUiReadOnly">isUiReadOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.loginDesign">loginDesign</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>></code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.uiReadOnlyToggleReason">uiReadOnlyToggleReason</a></code> | <code>java.lang.String</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.userSeatExpirationInactiveTime">userSeatExpirationInactiveTime</a></code> | <code>java.lang.String</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.authDomain"></a>

```java
public java.lang.String getAuthDomain();
```

- *Type:* java.lang.String

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#auth_domain AccessOrganization#auth_domain}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#account_id AccessOrganization#account_id}

---

##### `autoRedirectToIdentity`<sup>Optional</sup> <a name="autoRedirectToIdentity" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.autoRedirectToIdentity"></a>

```java
public java.lang.Object getAutoRedirectToIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#auto_redirect_to_identity AccessOrganization#auto_redirect_to_identity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#id AccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUiReadOnly`<sup>Optional</sup> <a name="isUiReadOnly" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.isUiReadOnly"></a>

```java
public java.lang.Object getIsUiReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#is_ui_read_only AccessOrganization#is_ui_read_only}

---

##### `loginDesign`<sup>Optional</sup> <a name="loginDesign" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.loginDesign"></a>

```java
public java.lang.Object getLoginDesign();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>>

login_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#login_design AccessOrganization#login_design}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#name AccessOrganization#name}

---

##### `uiReadOnlyToggleReason`<sup>Optional</sup> <a name="uiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```java
public java.lang.String getUiReadOnlyToggleReason();
```

- *Type:* java.lang.String

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#ui_read_only_toggle_reason AccessOrganization#ui_read_only_toggle_reason}

---

##### `userSeatExpirationInactiveTime`<sup>Optional</sup> <a name="userSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```java
public java.lang.String getUserSeatExpirationInactiveTime();
```

- *Type:* java.lang.String

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#user_seat_expiration_inactive_time AccessOrganization#user_seat_expiration_inactive_time}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#zone_id AccessOrganization#zone_id}

---

### AccessOrganizationLoginDesign <a name="AccessOrganizationLoginDesign" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganizationLoginDesign;

AccessOrganizationLoginDesign.builder()
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
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | The background color on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.footerText">footerText</a></code> | <code>java.lang.String</code> | The text at the bottom of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.headerText">headerText</a></code> | <code>java.lang.String</code> | The text at the top of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | The URL of the logo on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.textColor">textColor</a></code> | <code>java.lang.String</code> | The text color on the login page. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

The background color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#background_color AccessOrganization#background_color}

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

The text at the bottom of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#footer_text AccessOrganization#footer_text}

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

The text at the top of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#header_text AccessOrganization#header_text}

---

##### `logoPath`<sup>Optional</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

The URL of the logo on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#logo_path AccessOrganization#logo_path}

---

##### `textColor`<sup>Optional</sup> <a name="textColor" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

The text color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/access_organization#text_color AccessOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessOrganizationLoginDesignList <a name="AccessOrganizationLoginDesignList" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganizationLoginDesignList;

new AccessOrganizationLoginDesignList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.get"></a>

```java
public AccessOrganizationLoginDesignOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>>

---


### AccessOrganizationLoginDesignOutputReference <a name="AccessOrganizationLoginDesignOutputReference" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_organization.AccessOrganizationLoginDesignOutputReference;

new AccessOrganizationLoginDesignOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetLogoPath">resetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetTextColor">resetTextColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```java
public void resetBackgroundColor()
```

##### `resetFooterText` <a name="resetFooterText" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetFooterText"></a>

```java
public void resetFooterText()
```

##### `resetHeaderText` <a name="resetHeaderText" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```java
public void resetHeaderText()
```

##### `resetLogoPath` <a name="resetLogoPath" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```java
public void resetLogoPath()
```

##### `resetTextColor` <a name="resetTextColor" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetTextColor"></a>

```java
public void resetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerTextInput">footerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerTextInput">headerTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPathInput">logoPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerText">footerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerText">headerText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPath">logoPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```java
public java.lang.String getFooterTextInput();
```

- *Type:* java.lang.String

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```java
public java.lang.String getHeaderTextInput();
```

- *Type:* java.lang.String

---

##### `logoPathInput`<sup>Optional</sup> <a name="logoPathInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```java
public java.lang.String getLogoPathInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerText"></a>

```java
public java.lang.String getFooterText();
```

- *Type:* java.lang.String

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerText"></a>

```java
public java.lang.String getHeaderText();
```

- *Type:* java.lang.String

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPath"></a>

```java
public java.lang.String getLogoPath();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a> OR com.hashicorp.cdktf.IResolvable

---



