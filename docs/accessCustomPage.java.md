# `cloudflare_access_custom_page`

Refer to the Terraform Registory for docs: [`cloudflare_access_custom_page`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page).

# `accessCustomPage` Submodule <a name="`accessCustomPage` Submodule" id="@cdktf/provider-cloudflare.accessCustomPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessCustomPage <a name="AccessCustomPage" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page cloudflare_access_custom_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_custom_page.AccessCustomPage;

AccessCustomPage.Builder.create(Construct scope, java.lang.String id)
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
//  .appCount(java.lang.Number)
//  .customHtml(java.lang.String)
//  .id(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Custom Page configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of Access custom page to create. Available values: `identity_denied`, `forbidden`. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.appCount">appCount</a></code> | <code>java.lang.Number</code> | Number of apps to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.customHtml">customHtml</a></code> | <code>java.lang.String</code> | Custom HTML to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Friendly name of the Access Custom Page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#name AccessCustomPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of Access custom page to create. Available values: `identity_denied`, `forbidden`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#type AccessCustomPage#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#account_id AccessCustomPage#account_id}

---

##### `appCount`<sup>Optional</sup> <a name="appCount" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.appCount"></a>

- *Type:* java.lang.Number

Number of apps to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#app_count AccessCustomPage#app_count}

---

##### `customHtml`<sup>Optional</sup> <a name="customHtml" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.customHtml"></a>

- *Type:* java.lang.String

Custom HTML to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#custom_html AccessCustomPage#custom_html}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#zone_id AccessCustomPage#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAppCount">resetAppCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetCustomHtml">resetCustomHtml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAppCount` <a name="resetAppCount" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAppCount"></a>

```java
public void resetAppCount()
```

##### `resetCustomHtml` <a name="resetCustomHtml" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetCustomHtml"></a>

```java
public void resetCustomHtml()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetId"></a>

```java
public void resetId()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessCustomPage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_custom_page.AccessCustomPage;

AccessCustomPage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_custom_page.AccessCustomPage;

AccessCustomPage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_custom_page.AccessCustomPage;

AccessCustomPage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_custom_page.AccessCustomPage;

AccessCustomPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessCustomPage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessCustomPage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessCustomPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessCustomPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessCustomPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCountInput">appCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtmlInput">customHtmlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCount">appCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtml">customHtml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `appCountInput`<sup>Optional</sup> <a name="appCountInput" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCountInput"></a>

```java
public java.lang.Number getAppCountInput();
```

- *Type:* java.lang.Number

---

##### `customHtmlInput`<sup>Optional</sup> <a name="customHtmlInput" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtmlInput"></a>

```java
public java.lang.String getCustomHtmlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `appCount`<sup>Required</sup> <a name="appCount" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCount"></a>

```java
public java.lang.Number getAppCount();
```

- *Type:* java.lang.Number

---

##### `customHtml`<sup>Required</sup> <a name="customHtml" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtml"></a>

```java
public java.lang.String getCustomHtml();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessCustomPageConfig <a name="AccessCustomPageConfig" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_custom_page.AccessCustomPageConfig;

AccessCustomPageConfig.builder()
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
//  .appCount(java.lang.Number)
//  .customHtml(java.lang.String)
//  .id(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Custom Page configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of Access custom page to create. Available values: `identity_denied`, `forbidden`. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.appCount">appCount</a></code> | <code>java.lang.Number</code> | Number of apps to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.customHtml">customHtml</a></code> | <code>java.lang.String</code> | Custom HTML to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Friendly name of the Access Custom Page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#name AccessCustomPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of Access custom page to create. Available values: `identity_denied`, `forbidden`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#type AccessCustomPage#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#account_id AccessCustomPage#account_id}

---

##### `appCount`<sup>Optional</sup> <a name="appCount" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.appCount"></a>

```java
public java.lang.Number getAppCount();
```

- *Type:* java.lang.Number

Number of apps to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#app_count AccessCustomPage#app_count}

---

##### `customHtml`<sup>Optional</sup> <a name="customHtml" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.customHtml"></a>

```java
public java.lang.String getCustomHtml();
```

- *Type:* java.lang.String

Custom HTML to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#custom_html AccessCustomPage#custom_html}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#zone_id AccessCustomPage#zone_id}

---



