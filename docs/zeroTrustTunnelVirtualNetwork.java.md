# `zeroTrustTunnelVirtualNetwork` Submodule <a name="`zeroTrustTunnelVirtualNetwork` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelVirtualNetwork <a name="ZeroTrustTunnelVirtualNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network cloudflare_zero_trust_tunnel_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_virtual_network.ZeroTrustTunnelVirtualNetwork;

ZeroTrustTunnelVirtualNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .isDefaultNetwork(java.lang.Boolean)
//  .isDefaultNetwork(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name chosen when the virtual network is created. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Description of the tunnel virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#id ZeroTrustTunnelVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this virtual network is the default one for the account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#account_id ZeroTrustTunnelVirtualNetwork#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-friendly name chosen when the virtual network is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#name ZeroTrustTunnelVirtualNetwork#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Description of the tunnel virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#comment ZeroTrustTunnelVirtualNetwork#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#id ZeroTrustTunnelVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultNetwork`<sup>Optional</sup> <a name="isDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.Initializer.parameter.isDefaultNetwork"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this virtual network is the default one for the account.

This means IP Routes belong to this virtual network and Teams Clients in the account route through this virtual network, unless specified otherwise for each case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#is_default_network ZeroTrustTunnelVirtualNetwork#is_default_network}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetIsDefaultNetwork">resetIsDefaultNetwork</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefaultNetwork` <a name="resetIsDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.resetIsDefaultNetwork"></a>

```java
public void resetIsDefaultNetwork()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_virtual_network.ZeroTrustTunnelVirtualNetwork;

ZeroTrustTunnelVirtualNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_virtual_network.ZeroTrustTunnelVirtualNetwork;

ZeroTrustTunnelVirtualNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_virtual_network.ZeroTrustTunnelVirtualNetwork;

ZeroTrustTunnelVirtualNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_virtual_network.ZeroTrustTunnelVirtualNetwork;

ZeroTrustTunnelVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustTunnelVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustTunnelVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustTunnelVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustTunnelVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.isDefaultNetworkInput">isDefaultNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultNetworkInput`<sup>Optional</sup> <a name="isDefaultNetworkInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.isDefaultNetworkInput"></a>

```java
public java.lang.Object getIsDefaultNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefaultNetwork`<sup>Required</sup> <a name="isDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.isDefaultNetwork"></a>

```java
public java.lang.Object getIsDefaultNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelVirtualNetworkConfig <a name="ZeroTrustTunnelVirtualNetworkConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_virtual_network.ZeroTrustTunnelVirtualNetworkConfig;

ZeroTrustTunnelVirtualNetworkConfig.builder()
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
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .isDefaultNetwork(java.lang.Boolean)
//  .isDefaultNetwork(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name chosen when the virtual network is created. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Description of the tunnel virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#id ZeroTrustTunnelVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this virtual network is the default one for the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#account_id ZeroTrustTunnelVirtualNetwork#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-friendly name chosen when the virtual network is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#name ZeroTrustTunnelVirtualNetwork#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Description of the tunnel virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#comment ZeroTrustTunnelVirtualNetwork#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#id ZeroTrustTunnelVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultNetwork`<sup>Optional</sup> <a name="isDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelVirtualNetwork.ZeroTrustTunnelVirtualNetworkConfig.property.isDefaultNetwork"></a>

```java
public java.lang.Object getIsDefaultNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this virtual network is the default one for the account.

This means IP Routes belong to this virtual network and Teams Clients in the account route through this virtual network, unless specified otherwise for each case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_tunnel_virtual_network#is_default_network ZeroTrustTunnelVirtualNetwork#is_default_network}

---



