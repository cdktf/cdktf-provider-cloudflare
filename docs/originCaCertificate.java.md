# `originCaCertificate` Submodule <a name="`originCaCertificate` Submodule" id="@cdktf/provider-cloudflare.originCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OriginCaCertificate <a name="OriginCaCertificate" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.origin_ca_certificate.OriginCaCertificate;

OriginCaCertificate.Builder.create(Construct scope, java.lang.String id)
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
//  .csr(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .requestedValidity(java.lang.Number)
//  .requestType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.csr">csr</a></code> | <code>java.lang.String</code> | The Certificate Signing Request (CSR). Must be newline-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Array of hostnames or wildcard names (e.g., *.example.com) bound to the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestedValidity">requestedValidity</a></code> | <code>java.lang.Number</code> | The number of days for which the certificate should be valid. Available values: 7, 30, 90, 365, 730, 1095, 5475. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestType">requestType</a></code> | <code>java.lang.String</code> | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). Available values: "origin-rsa", "origin-ecc", "keyless-certificate". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.csr"></a>

- *Type:* java.lang.String

The Certificate Signing Request (CSR). Must be newline-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#csr OriginCaCertificate#csr}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.hostnames"></a>

- *Type:* java.util.List<java.lang.String>

Array of hostnames or wildcard names (e.g., *.example.com) bound to the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#hostnames OriginCaCertificate#hostnames}

---

##### `requestedValidity`<sup>Optional</sup> <a name="requestedValidity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestedValidity"></a>

- *Type:* java.lang.Number

The number of days for which the certificate should be valid. Available values: 7, 30, 90, 365, 730, 1095, 5475.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#requested_validity OriginCaCertificate#requested_validity}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.Initializer.parameter.requestType"></a>

- *Type:* java.lang.String

Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). Available values: "origin-rsa", "origin-ecc", "keyless-certificate".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#request_type OriginCaCertificate#request_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetCsr">resetCsr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetRequestedValidity">resetRequestedValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetRequestType">resetRequestType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCsr` <a name="resetCsr" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetCsr"></a>

```java
public void resetCsr()
```

##### `resetHostnames` <a name="resetHostnames" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetHostnames"></a>

```java
public void resetHostnames()
```

##### `resetRequestedValidity` <a name="resetRequestedValidity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetRequestedValidity"></a>

```java
public void resetRequestedValidity()
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.resetRequestType"></a>

```java
public void resetRequestType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OriginCaCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.origin_ca_certificate.OriginCaCertificate;

OriginCaCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.origin_ca_certificate.OriginCaCertificate;

OriginCaCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.origin_ca_certificate.OriginCaCertificate;

OriginCaCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.origin_ca_certificate.OriginCaCertificate;

OriginCaCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OriginCaCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OriginCaCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OriginCaCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OriginCaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OriginCaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csrInput">csrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidityInput">requestedValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestTypeInput">requestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csr">csr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidity">requestedValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestType">requestType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `csrInput`<sup>Optional</sup> <a name="csrInput" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csrInput"></a>

```java
public java.lang.String getCsrInput();
```

- *Type:* java.lang.String

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestedValidityInput`<sup>Optional</sup> <a name="requestedValidityInput" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidityInput"></a>

```java
public java.lang.Number getRequestedValidityInput();
```

- *Type:* java.lang.Number

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestTypeInput"></a>

```java
public java.lang.String getRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestedValidity`<sup>Required</sup> <a name="requestedValidity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestedValidity"></a>

```java
public java.lang.Number getRequestedValidity();
```

- *Type:* java.lang.Number

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OriginCaCertificateConfig <a name="OriginCaCertificateConfig" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.origin_ca_certificate.OriginCaCertificateConfig;

OriginCaCertificateConfig.builder()
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
//  .csr(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .requestedValidity(java.lang.Number)
//  .requestType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.csr">csr</a></code> | <code>java.lang.String</code> | The Certificate Signing Request (CSR). Must be newline-encoded. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Array of hostnames or wildcard names (e.g., *.example.com) bound to the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestedValidity">requestedValidity</a></code> | <code>java.lang.Number</code> | The number of days for which the certificate should be valid. Available values: 7, 30, 90, 365, 730, 1095, 5475. |
| <code><a href="#@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestType">requestType</a></code> | <code>java.lang.String</code> | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). Available values: "origin-rsa", "origin-ecc", "keyless-certificate". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

The Certificate Signing Request (CSR). Must be newline-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#csr OriginCaCertificate#csr}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Array of hostnames or wildcard names (e.g., *.example.com) bound to the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#hostnames OriginCaCertificate#hostnames}

---

##### `requestedValidity`<sup>Optional</sup> <a name="requestedValidity" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestedValidity"></a>

```java
public java.lang.Number getRequestedValidity();
```

- *Type:* java.lang.Number

The number of days for which the certificate should be valid. Available values: 7, 30, 90, 365, 730, 1095, 5475.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#requested_validity OriginCaCertificate#requested_validity}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-cloudflare.originCaCertificate.OriginCaCertificateConfig.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). Available values: "origin-rsa", "origin-ecc", "keyless-certificate".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/origin_ca_certificate#request_type OriginCaCertificate#request_type}

---



