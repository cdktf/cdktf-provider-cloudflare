# `dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter)
//  .virtualNetworkId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | UUID of the virtual network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#virtual_network_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.putFilter"></a>

```java
public void putFilter(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.deletedAt">deletedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.deletedAt"></a>

```java
public java.lang.String getDeletedAt();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filter"></a>

```java
public DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefaultNetwork`<sup>Required</sup> <a name="isDefaultNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetwork"></a>

```java
public IResolvable getIsDefaultNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.builder()
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
//  .filter(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter)
//  .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | UUID of the virtual network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.filter"></a>

```java
public DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#virtual_network_id}

---

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.builder()
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .isDeleted(java.lang.Boolean)
//  .isDeleted(IResolvable)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.id">id</a></code> | <code>java.lang.String</code> | UUID of the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, only include deleted virtual networks. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the virtual network. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_default}

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDeleted"></a>

```java
public java.lang.Object getIsDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, only include deleted virtual networks.

If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_deleted}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_network.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference;

new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDeleted">resetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetIsDeleted` <a name="resetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDeleted"></a>

```java
public void resetIsDeleted()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeletedInput">isDeletedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDeletedInput`<sup>Optional</sup> <a name="isDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeletedInput"></a>

```java
public java.lang.Object getIsDeletedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeleted"></a>

```java
public java.lang.Object getIsDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a>

---



