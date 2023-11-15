# `cloudflare_access_identity_provider`

Refer to the Terraform Registory for docs: [`cloudflare_access_identity_provider`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider).

# `accessIdentityProvider` Submodule <a name="`accessIdentityProvider` Submodule" id="@cdktf/provider-cloudflare.accessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessIdentityProvider <a name="AccessIdentityProvider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider cloudflare_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProvider;

AccessIdentityProvider.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .type(java.lang.String)
//  .accountId(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<AccessIdentityProviderConfigA>)
//  .id(java.lang.String)
//  .scimConfig(IResolvable)
//  .scimConfig(java.util.List<AccessIdentityProviderScimConfig>)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scimConfig">scimConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#name AccessIdentityProvider#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The provider type to use.

Available values: `azureAD`, `centrify`, `facebook`, `github`, `google`, `google-apps`, `linkedin`, `oidc`, `okta`, `onelogin`, `onetimepin`, `pingone`, `saml`, `yandex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#type AccessIdentityProvider#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#account_id AccessIdentityProvider#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#config AccessIdentityProvider#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scimConfig`<sup>Optional</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scimConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#scim_config AccessIdentityProvider#scim_config}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#zone_id AccessIdentityProvider#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig">putScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetScimConfig">resetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig"></a>

