# `organizationProfile` Submodule <a name="`organizationProfile` Submodule" id="@cdktf/provider-cloudflare.organizationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationProfileA <a name="OrganizationProfileA" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile cloudflare_organization_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.organization_profile.OrganizationProfileA;

OrganizationProfileA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .businessAddress(java.lang.String)
    .businessEmail(java.lang.String)
    .businessName(java.lang.String)
    .businessPhone(java.lang.String)
    .externalMetadata(java.lang.String)
    .organizationId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessAddress">businessAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessEmail">businessEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessName">businessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessPhone">businessPhone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.externalMetadata">externalMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `businessAddress`<sup>Required</sup> <a name="businessAddress" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}.

---

##### `businessEmail`<sup>Required</sup> <a name="businessEmail" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}.

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}.

---

##### `businessPhone`<sup>Required</sup> <a name="businessPhone" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.businessPhone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}.

---

##### `externalMetadata`<sup>Required</sup> <a name="externalMetadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.externalMetadata"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.organization_profile.OrganizationProfileA;

OrganizationProfileA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.organization_profile.OrganizationProfileA;

OrganizationProfileA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.organization_profile.OrganizationProfileA;

OrganizationProfileA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.organization_profile.OrganizationProfileA;

OrganizationProfileA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrganizationProfileA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrganizationProfileA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrganizationProfileA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrganizationProfileA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationProfileA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddressInput">businessAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmailInput">businessEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessNameInput">businessNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhoneInput">businessPhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadataInput">externalMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddress">businessAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmail">businessEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessName">businessName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhone">businessPhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadata">externalMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `businessAddressInput`<sup>Optional</sup> <a name="businessAddressInput" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddressInput"></a>

```java
public java.lang.String getBusinessAddressInput();
```

- *Type:* java.lang.String

---

##### `businessEmailInput`<sup>Optional</sup> <a name="businessEmailInput" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmailInput"></a>

```java
public java.lang.String getBusinessEmailInput();
```

- *Type:* java.lang.String

---

##### `businessNameInput`<sup>Optional</sup> <a name="businessNameInput" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessNameInput"></a>

```java
public java.lang.String getBusinessNameInput();
```

- *Type:* java.lang.String

---

##### `businessPhoneInput`<sup>Optional</sup> <a name="businessPhoneInput" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhoneInput"></a>

```java
public java.lang.String getBusinessPhoneInput();
```

- *Type:* java.lang.String

---

##### `externalMetadataInput`<sup>Optional</sup> <a name="externalMetadataInput" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadataInput"></a>

```java
public java.lang.String getExternalMetadataInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `businessAddress`<sup>Required</sup> <a name="businessAddress" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessAddress"></a>

```java
public java.lang.String getBusinessAddress();
```

- *Type:* java.lang.String

---

##### `businessEmail`<sup>Required</sup> <a name="businessEmail" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessEmail"></a>

```java
public java.lang.String getBusinessEmail();
```

- *Type:* java.lang.String

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessName"></a>

```java
public java.lang.String getBusinessName();
```

- *Type:* java.lang.String

---

##### `businessPhone`<sup>Required</sup> <a name="businessPhone" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.businessPhone"></a>

```java
public java.lang.String getBusinessPhone();
```

- *Type:* java.lang.String

---

##### `externalMetadata`<sup>Required</sup> <a name="externalMetadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.externalMetadata"></a>

```java
public java.lang.String getExternalMetadata();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationProfileAConfig <a name="OrganizationProfileAConfig" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.organization_profile.OrganizationProfileAConfig;

OrganizationProfileAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .businessAddress(java.lang.String)
    .businessEmail(java.lang.String)
    .businessName(java.lang.String)
    .businessPhone(java.lang.String)
    .externalMetadata(java.lang.String)
    .organizationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessAddress">businessAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessEmail">businessEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessName">businessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessPhone">businessPhone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.externalMetadata">externalMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}. |
| <code><a href="#@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `businessAddress`<sup>Required</sup> <a name="businessAddress" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessAddress"></a>

```java
public java.lang.String getBusinessAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_address OrganizationProfileA#business_address}.

---

##### `businessEmail`<sup>Required</sup> <a name="businessEmail" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessEmail"></a>

```java
public java.lang.String getBusinessEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_email OrganizationProfileA#business_email}.

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessName"></a>

```java
public java.lang.String getBusinessName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_name OrganizationProfileA#business_name}.

---

##### `businessPhone`<sup>Required</sup> <a name="businessPhone" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.businessPhone"></a>

```java
public java.lang.String getBusinessPhone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#business_phone OrganizationProfileA#business_phone}.

---

##### `externalMetadata`<sup>Required</sup> <a name="externalMetadata" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.externalMetadata"></a>

```java
public java.lang.String getExternalMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#external_metadata OrganizationProfileA#external_metadata}.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-cloudflare.organizationProfile.OrganizationProfileAConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/organization_profile#organization_id OrganizationProfileA#organization_id}.

---



