# `ssoConnector` Submodule <a name="`ssoConnector` Submodule" id="@cdktf/provider-cloudflare.ssoConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoConnector <a name="SsoConnector" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector cloudflare_sso_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnector;

SsoConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .emailDomain(java.lang.String)
//  .beginVerification(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .useFedrampLanguage(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.emailDomain">emailDomain</a></code> | <code>java.lang.String</code> | Email domain of the new SSO connector. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.beginVerification">beginVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Begin the verification process after creation. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | SSO Connector enabled state. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.useFedrampLanguage">useFedrampLanguage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls the display of FedRAMP language to the user during SSO login. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#account_id SsoConnector#account_id}

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.emailDomain"></a>

- *Type:* java.lang.String

Email domain of the new SSO connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#email_domain SsoConnector#email_domain}

---

##### `beginVerification`<sup>Optional</sup> <a name="beginVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.beginVerification"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Begin the verification process after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#begin_verification SsoConnector#begin_verification}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

SSO Connector enabled state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#enabled SsoConnector#enabled}

---

##### `useFedrampLanguage`<sup>Optional</sup> <a name="useFedrampLanguage" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.Initializer.parameter.useFedrampLanguage"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls the display of FedRAMP language to the user during SSO login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#use_fedramp_language SsoConnector#use_fedramp_language}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetBeginVerification">resetBeginVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetUseFedrampLanguage">resetUseFedrampLanguage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBeginVerification` <a name="resetBeginVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetBeginVerification"></a>

```java
public void resetBeginVerification()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetUseFedrampLanguage` <a name="resetUseFedrampLanguage" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.resetUseFedrampLanguage"></a>

```java
public void resetUseFedrampLanguage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnector;

SsoConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnector;

SsoConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnector;

SsoConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnector;

SsoConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsoConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsoConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsoConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SsoConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference">SsoConnectorVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerificationInput">beginVerificationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomainInput">emailDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguageInput">useFedrampLanguageInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerification">beginVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomain">emailDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguage">useFedrampLanguage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.verification"></a>

```java
public SsoConnectorVerificationOutputReference getVerification();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference">SsoConnectorVerificationOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `beginVerificationInput`<sup>Optional</sup> <a name="beginVerificationInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerificationInput"></a>

```java
public java.lang.Boolean|IResolvable getBeginVerificationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomainInput"></a>

```java
public java.lang.String getEmailDomainInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `useFedrampLanguageInput`<sup>Optional</sup> <a name="useFedrampLanguageInput" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguageInput"></a>

```java
public java.lang.Boolean|IResolvable getUseFedrampLanguageInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `beginVerification`<sup>Required</sup> <a name="beginVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.beginVerification"></a>

```java
public java.lang.Boolean|IResolvable getBeginVerification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.emailDomain"></a>

```java
public java.lang.String getEmailDomain();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `useFedrampLanguage`<sup>Required</sup> <a name="useFedrampLanguage" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.useFedrampLanguage"></a>

```java
public java.lang.Boolean|IResolvable getUseFedrampLanguage();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsoConnectorConfig <a name="SsoConnectorConfig" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnectorConfig;

SsoConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .emailDomain(java.lang.String)
//  .beginVerification(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .useFedrampLanguage(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.emailDomain">emailDomain</a></code> | <code>java.lang.String</code> | Email domain of the new SSO connector. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.beginVerification">beginVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Begin the verification process after creation. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | SSO Connector enabled state. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.useFedrampLanguage">useFedrampLanguage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls the display of FedRAMP language to the user during SSO login. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#account_id SsoConnector#account_id}

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.emailDomain"></a>

```java
public java.lang.String getEmailDomain();
```

- *Type:* java.lang.String

Email domain of the new SSO connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#email_domain SsoConnector#email_domain}

---

##### `beginVerification`<sup>Optional</sup> <a name="beginVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.beginVerification"></a>

```java
public java.lang.Boolean|IResolvable getBeginVerification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Begin the verification process after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#begin_verification SsoConnector#begin_verification}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

SSO Connector enabled state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#enabled SsoConnector#enabled}

---

##### `useFedrampLanguage`<sup>Optional</sup> <a name="useFedrampLanguage" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorConfig.property.useFedrampLanguage"></a>

```java
public java.lang.Boolean|IResolvable getUseFedrampLanguage();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls the display of FedRAMP language to the user during SSO login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/sso_connector#use_fedramp_language SsoConnector#use_fedramp_language}

---

### SsoConnectorVerification <a name="SsoConnectorVerification" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnectorVerification;

SsoConnectorVerification.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### SsoConnectorVerificationOutputReference <a name="SsoConnectorVerificationOutputReference" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.sso_connector.SsoConnectorVerificationOutputReference;

new SsoConnectorVerificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification">SsoConnectorVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerificationOutputReference.property.internalValue"></a>

```java
public SsoConnectorVerification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ssoConnector.SsoConnectorVerification">SsoConnectorVerification</a>

---



