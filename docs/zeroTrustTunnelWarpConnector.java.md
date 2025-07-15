# `zeroTrustTunnelWarpConnector` Submodule <a name="`zeroTrustTunnelWarpConnector` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelWarpConnector <a name="ZeroTrustTunnelWarpConnector" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnector;

ZeroTrustTunnelWarpConnector.Builder.create(Construct scope, java.lang.String id)
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
//  .tunnelSecret(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.tunnelSecret">tunnelSecret</a></code> | <code>java.lang.String</code> | Sets the password required to run a locally-managed tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#account_id ZeroTrustTunnelWarpConnector#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#name ZeroTrustTunnelWarpConnector#name}

---

##### `tunnelSecret`<sup>Optional</sup> <a name="tunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.tunnelSecret"></a>

- *Type:* java.lang.String

Sets the password required to run a locally-managed tunnel.

Must be at least 32 bytes and encoded as a base64 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#tunnel_secret ZeroTrustTunnelWarpConnector#tunnel_secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret">resetTunnelSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTunnelSecret` <a name="resetTunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret"></a>

```java
public void resetTunnelSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnector;

ZeroTrustTunnelWarpConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnector;

ZeroTrustTunnelWarpConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnector;

ZeroTrustTunnelWarpConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnector;

ZeroTrustTunnelWarpConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustTunnelWarpConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustTunnelWarpConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustTunnelWarpConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelWarpConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag">accountTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt">connsActiveAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt">connsInactiveAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt">deletedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.remoteConfig">remoteConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType">tunType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput">tunnelSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret">tunnelSecret</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountTag`<sup>Required</sup> <a name="accountTag" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag"></a>

```java
public java.lang.String getAccountTag();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections"></a>

```java
public ZeroTrustTunnelWarpConnectorConnectionsList getConnections();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a>

---

##### `connsActiveAt`<sup>Required</sup> <a name="connsActiveAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt"></a>

```java
public java.lang.String getConnsActiveAt();
```

- *Type:* java.lang.String

---

##### `connsInactiveAt`<sup>Required</sup> <a name="connsInactiveAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt"></a>

```java
public java.lang.String getConnsInactiveAt();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt"></a>

```java
public java.lang.String getDeletedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `remoteConfig`<sup>Required</sup> <a name="remoteConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.remoteConfig"></a>

```java
public IResolvable getRemoteConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tunType`<sup>Required</sup> <a name="tunType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType"></a>

```java
public java.lang.String getTunType();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tunnelSecretInput`<sup>Optional</sup> <a name="tunnelSecretInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput"></a>

```java
public java.lang.String getTunnelSecretInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tunnelSecret`<sup>Required</sup> <a name="tunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret"></a>

```java
public java.lang.String getTunnelSecret();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelWarpConnectorConfig <a name="ZeroTrustTunnelWarpConnectorConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnectorConfig;

ZeroTrustTunnelWarpConnectorConfig.builder()
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
//  .tunnelSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret">tunnelSecret</a></code> | <code>java.lang.String</code> | Sets the password required to run a locally-managed tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#account_id ZeroTrustTunnelWarpConnector#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#name ZeroTrustTunnelWarpConnector#name}

---

##### `tunnelSecret`<sup>Optional</sup> <a name="tunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret"></a>

```java
public java.lang.String getTunnelSecret();
```

- *Type:* java.lang.String

Sets the password required to run a locally-managed tunnel.

Must be at least 32 bytes and encoded as a base64 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#tunnel_secret ZeroTrustTunnelWarpConnector#tunnel_secret}

---

### ZeroTrustTunnelWarpConnectorConnections <a name="ZeroTrustTunnelWarpConnectorConnections" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnectorConnections;

ZeroTrustTunnelWarpConnectorConnections.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelWarpConnectorConnectionsList <a name="ZeroTrustTunnelWarpConnectorConnectionsList" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnectorConnectionsList;

new ZeroTrustTunnelWarpConnectorConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get"></a>

```java
public ZeroTrustTunnelWarpConnectorConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustTunnelWarpConnectorConnectionsOutputReference <a name="ZeroTrustTunnelWarpConnectorConnectionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_tunnel_warp_connector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference;

new ZeroTrustTunnelWarpConnectorConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName">coloName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect">isPendingReconnect</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt">openedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp">originIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

---

##### `coloName`<sup>Required</sup> <a name="coloName" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName"></a>

```java
public java.lang.String getColoName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPendingReconnect`<sup>Required</sup> <a name="isPendingReconnect" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect"></a>

```java
public IResolvable getIsPendingReconnect();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `openedAt`<sup>Required</sup> <a name="openedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt"></a>

```java
public java.lang.String getOpenedAt();
```

- *Type:* java.lang.String

---

##### `originIp`<sup>Required</sup> <a name="originIp" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp"></a>

```java
public java.lang.String getOriginIp();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue"></a>

```java
public ZeroTrustTunnelWarpConnectorConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a>

---



