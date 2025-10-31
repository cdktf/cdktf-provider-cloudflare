# `accountDnsSettings` Submodule <a name="`accountDnsSettings` Submodule" id="@cdktf/provider-cloudflare.accountDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountDnsSettings <a name="AccountDnsSettings" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettings;

AccountDnsSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .zoneDefaults(AccountDnsSettingsZoneDefaults)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}

---

##### `zoneDefaults`<sup>Optional</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.zoneDefaults"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults">putZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults">resetZoneDefaults</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putZoneDefaults` <a name="putZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults"></a>

```java
public void putZoneDefaults(AccountDnsSettingsZoneDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---

##### `resetZoneDefaults` <a name="resetZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults"></a>

```java
public void resetZoneDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettings;

AccountDnsSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettings;

AccountDnsSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettings;

AccountDnsSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettings;

AccountDnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccountDnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccountDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccountDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccountDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput">zoneDefaultsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneDefaults`<sup>Required</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults"></a>

```java
public AccountDnsSettingsZoneDefaultsOutputReference getZoneDefaults();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `zoneDefaultsInput`<sup>Optional</sup> <a name="zoneDefaultsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaults getZoneDefaultsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccountDnsSettingsConfig <a name="AccountDnsSettingsConfig" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsConfig;

AccountDnsSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .zoneDefaults(AccountDnsSettingsZoneDefaults)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}

---

##### `zoneDefaults`<sup>Optional</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults"></a>

```java
public AccountDnsSettingsZoneDefaults getZoneDefaults();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}.

---

### AccountDnsSettingsZoneDefaults <a name="AccountDnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaults;

AccountDnsSettingsZoneDefaults.builder()
//  .flattenAllCnames(java.lang.Boolean|IResolvable)
//  .foundationDns(java.lang.Boolean|IResolvable)
//  .internalDns(AccountDnsSettingsZoneDefaultsInternalDns)
//  .multiProvider(java.lang.Boolean|IResolvable)
//  .nameservers(AccountDnsSettingsZoneDefaultsNameservers)
//  .nsTtl(java.lang.Number)
//  .secondaryOverrides(java.lang.Boolean|IResolvable)
//  .soa(AccountDnsSettingsZoneDefaultsSoa)
//  .zoneMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames">flattenAllCnames</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns">foundationDns</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider">multiProvider</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides">secondaryOverrides</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `flattenAllCnames`<sup>Optional</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```java
public java.lang.Boolean|IResolvable getFlattenAllCnames();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}

---

##### `foundationDns`<sup>Optional</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns"></a>

```java
public java.lang.Boolean|IResolvable getFoundationDns();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}

---

##### `internalDns`<sup>Optional</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns"></a>

```java
public AccountDnsSettingsZoneDefaultsInternalDns getInternalDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}

---

##### `multiProvider`<sup>Optional</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider"></a>

```java
public java.lang.Boolean|IResolvable getMultiProvider();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers"></a>

```java
public AccountDnsSettingsZoneDefaultsNameservers getNameservers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}

---

##### `nsTtl`<sup>Optional</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl"></a>

```java
public java.lang.Number getNsTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}

---

##### `secondaryOverrides`<sup>Optional</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```java
public java.lang.Boolean|IResolvable getSecondaryOverrides();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa"></a>

```java
public AccountDnsSettingsZoneDefaultsSoa getSoa();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}

---

##### `zoneMode`<sup>Optional</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode"></a>

```java
public java.lang.String getZoneMode();
```

- *Type:* java.lang.String

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}

---

### AccountDnsSettingsZoneDefaultsInternalDns <a name="AccountDnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaultsInternalDns;

AccountDnsSettingsZoneDefaultsInternalDns.builder()
//  .referenceZoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">referenceZoneId</a></code> | <code>java.lang.String</code> | The ID of the zone to fallback to. |

---

##### `referenceZoneId`<sup>Optional</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```java
public java.lang.String getReferenceZoneId();
```

- *Type:* java.lang.String

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}

---

### AccountDnsSettingsZoneDefaultsNameservers <a name="AccountDnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaultsNameservers;

AccountDnsSettingsZoneDefaultsNameservers.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type">type</a></code> | <code>java.lang.String</code> | Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant". |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}

---

### AccountDnsSettingsZoneDefaultsSoa <a name="AccountDnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaultsSoa;

AccountDnsSettingsZoneDefaultsSoa.builder()
//  .expire(java.lang.Number)
//  .minTtl(java.lang.Number)
//  .mname(java.lang.String)
//  .refresh(java.lang.Number)
//  .retry(java.lang.Number)
//  .rname(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire">expire</a></code> | <code>java.lang.Number</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl">minTtl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname">mname</a></code> | <code>java.lang.String</code> | The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh">refresh</a></code> | <code>java.lang.Number</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry">retry</a></code> | <code>java.lang.Number</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname">rname</a></code> | <code>java.lang.String</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) of the SOA record itself. |

---

##### `expire`<sup>Optional</sup> <a name="expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire"></a>

```java
public java.lang.Number getExpire();
```

- *Type:* java.lang.Number

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}

---

##### `minTtl`<sup>Optional</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```java
public java.lang.Number getMinTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}

