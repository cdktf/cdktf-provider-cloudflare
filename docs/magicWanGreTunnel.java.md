# `magicWanGreTunnel` Submodule <a name="`magicWanGreTunnel` Submodule" id="@cdktf/provider-cloudflare.magicWanGreTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanGreTunnel <a name="MagicWanGreTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnel;

MagicWanGreTunnel.Builder.create(Construct scope, java.lang.String id)
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
//  .cloudflareGreEndpoint(java.lang.String)
//  .customerGreEndpoint(java.lang.String)
//  .description(java.lang.String)
//  .greTunnelId(java.lang.String)
//  .healthCheck(MagicWanGreTunnelHealthCheck)
//  .interfaceAddress(java.lang.String)
//  .mtu(java.lang.Number)
//  .name(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>java.lang.String</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.customerGreEndpoint">customerGreEndpoint</a></code> | <code>java.lang.String</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.greTunnelId">greTunnelId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}

---

##### `cloudflareGreEndpoint`<sup>Optional</sup> <a name="cloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.cloudflareGreEndpoint"></a>

- *Type:* java.lang.String

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}

---

##### `customerGreEndpoint`<sup>Optional</sup> <a name="customerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.customerGreEndpoint"></a>

- *Type:* java.lang.String

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}

---

##### `greTunnelId`<sup>Optional</sup> <a name="greTunnelId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.greTunnelId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#gre_tunnel_id MagicWanGreTunnel#gre_tunnel_id}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}.

---

##### `interfaceAddress`<sup>Optional</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.interfaceAddress"></a>

- *Type:* java.lang.String

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the tunnel.

The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetCloudflareGreEndpoint">resetCloudflareGreEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetCustomerGreEndpoint">resetCustomerGreEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetGreTunnelId">resetGreTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetInterfaceAddress">resetInterfaceAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck"></a>

```java
public void putHealthCheck(MagicWanGreTunnelHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---

##### `resetCloudflareGreEndpoint` <a name="resetCloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetCloudflareGreEndpoint"></a>

```java
public void resetCloudflareGreEndpoint()
```

##### `resetCustomerGreEndpoint` <a name="resetCustomerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetCustomerGreEndpoint"></a>

```java
public void resetCustomerGreEndpoint()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGreTunnelId` <a name="resetGreTunnelId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetGreTunnelId"></a>

```java
public void resetGreTunnelId()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetInterfaceAddress` <a name="resetInterfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetInterfaceAddress"></a>

```java
public void resetInterfaceAddress()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetName"></a>

```java
public void resetName()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnel;

MagicWanGreTunnel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnel;

MagicWanGreTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnel;

MagicWanGreTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnel;

MagicWanGreTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicWanGreTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicWanGreTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicWanGreTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanGreTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnel">greTunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference">MagicWanGreTunnelGreTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnels">greTunnels</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList">MagicWanGreTunnelGreTunnelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modified">modified</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedGreTunnel">modifiedGreTunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference">MagicWanGreTunnelModifiedGreTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput">cloudflareGreEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput">customerGreEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnelIdInput">greTunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput">healthCheckInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput">interfaceAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint">customerGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnelId">greTunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `greTunnel`<sup>Required</sup> <a name="greTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnel"></a>

```java
public MagicWanGreTunnelGreTunnelOutputReference getGreTunnel();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference">MagicWanGreTunnelGreTunnelOutputReference</a>

---

##### `greTunnels`<sup>Required</sup> <a name="greTunnels" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnels"></a>

```java
public MagicWanGreTunnelGreTunnelsList getGreTunnels();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList">MagicWanGreTunnelGreTunnelsList</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck"></a>

```java
public MagicWanGreTunnelHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modified"></a>

```java
public IResolvable getModified();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `modifiedGreTunnel`<sup>Required</sup> <a name="modifiedGreTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedGreTunnel"></a>

```java
public MagicWanGreTunnelModifiedGreTunnelOutputReference getModifiedGreTunnel();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference">MagicWanGreTunnelModifiedGreTunnelOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `cloudflareGreEndpointInput`<sup>Optional</sup> <a name="cloudflareGreEndpointInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput"></a>

