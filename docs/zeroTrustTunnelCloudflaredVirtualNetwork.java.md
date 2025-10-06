# `zeroTrustTunnelCloudflaredVirtualNetwork` Submodule <a name="`zeroTrustTunnelCloudflaredVirtualNetwork` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelCloudflaredVirtualNetwork <a name="ZeroTrustTunnelCloudflaredVirtualNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_cloudflared_virtual_network.ZeroTrustTunnelCloudflaredVirtualNetwork;

ZeroTrustTunnelCloudflaredVirtualNetwork.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .isDefaultNetwork(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Optional remark describing the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, this virtual network is the default for the account. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, this virtual network is the default for the account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#account_id ZeroTrustTunnelCloudflaredVirtualNetwork#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#name ZeroTrustTunnelCloudflaredVirtualNetwork#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Optional remark describing the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#comment ZeroTrustTunnelCloudflaredVirtualNetwork#comment}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, this virtual network is the default for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#is_default ZeroTrustTunnelCloudflaredVirtualNetwork#is_default}

---

##### `isDefaultNetwork`<sup>Optional</sup> <a name="isDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.isDefaultNetwork"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, this virtual network is the default for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#is_default_network ZeroTrustTunnelCloudflaredVirtualNetwork#is_default_network}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetIsDefaultNetwork">resetIsDefaultNetwork</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetComment"></a>

```java
public void resetComment()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetIsDefaultNetwork` <a name="resetIsDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.resetIsDefaultNetwork"></a>

```java
public void resetIsDefaultNetwork()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_cloudflared_virtual_network.ZeroTrustTunnelCloudflaredVirtualNetwork;

ZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_cloudflared_virtual_network.ZeroTrustTunnelCloudflaredVirtualNetwork;

ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_cloudflared_virtual_network.ZeroTrustTunnelCloudflaredVirtualNetwork;

ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_cloudflared_virtual_network.ZeroTrustTunnelCloudflaredVirtualNetwork;

ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustTunnelCloudflaredVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustTunnelCloudflaredVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelCloudflaredVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.deletedAt">deletedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetworkInput">isDefaultNetworkInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.deletedAt"></a>

```java
public java.lang.String getDeletedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isDefaultNetworkInput`<sup>Optional</sup> <a name="isDefaultNetworkInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetworkInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNetworkInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isDefaultNetwork`<sup>Required</sup> <a name="isDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetwork"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNetwork();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelCloudflaredVirtualNetworkConfig <a name="ZeroTrustTunnelCloudflaredVirtualNetworkConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_cloudflared_virtual_network.ZeroTrustTunnelCloudflaredVirtualNetworkConfig;

ZeroTrustTunnelCloudflaredVirtualNetworkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .isDefaultNetwork(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Optional remark describing the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, this virtual network is the default for the account. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, this virtual network is the default for the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#account_id ZeroTrustTunnelCloudflaredVirtualNetwork#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#name ZeroTrustTunnelCloudflaredVirtualNetwork#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Optional remark describing the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#comment ZeroTrustTunnelCloudflaredVirtualNetwork#comment}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, this virtual network is the default for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#is_default ZeroTrustTunnelCloudflaredVirtualNetwork#is_default}

---

##### `isDefaultNetwork`<sup>Optional</sup> <a name="isDefaultNetwork" id="@cdktf/provider-cloudflare.zeroTrustTunnelCloudflaredVirtualNetwork.ZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.isDefaultNetwork"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNetwork();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, this virtual network is the default for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#is_default_network ZeroTrustTunnelCloudflaredVirtualNetwork#is_default_network}

---



