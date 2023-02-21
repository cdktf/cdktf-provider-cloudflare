# `tunnelConfig` Submodule <a name="`tunnelConfig` Submodule" id="@cdktf/provider-cloudflare.tunnelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TunnelConfig <a name="TunnelConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config cloudflare_tunnel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfig;

TunnelConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .config(TunnelConfigConfigA)
    .tunnelId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Identifier of the Tunnel to target for this configuration. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#account_id TunnelConfig#account_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#config TunnelConfig#config}

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.tunnelId"></a>

- *Type:* java.lang.String

Identifier of the Tunnel to target for this configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tunnel_id TunnelConfig#tunnel_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig"></a>

```java
public void putConfig(TunnelConfigConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfig;

TunnelConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfig;

TunnelConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfig;

TunnelConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference">TunnelConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.config"></a>

```java
public TunnelConfigConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference">TunnelConfigConfigAOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.configInput"></a>

```java
public TunnelConfigConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelIdInput"></a>

```java
public java.lang.String getTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TunnelConfigConfig <a name="TunnelConfigConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfig;

TunnelConfigConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .config(TunnelConfigConfigA)
    .tunnelId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | Identifier of the Tunnel to target for this configuration. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#account_id TunnelConfig#account_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.config"></a>

```java
public TunnelConfigConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#config TunnelConfig#config}

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

Identifier of the Tunnel to target for this configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tunnel_id TunnelConfig#tunnel_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TunnelConfigConfigA <a name="TunnelConfigConfigA" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigA;

TunnelConfigConfigA.builder()
    .ingressRule(IResolvable)
    .ingressRule(java.util.List<TunnelConfigConfigIngressRule>)
//  .originRequest(TunnelConfigConfigOriginRequest)
//  .warpRouting(TunnelConfigConfigWarpRouting)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.ingressRule">ingressRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>></code> | ingress_rule block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.originRequest">originRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | origin_request block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.warpRouting">warpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | warp_routing block. |

---

##### `ingressRule`<sup>Required</sup> <a name="ingressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.ingressRule"></a>

```java
public java.lang.Object getIngressRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>>

ingress_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ingress_rule TunnelConfig#ingress_rule}

---

##### `originRequest`<sup>Optional</sup> <a name="originRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.originRequest"></a>

```java
public TunnelConfigConfigOriginRequest getOriginRequest();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#origin_request TunnelConfig#origin_request}

---

##### `warpRouting`<sup>Optional</sup> <a name="warpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.warpRouting"></a>

```java
public TunnelConfigConfigWarpRouting getWarpRouting();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

warp_routing block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#warp_routing TunnelConfig#warp_routing}

---

### TunnelConfigConfigIngressRule <a name="TunnelConfigConfigIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigIngressRule;

TunnelConfigConfigIngressRule.builder()
    .service(java.lang.String)
//  .hostname(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service">service</a></code> | <code>java.lang.String</code> | Name of the service to which the request will be sent. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path">path</a></code> | <code>java.lang.String</code> | Path of the incoming request. If the path matches, the request will be sent to the local service. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Name of the service to which the request will be sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#service TunnelConfig#service}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#hostname TunnelConfig#hostname}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the incoming request. If the path matches, the request will be sent to the local service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#path TunnelConfig#path}

---

### TunnelConfigConfigOriginRequest <a name="TunnelConfigConfigOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigOriginRequest;