```java
public java.lang.String getCloudflareGreEndpointInput();
```

- *Type:* java.lang.String

---

##### `customerGreEndpointInput`<sup>Optional</sup> <a name="customerGreEndpointInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput"></a>

```java
public java.lang.String getCustomerGreEndpointInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `greTunnelIdInput`<sup>Optional</sup> <a name="greTunnelIdInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnelIdInput"></a>

```java
public java.lang.String getGreTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput"></a>

```java
public java.lang.Object getHealthCheckInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---

##### `interfaceAddressInput`<sup>Optional</sup> <a name="interfaceAddressInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput"></a>

```java
public java.lang.String getInterfaceAddressInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `cloudflareGreEndpoint`<sup>Required</sup> <a name="cloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint"></a>

```java
public java.lang.String getCloudflareGreEndpoint();
```

- *Type:* java.lang.String

---

##### `customerGreEndpoint`<sup>Required</sup> <a name="customerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint"></a>

```java
public java.lang.String getCustomerGreEndpoint();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `greTunnelId`<sup>Required</sup> <a name="greTunnelId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.greTunnelId"></a>

```java
public java.lang.String getGreTunnelId();
```

- *Type:* java.lang.String

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanGreTunnelConfig <a name="MagicWanGreTunnelConfig" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelConfig;

MagicWanGreTunnelConfig.builder()
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
//  .cloudflareGreEndpoint(java.lang.String)
//  .customerGreEndpoint(java.lang.String)
//  .description(java.lang.String)
//  .greTunnelId(java.lang.String)
//  .healthCheck(MagicWanGreTunnelHealthCheck)
//  .interfaceAddress(java.lang.String)
//  .mtu(java.lang.Number)
//  .name(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>java.lang.String</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint">customerGreEndpoint</a></code> | <code>java.lang.String</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.greTunnelId">greTunnelId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}

---

##### `cloudflareGreEndpoint`<sup>Optional</sup> <a name="cloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint"></a>

```java
public java.lang.String getCloudflareGreEndpoint();
```

- *Type:* java.lang.String

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}

---

##### `customerGreEndpoint`<sup>Optional</sup> <a name="customerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint"></a>

```java
public java.lang.String getCustomerGreEndpoint();
```

- *Type:* java.lang.String

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}

---

##### `greTunnelId`<sup>Optional</sup> <a name="greTunnelId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.greTunnelId"></a>

```java
public java.lang.String getGreTunnelId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#gre_tunnel_id MagicWanGreTunnel#gre_tunnel_id}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck"></a>

```java
public MagicWanGreTunnelHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}.

---

##### `interfaceAddress`<sup>Optional</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the tunnel.

The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}

---

### MagicWanGreTunnelGreTunnel <a name="MagicWanGreTunnelGreTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnel;

MagicWanGreTunnelGreTunnel.builder()
    .build();
```


### MagicWanGreTunnelGreTunnelHealthCheck <a name="MagicWanGreTunnelGreTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelHealthCheck;

MagicWanGreTunnelGreTunnelHealthCheck.builder()
    .build();
```


### MagicWanGreTunnelGreTunnelHealthCheckTarget <a name="MagicWanGreTunnelGreTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelHealthCheckTarget;

MagicWanGreTunnelGreTunnelHealthCheckTarget.builder()
    .build();
```


### MagicWanGreTunnelGreTunnels <a name="MagicWanGreTunnelGreTunnels" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnels;

MagicWanGreTunnelGreTunnels.builder()
    .build();
```


### MagicWanGreTunnelGreTunnelsHealthCheck <a name="MagicWanGreTunnelGreTunnelsHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelsHealthCheck;

MagicWanGreTunnelGreTunnelsHealthCheck.builder()
    .build();
```


### MagicWanGreTunnelGreTunnelsHealthCheckTarget <a name="MagicWanGreTunnelGreTunnelsHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelsHealthCheckTarget;

MagicWanGreTunnelGreTunnelsHealthCheckTarget.builder()
    .build();