```java
public void putConfig(IResolvable OR java.util.List<AccessIdentityProviderConfigA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>>

---

##### `putScimConfig` <a name="putScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig"></a>

```java
public void putScimConfig(IResolvable OR java.util.List<AccessIdentityProviderScimConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId"></a>

```java
public void resetId()
```

##### `resetScimConfig` <a name="resetScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetScimConfig"></a>

```java
public void resetScimConfig()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProvider;

AccessIdentityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProvider;

AccessIdentityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProvider;

AccessIdentityProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProvider;

AccessIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList">AccessIdentityProviderScimConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput">configInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfigInput">scimConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config"></a>

```java
public AccessIdentityProviderConfigAList getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a>

---

##### `scimConfig`<sup>Required</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfig"></a>

```java
public AccessIdentityProviderScimConfigList getScimConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList">AccessIdentityProviderScimConfigList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scimConfigInput`<sup>Optional</sup> <a name="scimConfigInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfigInput"></a>

```java
public java.lang.Object getScimConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessIdentityProviderConfig <a name="AccessIdentityProviderConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProviderConfig;

AccessIdentityProviderConfig.builder()
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
    .name(java.lang.String)
    .type(java.lang.String)
//  .accountId(java.lang.String)
//  .config(IResolvable)
//  .config(java.util.List<AccessIdentityProviderConfigA>)
//  .id(java.lang.String)
//  .scimConfig(IResolvable)
//  .scimConfig(java.util.List<AccessIdentityProviderScimConfig>)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type">type</a></code> | <code>java.lang.String</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config">config</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.scimConfig">scimConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#name AccessIdentityProvider#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The provider type to use.

Available values: `azureAD`, `centrify`, `facebook`, `github`, `google`, `google-apps`, `linkedin`, `oidc`, `okta`, `onelogin`, `onetimepin`, `pingone`, `saml`, `yandex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#type AccessIdentityProvider#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#account_id AccessIdentityProvider#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config"></a>

```java
public java.lang.Object getConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#config AccessIdentityProvider#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scimConfig`<sup>Optional</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.scimConfig"></a>

```java
public java.lang.Object getScimConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#scim_config AccessIdentityProvider#scim_config}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#zone_id AccessIdentityProvider#zone_id}

---

### AccessIdentityProviderConfigA <a name="AccessIdentityProviderConfigA" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProviderConfigA;

AccessIdentityProviderConfigA.builder()
//  .apiToken(java.lang.String)
//  .appsDomain(java.lang.String)
//  .attributes(java.util.List<java.lang.String>)
//  .authorizationServerId(java.lang.String)
//  .authUrl(java.lang.String)
//  .centrifyAccount(java.lang.String)
//  .centrifyAppId(java.lang.String)
//  .certsUrl(java.lang.String)
//  .claims(java.util.List<java.lang.String>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .conditionalAccessEnabled(java.lang.Boolean)
//  .conditionalAccessEnabled(IResolvable)
//  .directoryId(java.lang.String)
//  .emailAttributeName(java.lang.String)
//  .emailClaimName(java.lang.String)
//  .idpPublicCert(java.lang.String)
//  .issuerUrl(java.lang.String)
//  .oktaAccount(java.lang.String)
//  .oneloginAccount(java.lang.String)
//  .pingEnvId(java.lang.String)
//  .pkceEnabled(java.lang.Boolean)
//  .pkceEnabled(IResolvable)
//  .scopes(java.util.List<java.lang.String>)
//  .signRequest(java.lang.Boolean)
//  .signRequest(IResolvable)
//  .ssoTargetUrl(java.lang.String)
//  .supportGroups(java.lang.Boolean)
//  .supportGroups(IResolvable)
//  .tokenUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#api_token AccessIdentityProvider#api_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain">appsDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#attributes AccessIdentityProvider#attributes}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authorizationServerId">authorizationServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#authorization_server_id AccessIdentityProvider#authorization_server_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#auth_url AccessIdentityProvider#auth_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount">centrifyAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId">centrifyAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl">certsUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#certs_url AccessIdentityProvider#certs_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.claims">claims</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#claims AccessIdentityProvider#claims}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#client_id AccessIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#client_secret AccessIdentityProvider#client_secret}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.conditionalAccessEnabled">conditionalAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#conditional_access_enabled AccessIdentityProvider#conditional_access_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#directory_id AccessIdentityProvider#directory_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName">emailAttributeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailClaimName">emailClaimName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#email_claim_name AccessIdentityProvider#email_claim_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert">idpPublicCert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount">oktaAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#okta_account AccessIdentityProvider#okta_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount">oneloginAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pingEnvId">pingEnvId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#ping_env_id AccessIdentityProvider#ping_env_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled">pkceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#scopes AccessIdentityProvider#scopes}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest">signRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#sign_request AccessIdentityProvider#sign_request}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl">ssoTargetUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups">supportGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#support_groups AccessIdentityProvider#support_groups}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#token_url AccessIdentityProvider#token_url}. |

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#api_token AccessIdentityProvider#api_token}.

---

##### `appsDomain`<sup>Optional</sup> <a name="appsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain"></a>

```java
public java.lang.String getAppsDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#attributes AccessIdentityProvider#attributes}.

---

##### `authorizationServerId`<sup>Optional</sup> <a name="authorizationServerId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authorizationServerId"></a>

```java
public java.lang.String getAuthorizationServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#authorization_server_id AccessIdentityProvider#authorization_server_id}.

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#auth_url AccessIdentityProvider#auth_url}.

---

##### `centrifyAccount`<sup>Optional</sup> <a name="centrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount"></a>

```java
public java.lang.String getCentrifyAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}.

---

##### `centrifyAppId`<sup>Optional</sup> <a name="centrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId"></a>

```java
public java.lang.String getCentrifyAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}.

---

##### `certsUrl`<sup>Optional</sup> <a name="certsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl"></a>

```java
public java.lang.String getCertsUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#certs_url AccessIdentityProvider#certs_url}.

---

##### `claims`<sup>Optional</sup> <a name="claims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.claims"></a>

```java
public java.util.List<java.lang.String> getClaims();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#claims AccessIdentityProvider#claims}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#client_id AccessIdentityProvider#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#client_secret AccessIdentityProvider#client_secret}.

---

##### `conditionalAccessEnabled`<sup>Optional</sup> <a name="conditionalAccessEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.conditionalAccessEnabled"></a>

```java
public java.lang.Object getConditionalAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#conditional_access_enabled AccessIdentityProvider#conditional_access_enabled}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#directory_id AccessIdentityProvider#directory_id}.