TunnelConfigConfigOriginRequest.builder()
//  .bastionMode(java.lang.Boolean)
//  .bastionMode(IResolvable)
//  .caPool(java.lang.String)
//  .connectTimeout(java.lang.String)
//  .disableChunkedEncoding(java.lang.Boolean)
//  .disableChunkedEncoding(IResolvable)
//  .httpHostHeader(java.lang.String)
//  .ipRules(IResolvable)
//  .ipRules(java.util.List<TunnelConfigConfigOriginRequestIpRules>)
//  .keepAliveConnections(java.lang.Number)
//  .keepAliveTimeout(java.lang.String)
//  .noHappyEyeballs(java.lang.Boolean)
//  .noHappyEyeballs(IResolvable)
//  .noTlsVerify(java.lang.Boolean)
//  .noTlsVerify(IResolvable)
//  .originServerName(java.lang.String)
//  .proxyAddress(java.lang.String)
//  .proxyPort(java.lang.Number)
//  .proxyType(java.lang.String)
//  .tcpKeepAlive(java.lang.String)
//  .tlsTimeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode">bastionMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Runs as jump host. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool">caPool</a></code> | <code>java.lang.String</code> | Path to the certificate authority (CA) for the certificate of your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.String</code> | Timeout for establishing a new TCP connection to your origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding">disableChunkedEncoding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader">httpHostHeader</a></code> | <code>java.lang.String</code> | Sets the HTTP Host header on requests sent to the local service. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules">ipRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>></code> | ip_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections">keepAliveConnections</a></code> | <code>java.lang.Number</code> | Maximum number of idle keepalive connections between Tunnel and your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.String</code> | Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs">noHappyEyeballs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify">noTlsVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables TLS verification of the certificate presented by your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName">originServerName</a></code> | <code>java.lang.String</code> | Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress">proxyAddress</a></code> | <code>java.lang.String</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort">proxyPort</a></code> | <code>java.lang.Number</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType">proxyType</a></code> | <code>java.lang.String</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive">tcpKeepAlive</a></code> | <code>java.lang.String</code> | The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout">tlsTimeout</a></code> | <code>java.lang.String</code> | Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. |

---

##### `bastionMode`<sup>Optional</sup> <a name="bastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode"></a>

```java
public java.lang.Object getBastionMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Runs as jump host.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#bastion_mode TunnelConfig#bastion_mode}

---

##### `caPool`<sup>Optional</sup> <a name="caPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ca_pool TunnelConfig#ca_pool}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout"></a>

```java
public java.lang.String getConnectTimeout();
```

- *Type:* java.lang.String

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#connect_timeout TunnelConfig#connect_timeout}

---

##### `disableChunkedEncoding`<sup>Optional</sup> <a name="disableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding"></a>

```java
public java.lang.Object getDisableChunkedEncoding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#disable_chunked_encoding TunnelConfig#disable_chunked_encoding}

---

##### `httpHostHeader`<sup>Optional</sup> <a name="httpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader"></a>

```java
public java.lang.String getHttpHostHeader();
```

- *Type:* java.lang.String

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#http_host_header TunnelConfig#http_host_header}

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules"></a>

```java
public java.lang.Object getIpRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>>

ip_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ip_rules TunnelConfig#ip_rules}

---

##### `keepAliveConnections`<sup>Optional</sup> <a name="keepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections"></a>

```java
public java.lang.Number getKeepAliveConnections();
```

- *Type:* java.lang.Number

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#keep_alive_connections TunnelConfig#keep_alive_connections}

---

##### `keepAliveTimeout`<sup>Optional</sup> <a name="keepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout"></a>

```java
public java.lang.String getKeepAliveTimeout();
```

- *Type:* java.lang.String

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#keep_alive_timeout TunnelConfig#keep_alive_timeout}

---

##### `noHappyEyeballs`<sup>Optional</sup> <a name="noHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs"></a>

```java
public java.lang.Object getNoHappyEyeballs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#no_happy_eyeballs TunnelConfig#no_happy_eyeballs}

---

##### `noTlsVerify`<sup>Optional</sup> <a name="noTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify"></a>

```java
public java.lang.Object getNoTlsVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#no_tls_verify TunnelConfig#no_tls_verify}

---

##### `originServerName`<sup>Optional</sup> <a name="originServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName"></a>

```java
public java.lang.String getOriginServerName();
```

- *Type:* java.lang.String

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#origin_server_name TunnelConfig#origin_server_name}

---

##### `proxyAddress`<sup>Optional</sup> <a name="proxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress"></a>

```java
public java.lang.String getProxyAddress();
```

- *Type:* java.lang.String

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_address TunnelConfig#proxy_address}

---

##### `proxyPort`<sup>Optional</sup> <a name="proxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort"></a>

```java
public java.lang.Number getProxyPort();
```

- *Type:* java.lang.Number

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_port TunnelConfig#proxy_port}

---

##### `proxyType`<sup>Optional</sup> <a name="proxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType"></a>

```java
public java.lang.String getProxyType();
```

- *Type:* java.lang.String

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: ``, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_type TunnelConfig#proxy_type}

---

##### `tcpKeepAlive`<sup>Optional</sup> <a name="tcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive"></a>

```java
public java.lang.String getTcpKeepAlive();
```

- *Type:* java.lang.String

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tcp_keep_alive TunnelConfig#tcp_keep_alive}

---

##### `tlsTimeout`<sup>Optional</sup> <a name="tlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout"></a>

```java
public java.lang.String getTlsTimeout();
```

- *Type:* java.lang.String

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tls_timeout TunnelConfig#tls_timeout}

---

### TunnelConfigConfigOriginRequestIpRules <a name="TunnelConfigConfigOriginRequestIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigOriginRequestIpRules;

TunnelConfigConfigOriginRequestIpRules.builder()
//  .allow(java.lang.Boolean)
//  .allow(IResolvable)
//  .ports(java.util.List<java.lang.Number>)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow">allow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to allow the IP prefix. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Ports to use within the IP rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix">prefix</a></code> | <code>java.lang.String</code> | IP rule prefix. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow"></a>

```java
public java.lang.Object getAllow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to allow the IP prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#allow TunnelConfig#allow}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ports TunnelConfig#ports}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