---

##### `mname`<sup>Optional</sup> <a name="mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname"></a>

```java
public java.lang.String getMname();
```

- *Type:* java.lang.String

The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}

---

##### `refresh`<sup>Optional</sup> <a name="refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh"></a>

```java
public java.lang.Number getRefresh();
```

- *Type:* java.lang.Number

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry"></a>

```java
public java.lang.Number getRetry();
```

- *Type:* java.lang.Number

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}

---

##### `rname`<sup>Optional</sup> <a name="rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname"></a>

```java
public java.lang.String getRname();
```

- *Type:* java.lang.String

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountDnsSettingsZoneDefaultsInternalDnsOutputReference <a name="AccountDnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference;

new AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">resetReferenceZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferenceZoneId` <a name="resetReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```java
public void resetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">referenceZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">referenceZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `referenceZoneIdInput`<sup>Optional</sup> <a name="referenceZoneIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```java
public java.lang.String getReferenceZoneIdInput();
```

- *Type:* java.lang.String

---

##### `referenceZoneId`<sup>Required</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```java
public java.lang.String getReferenceZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaultsInternalDns getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---


### AccountDnsSettingsZoneDefaultsNameserversOutputReference <a name="AccountDnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaultsNameserversOutputReference;

new AccountDnsSettingsZoneDefaultsNameserversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaultsNameservers getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---


### AccountDnsSettingsZoneDefaultsOutputReference <a name="AccountDnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaultsOutputReference;

new AccountDnsSettingsZoneDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns">putInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers">putNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa">putSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">resetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns">resetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns">resetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider">resetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl">resetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">resetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa">resetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode">resetZoneMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalDns` <a name="putInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```java
public void putInternalDns(AccountDnsSettingsZoneDefaultsInternalDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---

##### `putNameservers` <a name="putNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```java
public void putNameservers(AccountDnsSettingsZoneDefaultsNameservers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---

##### `putSoa` <a name="putSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```java
public void putSoa(AccountDnsSettingsZoneDefaultsSoa value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---

##### `resetFlattenAllCnames` <a name="resetFlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```java
public void resetFlattenAllCnames()
```

##### `resetFoundationDns` <a name="resetFoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```java
public void resetFoundationDns()
```

##### `resetInternalDns` <a name="resetInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```java
public void resetInternalDns()
```

##### `resetMultiProvider` <a name="resetMultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```java
public void resetMultiProvider()
```

##### `resetNameservers` <a name="resetNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```java
public void resetNameservers()
```

##### `resetNsTtl` <a name="resetNsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```java
public void resetNsTtl()
```

##### `resetSecondaryOverrides` <a name="resetSecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```java
public void resetSecondaryOverrides()
```

##### `resetSoa` <a name="resetSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```java
public void resetSoa()
```

##### `resetZoneMode` <a name="resetZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```java
public void resetZoneMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">flattenAllCnamesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">foundationDnsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">internalDnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">multiProviderInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">nsTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">secondaryOverridesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput">soaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">zoneModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">flattenAllCnames</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns">foundationDns</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider">multiProvider</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">secondaryOverrides</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalDns`<sup>Required</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```java
public AccountDnsSettingsZoneDefaultsInternalDnsOutputReference getInternalDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```java
public AccountDnsSettingsZoneDefaultsNameserversOutputReference getNameservers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```java
public AccountDnsSettingsZoneDefaultsSoaOutputReference getSoa();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `flattenAllCnamesInput`<sup>Optional</sup> <a name="flattenAllCnamesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```java
public java.lang.Boolean|IResolvable getFlattenAllCnamesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `foundationDnsInput`<sup>Optional</sup> <a name="foundationDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```java
public java.lang.Boolean|IResolvable getFoundationDnsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalDnsInput`<sup>Optional</sup> <a name="internalDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaultsInternalDns getInternalDnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---

##### `multiProviderInput`<sup>Optional</sup> <a name="multiProviderInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiProviderInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaultsNameservers getNameserversInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---

##### `nsTtlInput`<sup>Optional</sup> <a name="nsTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```java
public java.lang.Number getNsTtlInput();
```

- *Type:* java.lang.Number

---

##### `secondaryOverridesInput`<sup>Optional</sup> <a name="secondaryOverridesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```java
public java.lang.Boolean|IResolvable getSecondaryOverridesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `soaInput`<sup>Optional</sup> <a name="soaInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaultsSoa getSoaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---

##### `zoneModeInput`<sup>Optional</sup> <a name="zoneModeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```java
public java.lang.String getZoneModeInput();
```

- *Type:* java.lang.String

---

##### `flattenAllCnames`<sup>Required</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```java
public java.lang.Boolean|IResolvable getFlattenAllCnames();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `foundationDns`<sup>Required</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```java
public java.lang.Boolean|IResolvable getFoundationDns();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `multiProvider`<sup>Required</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```java
public java.lang.Boolean|IResolvable getMultiProvider();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nsTtl`<sup>Required</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```java
public java.lang.Number getNsTtl();
```

- *Type:* java.lang.Number

---

##### `secondaryOverrides`<sup>Required</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```java
public java.lang.Boolean|IResolvable getSecondaryOverrides();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `zoneMode`<sup>Required</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```java
public java.lang.String getZoneMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaults getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---


### AccountDnsSettingsZoneDefaultsSoaOutputReference <a name="AccountDnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_dns_settings.AccountDnsSettingsZoneDefaultsSoaOutputReference;

new AccountDnsSettingsZoneDefaultsSoaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetExpire">resetExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMinTtl">resetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMname">resetMname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRefresh">resetRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRname">resetRname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpire` <a name="resetExpire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetExpire"></a>

```java
public void resetExpire()
```

##### `resetMinTtl` <a name="resetMinTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMinTtl"></a>

```java
public void resetMinTtl()
```

##### `resetMname` <a name="resetMname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMname"></a>

```java
public void resetMname()
```

##### `resetRefresh` <a name="resetRefresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRefresh"></a>

```java
public void resetRefresh()
```

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRetry"></a>

```java
public void resetRetry()
```

##### `resetRname` <a name="resetRname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRname"></a>

```java
public void resetRname()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">expireInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">mnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">refreshInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">retryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">rnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire">expire</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">minTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname">mname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh">refresh</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry">retry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname">rname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireInput`<sup>Optional</sup> <a name="expireInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```java
public java.lang.Number getExpireInput();
```

- *Type:* java.lang.Number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```java
public java.lang.Number getMinTtlInput();
```

- *Type:* java.lang.Number

---

##### `mnameInput`<sup>Optional</sup> <a name="mnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```java
public java.lang.String getMnameInput();
```

- *Type:* java.lang.String

---

##### `refreshInput`<sup>Optional</sup> <a name="refreshInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```java
public java.lang.Number getRefreshInput();
```

- *Type:* java.lang.Number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```java
public java.lang.Number getRetryInput();
```

- *Type:* java.lang.Number

---

##### `rnameInput`<sup>Optional</sup> <a name="rnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```java
public java.lang.String getRnameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```java
public java.lang.Number getExpire();
```

- *Type:* java.lang.Number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```java
public java.lang.Number getMinTtl();
```

- *Type:* java.lang.Number

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```java
public java.lang.String getMname();
```

- *Type:* java.lang.String

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```java
public java.lang.Number getRefresh();
```

- *Type:* java.lang.Number

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```java
public java.lang.Number getRetry();
```

- *Type:* java.lang.Number

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```java
public java.lang.String getRname();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountDnsSettingsZoneDefaultsSoa getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---



