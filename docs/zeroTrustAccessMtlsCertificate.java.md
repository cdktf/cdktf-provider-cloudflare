# `zeroTrustAccessMtlsCertificate` Submodule <a name="`zeroTrustAccessMtlsCertificate` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessMtlsCertificate <a name="ZeroTrustAccessMtlsCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_mtls_certificate.ZeroTrustAccessMtlsCertificate;

ZeroTrustAccessMtlsCertificate.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.String)
//  .associatedHostnames(java.util.List<java.lang.String>)
//  .certificate(java.lang.String)
//  .id(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.associatedHostnames">associatedHostnames</a></code> | <code>java.util.List<java.lang.String></code> | The hostnames that will be prompted for this certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | The Root CA for your certificates. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#id ZeroTrustAccessMtlsCertificate#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#name ZeroTrustAccessMtlsCertificate#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#account_id ZeroTrustAccessMtlsCertificate#account_id}

---

##### `associatedHostnames`<sup>Optional</sup> <a name="associatedHostnames" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.associatedHostnames"></a>

- *Type:* java.util.List<java.lang.String>

The hostnames that will be prompted for this certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#associated_hostnames ZeroTrustAccessMtlsCertificate#associated_hostnames}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

The Root CA for your certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#certificate ZeroTrustAccessMtlsCertificate#certificate}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#id ZeroTrustAccessMtlsCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#zone_id ZeroTrustAccessMtlsCertificate#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAssociatedHostnames">resetAssociatedHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAssociatedHostnames` <a name="resetAssociatedHostnames" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAssociatedHostnames"></a>

```java
public void resetAssociatedHostnames()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessMtlsCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_mtls_certificate.ZeroTrustAccessMtlsCertificate;

ZeroTrustAccessMtlsCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_mtls_certificate.ZeroTrustAccessMtlsCertificate;

ZeroTrustAccessMtlsCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_mtls_certificate.ZeroTrustAccessMtlsCertificate;

ZeroTrustAccessMtlsCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_mtls_certificate.ZeroTrustAccessMtlsCertificate;

ZeroTrustAccessMtlsCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustAccessMtlsCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustAccessMtlsCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustAccessMtlsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustAccessMtlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessMtlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnamesInput">associatedHostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnames">associatedHostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `associatedHostnamesInput`<sup>Optional</sup> <a name="associatedHostnamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnamesInput"></a>

```java
public java.util.List<java.lang.String> getAssociatedHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `associatedHostnames`<sup>Required</sup> <a name="associatedHostnames" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnames"></a>

```java
public java.util.List<java.lang.String> getAssociatedHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessMtlsCertificateConfig <a name="ZeroTrustAccessMtlsCertificateConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_mtls_certificate.ZeroTrustAccessMtlsCertificateConfig;

ZeroTrustAccessMtlsCertificateConfig.builder()
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
//  .accountId(java.lang.String)
//  .associatedHostnames(java.util.List<java.lang.String>)
//  .certificate(java.lang.String)
//  .id(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.associatedHostnames">associatedHostnames</a></code> | <code>java.util.List<java.lang.String></code> | The hostnames that will be prompted for this certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | The Root CA for your certificates. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#id ZeroTrustAccessMtlsCertificate#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#name ZeroTrustAccessMtlsCertificate#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#account_id ZeroTrustAccessMtlsCertificate#account_id}

---

##### `associatedHostnames`<sup>Optional</sup> <a name="associatedHostnames" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.associatedHostnames"></a>

```java
public java.util.List<java.lang.String> getAssociatedHostnames();
```

- *Type:* java.util.List<java.lang.String>

The hostnames that will be prompted for this certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#associated_hostnames ZeroTrustAccessMtlsCertificate#associated_hostnames}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

The Root CA for your certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#certificate ZeroTrustAccessMtlsCertificate#certificate}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#id ZeroTrustAccessMtlsCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_access_mtls_certificate#zone_id ZeroTrustAccessMtlsCertificate#zone_id}

---