IP rule prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#prefix TunnelConfig#prefix}

---

### TunnelConfigConfigWarpRouting <a name="TunnelConfigConfigWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigWarpRouting;

TunnelConfigConfigWarpRouting.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether WARP routing is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether WARP routing is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#enabled TunnelConfig#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### TunnelConfigConfigAOutputReference <a name="TunnelConfigConfigAOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigAOutputReference;

new TunnelConfigConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule">putIngressRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest">putOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting">putWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetOriginRequest">resetOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetWarpRouting">resetWarpRouting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngressRule` <a name="putIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule"></a>

```java
public void putIngressRule(IResolvable OR java.util.List<TunnelConfigConfigIngressRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>>

---

##### `putOriginRequest` <a name="putOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest"></a>

```java
public void putOriginRequest(TunnelConfigConfigOriginRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `putWarpRouting` <a name="putWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting"></a>

```java
public void putWarpRouting(TunnelConfigConfigWarpRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `resetOriginRequest` <a name="resetOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetOriginRequest"></a>

```java
public void resetOriginRequest()
```

##### `resetWarpRouting` <a name="resetWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetWarpRouting"></a>

```java
public void resetWarpRouting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRule">ingressRule</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequest">originRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRouting">warpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRuleInput">ingressRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequestInput">originRequestInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRoutingInput">warpRoutingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressRule`<sup>Required</sup> <a name="ingressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRule"></a>

```java
public TunnelConfigConfigIngressRuleList getIngressRule();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a>

---

##### `originRequest`<sup>Required</sup> <a name="originRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequest"></a>

```java
public TunnelConfigConfigOriginRequestOutputReference getOriginRequest();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a>

---

##### `warpRouting`<sup>Required</sup> <a name="warpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRouting"></a>

```java
public TunnelConfigConfigWarpRoutingOutputReference getWarpRouting();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a>

---

##### `ingressRuleInput`<sup>Optional</sup> <a name="ingressRuleInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRuleInput"></a>

```java
public java.lang.Object getIngressRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>>

---

##### `originRequestInput`<sup>Optional</sup> <a name="originRequestInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequestInput"></a>

```java
public TunnelConfigConfigOriginRequest getOriginRequestInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `warpRoutingInput`<sup>Optional</sup> <a name="warpRoutingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRoutingInput"></a>

```java
public TunnelConfigConfigWarpRouting getWarpRoutingInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.internalValue"></a>

```java
public TunnelConfigConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---


### TunnelConfigConfigIngressRuleList <a name="TunnelConfigConfigIngressRuleList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigIngressRuleList;

new TunnelConfigConfigIngressRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get"></a>

```java
public TunnelConfigConfigIngressRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>>

---


### TunnelConfigConfigIngressRuleOutputReference <a name="TunnelConfigConfigIngressRuleOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigIngressRuleOutputReference;

new TunnelConfigConfigIngressRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a> OR com.hashicorp.cdktf.IResolvable

---


### TunnelConfigConfigOriginRequestIpRulesList <a name="TunnelConfigConfigOriginRequestIpRulesList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigOriginRequestIpRulesList;

new TunnelConfigConfigOriginRequestIpRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get"></a>

```java
public TunnelConfigConfigOriginRequestIpRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>>

---


### TunnelConfigConfigOriginRequestIpRulesOutputReference <a name="TunnelConfigConfigOriginRequestIpRulesOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigOriginRequestIpRulesOutputReference;

new TunnelConfigConfigOriginRequestIpRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput">allowInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow">allow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput"></a>

```java
public java.lang.Object getAllowInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow"></a>

```java
public java.lang.Object getAllow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a> OR com.hashicorp.cdktf.IResolvable

---


### TunnelConfigConfigOriginRequestOutputReference <a name="TunnelConfigConfigOriginRequestOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigOriginRequestOutputReference;

new TunnelConfigConfigOriginRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules">putIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode">resetBastionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool">resetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding">resetDisableChunkedEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader">resetHttpHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections">resetKeepAliveConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout">resetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs">resetNoHappyEyeballs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify">resetNoTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName">resetOriginServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress">resetProxyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort">resetProxyPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType">resetProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive">resetTcpKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout">resetTlsTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpRules` <a name="putIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules"></a>

```java
public void putIpRules(IResolvable OR java.util.List<TunnelConfigConfigOriginRequestIpRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>>

---

##### `resetBastionMode` <a name="resetBastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode"></a>

```java
public void resetBastionMode()
```

##### `resetCaPool` <a name="resetCaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool"></a>

```java
public void resetCaPool()
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetDisableChunkedEncoding` <a name="resetDisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding"></a>

```java
public void resetDisableChunkedEncoding()
```

##### `resetHttpHostHeader` <a name="resetHttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader"></a>

```java
public void resetHttpHostHeader()
```

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules"></a>

```java
public void resetIpRules()
```

##### `resetKeepAliveConnections` <a name="resetKeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections"></a>

```java
public void resetKeepAliveConnections()
```

##### `resetKeepAliveTimeout` <a name="resetKeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout"></a>

```java
public void resetKeepAliveTimeout()
```

##### `resetNoHappyEyeballs` <a name="resetNoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs"></a>

```java
public void resetNoHappyEyeballs()
```

##### `resetNoTlsVerify` <a name="resetNoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify"></a>

```java
public void resetNoTlsVerify()
```

##### `resetOriginServerName` <a name="resetOriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName"></a>

```java
public void resetOriginServerName()
```

##### `resetProxyAddress` <a name="resetProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress"></a>

```java
public void resetProxyAddress()
```

##### `resetProxyPort` <a name="resetProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort"></a>

```java
public void resetProxyPort()
```

##### `resetProxyType` <a name="resetProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType"></a>

```java
public void resetProxyType()
```

##### `resetTcpKeepAlive` <a name="resetTcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive"></a>

```java
public void resetTcpKeepAlive()
```

##### `resetTlsTimeout` <a name="resetTlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout"></a>

```java
public void resetTlsTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules">ipRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput">bastionModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput">caPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput">disableChunkedEncodingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput">httpHostHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput">keepAliveConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput">keepAliveTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput">noHappyEyeballsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput">noTlsVerifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput">originServerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput">proxyAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput">proxyPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput">proxyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput">tcpKeepAliveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput">tlsTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode">bastionMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool">caPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding">disableChunkedEncoding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader">httpHostHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections">keepAliveConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs">noHappyEyeballs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify">noTlsVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName">originServerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress">proxyAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort">proxyPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType">proxyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive">tcpKeepAlive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout">tlsTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules"></a>

```java
public TunnelConfigConfigOriginRequestIpRulesList getIpRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a>

---

##### `bastionModeInput`<sup>Optional</sup> <a name="bastionModeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput"></a>

```java
public java.lang.Object getBastionModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput"></a>

```java
public java.lang.String getCaPoolInput();
```

- *Type:* java.lang.String

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput"></a>

```java
public java.lang.String getConnectTimeoutInput();
```

- *Type:* java.lang.String

---

##### `disableChunkedEncodingInput`<sup>Optional</sup> <a name="disableChunkedEncodingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput"></a>

```java
public java.lang.Object getDisableChunkedEncodingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpHostHeaderInput`<sup>Optional</sup> <a name="httpHostHeaderInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput"></a>

```java
public java.lang.String getHttpHostHeaderInput();
```

- *Type:* java.lang.String

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput"></a>

```java
public java.lang.Object getIpRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>>

---

##### `keepAliveConnectionsInput`<sup>Optional</sup> <a name="keepAliveConnectionsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput"></a>

```java
public java.lang.Number getKeepAliveConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `keepAliveTimeoutInput`<sup>Optional</sup> <a name="keepAliveTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput"></a>

```java
public java.lang.String getKeepAliveTimeoutInput();
```

- *Type:* java.lang.String

---

##### `noHappyEyeballsInput`<sup>Optional</sup> <a name="noHappyEyeballsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput"></a>

```java
public java.lang.Object getNoHappyEyeballsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noTlsVerifyInput`<sup>Optional</sup> <a name="noTlsVerifyInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput"></a>

```java
public java.lang.Object getNoTlsVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `originServerNameInput`<sup>Optional</sup> <a name="originServerNameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput"></a>

```java
public java.lang.String getOriginServerNameInput();
```

- *Type:* java.lang.String

---

##### `proxyAddressInput`<sup>Optional</sup> <a name="proxyAddressInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput"></a>

```java
public java.lang.String getProxyAddressInput();
```

- *Type:* java.lang.String

---

##### `proxyPortInput`<sup>Optional</sup> <a name="proxyPortInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput"></a>

```java
public java.lang.Number getProxyPortInput();
```

- *Type:* java.lang.Number

---

##### `proxyTypeInput`<sup>Optional</sup> <a name="proxyTypeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput"></a>

```java
public java.lang.String getProxyTypeInput();
```

- *Type:* java.lang.String

---

##### `tcpKeepAliveInput`<sup>Optional</sup> <a name="tcpKeepAliveInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput"></a>

```java
public java.lang.String getTcpKeepAliveInput();
```

- *Type:* java.lang.String

---

##### `tlsTimeoutInput`<sup>Optional</sup> <a name="tlsTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput"></a>

```java
public java.lang.String getTlsTimeoutInput();
```

- *Type:* java.lang.String

---

##### `bastionMode`<sup>Required</sup> <a name="bastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode"></a>

```java
public java.lang.Object getBastionMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool"></a>

```java
public java.lang.String getCaPool();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout"></a>

```java
public java.lang.String getConnectTimeout();
```

- *Type:* java.lang.String

---

##### `disableChunkedEncoding`<sup>Required</sup> <a name="disableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding"></a>

```java
public java.lang.Object getDisableChunkedEncoding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpHostHeader`<sup>Required</sup> <a name="httpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader"></a>

```java
public java.lang.String getHttpHostHeader();
```

- *Type:* java.lang.String

---

##### `keepAliveConnections`<sup>Required</sup> <a name="keepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections"></a>

```java
public java.lang.Number getKeepAliveConnections();
```

- *Type:* java.lang.Number

---

##### `keepAliveTimeout`<sup>Required</sup> <a name="keepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout"></a>

```java
public java.lang.String getKeepAliveTimeout();
```

- *Type:* java.lang.String

---

##### `noHappyEyeballs`<sup>Required</sup> <a name="noHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs"></a>

```java
public java.lang.Object getNoHappyEyeballs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noTlsVerify`<sup>Required</sup> <a name="noTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify"></a>

```java
public java.lang.Object getNoTlsVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `originServerName`<sup>Required</sup> <a name="originServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName"></a>

```java
public java.lang.String getOriginServerName();
```

- *Type:* java.lang.String

---

##### `proxyAddress`<sup>Required</sup> <a name="proxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress"></a>

```java
public java.lang.String getProxyAddress();
```

- *Type:* java.lang.String

---

##### `proxyPort`<sup>Required</sup> <a name="proxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort"></a>

```java
public java.lang.Number getProxyPort();
```

- *Type:* java.lang.Number

---

##### `proxyType`<sup>Required</sup> <a name="proxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType"></a>

```java
public java.lang.String getProxyType();
```

- *Type:* java.lang.String

---

##### `tcpKeepAlive`<sup>Required</sup> <a name="tcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive"></a>

```java
public java.lang.String getTcpKeepAlive();
```

- *Type:* java.lang.String

---

##### `tlsTimeout`<sup>Required</sup> <a name="tlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout"></a>

```java
public java.lang.String getTlsTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue"></a>

```java
public TunnelConfigConfigOriginRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---


### TunnelConfigConfigWarpRoutingOutputReference <a name="TunnelConfigConfigWarpRoutingOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.tunnel_config.TunnelConfigConfigWarpRoutingOutputReference;

new TunnelConfigConfigWarpRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue"></a>

```java
public TunnelConfigConfigWarpRouting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---