---

##### `emailAttributeName`<sup>Optional</sup> <a name="emailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName"></a>

```java
public java.lang.String getEmailAttributeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}.

---

##### `emailClaimName`<sup>Optional</sup> <a name="emailClaimName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailClaimName"></a>

```java
public java.lang.String getEmailClaimName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#email_claim_name AccessIdentityProvider#email_claim_name}.

---

##### `idpPublicCert`<sup>Optional</sup> <a name="idpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert"></a>

```java
public java.lang.String getIdpPublicCert();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}.

---

##### `issuerUrl`<sup>Optional</sup> <a name="issuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}.

---

##### `oktaAccount`<sup>Optional</sup> <a name="oktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount"></a>

```java
public java.lang.String getOktaAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#okta_account AccessIdentityProvider#okta_account}.

---

##### `oneloginAccount`<sup>Optional</sup> <a name="oneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount"></a>

```java
public java.lang.String getOneloginAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}.

---

##### `pingEnvId`<sup>Optional</sup> <a name="pingEnvId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pingEnvId"></a>

```java
public java.lang.String getPingEnvId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#ping_env_id AccessIdentityProvider#ping_env_id}.

---

##### `pkceEnabled`<sup>Optional</sup> <a name="pkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled"></a>

```java
public java.lang.Object getPkceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#scopes AccessIdentityProvider#scopes}.

---

##### `signRequest`<sup>Optional</sup> <a name="signRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest"></a>

```java
public java.lang.Object getSignRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#sign_request AccessIdentityProvider#sign_request}.

---

##### `ssoTargetUrl`<sup>Optional</sup> <a name="ssoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl"></a>

```java
public java.lang.String getSsoTargetUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}.

---

##### `supportGroups`<sup>Optional</sup> <a name="supportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups"></a>

```java
public java.lang.Object getSupportGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#support_groups AccessIdentityProvider#support_groups}.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#token_url AccessIdentityProvider#token_url}.

---

### AccessIdentityProviderScimConfig <a name="AccessIdentityProviderScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProviderScimConfig;

AccessIdentityProviderScimConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .groupMemberDeprovision(java.lang.Boolean)
//  .groupMemberDeprovision(IResolvable)
//  .seatDeprovision(java.lang.Boolean)
//  .seatDeprovision(IResolvable)
//  .secret(java.lang.String)
//  .userDeprovision(java.lang.Boolean)
//  .userDeprovision(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#enabled AccessIdentityProvider#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.groupMemberDeprovision">groupMemberDeprovision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#group_member_deprovision AccessIdentityProvider#group_member_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.seatDeprovision">seatDeprovision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#seat_deprovision AccessIdentityProvider#seat_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.secret">secret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#secret AccessIdentityProvider#secret}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.userDeprovision">userDeprovision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#user_deprovision AccessIdentityProvider#user_deprovision}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#enabled AccessIdentityProvider#enabled}.

---

##### `groupMemberDeprovision`<sup>Optional</sup> <a name="groupMemberDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.groupMemberDeprovision"></a>

```java
public java.lang.Object getGroupMemberDeprovision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#group_member_deprovision AccessIdentityProvider#group_member_deprovision}.

---

##### `seatDeprovision`<sup>Optional</sup> <a name="seatDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.seatDeprovision"></a>

```java
public java.lang.Object getSeatDeprovision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#seat_deprovision AccessIdentityProvider#seat_deprovision}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#secret AccessIdentityProvider#secret}.

---

##### `userDeprovision`<sup>Optional</sup> <a name="userDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.userDeprovision"></a>

```java
public java.lang.Object getUserDeprovision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/access_identity_provider#user_deprovision AccessIdentityProvider#user_deprovision}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessIdentityProviderConfigAList <a name="AccessIdentityProviderConfigAList" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProviderConfigAList;

new AccessIdentityProviderConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get"></a>

```java
public AccessIdentityProviderConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>>

---


