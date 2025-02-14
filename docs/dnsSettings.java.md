# `dnsSettings` Submodule <a name="`dnsSettings` Submodule" id="@cdktf/provider-cloudflare.dnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSettings <a name="DnsSettings" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings cloudflare_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettings;

DnsSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.String)
//  .zoneDefaults(DnsSettingsZoneDefaults)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#account_id DnsSettings#account_id}

---

##### `zoneDefaults`<sup>Optional</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneDefaults"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_id DnsSettings#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults">putZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults">resetZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putZoneDefaults` <a name="putZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults"></a>

```java
public void putZoneDefaults(DnsSettingsZoneDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.putZoneDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetZoneDefaults` <a name="resetZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneDefaults"></a>

```java
public void resetZoneDefaults()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettings;

DnsSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettings;

DnsSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettings;

DnsSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettings;

DnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput">zoneDefaultsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneDefaults`<sup>Required</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaults"></a>

```java
public DnsSettingsZoneDefaultsOutputReference getZoneDefaults();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference">DnsSettingsZoneDefaultsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `zoneDefaultsInput`<sup>Optional</sup> <a name="zoneDefaultsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneDefaultsInput"></a>

```java
public java.lang.Object getZoneDefaultsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSettingsConfig <a name="DnsSettingsConfig" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsConfig;

DnsSettingsConfig.builder()
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
//  .accountId(java.lang.String)
//  .zoneDefaults(DnsSettingsZoneDefaults)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#account_id DnsSettings#account_id}

---

##### `zoneDefaults`<sup>Optional</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneDefaults"></a>

```java
public DnsSettingsZoneDefaults getZoneDefaults();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_id DnsSettings#zone_id}

---

### DnsSettingsZoneDefaults <a name="DnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaults;

DnsSettingsZoneDefaults.builder()
//  .flattenAllCnames(java.lang.Boolean)
//  .flattenAllCnames(IResolvable)
//  .foundationDns(java.lang.Boolean)
//  .foundationDns(IResolvable)
//  .internalDns(DnsSettingsZoneDefaultsInternalDns)
//  .multiProvider(java.lang.Boolean)
//  .multiProvider(IResolvable)
//  .nameservers(DnsSettingsZoneDefaultsNameservers)
//  .nsTtl(java.lang.Number)
//  .secondaryOverrides(java.lang.Boolean)
//  .secondaryOverrides(IResolvable)
//  .soa(DnsSettingsZoneDefaultsSoa)
//  .zoneMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames">flattenAllCnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns">foundationDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider">multiProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides">secondaryOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | Whether the zone mode is a regular or CDN/DNS only zone. |

---

##### `flattenAllCnames`<sup>Optional</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```java
public java.lang.Object getFlattenAllCnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#flatten_all_cnames DnsSettings#flatten_all_cnames}

---

##### `foundationDns`<sup>Optional</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.foundationDns"></a>

```java
public java.lang.Object getFoundationDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#foundation_dns DnsSettings#foundation_dns}

---

##### `internalDns`<sup>Optional</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.internalDns"></a>

```java
public DnsSettingsZoneDefaultsInternalDns getInternalDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#internal_dns DnsSettings#internal_dns}

---

##### `multiProvider`<sup>Optional</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.multiProvider"></a>

```java
public java.lang.Object getMultiProvider();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#multi_provider DnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nameservers"></a>

```java
public DnsSettingsZoneDefaultsNameservers getNameservers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#nameservers DnsSettings#nameservers}

---

##### `nsTtl`<sup>Optional</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.nsTtl"></a>

```java
public java.lang.Number getNsTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ns_ttl DnsSettings#ns_ttl}

---

##### `secondaryOverrides`<sup>Optional</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```java
public java.lang.Object getSecondaryOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#secondary_overrides DnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.soa"></a>

