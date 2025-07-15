# `dataCloudflareZoneDnsSettings` Submodule <a name="`dataCloudflareZoneDnsSettings` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneDnsSettings <a name="DataCloudflareZoneDnsSettings" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_dns_settings cloudflare_zone_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettings;

DataCloudflareZoneDnsSettings.Builder.create(Construct scope, java.lang.String id)
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
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_dns_settings#zone_id DataCloudflareZoneDnsSettings#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZoneDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettings;

DataCloudflareZoneDnsSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettings;

DataCloudflareZoneDnsSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettings;

DataCloudflareZoneDnsSettings.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettings;

DataCloudflareZoneDnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZoneDnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZoneDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZoneDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZoneDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.flattenAllCnames">flattenAllCnames</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.foundationDns">foundationDns</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference">DataCloudflareZoneDnsSettingsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.multiProvider">multiProvider</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference">DataCloudflareZoneDnsSettingsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.secondaryOverrides">secondaryOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference">DataCloudflareZoneDnsSettingsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `flattenAllCnames`<sup>Required</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.flattenAllCnames"></a>

```java
public IResolvable getFlattenAllCnames();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `foundationDns`<sup>Required</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.foundationDns"></a>

```java
public IResolvable getFoundationDns();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalDns`<sup>Required</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.internalDns"></a>

```java
public DataCloudflareZoneDnsSettingsInternalDnsOutputReference getInternalDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference">DataCloudflareZoneDnsSettingsInternalDnsOutputReference</a>

---

##### `multiProvider`<sup>Required</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.multiProvider"></a>

```java
public IResolvable getMultiProvider();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nameservers"></a>

```java
public DataCloudflareZoneDnsSettingsNameserversOutputReference getNameservers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference">DataCloudflareZoneDnsSettingsNameserversOutputReference</a>

---

##### `nsTtl`<sup>Required</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nsTtl"></a>

```java
public java.lang.Number getNsTtl();
```

- *Type:* java.lang.Number

---

##### `secondaryOverrides`<sup>Required</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.secondaryOverrides"></a>

```java
public IResolvable getSecondaryOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.soa"></a>

```java
public DataCloudflareZoneDnsSettingsSoaOutputReference getSoa();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference">DataCloudflareZoneDnsSettingsSoaOutputReference</a>

---

##### `zoneMode`<sup>Required</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneMode"></a>

```java
public java.lang.String getZoneMode();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneDnsSettingsConfig <a name="DataCloudflareZoneDnsSettingsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettingsConfig;

DataCloudflareZoneDnsSettingsConfig.builder()
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
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zone_dns_settings#zone_id DataCloudflareZoneDnsSettings#zone_id}

---

### DataCloudflareZoneDnsSettingsInternalDns <a name="DataCloudflareZoneDnsSettingsInternalDns" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettingsInternalDns;

DataCloudflareZoneDnsSettingsInternalDns.builder()
    .build();
```


### DataCloudflareZoneDnsSettingsNameservers <a name="DataCloudflareZoneDnsSettingsNameservers" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettingsNameservers;

DataCloudflareZoneDnsSettingsNameservers.builder()
    .build();
```


### DataCloudflareZoneDnsSettingsSoa <a name="DataCloudflareZoneDnsSettingsSoa" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettingsSoa;

DataCloudflareZoneDnsSettingsSoa.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneDnsSettingsInternalDnsOutputReference <a name="DataCloudflareZoneDnsSettingsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference;

new DataCloudflareZoneDnsSettingsInternalDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId">referenceZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns">DataCloudflareZoneDnsSettingsInternalDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `referenceZoneId`<sup>Required</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId"></a>

```java
public java.lang.String getReferenceZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZoneDnsSettingsInternalDns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns">DataCloudflareZoneDnsSettingsInternalDns</a>

---


### DataCloudflareZoneDnsSettingsNameserversOutputReference <a name="DataCloudflareZoneDnsSettingsNameserversOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettingsNameserversOutputReference;

new DataCloudflareZoneDnsSettingsNameserversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.nsSet">nsSet</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers">DataCloudflareZoneDnsSettingsNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsSet`<sup>Required</sup> <a name="nsSet" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.nsSet"></a>

```java
public java.lang.Number getNsSet();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.internalValue"></a>

```java
public DataCloudflareZoneDnsSettingsNameservers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers">DataCloudflareZoneDnsSettingsNameservers</a>

---


### DataCloudflareZoneDnsSettingsSoaOutputReference <a name="DataCloudflareZoneDnsSettingsSoaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zone_dns_settings.DataCloudflareZoneDnsSettingsSoaOutputReference;

new DataCloudflareZoneDnsSettingsSoaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.expire">expire</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.minTtl">minTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.mname">mname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.refresh">refresh</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.retry">retry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.rname">rname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa">DataCloudflareZoneDnsSettingsSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.expire"></a>

```java
public java.lang.Number getExpire();
```

- *Type:* java.lang.Number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.minTtl"></a>

```java
public java.lang.Number getMinTtl();
```

- *Type:* java.lang.Number

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.mname"></a>

```java
public java.lang.String getMname();
```

- *Type:* java.lang.String

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.refresh"></a>

```java
public java.lang.Number getRefresh();
```

- *Type:* java.lang.Number

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.retry"></a>

```java
public java.lang.Number getRetry();
```

- *Type:* java.lang.Number

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.rname"></a>

```java
public java.lang.String getRname();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.internalValue"></a>

```java
public DataCloudflareZoneDnsSettingsSoa getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa">DataCloudflareZoneDnsSettingsSoa</a>

---



