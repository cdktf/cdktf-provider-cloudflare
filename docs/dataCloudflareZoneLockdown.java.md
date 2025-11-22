# `dataCloudflareZoneLockdown` Submodule <a name="`dataCloudflareZoneLockdown` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneLockdown <a name="DataCloudflareZoneLockdown" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown cloudflare_zone_lockdown}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdown;

DataCloudflareZoneLockdown.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .filter(DataCloudflareZoneLockdownFilter)
//  .lockDownsId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lockDownsId">lockDownsId</a></code> | <code>java.lang.String</code> | The unique identifier of the Zone Lockdown rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#zone_id DataCloudflareZoneLockdown#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}.

---

##### `lockDownsId`<sup>Optional</sup> <a name="lockDownsId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.Initializer.parameter.lockDownsId"></a>

- *Type:* java.lang.String

The unique identifier of the Zone Lockdown rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#lock_downs_id DataCloudflareZoneLockdown#lock_downs_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetLockDownsId">resetLockDownsId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter"></a>

```java
public void putFilter(DataCloudflareZoneLockdownFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetLockDownsId` <a name="resetLockDownsId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.resetLockDownsId"></a>

```java
public void resetLockDownsId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdown;

DataCloudflareZoneLockdown.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdown;

DataCloudflareZoneLockdown.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdown;

DataCloudflareZoneLockdown.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdown;

DataCloudflareZoneLockdown.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZoneLockdown.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZoneLockdown resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZoneLockdown to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZoneLockdown that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneLockdown to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList">DataCloudflareZoneLockdownConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference">DataCloudflareZoneLockdownFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.paused">paused</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsIdInput">lockDownsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsId">lockDownsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.configurations"></a>

```java
public DataCloudflareZoneLockdownConfigurationsList getConfigurations();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList">DataCloudflareZoneLockdownConfigurationsList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filter"></a>

```java
public DataCloudflareZoneLockdownFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference">DataCloudflareZoneLockdownFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.paused"></a>

```java
public IResolvable getPaused();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.filterInput"></a>

```java
public IResolvable|DataCloudflareZoneLockdownFilter getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

---

##### `lockDownsIdInput`<sup>Optional</sup> <a name="lockDownsIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsIdInput"></a>

```java
public java.lang.String getLockDownsIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `lockDownsId`<sup>Required</sup> <a name="lockDownsId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.lockDownsId"></a>

```java
public java.lang.String getLockDownsId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdown.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneLockdownConfig <a name="DataCloudflareZoneLockdownConfig" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdownConfig;

DataCloudflareZoneLockdownConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .filter(DataCloudflareZoneLockdownFilter)
//  .lockDownsId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lockDownsId">lockDownsId</a></code> | <code>java.lang.String</code> | The unique identifier of the Zone Lockdown rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#zone_id DataCloudflareZoneLockdown#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.filter"></a>

```java
public DataCloudflareZoneLockdownFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#filter DataCloudflareZoneLockdown#filter}.

---

##### `lockDownsId`<sup>Optional</sup> <a name="lockDownsId" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfig.property.lockDownsId"></a>

```java
public java.lang.String getLockDownsId();
```

- *Type:* java.lang.String

The unique identifier of the Zone Lockdown rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#lock_downs_id DataCloudflareZoneLockdown#lock_downs_id}

---

### DataCloudflareZoneLockdownConfigurations <a name="DataCloudflareZoneLockdownConfigurations" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdownConfigurations;

DataCloudflareZoneLockdownConfigurations.builder()
    .build();
