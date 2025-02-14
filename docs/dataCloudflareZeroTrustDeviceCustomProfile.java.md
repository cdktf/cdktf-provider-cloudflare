# `dataCloudflareZeroTrustDeviceCustomProfile` Submodule <a name="`dataCloudflareZeroTrustDeviceCustomProfile` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceCustomProfile <a name="DataCloudflareZeroTrustDeviceCustomProfile" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfile;

DataCloudflareZeroTrustDeviceCustomProfile.Builder.create(Construct scope, java.lang.String id)
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
//  .policyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Device ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Device ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile#policy_id DataCloudflareZeroTrustDeviceCustomProfile#policy_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetPolicyId">resetPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetPolicyId"></a>

```java
public void resetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfile;

DataCloudflareZeroTrustDeviceCustomProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfile;

DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfile;

DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfile;

DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustDeviceCustomProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowedToLeave">allowedToLeave</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowModeSwitch">allowModeSwitch</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowUpdates">allowUpdates</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.default">default</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.disableAutoFallback">disableAutoFallback</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList">DataCloudflareZeroTrustDeviceCustomProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList">DataCloudflareZeroTrustDeviceCustomProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.switchLocked">switchLocked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.targetTests">targetTests</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowedToLeave"></a>

```java
public IResolvable getAllowedToLeave();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowModeSwitch"></a>

```java
public IResolvable getAllowModeSwitch();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowUpdates"></a>

```java
public IResolvable getAllowUpdates();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.disableAutoFallback"></a>

```java
public IResolvable getDisableAutoFallback();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.exclude"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList">DataCloudflareZeroTrustDeviceCustomProfileExcludeList</a>

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.excludeOfficeIps"></a>

```java
public IResolvable getExcludeOfficeIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fallbackDomains"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList getFallbackDomains();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.gatewayUniqueId"></a>

```java
public java.lang.String getGatewayUniqueId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.include"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList">DataCloudflareZeroTrustDeviceCustomProfileIncludeList</a>

---

##### `lanAllowMinutes`<sup>Required</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowMinutes"></a>

```java
public java.lang.Number getLanAllowMinutes();
```

- *Type:* java.lang.Number

---

##### `lanAllowSubnetSize`<sup>Required</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize"></a>

```java
public java.lang.Number getLanAllowSubnetSize();
```

- *Type:* java.lang.Number

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.serviceModeV2"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference getServiceModeV2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a>

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.switchLocked"></a>

```java
public IResolvable getSwitchLocked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `targetTests`<sup>Required</sup> <a name="targetTests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.targetTests"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList getTargetTests();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList</a>

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceCustomProfileConfig <a name="DataCloudflareZeroTrustDeviceCustomProfileConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileConfig;

DataCloudflareZeroTrustDeviceCustomProfileConfig.builder()
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
//  .policyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Device ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Device ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_custom_profile#policy_id DataCloudflareZeroTrustDeviceCustomProfile#policy_id}

---

### DataCloudflareZeroTrustDeviceCustomProfileExclude <a name="DataCloudflareZeroTrustDeviceCustomProfileExclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileExclude;

DataCloudflareZeroTrustDeviceCustomProfileExclude.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains;

DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfileInclude <a name="DataCloudflareZeroTrustDeviceCustomProfileInclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileInclude;

DataCloudflareZeroTrustDeviceCustomProfileInclude.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 <a name="DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2;

DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2.builder()
    .build();
```


### DataCloudflareZeroTrustDeviceCustomProfileTargetTests <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests;

DataCloudflareZeroTrustDeviceCustomProfileTargetTests.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceCustomProfileExcludeList <a name="DataCloudflareZeroTrustDeviceCustomProfileExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList;

new DataCloudflareZeroTrustDeviceCustomProfileExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude">DataCloudflareZeroTrustDeviceCustomProfileExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileExclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude">DataCloudflareZeroTrustDeviceCustomProfileExclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList;

new DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileIncludeList <a name="DataCloudflareZeroTrustDeviceCustomProfileIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList;

new DataCloudflareZeroTrustDeviceCustomProfileIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude">DataCloudflareZeroTrustDeviceCustomProfileInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileInclude getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude">DataCloudflareZeroTrustDeviceCustomProfileInclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference;

new DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList;

new DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_device_custom_profile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference;

new DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests">DataCloudflareZeroTrustDeviceCustomProfileTargetTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDeviceCustomProfileTargetTests getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests">DataCloudflareZeroTrustDeviceCustomProfileTargetTests</a>

---