### AccessIdentityProviderConfigAOutputReference <a name="AccessIdentityProviderConfigAOutputReference" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProviderConfigAOutputReference;

new AccessIdentityProviderConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain">resetAppsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId">resetAuthorizationServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount">resetCentrifyAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId">resetCentrifyAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl">resetCertsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClaims">resetClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled">resetConditionalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName">resetEmailAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailClaimName">resetEmailClaimName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert">resetIdpPublicCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl">resetIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount">resetOktaAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount">resetOneloginAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPingEnvId">resetPingEnvId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled">resetPkceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest">resetSignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl">resetSsoTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups">resetSupportGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken"></a>

```java
public void resetApiToken()
```

##### `resetAppsDomain` <a name="resetAppsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain"></a>

```java
public void resetAppsDomain()
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAuthorizationServerId` <a name="resetAuthorizationServerId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId"></a>

```java
public void resetAuthorizationServerId()
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl"></a>

```java
public void resetAuthUrl()
```

##### `resetCentrifyAccount` <a name="resetCentrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount"></a>

```java
public void resetCentrifyAccount()
```

##### `resetCentrifyAppId` <a name="resetCentrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId"></a>

```java
public void resetCentrifyAppId()
```

##### `resetCertsUrl` <a name="resetCertsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl"></a>

```java
public void resetCertsUrl()
```

##### `resetClaims` <a name="resetClaims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClaims"></a>

```java
public void resetClaims()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetConditionalAccessEnabled` <a name="resetConditionalAccessEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled"></a>

```java
public void resetConditionalAccessEnabled()
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId"></a>

```java
public void resetDirectoryId()
```

##### `resetEmailAttributeName` <a name="resetEmailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName"></a>

```java
public void resetEmailAttributeName()
```

##### `resetEmailClaimName` <a name="resetEmailClaimName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailClaimName"></a>

```java
public void resetEmailClaimName()
```

##### `resetIdpPublicCert` <a name="resetIdpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert"></a>

```java
public void resetIdpPublicCert()
```

##### `resetIssuerUrl` <a name="resetIssuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl"></a>

```java
public void resetIssuerUrl()
```

##### `resetOktaAccount` <a name="resetOktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount"></a>

```java
public void resetOktaAccount()
```

##### `resetOneloginAccount` <a name="resetOneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount"></a>

```java
public void resetOneloginAccount()
```

##### `resetPingEnvId` <a name="resetPingEnvId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPingEnvId"></a>

```java
public void resetPingEnvId()
```

##### `resetPkceEnabled` <a name="resetPkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled"></a>

```java
public void resetPkceEnabled()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSignRequest` <a name="resetSignRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest"></a>

```java
public void resetSignRequest()
```

##### `resetSsoTargetUrl` <a name="resetSsoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl"></a>

```java
public void resetSsoTargetUrl()
```

##### `resetSupportGroups` <a name="resetSupportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups"></a>

```java
public void resetSupportGroups()
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl"></a>

```java
public void resetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput">apiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput">appsDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput">authorizationServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput">authUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput">centrifyAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput">centrifyAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput">certsUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claimsInput">claimsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput">conditionalAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput">emailAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput">emailClaimNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput">idpPublicCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput">oktaAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput">oneloginAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput">pingEnvIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput">pkceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput">signRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput">ssoTargetUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput">supportGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain">appsDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerId">authorizationServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount">centrifyAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId">centrifyAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl">certsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claims">claims</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled">conditionalAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName">emailAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimName">emailClaimName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert">idpPublicCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount">oktaAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount">oneloginAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvId">pingEnvId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled">pkceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest">signRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">ssoTargetUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups">supportGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput"></a>

```java
public java.lang.String getApiTokenInput();
```

- *Type:* java.lang.String

---

##### `appsDomainInput`<sup>Optional</sup> <a name="appsDomainInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput"></a>

