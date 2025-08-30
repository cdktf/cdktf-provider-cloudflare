# `magicTransitSiteAcl` Submodule <a name="`magicTransitSiteAcl` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteAcl <a name="MagicTransitSiteAcl" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAcl;

MagicTransitSiteAcl.Builder.create(Construct scope, java.lang.String id)
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
    .lan1(MagicTransitSiteAclLan1)
    .lan2(MagicTransitSiteAclLan2)
    .name(java.lang.String)
    .siteId(java.lang.String)
//  .description(java.lang.String)
//  .forwardLocally(java.lang.Boolean)
//  .forwardLocally(IResolvable)
//  .protocols(java.util.List<java.lang.String>)
//  .unidirectional(java.lang.Boolean)
//  .unidirectional(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forwardLocally">forwardLocally</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The desired forwarding action for this ACL policy. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.unidirectional">unidirectional</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The desired traffic direction for this ACL policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#account_id MagicTransitSiteAcl#account_id}

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan1"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}.

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.lan2"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#name MagicTransitSiteAcl#name}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#site_id MagicTransitSiteAcl#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#description MagicTransitSiteAcl#description}

---

##### `forwardLocally`<sup>Optional</sup> <a name="forwardLocally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.forwardLocally"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The desired forwarding action for this ACL policy.

If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#forward_locally MagicTransitSiteAcl#forward_locally}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}.

---

##### `unidirectional`<sup>Optional</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.unidirectional"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The desired traffic direction for this ACL policy.

If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#unidirectional MagicTransitSiteAcl#unidirectional}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1">putLan1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2">putLan2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetForwardLocally">resetForwardLocally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetUnidirectional">resetUnidirectional</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLan1` <a name="putLan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1"></a>