```


### MagicWanGreTunnelHealthCheck <a name="MagicWanGreTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelHealthCheck;

MagicWanGreTunnelHealthCheck.builder()
//  .direction(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .rate(java.lang.String)
//  .target(MagicWanGreTunnelHealthCheckTarget)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate">rate</a></code> | <code>java.lang.String</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type">type</a></code> | <code>java.lang.String</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#direction MagicWanGreTunnel#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#enabled MagicWanGreTunnel#enabled}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#rate MagicWanGreTunnel#rate}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target"></a>

```java
public MagicWanGreTunnelHealthCheckTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#target MagicWanGreTunnel#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#type MagicWanGreTunnel#type}

---

### MagicWanGreTunnelHealthCheckTarget <a name="MagicWanGreTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelHealthCheckTarget;

MagicWanGreTunnelHealthCheckTarget.builder()
//  .saved(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved">saved</a></code> | <code>java.lang.String</code> | The saved health check target. |

---

##### `saved`<sup>Optional</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved"></a>

```java
public java.lang.String getSaved();
```

- *Type:* java.lang.String

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_wan_gre_tunnel#saved MagicWanGreTunnel#saved}

---

### MagicWanGreTunnelModifiedGreTunnel <a name="MagicWanGreTunnelModifiedGreTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelModifiedGreTunnel;

MagicWanGreTunnelModifiedGreTunnel.builder()
    .build();
```


### MagicWanGreTunnelModifiedGreTunnelHealthCheck <a name="MagicWanGreTunnelModifiedGreTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheck;

MagicWanGreTunnelModifiedGreTunnelHealthCheck.builder()
    .build();
```


### MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget <a name="MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget;

MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### MagicWanGreTunnelGreTunnelHealthCheckOutputReference <a name="MagicWanGreTunnelGreTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference;

new MagicWanGreTunnelGreTunnelHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheck">MagicWanGreTunnelGreTunnelHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.target"></a>

```java
public MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelGreTunnelHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheck">MagicWanGreTunnelGreTunnelHealthCheck</a>

---


### MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference <a name="MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference;

new MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTarget">MagicWanGreTunnelGreTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.effective"></a>

```java
public java.lang.String getEffective();
```

- *Type:* java.lang.String

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.saved"></a>

```java
public java.lang.String getSaved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelGreTunnelHealthCheckTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckTarget">MagicWanGreTunnelGreTunnelHealthCheckTarget</a>

---


### MagicWanGreTunnelGreTunnelOutputReference <a name="MagicWanGreTunnelGreTunnelOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelOutputReference;

new MagicWanGreTunnelGreTunnelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.customerGreEndpoint">customerGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference">MagicWanGreTunnelGreTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnel">MagicWanGreTunnelGreTunnel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudflareGreEndpoint`<sup>Required</sup> <a name="cloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.cloudflareGreEndpoint"></a>

```java
public java.lang.String getCloudflareGreEndpoint();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customerGreEndpoint`<sup>Required</sup> <a name="customerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.customerGreEndpoint"></a>

```java
public java.lang.String getCustomerGreEndpoint();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.healthCheck"></a>

```java
public MagicWanGreTunnelGreTunnelHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelHealthCheckOutputReference">MagicWanGreTunnelGreTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelGreTunnel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnel">MagicWanGreTunnelGreTunnel</a>

---


### MagicWanGreTunnelGreTunnelsHealthCheckOutputReference <a name="MagicWanGreTunnelGreTunnelsHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference;

new MagicWanGreTunnelGreTunnelsHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.rate">rate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference">MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheck">MagicWanGreTunnelGreTunnelsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.target"></a>

```java
public MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference">MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelGreTunnelsHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheck">MagicWanGreTunnelGreTunnelsHealthCheck</a>

---


### MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference <a name="MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference;

new MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTarget">MagicWanGreTunnelGreTunnelsHealthCheckTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.effective"></a>

```java
public java.lang.String getEffective();
```

- *Type:* java.lang.String

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.saved"></a>

```java
public java.lang.String getSaved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTargetOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelGreTunnelsHealthCheckTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckTarget">MagicWanGreTunnelGreTunnelsHealthCheckTarget</a>