```java
public DnsSettingsZoneDefaultsSoa getSoa();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#soa DnsSettings#soa}

---

##### `zoneMode`<sup>Optional</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults.property.zoneMode"></a>

```java
public java.lang.String getZoneMode();
```

- *Type:* java.lang.String

Whether the zone mode is a regular or CDN/DNS only zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_mode DnsSettings#zone_mode}

---

### DnsSettingsZoneDefaultsInternalDns <a name="DnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaultsInternalDns;

DnsSettingsZoneDefaultsInternalDns.builder()
//  .referenceZoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">referenceZoneId</a></code> | <code>java.lang.String</code> | The ID of the zone to fallback to. |

---

##### `referenceZoneId`<sup>Optional</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```java
public java.lang.String getReferenceZoneId();
```

- *Type:* java.lang.String

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#reference_zone_id DnsSettings#reference_zone_id}

---

### DnsSettingsZoneDefaultsNameservers <a name="DnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaultsNameservers;

DnsSettingsZoneDefaultsNameservers.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type">type</a></code> | <code>java.lang.String</code> | Nameserver type. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Nameserver type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#type DnsSettings#type}

---

### DnsSettingsZoneDefaultsSoa <a name="DnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaultsSoa;

DnsSettingsZoneDefaultsSoa.builder()
    .expire(java.lang.Number)
    .minTtl(java.lang.Number)
    .mname(java.lang.String)
    .refresh(java.lang.Number)
    .retry(java.lang.Number)
    .rname(java.lang.String)
    .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire">expire</a></code> | <code>java.lang.Number</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl">minTtl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname">mname</a></code> | <code>java.lang.String</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh">refresh</a></code> | <code>java.lang.Number</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry">retry</a></code> | <code>java.lang.Number</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname">rname</a></code> | <code>java.lang.String</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) of the SOA record itself. |

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.expire"></a>

```java
public java.lang.Number getExpire();
```

- *Type:* java.lang.Number

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#expire DnsSettings#expire}

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```java
public java.lang.Number getMinTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#min_ttl DnsSettings#min_ttl}

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.mname"></a>

```java
public java.lang.String getMname();
```

- *Type:* java.lang.String

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#mname DnsSettings#mname}

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.refresh"></a>

```java
public java.lang.Number getRefresh();
```

- *Type:* java.lang.Number

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#refresh DnsSettings#refresh}

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.retry"></a>

```java
public java.lang.Number getRetry();
```

- *Type:* java.lang.Number

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#retry DnsSettings#retry}

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.rname"></a>

```java
public java.lang.String getRname();
```

- *Type:* java.lang.String

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#rname DnsSettings#rname}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ttl DnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSettingsZoneDefaultsInternalDnsOutputReference <a name="DnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaultsInternalDnsOutputReference;

new DnsSettingsZoneDefaultsInternalDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">resetReferenceZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferenceZoneId` <a name="resetReferenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```java
public void resetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">referenceZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">referenceZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `referenceZoneIdInput`<sup>Optional</sup> <a name="referenceZoneIdInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```java
public java.lang.String getReferenceZoneIdInput();
```

- *Type:* java.lang.String

---

##### `referenceZoneId`<sup>Required</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```java
public java.lang.String getReferenceZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

---


### DnsSettingsZoneDefaultsNameserversOutputReference <a name="DnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaultsNameserversOutputReference;

new DnsSettingsZoneDefaultsNameserversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

---


### DnsSettingsZoneDefaultsOutputReference <a name="DnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaultsOutputReference;

new DnsSettingsZoneDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns">putInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers">putNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa">putSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">resetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns">resetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns">resetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider">resetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl">resetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">resetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa">resetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode">resetZoneMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalDns` <a name="putInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```java
public void putInternalDns(DnsSettingsZoneDefaultsInternalDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

---

##### `putNameservers` <a name="putNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```java
public void putNameservers(DnsSettingsZoneDefaultsNameservers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

---

##### `putSoa` <a name="putSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```java
public void putSoa(DnsSettingsZoneDefaultsSoa value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

---

##### `resetFlattenAllCnames` <a name="resetFlattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```java
public void resetFlattenAllCnames()
```

##### `resetFoundationDns` <a name="resetFoundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```java
public void resetFoundationDns()
```

##### `resetInternalDns` <a name="resetInternalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```java
public void resetInternalDns()
```

##### `resetMultiProvider` <a name="resetMultiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```java
public void resetMultiProvider()
```

##### `resetNameservers` <a name="resetNameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```java
public void resetNameservers()
```

##### `resetNsTtl` <a name="resetNsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```java
public void resetNsTtl()
```

##### `resetSecondaryOverrides` <a name="resetSecondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```java
public void resetSecondaryOverrides()
```

##### `resetSoa` <a name="resetSoa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```java
public void resetSoa()
```

##### `resetZoneMode` <a name="resetZoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```java
public void resetZoneMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">flattenAllCnamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">foundationDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">internalDnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">multiProviderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">nsTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">secondaryOverridesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput">soaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">zoneModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">flattenAllCnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns">foundationDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider">multiProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">secondaryOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalDns`<sup>Required</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```java
public DnsSettingsZoneDefaultsInternalDnsOutputReference getInternalDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDnsOutputReference">DnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```java
public DnsSettingsZoneDefaultsNameserversOutputReference getNameservers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameserversOutputReference">DnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```java
public DnsSettingsZoneDefaultsSoaOutputReference getSoa();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference">DnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `flattenAllCnamesInput`<sup>Optional</sup> <a name="flattenAllCnamesInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```java
public java.lang.Object getFlattenAllCnamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `foundationDnsInput`<sup>Optional</sup> <a name="foundationDnsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```java
public java.lang.Object getFoundationDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalDnsInput`<sup>Optional</sup> <a name="internalDnsInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```java
public java.lang.Object getInternalDnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsInternalDns">DnsSettingsZoneDefaultsInternalDns</a>

---

##### `multiProviderInput`<sup>Optional</sup> <a name="multiProviderInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```java
public java.lang.Object getMultiProviderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```java
public java.lang.Object getNameserversInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsNameservers">DnsSettingsZoneDefaultsNameservers</a>

---

##### `nsTtlInput`<sup>Optional</sup> <a name="nsTtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```java
public java.lang.Number getNsTtlInput();
```

- *Type:* java.lang.Number

---

##### `secondaryOverridesInput`<sup>Optional</sup> <a name="secondaryOverridesInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```java
public java.lang.Object getSecondaryOverridesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `soaInput`<sup>Optional</sup> <a name="soaInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```java
public java.lang.Object getSoaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

---

##### `zoneModeInput`<sup>Optional</sup> <a name="zoneModeInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```java
public java.lang.String getZoneModeInput();
```

- *Type:* java.lang.String

---

##### `flattenAllCnames`<sup>Required</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```java
public java.lang.Object getFlattenAllCnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `foundationDns`<sup>Required</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```java
public java.lang.Object getFoundationDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `multiProvider`<sup>Required</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```java
public java.lang.Object getMultiProvider();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsTtl`<sup>Required</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```java
public java.lang.Number getNsTtl();
```

- *Type:* java.lang.Number

---

##### `secondaryOverrides`<sup>Required</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```java
public java.lang.Object getSecondaryOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneMode`<sup>Required</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```java
public java.lang.String getZoneMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaults">DnsSettingsZoneDefaults</a>

---


### DnsSettingsZoneDefaultsSoaOutputReference <a name="DnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_settings.DnsSettingsZoneDefaultsSoaOutputReference;

new DnsSettingsZoneDefaultsSoaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">expireInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">mnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">refreshInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">retryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">rnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire">expire</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">minTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname">mname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh">refresh</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry">retry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname">rname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireInput`<sup>Optional</sup> <a name="expireInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```java
public java.lang.Number getExpireInput();
```

- *Type:* java.lang.Number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```java
public java.lang.Number getMinTtlInput();
```

- *Type:* java.lang.Number

---

##### `mnameInput`<sup>Optional</sup> <a name="mnameInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```java
public java.lang.String getMnameInput();
```

- *Type:* java.lang.String

---

##### `refreshInput`<sup>Optional</sup> <a name="refreshInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```java
public java.lang.Number getRefreshInput();
```

- *Type:* java.lang.Number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```java
public java.lang.Number getRetryInput();
```

- *Type:* java.lang.Number

---

##### `rnameInput`<sup>Optional</sup> <a name="rnameInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```java
public java.lang.String getRnameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```java
public java.lang.Number getExpire();
```

- *Type:* java.lang.Number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```java
public java.lang.Number getMinTtl();
```

- *Type:* java.lang.Number

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```java
public java.lang.String getMname();
```

- *Type:* java.lang.String

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```java
public java.lang.Number getRefresh();
```

- *Type:* java.lang.Number

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```java
public java.lang.Number getRetry();
```

- *Type:* java.lang.Number

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```java
public java.lang.String getRname();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsSettings.DnsSettingsZoneDefaultsSoa">DnsSettingsZoneDefaultsSoa</a>

---



