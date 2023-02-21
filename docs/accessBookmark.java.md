# `accessBookmark` Submodule <a name="`accessBookmark` Submodule" id="@cdktf/provider-cloudflare.accessBookmark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessBookmark <a name="AccessBookmark" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark cloudflare_access_bookmark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_bookmark.AccessBookmark;

AccessBookmark.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .domain(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .appLauncherVisible(java.lang.Boolean)
//  .appLauncherVisible(IResolvable)
//  .id(java.lang.String)
//  .logoUrl(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The domain of the bookmark application. Can include subdomains, paths, or both. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the bookmark application. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.appLauncherVisible">appLauncherVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to show/hide the bookmark in the app launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#id AccessBookmark#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | The image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The domain of the bookmark application. Can include subdomains, paths, or both.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#domain AccessBookmark#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the bookmark application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#name AccessBookmark#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#account_id AccessBookmark#account_id}

---

##### `appLauncherVisible`<sup>Optional</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.appLauncherVisible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to show/hide the bookmark in the app launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#app_launcher_visible AccessBookmark#app_launcher_visible}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#id AccessBookmark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logoUrl`<sup>Optional</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.logoUrl"></a>

- *Type:* java.lang.String

The image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#logo_url AccessBookmark#logo_url}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#zone_id AccessBookmark#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetAppLauncherVisible">resetAppLauncherVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetLogoUrl">resetLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAppLauncherVisible` <a name="resetAppLauncherVisible" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetAppLauncherVisible"></a>

```java
public void resetAppLauncherVisible()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetId"></a>

```java
public void resetId()
```

##### `resetLogoUrl` <a name="resetLogoUrl" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetLogoUrl"></a>

```java
public void resetLogoUrl()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_bookmark.AccessBookmark;

AccessBookmark.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_bookmark.AccessBookmark;

AccessBookmark.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_bookmark.AccessBookmark;

AccessBookmark.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.appLauncherVisibleInput">appLauncherVisibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.logoUrlInput">logoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.appLauncherVisible">appLauncherVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `appLauncherVisibleInput`<sup>Optional</sup> <a name="appLauncherVisibleInput" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.appLauncherVisibleInput"></a>

```java
public java.lang.Object getAppLauncherVisibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logoUrlInput`<sup>Optional</sup> <a name="logoUrlInput" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.logoUrlInput"></a>

```java
public java.lang.String getLogoUrlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `appLauncherVisible`<sup>Required</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.appLauncherVisible"></a>

```java
public java.lang.Object getAppLauncherVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmark.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessBookmarkConfig <a name="AccessBookmarkConfig" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_bookmark.AccessBookmarkConfig;

AccessBookmarkConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .domain(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .appLauncherVisible(java.lang.Boolean)
//  .appLauncherVisible(IResolvable)
//  .id(java.lang.String)
//  .logoUrl(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The domain of the bookmark application. Can include subdomains, paths, or both. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the bookmark application. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.appLauncherVisible">appLauncherVisible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Option to show/hide the bookmark in the app launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#id AccessBookmark#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | The image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The domain of the bookmark application. Can include subdomains, paths, or both.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#domain AccessBookmark#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the bookmark application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#name AccessBookmark#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#account_id AccessBookmark#account_id}

---

##### `appLauncherVisible`<sup>Optional</sup> <a name="appLauncherVisible" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.appLauncherVisible"></a>

```java
public java.lang.Object getAppLauncherVisible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Option to show/hide the bookmark in the app launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#app_launcher_visible AccessBookmark#app_launcher_visible}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#id AccessBookmark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logoUrl`<sup>Optional</sup> <a name="logoUrl" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

The image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#logo_url AccessBookmark#logo_url}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessBookmark.AccessBookmarkConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_bookmark#zone_id AccessBookmark#zone_id}

---



