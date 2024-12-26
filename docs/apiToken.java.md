# `apiToken` Submodule <a name="`apiToken` Submodule" id="@cdktf/provider-cloudflare.apiToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiToken <a name="ApiToken" id="@cdktf/provider-cloudflare.apiToken.ApiToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token cloudflare_api_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiToken;

ApiToken.Builder.create(Construct scope, java.lang.String id)
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
    .policy(IResolvable)
    .policy(java.util.List<ApiTokenPolicy>)
//  .condition(ApiTokenCondition)
//  .expiresOn(java.lang.String)
//  .id(java.lang.String)
//  .notBefore(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the API Token. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | The expiration time on or after which the token MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#id ApiToken#id}. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.notBefore">notBefore</a></code> | <code>java.lang.String</code> | The time before which the token MUST NOT be accepted for processing. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the API Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#name ApiToken#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.policy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#policy ApiToken#policy}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#condition ApiToken#condition}

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.expiresOn"></a>

- *Type:* java.lang.String

The expiration time on or after which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#expires_on ApiToken#expires_on}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#id ApiToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notBefore`<sup>Optional</sup> <a name="notBefore" id="@cdktf/provider-cloudflare.apiToken.ApiToken.Initializer.parameter.notBefore"></a>

- *Type:* java.lang.String

The time before which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#not_before ApiToken#not_before}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetExpiresOn">resetExpiresOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.resetNotBefore">resetNotBefore</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.apiToken.ApiToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiToken.ApiToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.apiToken.ApiToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiToken.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putCondition"></a>

