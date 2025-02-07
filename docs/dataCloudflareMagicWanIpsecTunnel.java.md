# `dataCloudflareMagicWanIpsecTunnel` Submodule <a name="`dataCloudflareMagicWanIpsecTunnel` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanIpsecTunnel <a name="DataCloudflareMagicWanIpsecTunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnel;

DataCloudflareMagicWanIpsecTunnel.Builder.create(Construct scope, java.lang.String id)
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
    .ipsecTunnelId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.ipsecTunnelId">ipsecTunnelId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/magic_wan_ipsec_tunnel#account_id DataCloudflareMagicWanIpsecTunnel#account_id}

---

##### `ipsecTunnelId`<sup>Required</sup> <a name="ipsecTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.ipsecTunnelId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/magic_wan_ipsec_tunnel#ipsec_tunnel_id DataCloudflareMagicWanIpsecTunnel#ipsec_tunnel_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnel;

DataCloudflareMagicWanIpsecTunnel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnel;

DataCloudflareMagicWanIpsecTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnel;

DataCloudflareMagicWanIpsecTunnel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnel;

DataCloudflareMagicWanIpsecTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareMagicWanIpsecTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareMagicWanIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareMagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnel">ipsecTunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelIdInput">ipsecTunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelId">ipsecTunnelId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `ipsecTunnel`<sup>Required</sup> <a name="ipsecTunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnel"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference getIpsecTunnel();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `ipsecTunnelIdInput`<sup>Optional</sup> <a name="ipsecTunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelIdInput"></a>

```java
public java.lang.String getIpsecTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `ipsecTunnelId`<sup>Required</sup> <a name="ipsecTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelId"></a>

```java
public java.lang.String getIpsecTunnelId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanIpsecTunnelConfig <a name="DataCloudflareMagicWanIpsecTunnelConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelConfig;

DataCloudflareMagicWanIpsecTunnelConfig.builder()
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
    .ipsecTunnelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.ipsecTunnelId">ipsecTunnelId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/magic_wan_ipsec_tunnel#account_id DataCloudflareMagicWanIpsecTunnel#account_id}

---

##### `ipsecTunnelId`<sup>Required</sup> <a name="ipsecTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.ipsecTunnelId"></a>

```java
public java.lang.String getIpsecTunnelId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/magic_wan_ipsec_tunnel#ipsec_tunnel_id DataCloudflareMagicWanIpsecTunnel#ipsec_tunnel_id}

---

### DataCloudflareMagicWanIpsecTunnelIpsecTunnel <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel;

DataCloudflareMagicWanIpsecTunnelIpsecTunnel.builder()
    .build();
```


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck;

DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck.builder()
    .build();
```


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget;

DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget.builder()
    .build();
```


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata;

DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference;

new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck</a>

---


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference;

new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```java
public java.lang.String getEffective();
```

- *Type:* java.lang.String

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```java
public java.lang.String getSaved();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a>

---


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference;

new DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher">allowNullCipher</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint">customerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress">interfaceAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata">pskMetadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection">replayProtection</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel">DataCloudflareMagicWanIpsecTunnelIpsecTunnel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowNullCipher`<sup>Required</sup> <a name="allowNullCipher" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher"></a>

```java
public IResolvable getAllowNullCipher();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint"></a>

```java
public java.lang.String getCloudflareEndpoint();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint"></a>

```java
public java.lang.String getCustomerEndpoint();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress"></a>

```java
public java.lang.String getInterfaceAddress();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pskMetadata`<sup>Required</sup> <a name="pskMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference getPskMetadata();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a>

---

##### `replayProtection`<sup>Required</sup> <a name="replayProtection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection"></a>

```java
public IResolvable getReplayProtection();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel">DataCloudflareMagicWanIpsecTunnelIpsecTunnel</a>

---


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_magic_wan_ipsec_tunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference;

new DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">lastGeneratedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastGeneratedOn`<sup>Required</sup> <a name="lastGeneratedOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```java
public java.lang.String getLastGeneratedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata</a>

---