---


### MagicWanGreTunnelGreTunnelsList <a name="MagicWanGreTunnelGreTunnelsList" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelsList;

new MagicWanGreTunnelGreTunnelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.get"></a>

```java
public MagicWanGreTunnelGreTunnelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MagicWanGreTunnelGreTunnelsOutputReference <a name="MagicWanGreTunnelGreTunnelsOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelGreTunnelsOutputReference;

new MagicWanGreTunnelGreTunnelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.customerGreEndpoint">customerGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference">MagicWanGreTunnelGreTunnelsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnels">MagicWanGreTunnelGreTunnels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudflareGreEndpoint`<sup>Required</sup> <a name="cloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.cloudflareGreEndpoint"></a>

```java
public java.lang.String getCloudflareGreEndpoint();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customerGreEndpoint`<sup>Required</sup> <a name="customerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.customerGreEndpoint"></a>

```java
public java.lang.String getCustomerGreEndpoint();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.healthCheck"></a>

```java
public MagicWanGreTunnelGreTunnelsHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsHealthCheckOutputReference">MagicWanGreTunnelGreTunnelsHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnelsOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelGreTunnels getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelGreTunnels">MagicWanGreTunnelGreTunnels</a>

---


### MagicWanGreTunnelHealthCheckOutputReference <a name="MagicWanGreTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelHealthCheckOutputReference;

new MagicWanGreTunnelHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate">resetRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget"></a>

```java
public void putTarget(MagicWanGreTunnelHealthCheckTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRate` <a name="resetRate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate"></a>

```java
public void resetRate()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput">rateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput">targetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target"></a>

```java
public MagicWanGreTunnelHealthCheckTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput"></a>

```java
public java.lang.String getRateInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput"></a>

```java
public java.lang.Object getTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---


### MagicWanGreTunnelHealthCheckTargetOutputReference <a name="MagicWanGreTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelHealthCheckTargetOutputReference;

new MagicWanGreTunnelHealthCheckTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved">resetSaved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSaved` <a name="resetSaved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```java
public void resetSaved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput">savedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective"></a>

```java
public java.lang.String getEffective();
```

- *Type:* java.lang.String

---

##### `savedInput`<sup>Optional</sup> <a name="savedInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```java
public java.lang.String getSavedInput();
```

- *Type:* java.lang.String

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved"></a>

```java
public java.lang.String getSaved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---


### MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference <a name="MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference;

new MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheck">MagicWanGreTunnelModifiedGreTunnelHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.target"></a>

```java
public MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelModifiedGreTunnelHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheck">MagicWanGreTunnelModifiedGreTunnelHealthCheck</a>

---


### MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference <a name="MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference;

new MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget">MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.effective"></a>

```java
public java.lang.String getEffective();
```

- *Type:* java.lang.String

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.saved"></a>

```java
public java.lang.String getSaved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget">MagicWanGreTunnelModifiedGreTunnelHealthCheckTarget</a>

---


### MagicWanGreTunnelModifiedGreTunnelOutputReference <a name="MagicWanGreTunnelModifiedGreTunnelOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_wan_gre_tunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference;

new MagicWanGreTunnelModifiedGreTunnelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.cloudflareGreEndpoint">cloudflareGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.customerGreEndpoint">customerGreEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference">MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnel">MagicWanGreTunnelModifiedGreTunnel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudflareGreEndpoint`<sup>Required</sup> <a name="cloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.cloudflareGreEndpoint"></a>

```java
public java.lang.String getCloudflareGreEndpoint();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customerGreEndpoint`<sup>Required</sup> <a name="customerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.customerGreEndpoint"></a>

```java
public java.lang.String getCustomerGreEndpoint();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.healthCheck"></a>

```java
public MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference">MagicWanGreTunnelModifiedGreTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnelOutputReference.property.internalValue"></a>

```java
public MagicWanGreTunnelModifiedGreTunnel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelModifiedGreTunnel">MagicWanGreTunnelModifiedGreTunnel</a>

---