```java
public void putCondition(ApiTokenCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putPolicy"></a>

```java
public void putPolicy(IResolvable OR java.util.List<ApiTokenPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.putPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetExpiresOn` <a name="resetExpiresOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetExpiresOn"></a>

```java
public void resetExpiresOn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetId"></a>

```java
public void resetId()
```

##### `resetNotBefore` <a name="resetNotBefore" id="@cdktf/provider-cloudflare.apiToken.ApiToken.resetNotBefore"></a>

```java
public void resetNotBefore()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiToken;

ApiToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiToken;

ApiToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiToken;

ApiToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiToken.ApiToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiToken;

ApiToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference">ApiTokenConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.issuedOn">issuedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList">ApiTokenPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOnInput">expiresOnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBeforeInput">notBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBefore">notBefore</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.condition"></a>

```java
public ApiTokenConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference">ApiTokenConditionOutputReference</a>

---

##### `issuedOn`<sup>Required</sup> <a name="issuedOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.issuedOn"></a>

```java
public java.lang.String getIssuedOn();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.policy"></a>

```java
public ApiTokenPolicyList getPolicy();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList">ApiTokenPolicyList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.conditionInput"></a>

```java
public ApiTokenCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

---

##### `expiresOnInput`<sup>Optional</sup> <a name="expiresOnInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOnInput"></a>

```java
public java.lang.String getExpiresOnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notBeforeInput`<sup>Optional</sup> <a name="notBeforeInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBeforeInput"></a>

```java
public java.lang.String getNotBeforeInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>>

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.notBefore"></a>

```java
public java.lang.String getNotBefore();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.apiToken.ApiToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiTokenCondition <a name="ApiTokenCondition" id="@cdktf/provider-cloudflare.apiToken.ApiTokenCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenCondition;

ApiTokenCondition.builder()
//  .requestIp(ApiTokenConditionRequestIp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition.property.requestIp">requestIp</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a></code> | request_ip block. |

---

##### `requestIp`<sup>Optional</sup> <a name="requestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenCondition.property.requestIp"></a>

```java
public ApiTokenConditionRequestIp getRequestIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

request_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#request_ip ApiToken#request_ip}

---

### ApiTokenConditionRequestIp <a name="ApiTokenConditionRequestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenConditionRequestIp;

ApiTokenConditionRequestIp.builder()
//  .in(java.util.List<java.lang.String>)
//  .notIn(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.in">in</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses or CIDR notation where the token may be used from. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.notIn">notIn</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses or CIDR notation where the token should not be used from. |

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.in"></a>

```java
public java.util.List<java.lang.String> getIn();
```

- *Type:* java.util.List<java.lang.String>

List of IP addresses or CIDR notation where the token may be used from.

If not specified, the token will be valid for all IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#in ApiToken#in}

---

##### `notIn`<sup>Optional</sup> <a name="notIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp.property.notIn"></a>

```java
public java.util.List<java.lang.String> getNotIn();
```

- *Type:* java.util.List<java.lang.String>

List of IP addresses or CIDR notation where the token should not be used from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#not_in ApiToken#not_in}

---

### ApiTokenConfig <a name="ApiTokenConfig" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenConfig;

ApiTokenConfig.builder()
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
    .policy(IResolvable)
    .policy(java.util.List<ApiTokenPolicy>)
//  .condition(ApiTokenCondition)
//  .expiresOn(java.lang.String)
//  .id(java.lang.String)
//  .notBefore(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the API Token. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | The expiration time on or after which the token MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#id ApiToken#id}. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.notBefore">notBefore</a></code> | <code>java.lang.String</code> | The time before which the token MUST NOT be accepted for processing. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the API Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#name ApiToken#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.policy"></a>

```java
public java.lang.Object getPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#policy ApiToken#policy}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.condition"></a>

```java
public ApiTokenCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#condition ApiToken#condition}

---

##### `expiresOn`<sup>Optional</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

The expiration time on or after which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#expires_on ApiToken#expires_on}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#id ApiToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notBefore`<sup>Optional</sup> <a name="notBefore" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConfig.property.notBefore"></a>

```java
public java.lang.String getNotBefore();
```

- *Type:* java.lang.String

The time before which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#not_before ApiToken#not_before}

---

### ApiTokenPolicy <a name="ApiTokenPolicy" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenPolicy;

ApiTokenPolicy.builder()
    .permissionGroups(java.util.List<java.lang.String>)
    .resources(java.util.Map<java.lang.String, java.lang.String>)
//  .effect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy.property.permissionGroups">permissionGroups</a></code> | <code>java.util.List<java.lang.String></code> | List of permissions groups IDs. See [documentation](https://developers.cloudflare.com/api/tokens/create/permissions) for more information. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy.property.resources">resources</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Describes what operations against which resources are allowed or denied. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy.property.effect">effect</a></code> | <code>java.lang.String</code> | Effect of the policy. Available values: `allow`, `deny`. Defaults to `allow`. |

---

##### `permissionGroups`<sup>Required</sup> <a name="permissionGroups" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy.property.permissionGroups"></a>

```java
public java.util.List<java.lang.String> getPermissionGroups();
```

- *Type:* java.util.List<java.lang.String>

List of permissions groups IDs. See [documentation](https://developers.cloudflare.com/api/tokens/create/permissions) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#permission_groups ApiToken#permission_groups}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy.property.resources"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResources();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Describes what operations against which resources are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#resources ApiToken#resources}

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Effect of the policy. Available values: `allow`, `deny`. Defaults to `allow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/api_token#effect ApiToken#effect}

---

## Classes <a name="Classes" id="Classes"></a>

### ApiTokenConditionOutputReference <a name="ApiTokenConditionOutputReference" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenConditionOutputReference;

new ApiTokenConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.putRequestIp">putRequestIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resetRequestIp">resetRequestIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestIp` <a name="putRequestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.putRequestIp"></a>

```java
public void putRequestIp(ApiTokenConditionRequestIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.putRequestIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

---

##### `resetRequestIp` <a name="resetRequestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.resetRequestIp"></a>

```java
public void resetRequestIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIp">requestIp</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference">ApiTokenConditionRequestIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIpInput">requestIpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestIp`<sup>Required</sup> <a name="requestIp" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIp"></a>

```java
public ApiTokenConditionRequestIpOutputReference getRequestIp();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference">ApiTokenConditionRequestIpOutputReference</a>

---

##### `requestIpInput`<sup>Optional</sup> <a name="requestIpInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.requestIpInput"></a>

```java
public ApiTokenConditionRequestIp getRequestIpInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionOutputReference.property.internalValue"></a>

```java
public ApiTokenCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenCondition">ApiTokenCondition</a>

---


### ApiTokenConditionRequestIpOutputReference <a name="ApiTokenConditionRequestIpOutputReference" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenConditionRequestIpOutputReference;

new ApiTokenConditionRequestIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetNotIn">resetNotIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIn` <a name="resetIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetIn"></a>

```java
public void resetIn()
```

##### `resetNotIn` <a name="resetNotIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.resetNotIn"></a>

```java
public void resetNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.inInput">inInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notInInput">notInInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.in">in</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notIn">notIn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.inInput"></a>

```java
public java.util.List<java.lang.String> getInInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notInInput`<sup>Optional</sup> <a name="notInInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notInInput"></a>

```java
public java.util.List<java.lang.String> getNotInInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.in"></a>

```java
public java.util.List<java.lang.String> getIn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notIn`<sup>Required</sup> <a name="notIn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.notIn"></a>

```java
public java.util.List<java.lang.String> getNotIn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIpOutputReference.property.internalValue"></a>

```java
public ApiTokenConditionRequestIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenConditionRequestIp">ApiTokenConditionRequestIp</a>

---


### ApiTokenPolicyList <a name="ApiTokenPolicyList" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenPolicyList;

new ApiTokenPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.get"></a>

```java
public ApiTokenPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>>

---


### ApiTokenPolicyOutputReference <a name="ApiTokenPolicyOutputReference" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.api_token.ApiTokenPolicyOutputReference;

new ApiTokenPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.resetEffect">resetEffect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.resetEffect"></a>

```java
public void resetEffect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.permissionGroupsInput">permissionGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.permissionGroups">permissionGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.resources">resources</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `permissionGroupsInput`<sup>Optional</sup> <a name="permissionGroupsInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.permissionGroupsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.resourcesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourcesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `permissionGroups`<sup>Required</sup> <a name="permissionGroups" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.permissionGroups"></a>

```java
public java.util.List<java.lang.String> getPermissionGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.resources"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResources();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.apiToken.ApiTokenPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.apiToken.ApiTokenPolicy">ApiTokenPolicy</a>

---



