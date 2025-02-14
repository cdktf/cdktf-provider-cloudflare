# `dataCloudflareAuthenticatedOriginPullsCertificates` Submodule <a name="`dataCloudflareAuthenticatedOriginPullsCertificates` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificates <a name="DataCloudflareAuthenticatedOriginPullsCertificates" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/authenticated_origin_pulls_certificates cloudflare_authenticated_origin_pulls_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificates;

DataCloudflareAuthenticatedOriginPullsCertificates.Builder.create(Construct scope, java.lang.String id)
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
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/authenticated_origin_pulls_certificates#zone_id DataCloudflareAuthenticatedOriginPullsCertificates#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/authenticated_origin_pulls_certificates#max_items DataCloudflareAuthenticatedOriginPullsCertificates#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificates;

DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificates;

DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificates;

DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificates;

DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareAuthenticatedOriginPullsCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/authenticated_origin_pulls_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList">DataCloudflareAuthenticatedOriginPullsCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.result"></a>

```java
public DataCloudflareAuthenticatedOriginPullsCertificatesResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList">DataCloudflareAuthenticatedOriginPullsCertificatesResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificates.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificatesConfig <a name="DataCloudflareAuthenticatedOriginPullsCertificatesConfig" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig;

DataCloudflareAuthenticatedOriginPullsCertificatesConfig.builder()
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
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/authenticated_origin_pulls_certificates#zone_id DataCloudflareAuthenticatedOriginPullsCertificates#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/authenticated_origin_pulls_certificates#max_items DataCloudflareAuthenticatedOriginPullsCertificates#max_items}

---

### DataCloudflareAuthenticatedOriginPullsCertificatesResult <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResult" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult;

DataCloudflareAuthenticatedOriginPullsCertificatesResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAuthenticatedOriginPullsCertificatesResultList <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResultList" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList;

new DataCloudflareAuthenticatedOriginPullsCertificatesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get"></a>

```java
public DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference <a name="DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_certificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference;

new DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.uploadedOn">uploadedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult">DataCloudflareAuthenticatedOriginPullsCertificatesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.uploadedOn"></a>

```java
public java.lang.String getUploadedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareAuthenticatedOriginPullsCertificatesResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificates.DataCloudflareAuthenticatedOriginPullsCertificatesResult">DataCloudflareAuthenticatedOriginPullsCertificatesResult</a>

---