```


### DataCloudflareZoneLockdownFilter <a name="DataCloudflareZoneLockdownFilter" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdownFilter;

DataCloudflareZoneLockdownFilter.builder()
//  .createdOn(java.lang.String)
//  .description(java.lang.String)
//  .descriptionSearch(java.lang.String)
//  .ip(java.lang.String)
//  .ipRangeSearch(java.lang.String)
//  .ipSearch(java.lang.String)
//  .modifiedOn(java.lang.String)
//  .priority(java.lang.Number)
//  .uriSearch(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | The timestamp of when the rule was created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.description">description</a></code> | <code>java.lang.String</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.descriptionSearch">descriptionSearch</a></code> | <code>java.lang.String</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ip">ip</a></code> | <code>java.lang.String</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipRangeSearch">ipRangeSearch</a></code> | <code>java.lang.String</code> | A single IP address range to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipSearch">ipSearch</a></code> | <code>java.lang.String</code> | A single IP address to search for in existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | The timestamp of when the rule was last modified. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of the rule to control the processing order. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.uriSearch">uriSearch</a></code> | <code>java.lang.String</code> | A single URI to search for in the list of URLs of existing rules. |

---

##### `createdOn`<sup>Optional</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

The timestamp of when the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#created_on DataCloudflareZoneLockdown#created_on}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#description DataCloudflareZoneLockdown#description}

---

##### `descriptionSearch`<sup>Optional</sup> <a name="descriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.descriptionSearch"></a>

```java
public java.lang.String getDescriptionSearch();
```

- *Type:* java.lang.String

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#description_search DataCloudflareZoneLockdown#description_search}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#ip DataCloudflareZoneLockdown#ip}

---

##### `ipRangeSearch`<sup>Optional</sup> <a name="ipRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipRangeSearch"></a>

```java
public java.lang.String getIpRangeSearch();
```

- *Type:* java.lang.String

A single IP address range to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#ip_range_search DataCloudflareZoneLockdown#ip_range_search}

---

##### `ipSearch`<sup>Optional</sup> <a name="ipSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.ipSearch"></a>

```java
public java.lang.String getIpSearch();
```

- *Type:* java.lang.String

A single IP address to search for in existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#ip_search DataCloudflareZoneLockdown#ip_search}

---

##### `modifiedOn`<sup>Optional</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

The timestamp of when the rule was last modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#modified_on DataCloudflareZoneLockdown#modified_on}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of the rule to control the processing order.

A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#priority DataCloudflareZoneLockdown#priority}

---

##### `uriSearch`<sup>Optional</sup> <a name="uriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter.property.uriSearch"></a>

```java
public java.lang.String getUriSearch();
```

- *Type:* java.lang.String

A single URI to search for in the list of URLs of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zone_lockdown#uri_search DataCloudflareZoneLockdown#uri_search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneLockdownConfigurationsList <a name="DataCloudflareZoneLockdownConfigurationsList" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdownConfigurationsList;

new DataCloudflareZoneLockdownConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get"></a>

```java
public DataCloudflareZoneLockdownConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZoneLockdownConfigurationsOutputReference <a name="DataCloudflareZoneLockdownConfigurationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdownConfigurationsOutputReference;

new DataCloudflareZoneLockdownConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations">DataCloudflareZoneLockdownConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurationsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZoneLockdownConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownConfigurations">DataCloudflareZoneLockdownConfigurations</a>

---


### DataCloudflareZoneLockdownFilterOutputReference <a name="DataCloudflareZoneLockdownFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_lockdown.DataCloudflareZoneLockdownFilterOutputReference;

new DataCloudflareZoneLockdownFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetCreatedOn">resetCreatedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescriptionSearch">resetDescriptionSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpRangeSearch">resetIpRangeSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpSearch">resetIpSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetModifiedOn">resetModifiedOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetUriSearch">resetUriSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreatedOn` <a name="resetCreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetCreatedOn"></a>

```java
public void resetCreatedOn()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDescriptionSearch` <a name="resetDescriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetDescriptionSearch"></a>

```java
public void resetDescriptionSearch()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpRangeSearch` <a name="resetIpRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpRangeSearch"></a>

```java
public void resetIpRangeSearch()
```

##### `resetIpSearch` <a name="resetIpSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetIpSearch"></a>

```java
public void resetIpSearch()
```

##### `resetModifiedOn` <a name="resetModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetModifiedOn"></a>

```java
public void resetModifiedOn()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetUriSearch` <a name="resetUriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.resetUriSearch"></a>

```java
public void resetUriSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOnInput">createdOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearchInput">descriptionSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearchInput">ipRangeSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearchInput">ipSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOnInput">modifiedOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearchInput">uriSearchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearch">descriptionSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearch">ipRangeSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearch">ipSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearch">uriSearch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdOnInput`<sup>Optional</sup> <a name="createdOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOnInput"></a>

```java
public java.lang.String getCreatedOnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `descriptionSearchInput`<sup>Optional</sup> <a name="descriptionSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearchInput"></a>

```java
public java.lang.String getDescriptionSearchInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `ipRangeSearchInput`<sup>Optional</sup> <a name="ipRangeSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearchInput"></a>

```java
public java.lang.String getIpRangeSearchInput();
```

- *Type:* java.lang.String

---

##### `ipSearchInput`<sup>Optional</sup> <a name="ipSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearchInput"></a>

```java
public java.lang.String getIpSearchInput();
```

- *Type:* java.lang.String

---

##### `modifiedOnInput`<sup>Optional</sup> <a name="modifiedOnInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOnInput"></a>

```java
public java.lang.String getModifiedOnInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `uriSearchInput`<sup>Optional</sup> <a name="uriSearchInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearchInput"></a>

```java
public java.lang.String getUriSearchInput();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `descriptionSearch`<sup>Required</sup> <a name="descriptionSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.descriptionSearch"></a>

```java
public java.lang.String getDescriptionSearch();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `ipRangeSearch`<sup>Required</sup> <a name="ipRangeSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipRangeSearch"></a>

```java
public java.lang.String getIpRangeSearch();
```

- *Type:* java.lang.String

---

##### `ipSearch`<sup>Required</sup> <a name="ipSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.ipSearch"></a>

```java
public java.lang.String getIpSearch();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `uriSearch`<sup>Required</sup> <a name="uriSearch" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.uriSearch"></a>

```java
public java.lang.String getUriSearch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareZoneLockdownFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.dataCloudflareZoneLockdown.DataCloudflareZoneLockdownFilter">DataCloudflareZoneLockdownFilter</a>

---