```java
public java.lang.String getAppsDomainInput();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput"></a>

```java
public java.util.List<java.lang.String> getAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationServerIdInput`<sup>Optional</sup> <a name="authorizationServerIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput"></a>

```java
public java.lang.String getAuthorizationServerIdInput();
```

- *Type:* java.lang.String

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput"></a>

```java
public java.lang.String getAuthUrlInput();
```

- *Type:* java.lang.String

---

##### `centrifyAccountInput`<sup>Optional</sup> <a name="centrifyAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput"></a>

```java
public java.lang.String getCentrifyAccountInput();
```

- *Type:* java.lang.String

---

##### `centrifyAppIdInput`<sup>Optional</sup> <a name="centrifyAppIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput"></a>

```java
public java.lang.String getCentrifyAppIdInput();
```

- *Type:* java.lang.String

---

##### `certsUrlInput`<sup>Optional</sup> <a name="certsUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput"></a>

```java
public java.lang.String getCertsUrlInput();
```

- *Type:* java.lang.String

---

##### `claimsInput`<sup>Optional</sup> <a name="claimsInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claimsInput"></a>

```java
public java.util.List<java.lang.String> getClaimsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `conditionalAccessEnabledInput`<sup>Optional</sup> <a name="conditionalAccessEnabledInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput"></a>

```java
public java.lang.Object getConditionalAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `emailAttributeNameInput`<sup>Optional</sup> <a name="emailAttributeNameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput"></a>

```java
public java.lang.String getEmailAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `emailClaimNameInput`<sup>Optional</sup> <a name="emailClaimNameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput"></a>

```java
public java.lang.String getEmailClaimNameInput();
```

- *Type:* java.lang.String

---

##### `idpPublicCertInput`<sup>Optional</sup> <a name="idpPublicCertInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput"></a>

```java
public java.lang.String getIdpPublicCertInput();
```

- *Type:* java.lang.String

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput"></a>

```java
public java.lang.String getIssuerUrlInput();
```

- *Type:* java.lang.String

---

##### `oktaAccountInput`<sup>Optional</sup> <a name="oktaAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput"></a>

```java
public java.lang.String getOktaAccountInput();
```

- *Type:* java.lang.String

---

##### `oneloginAccountInput`<sup>Optional</sup> <a name="oneloginAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput"></a>

```java
public java.lang.String getOneloginAccountInput();
```

- *Type:* java.lang.String

---

##### `pingEnvIdInput`<sup>Optional</sup> <a name="pingEnvIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput"></a>

```java
public java.lang.String getPingEnvIdInput();
```

- *Type:* java.lang.String

---

##### `pkceEnabledInput`<sup>Optional</sup> <a name="pkceEnabledInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput"></a>

```java
public java.lang.Object getPkceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signRequestInput`<sup>Optional</sup> <a name="signRequestInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput"></a>

```java
public java.lang.Object getSignRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssoTargetUrlInput`<sup>Optional</sup> <a name="ssoTargetUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput"></a>

```java
public java.lang.String getSsoTargetUrlInput();
```

- *Type:* java.lang.String

---

##### `supportGroupsInput`<sup>Optional</sup> <a name="supportGroupsInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput"></a>

```java
public java.lang.Object getSupportGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput"></a>

```java
public java.lang.String getTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `appsDomain`<sup>Required</sup> <a name="appsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```java
public java.lang.String getAppsDomain();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationServerId`<sup>Required</sup> <a name="authorizationServerId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerId"></a>

```java
public java.lang.String getAuthorizationServerId();
```

- *Type:* java.lang.String

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

---

##### `centrifyAccount`<sup>Required</sup> <a name="centrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```java
public java.lang.String getCentrifyAccount();
```

- *Type:* java.lang.String

---

##### `centrifyAppId`<sup>Required</sup> <a name="centrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```java
public java.lang.String getCentrifyAppId();
```

- *Type:* java.lang.String

---

##### `certsUrl`<sup>Required</sup> <a name="certsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```java
public java.lang.String getCertsUrl();
```

- *Type:* java.lang.String

---

##### `claims`<sup>Required</sup> <a name="claims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claims"></a>

```java
public java.util.List<java.lang.String> getClaims();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `conditionalAccessEnabled`<sup>Required</sup> <a name="conditionalAccessEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled"></a>

