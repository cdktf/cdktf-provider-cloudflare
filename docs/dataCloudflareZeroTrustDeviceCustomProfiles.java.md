# `dataCloudflareZeroTrustDeviceCustomProfiles` Submodule <a name="`dataCloudflareZeroTrustDeviceCustomProfiles` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceCustomProfiles <a name="DataCloudflareZeroTrustDeviceCustomProfiles" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles cloudflare_zero_trust_device_custom_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfiles;

DataCloudflareZeroTrustDeviceCustomProfiles.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles#max_items DataCloudflareZeroTrustDeviceCustomProfiles#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfiles;

DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfiles;

DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfiles;

DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfiles;

DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustDeviceCustomProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList">DataCloudflareZeroTrustDeviceCustomProfilesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.result"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList">DataCloudflareZeroTrustDeviceCustomProfilesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceCustomProfilesConfig <a name="DataCloudflareZeroTrustDeviceCustomProfilesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig;

DataCloudflareZeroTrustDeviceCustomProfilesConfig.builder()
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
    .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_device_custom_profiles#max_items DataCloudflareZeroTrustDeviceCustomProfiles#max_items}

---

### DataCloudflareZeroTrustDeviceCustomProfilesResult <a name="DataCloudflareZeroTrustDeviceCustomProfilesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResult;

DataCloudflareZeroTrustDeviceCustomProfilesResult.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultExclude <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude;

DataCloudflareZeroTrustDeviceCustomProfilesResultExclude.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains;

DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultInclude <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultInclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude;

DataCloudflareZeroTrustDeviceCustomProfilesResultInclude.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2;

DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests;

DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList;

new DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude">DataCloudflareZeroTrustDeviceCustomProfilesResultExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultExclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude">DataCloudflareZeroTrustDeviceCustomProfilesResultExclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList;

new DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList;

new DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude">DataCloudflareZeroTrustDeviceCustomProfilesResultInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultInclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude">DataCloudflareZeroTrustDeviceCustomProfilesResultInclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList;

new DataCloudflareZeroTrustDeviceCustomProfilesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowedToLeave">allowedToLeave</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowModeSwitch">allowModeSwitch</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowUpdates">allowUpdates</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.disableAutoFallback">disableAutoFallback</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.switchLocked">switchLocked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.targetTests">targetTests</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult">DataCloudflareZeroTrustDeviceCustomProfilesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowedToLeave"></a>

```java
public IResolvable getAllowedToLeave();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowModeSwitch"></a>

```java
public IResolvable getAllowModeSwitch();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowUpdates"></a>

```java
public IResolvable getAllowUpdates();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.disableAutoFallback"></a>

```java
public IResolvable getDisableAutoFallback();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.exclude"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList</a>

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.excludeOfficeIps"></a>

```java
public IResolvable getExcludeOfficeIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fallbackDomains"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList getFallbackDomains();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.gatewayUniqueId"></a>

```java
public java.lang.String getGatewayUniqueId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.include"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList</a>

---

##### `lanAllowMinutes`<sup>Required</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowMinutes"></a>

```java
public java.lang.Number getLanAllowMinutes();
```

- *Type:* java.lang.Number

---

##### `lanAllowSubnetSize`<sup>Required</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowSubnetSize"></a>

```java
public java.lang.Number getLanAllowSubnetSize();
```

- *Type:* java.lang.Number

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `registerInterfaceIpWithDns`<sup>Required</sup> <a name="registerInterfaceIpWithDns" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.registerInterfaceIpWithDns"></a>

```java
public IResolvable getRegisterInterfaceIpWithDns();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.serviceModeV2"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference getServiceModeV2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference</a>

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.switchLocked"></a>

```java
public IResolvable getSwitchLocked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `targetTests`<sup>Required</sup> <a name="targetTests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.targetTests"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList getTargetTests();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList</a>

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult">DataCloudflareZeroTrustDeviceCustomProfilesResult</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference;

new DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList;

new DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests</a>

---