```java
public void putLan1(MagicTransitSiteAclLan1 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

---

##### `putLan2` <a name="putLan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2"></a>

```java
public void putLan2(MagicTransitSiteAclLan2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForwardLocally` <a name="resetForwardLocally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetForwardLocally"></a>

```java
public void resetForwardLocally()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetUnidirectional` <a name="resetUnidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetUnidirectional"></a>

```java
public void resetUnidirectional()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAcl;

MagicTransitSiteAcl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAcl;

MagicTransitSiteAcl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAcl;

MagicTransitSiteAcl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAcl;

MagicTransitSiteAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicTransitSiteAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicTransitSiteAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicTransitSiteAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference">MagicTransitSiteAclLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference">MagicTransitSiteAclLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocallyInput">forwardLocallyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1Input">lan1Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2Input">lan2Input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectionalInput">unidirectionalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocally">forwardLocally</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectional">unidirectional</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1"></a>

```java
public MagicTransitSiteAclLan1OutputReference getLan1();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference">MagicTransitSiteAclLan1OutputReference</a>

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2"></a>

```java
public MagicTransitSiteAclLan2OutputReference getLan2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference">MagicTransitSiteAclLan2OutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forwardLocallyInput`<sup>Optional</sup> <a name="forwardLocallyInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocallyInput"></a>

```java
public java.lang.Object getForwardLocallyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lan1Input`<sup>Optional</sup> <a name="lan1Input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1Input"></a>

```java
public java.lang.Object getLan1Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

---

##### `lan2Input`<sup>Optional</sup> <a name="lan2Input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2Input"></a>

```java
public java.lang.Object getLan2Input();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `unidirectionalInput`<sup>Optional</sup> <a name="unidirectionalInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectionalInput"></a>

```java
public java.lang.Object getUnidirectionalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forwardLocally`<sup>Required</sup> <a name="forwardLocally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocally"></a>

```java
public java.lang.Object getForwardLocally();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `unidirectional`<sup>Required</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectional"></a>

```java
public java.lang.Object getUnidirectional();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteAclConfig <a name="MagicTransitSiteAclConfig" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAclConfig;

MagicTransitSiteAclConfig.builder()
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
    .lan1(MagicTransitSiteAclLan1)
    .lan2(MagicTransitSiteAclLan2)
    .name(java.lang.String)
    .siteId(java.lang.String)
//  .description(java.lang.String)
//  .forwardLocally(java.lang.Boolean)
//  .forwardLocally(IResolvable)
//  .protocols(java.util.List<java.lang.String>)
//  .unidirectional(java.lang.Boolean)
//  .unidirectional(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forwardLocally">forwardLocally</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The desired forwarding action for this ACL policy. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.unidirectional">unidirectional</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The desired traffic direction for this ACL policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#account_id MagicTransitSiteAcl#account_id}

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan1"></a>

```java
public MagicTransitSiteAclLan1 getLan1();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}.

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan2"></a>

```java
public MagicTransitSiteAclLan2 getLan2();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#name MagicTransitSiteAcl#name}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#site_id MagicTransitSiteAcl#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#description MagicTransitSiteAcl#description}

---

##### `forwardLocally`<sup>Optional</sup> <a name="forwardLocally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forwardLocally"></a>

```java
public java.lang.Object getForwardLocally();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The desired forwarding action for this ACL policy.

If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#forward_locally MagicTransitSiteAcl#forward_locally}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}.

---

##### `unidirectional`<sup>Optional</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.unidirectional"></a>

```java
public java.lang.Object getUnidirectional();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The desired traffic direction for this ACL policy.

If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#unidirectional MagicTransitSiteAcl#unidirectional}

---

### MagicTransitSiteAclLan1 <a name="MagicTransitSiteAclLan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAclLan1;

MagicTransitSiteAclLan1.builder()
    .lanId(java.lang.String)
//  .lanName(java.lang.String)
//  .portRanges(java.util.List<java.lang.String>)
//  .ports(java.util.List<java.lang.Number>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanId">lanId</a></code> | <code>java.lang.String</code> | The identifier for the LAN you want to create an ACL policy with. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanName">lanName</a></code> | <code>java.lang.String</code> | The name of the LAN based on the provided lan_id. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | Array of port ranges on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Array of ports on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Array of subnet IPs within the LAN that will be included in the ACL. |

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

##### `lanName`<sup>Optional</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanName"></a>

```java
public java.lang.String getLanName();
```

- *Type:* java.lang.String

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

### MagicTransitSiteAclLan2 <a name="MagicTransitSiteAclLan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAclLan2;

MagicTransitSiteAclLan2.builder()
    .lanId(java.lang.String)
//  .lanName(java.lang.String)
//  .portRanges(java.util.List<java.lang.String>)
//  .ports(java.util.List<java.lang.Number>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanId">lanId</a></code> | <code>java.lang.String</code> | The identifier for the LAN you want to create an ACL policy with. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanName">lanName</a></code> | <code>java.lang.String</code> | The name of the LAN based on the provided lan_id. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | Array of port ranges on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Array of ports on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Array of subnet IPs within the LAN that will be included in the ACL. |

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

##### `lanName`<sup>Optional</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanName"></a>

```java
public java.lang.String getLanName();
```

- *Type:* java.lang.String

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteAclLan1OutputReference <a name="MagicTransitSiteAclLan1OutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAclLan1OutputReference;

new MagicTransitSiteAclLan1OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetLanName">resetLanName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLanName` <a name="resetLanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetLanName"></a>

```java
public void resetLanName()
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPortRanges"></a>

```java
public void resetPortRanges()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanIdInput">lanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanNameInput">lanNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRangesInput">portRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanId">lanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanName">lanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanIdInput"></a>

```java
public java.lang.String getLanIdInput();
```

- *Type:* java.lang.String

---

##### `lanNameInput`<sup>Optional</sup> <a name="lanNameInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanNameInput"></a>

```java
public java.lang.String getLanNameInput();
```

- *Type:* java.lang.String

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRangesInput"></a>

```java
public java.util.List<java.lang.String> getPortRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

---

##### `lanName`<sup>Required</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanName"></a>

```java
public java.lang.String getLanName();
```

- *Type:* java.lang.String

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

---


### MagicTransitSiteAclLan2OutputReference <a name="MagicTransitSiteAclLan2OutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_acl.MagicTransitSiteAclLan2OutputReference;

new MagicTransitSiteAclLan2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetLanName">resetLanName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLanName` <a name="resetLanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetLanName"></a>

```java
public void resetLanName()
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPortRanges"></a>

```java
public void resetPortRanges()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanIdInput">lanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanNameInput">lanNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRangesInput">portRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanId">lanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanName">lanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRanges">portRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanIdInput"></a>

```java
public java.lang.String getLanIdInput();
```

- *Type:* java.lang.String

---

##### `lanNameInput`<sup>Optional</sup> <a name="lanNameInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanNameInput"></a>

```java
public java.lang.String getLanNameInput();
```

- *Type:* java.lang.String

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRangesInput"></a>

```java
public java.util.List<java.lang.String> getPortRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

---

##### `lanName`<sup>Required</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanName"></a>

```java
public java.lang.String getLanName();
```

- *Type:* java.lang.String

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRanges"></a>

```java
public java.util.List<java.lang.String> getPortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

---



