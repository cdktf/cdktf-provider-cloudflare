# `zeroTrustAccessGroup` Submodule <a name="`zeroTrustAccessGroup` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessGroup <a name="ZeroTrustAccessGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroup;

ZeroTrustAccessGroup.Builder.create(Construct scope, java.lang.String id)
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
    .include(IResolvable)
    .include(java.util.List<ZeroTrustAccessGroupInclude>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .exclude(IResolvable)
//  .exclude(java.util.List<ZeroTrustAccessGroupExclude>)
//  .id(java.lang.String)
//  .require(IResolvable)
//  .require(java.util.List<ZeroTrustAccessGroupRequire>)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>></code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>></code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.require">require</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>></code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.include"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.exclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.require"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>>

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire">putRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire">resetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExclude` <a name="putExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude"></a>

```java
public void putExclude(IResolvable OR java.util.List<ZeroTrustAccessGroupExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>>

---

##### `putInclude` <a name="putInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude"></a>

```java
public void putInclude(IResolvable OR java.util.List<ZeroTrustAccessGroupInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>>

---

##### `putRequire` <a name="putRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire"></a>

```java
public void putRequire(IResolvable OR java.util.List<ZeroTrustAccessGroupRequire> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId"></a>

```java
public void resetId()
```

##### `resetRequire` <a name="resetRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire"></a>

```java
public void resetRequire()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroup;

ZeroTrustAccessGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroup;

ZeroTrustAccessGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroup;

ZeroTrustAccessGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroup;

ZeroTrustAccessGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustAccessGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustAccessGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustAccessGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require">require</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput">excludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput">includeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput">requireInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude"></a>

```java
public ZeroTrustAccessGroupExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include"></a>

```java
public ZeroTrustAccessGroupIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a>

---

##### `require`<sup>Required</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require"></a>

```java
public ZeroTrustAccessGroupRequireList getRequire();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput"></a>

```java
public java.lang.Object getExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput"></a>

```java
public java.lang.Object getIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requireInput`<sup>Optional</sup> <a name="requireInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput"></a>

```java
public java.lang.Object getRequireInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessGroupConfig <a name="ZeroTrustAccessGroupConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupConfig;

ZeroTrustAccessGroupConfig.builder()
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
    .include(IResolvable)
    .include(java.util.List<ZeroTrustAccessGroupInclude>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .exclude(IResolvable)
//  .exclude(java.util.List<ZeroTrustAccessGroupExclude>)
//  .id(java.lang.String)
//  .require(IResolvable)
//  .require(java.util.List<ZeroTrustAccessGroupRequire>)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>></code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>></code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require">require</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>></code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include"></a>

```java
public java.lang.Object getInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude"></a>

```java
public java.lang.Object getExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require"></a>

```java
public java.lang.Object getRequire();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>>

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}

---

### ZeroTrustAccessGroupExclude <a name="ZeroTrustAccessGroupExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExclude;

ZeroTrustAccessGroupExclude.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<ZeroTrustAccessGroupExcludeAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<ZeroTrustAccessGroupExcludeAzure>)
//  .certificate(java.lang.Boolean)
//  .certificate(IResolvable)
//  .commonName(java.lang.String)
//  .commonNames(java.util.List<java.lang.String>)
//  .devicePosture(java.util.List<java.lang.String>)
//  .email(java.util.List<java.lang.String>)
//  .emailDomain(java.util.List<java.lang.String>)
//  .emailList(java.util.List<java.lang.String>)
//  .everyone(java.lang.Boolean)
//  .everyone(IResolvable)
//  .externalEvaluation(IResolvable)
//  .externalEvaluation(java.util.List<ZeroTrustAccessGroupExcludeExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<ZeroTrustAccessGroupExcludeGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<ZeroTrustAccessGroupExcludeGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<ZeroTrustAccessGroupExcludeOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<ZeroTrustAccessGroupExcludeSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupExcludeAuthContext <a name="ZeroTrustAccessGroupExcludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeAuthContext;

ZeroTrustAccessGroupExcludeAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeAzure <a name="ZeroTrustAccessGroupExcludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeAzure;

ZeroTrustAccessGroupExcludeAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeExternalEvaluation <a name="ZeroTrustAccessGroupExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeExternalEvaluation;

ZeroTrustAccessGroupExcludeExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupExcludeGithub <a name="ZeroTrustAccessGroupExcludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeGithub;

ZeroTrustAccessGroupExcludeGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupExcludeGsuite <a name="ZeroTrustAccessGroupExcludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeGsuite;

ZeroTrustAccessGroupExcludeGsuite.builder()
    .email(java.util.List<java.lang.String>)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeOkta <a name="ZeroTrustAccessGroupExcludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeOkta;

ZeroTrustAccessGroupExcludeOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupExcludeSaml <a name="ZeroTrustAccessGroupExcludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeSaml;

ZeroTrustAccessGroupExcludeSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupInclude <a name="ZeroTrustAccessGroupInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupInclude;

ZeroTrustAccessGroupInclude.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<ZeroTrustAccessGroupIncludeAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<ZeroTrustAccessGroupIncludeAzure>)
//  .certificate(java.lang.Boolean)
//  .certificate(IResolvable)
//  .commonName(java.lang.String)
//  .commonNames(java.util.List<java.lang.String>)
//  .devicePosture(java.util.List<java.lang.String>)
//  .email(java.util.List<java.lang.String>)
//  .emailDomain(java.util.List<java.lang.String>)
//  .emailList(java.util.List<java.lang.String>)
//  .everyone(java.lang.Boolean)
//  .everyone(IResolvable)
//  .externalEvaluation(IResolvable)
//  .externalEvaluation(java.util.List<ZeroTrustAccessGroupIncludeExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<ZeroTrustAccessGroupIncludeGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<ZeroTrustAccessGroupIncludeGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<ZeroTrustAccessGroupIncludeOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<ZeroTrustAccessGroupIncludeSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupIncludeAuthContext <a name="ZeroTrustAccessGroupIncludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeAuthContext;

ZeroTrustAccessGroupIncludeAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeAzure <a name="ZeroTrustAccessGroupIncludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeAzure;

ZeroTrustAccessGroupIncludeAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeExternalEvaluation <a name="ZeroTrustAccessGroupIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeExternalEvaluation;

ZeroTrustAccessGroupIncludeExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupIncludeGithub <a name="ZeroTrustAccessGroupIncludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeGithub;

ZeroTrustAccessGroupIncludeGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupIncludeGsuite <a name="ZeroTrustAccessGroupIncludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeGsuite;

ZeroTrustAccessGroupIncludeGsuite.builder()
    .email(java.util.List<java.lang.String>)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeOkta <a name="ZeroTrustAccessGroupIncludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeOkta;

ZeroTrustAccessGroupIncludeOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupIncludeSaml <a name="ZeroTrustAccessGroupIncludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeSaml;

ZeroTrustAccessGroupIncludeSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequire <a name="ZeroTrustAccessGroupRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequire;

ZeroTrustAccessGroupRequire.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<ZeroTrustAccessGroupRequireAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<ZeroTrustAccessGroupRequireAzure>)
//  .certificate(java.lang.Boolean)
//  .certificate(IResolvable)
//  .commonName(java.lang.String)
//  .commonNames(java.util.List<java.lang.String>)
//  .devicePosture(java.util.List<java.lang.String>)
//  .email(java.util.List<java.lang.String>)
//  .emailDomain(java.util.List<java.lang.String>)
//  .emailList(java.util.List<java.lang.String>)
//  .everyone(java.lang.Boolean)
//  .everyone(IResolvable)
//  .externalEvaluation(IResolvable)
//  .externalEvaluation(java.util.List<ZeroTrustAccessGroupRequireExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<ZeroTrustAccessGroupRequireGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<ZeroTrustAccessGroupRequireGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<ZeroTrustAccessGroupRequireOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<ZeroTrustAccessGroupRequireSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupRequireAuthContext <a name="ZeroTrustAccessGroupRequireAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireAuthContext;

ZeroTrustAccessGroupRequireAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireAzure <a name="ZeroTrustAccessGroupRequireAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireAzure;

ZeroTrustAccessGroupRequireAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireExternalEvaluation <a name="ZeroTrustAccessGroupRequireExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireExternalEvaluation;

ZeroTrustAccessGroupRequireExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupRequireGithub <a name="ZeroTrustAccessGroupRequireGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireGithub;

ZeroTrustAccessGroupRequireGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupRequireGsuite <a name="ZeroTrustAccessGroupRequireGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireGsuite;

ZeroTrustAccessGroupRequireGsuite.builder()
    .email(java.util.List<java.lang.String>)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireOkta <a name="ZeroTrustAccessGroupRequireOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireOkta;

ZeroTrustAccessGroupRequireOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupRequireSaml <a name="ZeroTrustAccessGroupRequireSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireSaml;

ZeroTrustAccessGroupRequireSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessGroupExcludeAuthContextList <a name="ZeroTrustAccessGroupExcludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeAuthContextList;

new ZeroTrustAccessGroupExcludeAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get"></a>

```java
public ZeroTrustAccessGroupExcludeAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>>

---


### ZeroTrustAccessGroupExcludeAuthContextOutputReference <a name="ZeroTrustAccessGroupExcludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeAuthContextOutputReference;

new ZeroTrustAccessGroupExcludeAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>

---


### ZeroTrustAccessGroupExcludeAzureList <a name="ZeroTrustAccessGroupExcludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeAzureList;

new ZeroTrustAccessGroupExcludeAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get"></a>

```java
public ZeroTrustAccessGroupExcludeAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>>

---


### ZeroTrustAccessGroupExcludeAzureOutputReference <a name="ZeroTrustAccessGroupExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeAzureOutputReference;

new ZeroTrustAccessGroupExcludeAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>

---


### ZeroTrustAccessGroupExcludeExternalEvaluationList <a name="ZeroTrustAccessGroupExcludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeExternalEvaluationList;

new ZeroTrustAccessGroupExcludeExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get"></a>

```java
public ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>>

---


### ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference;

new ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>

---


### ZeroTrustAccessGroupExcludeGithubList <a name="ZeroTrustAccessGroupExcludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeGithubList;

new ZeroTrustAccessGroupExcludeGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get"></a>

```java
public ZeroTrustAccessGroupExcludeGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>>

---


### ZeroTrustAccessGroupExcludeGithubOutputReference <a name="ZeroTrustAccessGroupExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeGithubOutputReference;

new ZeroTrustAccessGroupExcludeGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>

---


### ZeroTrustAccessGroupExcludeGsuiteList <a name="ZeroTrustAccessGroupExcludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeGsuiteList;

new ZeroTrustAccessGroupExcludeGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get"></a>

```java
public ZeroTrustAccessGroupExcludeGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>>

---


### ZeroTrustAccessGroupExcludeGsuiteOutputReference <a name="ZeroTrustAccessGroupExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeGsuiteOutputReference;

new ZeroTrustAccessGroupExcludeGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>

---


### ZeroTrustAccessGroupExcludeList <a name="ZeroTrustAccessGroupExcludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeList;

new ZeroTrustAccessGroupExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get"></a>

```java
public ZeroTrustAccessGroupExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>>

---


### ZeroTrustAccessGroupExcludeOktaList <a name="ZeroTrustAccessGroupExcludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeOktaList;

new ZeroTrustAccessGroupExcludeOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get"></a>

```java
public ZeroTrustAccessGroupExcludeOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>>

---


### ZeroTrustAccessGroupExcludeOktaOutputReference <a name="ZeroTrustAccessGroupExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeOktaOutputReference;

new ZeroTrustAccessGroupExcludeOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>

---


### ZeroTrustAccessGroupExcludeOutputReference <a name="ZeroTrustAccessGroupExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeOutputReference;

new ZeroTrustAccessGroupExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<ZeroTrustAccessGroupExcludeAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<ZeroTrustAccessGroupExcludeAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<ZeroTrustAccessGroupExcludeExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<ZeroTrustAccessGroupExcludeGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<ZeroTrustAccessGroupExcludeGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<ZeroTrustAccessGroupExcludeOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<ZeroTrustAccessGroupExcludeSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext"></a>

```java
public ZeroTrustAccessGroupExcludeAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure"></a>

```java
public ZeroTrustAccessGroupExcludeAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation"></a>

```java
public ZeroTrustAccessGroupExcludeExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github"></a>

```java
public ZeroTrustAccessGroupExcludeGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite"></a>

```java
public ZeroTrustAccessGroupExcludeGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta"></a>

```java
public ZeroTrustAccessGroupExcludeOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml"></a>

```java
public ZeroTrustAccessGroupExcludeSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext">ZeroTrustAccessGroupExcludeAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure">ZeroTrustAccessGroupExcludeAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation">ZeroTrustAccessGroupExcludeExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub">ZeroTrustAccessGroupExcludeGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite">ZeroTrustAccessGroupExcludeGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta">ZeroTrustAccessGroupExcludeOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude">ZeroTrustAccessGroupExclude</a>

---


### ZeroTrustAccessGroupExcludeSamlList <a name="ZeroTrustAccessGroupExcludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeSamlList;

new ZeroTrustAccessGroupExcludeSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get"></a>

```java
public ZeroTrustAccessGroupExcludeSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>>

---


### ZeroTrustAccessGroupExcludeSamlOutputReference <a name="ZeroTrustAccessGroupExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupExcludeSamlOutputReference;

new ZeroTrustAccessGroupExcludeSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml">ZeroTrustAccessGroupExcludeSaml</a>

---


### ZeroTrustAccessGroupIncludeAuthContextList <a name="ZeroTrustAccessGroupIncludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeAuthContextList;

new ZeroTrustAccessGroupIncludeAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get"></a>

```java
public ZeroTrustAccessGroupIncludeAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>>

---


### ZeroTrustAccessGroupIncludeAuthContextOutputReference <a name="ZeroTrustAccessGroupIncludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeAuthContextOutputReference;

new ZeroTrustAccessGroupIncludeAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>

---


### ZeroTrustAccessGroupIncludeAzureList <a name="ZeroTrustAccessGroupIncludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeAzureList;

new ZeroTrustAccessGroupIncludeAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get"></a>

```java
public ZeroTrustAccessGroupIncludeAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>>

---


### ZeroTrustAccessGroupIncludeAzureOutputReference <a name="ZeroTrustAccessGroupIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeAzureOutputReference;

new ZeroTrustAccessGroupIncludeAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>

---


### ZeroTrustAccessGroupIncludeExternalEvaluationList <a name="ZeroTrustAccessGroupIncludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeExternalEvaluationList;

new ZeroTrustAccessGroupIncludeExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get"></a>

```java
public ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>>

---


### ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference;

new ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>

---


### ZeroTrustAccessGroupIncludeGithubList <a name="ZeroTrustAccessGroupIncludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeGithubList;

new ZeroTrustAccessGroupIncludeGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get"></a>

```java
public ZeroTrustAccessGroupIncludeGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>>

---


### ZeroTrustAccessGroupIncludeGithubOutputReference <a name="ZeroTrustAccessGroupIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeGithubOutputReference;

new ZeroTrustAccessGroupIncludeGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>

---


### ZeroTrustAccessGroupIncludeGsuiteList <a name="ZeroTrustAccessGroupIncludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeGsuiteList;

new ZeroTrustAccessGroupIncludeGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get"></a>

```java
public ZeroTrustAccessGroupIncludeGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>>

---


### ZeroTrustAccessGroupIncludeGsuiteOutputReference <a name="ZeroTrustAccessGroupIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeGsuiteOutputReference;

new ZeroTrustAccessGroupIncludeGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>

---


### ZeroTrustAccessGroupIncludeList <a name="ZeroTrustAccessGroupIncludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeList;

new ZeroTrustAccessGroupIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get"></a>

```java
public ZeroTrustAccessGroupIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>>

---


### ZeroTrustAccessGroupIncludeOktaList <a name="ZeroTrustAccessGroupIncludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeOktaList;

new ZeroTrustAccessGroupIncludeOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get"></a>

```java
public ZeroTrustAccessGroupIncludeOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>>

---


### ZeroTrustAccessGroupIncludeOktaOutputReference <a name="ZeroTrustAccessGroupIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeOktaOutputReference;

new ZeroTrustAccessGroupIncludeOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>

---


### ZeroTrustAccessGroupIncludeOutputReference <a name="ZeroTrustAccessGroupIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeOutputReference;

new ZeroTrustAccessGroupIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<ZeroTrustAccessGroupIncludeAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<ZeroTrustAccessGroupIncludeAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<ZeroTrustAccessGroupIncludeExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<ZeroTrustAccessGroupIncludeGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<ZeroTrustAccessGroupIncludeGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<ZeroTrustAccessGroupIncludeOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<ZeroTrustAccessGroupIncludeSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext"></a>

```java
public ZeroTrustAccessGroupIncludeAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure"></a>

```java
public ZeroTrustAccessGroupIncludeAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation"></a>

```java
public ZeroTrustAccessGroupIncludeExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github"></a>

```java
public ZeroTrustAccessGroupIncludeGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite"></a>

```java
public ZeroTrustAccessGroupIncludeGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta"></a>

```java
public ZeroTrustAccessGroupIncludeOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml"></a>

```java
public ZeroTrustAccessGroupIncludeSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext">ZeroTrustAccessGroupIncludeAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure">ZeroTrustAccessGroupIncludeAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation">ZeroTrustAccessGroupIncludeExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub">ZeroTrustAccessGroupIncludeGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite">ZeroTrustAccessGroupIncludeGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta">ZeroTrustAccessGroupIncludeOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude">ZeroTrustAccessGroupInclude</a>

---


### ZeroTrustAccessGroupIncludeSamlList <a name="ZeroTrustAccessGroupIncludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeSamlList;

new ZeroTrustAccessGroupIncludeSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get"></a>

```java
public ZeroTrustAccessGroupIncludeSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>>

---


### ZeroTrustAccessGroupIncludeSamlOutputReference <a name="ZeroTrustAccessGroupIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupIncludeSamlOutputReference;

new ZeroTrustAccessGroupIncludeSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml">ZeroTrustAccessGroupIncludeSaml</a>

---


### ZeroTrustAccessGroupRequireAuthContextList <a name="ZeroTrustAccessGroupRequireAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireAuthContextList;

new ZeroTrustAccessGroupRequireAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get"></a>

```java
public ZeroTrustAccessGroupRequireAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>>

---


### ZeroTrustAccessGroupRequireAuthContextOutputReference <a name="ZeroTrustAccessGroupRequireAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireAuthContextOutputReference;

new ZeroTrustAccessGroupRequireAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>

---


### ZeroTrustAccessGroupRequireAzureList <a name="ZeroTrustAccessGroupRequireAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireAzureList;

new ZeroTrustAccessGroupRequireAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get"></a>

```java
public ZeroTrustAccessGroupRequireAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>>

---


### ZeroTrustAccessGroupRequireAzureOutputReference <a name="ZeroTrustAccessGroupRequireAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireAzureOutputReference;

new ZeroTrustAccessGroupRequireAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>

---


### ZeroTrustAccessGroupRequireExternalEvaluationList <a name="ZeroTrustAccessGroupRequireExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireExternalEvaluationList;

new ZeroTrustAccessGroupRequireExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get"></a>

```java
public ZeroTrustAccessGroupRequireExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>>

---


### ZeroTrustAccessGroupRequireExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference;

new ZeroTrustAccessGroupRequireExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>

---


### ZeroTrustAccessGroupRequireGithubList <a name="ZeroTrustAccessGroupRequireGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireGithubList;

new ZeroTrustAccessGroupRequireGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get"></a>

```java
public ZeroTrustAccessGroupRequireGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>>

---


### ZeroTrustAccessGroupRequireGithubOutputReference <a name="ZeroTrustAccessGroupRequireGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireGithubOutputReference;

new ZeroTrustAccessGroupRequireGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>

---


### ZeroTrustAccessGroupRequireGsuiteList <a name="ZeroTrustAccessGroupRequireGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireGsuiteList;

new ZeroTrustAccessGroupRequireGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get"></a>

```java
public ZeroTrustAccessGroupRequireGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>>

---


### ZeroTrustAccessGroupRequireGsuiteOutputReference <a name="ZeroTrustAccessGroupRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireGsuiteOutputReference;

new ZeroTrustAccessGroupRequireGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>

---


### ZeroTrustAccessGroupRequireList <a name="ZeroTrustAccessGroupRequireList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireList;

new ZeroTrustAccessGroupRequireList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get"></a>

```java
public ZeroTrustAccessGroupRequireOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>>

---


### ZeroTrustAccessGroupRequireOktaList <a name="ZeroTrustAccessGroupRequireOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireOktaList;

new ZeroTrustAccessGroupRequireOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get"></a>

```java
public ZeroTrustAccessGroupRequireOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>>

---


### ZeroTrustAccessGroupRequireOktaOutputReference <a name="ZeroTrustAccessGroupRequireOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireOktaOutputReference;

new ZeroTrustAccessGroupRequireOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>

---


### ZeroTrustAccessGroupRequireOutputReference <a name="ZeroTrustAccessGroupRequireOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireOutputReference;

new ZeroTrustAccessGroupRequireOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<ZeroTrustAccessGroupRequireAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<ZeroTrustAccessGroupRequireAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<ZeroTrustAccessGroupRequireExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<ZeroTrustAccessGroupRequireGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<ZeroTrustAccessGroupRequireGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<ZeroTrustAccessGroupRequireOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<ZeroTrustAccessGroupRequireSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext"></a>

```java
public ZeroTrustAccessGroupRequireAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure"></a>

```java
public ZeroTrustAccessGroupRequireAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation"></a>

```java
public ZeroTrustAccessGroupRequireExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github"></a>

```java
public ZeroTrustAccessGroupRequireGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite"></a>

```java
public ZeroTrustAccessGroupRequireGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta"></a>

```java
public ZeroTrustAccessGroupRequireOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml"></a>

```java
public ZeroTrustAccessGroupRequireSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext">ZeroTrustAccessGroupRequireAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure">ZeroTrustAccessGroupRequireAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation">ZeroTrustAccessGroupRequireExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub">ZeroTrustAccessGroupRequireGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite">ZeroTrustAccessGroupRequireGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta">ZeroTrustAccessGroupRequireOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire">ZeroTrustAccessGroupRequire</a>

---


### ZeroTrustAccessGroupRequireSamlList <a name="ZeroTrustAccessGroupRequireSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireSamlList;

new ZeroTrustAccessGroupRequireSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get"></a>

```java
public ZeroTrustAccessGroupRequireSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>>

---


### ZeroTrustAccessGroupRequireSamlOutputReference <a name="ZeroTrustAccessGroupRequireSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_group.ZeroTrustAccessGroupRequireSamlOutputReference;

new ZeroTrustAccessGroupRequireSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml">ZeroTrustAccessGroupRequireSaml</a>

---