```java
public java.lang.Object getConditionalAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `emailAttributeName`<sup>Required</sup> <a name="emailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```java
public java.lang.String getEmailAttributeName();
```

- *Type:* java.lang.String

---

##### `emailClaimName`<sup>Required</sup> <a name="emailClaimName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimName"></a>

```java
public java.lang.String getEmailClaimName();
```

- *Type:* java.lang.String

---

##### `idpPublicCert`<sup>Required</sup> <a name="idpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert"></a>

```java
public java.lang.String getIdpPublicCert();
```

- *Type:* java.lang.String

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

---

##### `oktaAccount`<sup>Required</sup> <a name="oktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```java
public java.lang.String getOktaAccount();
```

- *Type:* java.lang.String

---

##### `oneloginAccount`<sup>Required</sup> <a name="oneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```java
public java.lang.String getOneloginAccount();
```

- *Type:* java.lang.String

---

##### `pingEnvId`<sup>Required</sup> <a name="pingEnvId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvId"></a>

```java
public java.lang.String getPingEnvId();
```

- *Type:* java.lang.String

---

##### `pkceEnabled`<sup>Required</sup> <a name="pkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```java
public java.lang.Object getPkceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signRequest`<sup>Required</sup> <a name="signRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```java
public java.lang.Object getSignRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ssoTargetUrl`<sup>Required</sup> <a name="ssoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```java
public java.lang.String getSsoTargetUrl();
```

- *Type:* java.lang.String

---

##### `supportGroups`<sup>Required</sup> <a name="supportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```java
public java.lang.Object getSupportGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA">AccessIdentityProviderConfigA</a>

---


### AccessIdentityProviderScimConfigList <a name="AccessIdentityProviderScimConfigList" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProviderScimConfigList;

new AccessIdentityProviderScimConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get"></a>

```java
public AccessIdentityProviderScimConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>>

---


### AccessIdentityProviderScimConfigOutputReference <a name="AccessIdentityProviderScimConfigOutputReference" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_identity_provider.AccessIdentityProviderScimConfigOutputReference;

new AccessIdentityProviderScimConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision">resetGroupMemberDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision">resetSeatDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetUserDeprovision">resetUserDeprovision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetGroupMemberDeprovision` <a name="resetGroupMemberDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision"></a>

```java
public void resetGroupMemberDeprovision()
```

##### `resetSeatDeprovision` <a name="resetSeatDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision"></a>

```java
public void resetSeatDeprovision()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetUserDeprovision` <a name="resetUserDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetUserDeprovision"></a>

```java
public void resetUserDeprovision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput">groupMemberDeprovisionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput">seatDeprovisionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput">userDeprovisionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision">groupMemberDeprovision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovision">seatDeprovision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovision">userDeprovision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupMemberDeprovisionInput`<sup>Optional</sup> <a name="groupMemberDeprovisionInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput"></a>

```java
public java.lang.Object getGroupMemberDeprovisionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `seatDeprovisionInput`<sup>Optional</sup> <a name="seatDeprovisionInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput"></a>

```java
public java.lang.Object getSeatDeprovisionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `userDeprovisionInput`<sup>Optional</sup> <a name="userDeprovisionInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput"></a>

```java
public java.lang.Object getUserDeprovisionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupMemberDeprovision`<sup>Required</sup> <a name="groupMemberDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision"></a>

```java
public java.lang.Object getGroupMemberDeprovision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `seatDeprovision`<sup>Required</sup> <a name="seatDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovision"></a>

```java
public java.lang.Object getSeatDeprovision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `userDeprovision`<sup>Required</sup> <a name="userDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovision"></a>

```java
public java.lang.Object getUserDeprovision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig">AccessIdentityProviderScimConfig</a>

---



